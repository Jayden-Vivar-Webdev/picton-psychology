import { NextResponse } from "next/server"

import { ADMIN_COOKIE, createSessionToken } from "@/lib/admin-auth"

export async function POST(request: Request) {
  const expected = process.env.ADMIN_PASSWORD
  const secret = process.env.ADMIN_SESSION_SECRET

  if (!expected || !secret) {
    return NextResponse.json(
      { error: "Admin access is not configured yet." },
      { status: 500 },
    )
  }

  let password: unknown
  try {
    const body = await request.json()
    password = body?.password
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 })
  }

  if (typeof password !== "string" || password !== expected) {
    return NextResponse.json(
      { error: "Incorrect password. Please try again." },
      { status: 401 },
    )
  }

  const token = await createSessionToken(secret)
  const response = NextResponse.json({ ok: true })
  response.cookies.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  })
  return response
}
