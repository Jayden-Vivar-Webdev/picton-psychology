// Edge-compatible signed-session helpers for the /admin gate.
// Uses Web Crypto (HMAC-SHA256) so it runs in both middleware (edge) and route handlers.

export const ADMIN_COOKIE = "pp_admin"
const DEFAULT_TTL_MS = 1000 * 60 * 60 * 24 * 7 // 7 days

const encoder = new TextEncoder()

function toHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
}

function fromHex(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2)
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = Number.parseInt(hex.slice(i * 2, i * 2 + 2), 16)
  }
  return bytes
}

async function getKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  )
}

// Creates a token of the form `${expiry}.${hmacHex}`.
export async function createSessionToken(
  secret: string,
  ttlMs: number = DEFAULT_TTL_MS,
): Promise<string> {
  const expiry = Date.now() + ttlMs
  const key = await getKey(secret)
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(String(expiry)),
  )
  return `${expiry}.${toHex(signature)}`
}

// Verifies signature + expiry. Returns true only for a valid, unexpired token.
export async function verifySessionToken(
  secret: string,
  token: string | undefined | null,
): Promise<boolean> {
  if (!token) return false
  const [expiryStr, signatureHex] = token.split(".")
  if (!expiryStr || !signatureHex) return false

  const expiry = Number(expiryStr)
  if (!Number.isFinite(expiry) || expiry < Date.now()) return false

  try {
    const key = await getKey(secret)
    return await crypto.subtle.verify(
      "HMAC",
      key,
      fromHex(signatureHex),
      encoder.encode(expiryStr),
    )
  } catch {
    return false
  }
}
