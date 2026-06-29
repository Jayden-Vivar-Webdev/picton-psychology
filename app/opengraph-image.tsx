import { ImageResponse } from "next/og"
import { readFileSync } from "fs"
import { join } from "path"

export const alt = "Picton Psychology — A calm space for your wellbeing"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  const iconData = readFileSync(join(process.cwd(), "public", "icon.png"))
  const iconSrc = `data:image/png;base64,${iconData.toString("base64")}`

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#f3f6ee",
        padding: "80px",
        gap: "56px",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={iconSrc} alt="" width={320} height={320} style={{ borderRadius: 32 }} />
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 640 }}>
        <div
          style={{
            fontSize: 84,
            fontWeight: 600,
            color: "#2f4032",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          Picton Psychology
        </div>
        <div
          style={{
            fontSize: 38,
            color: "#6b7a6e",
            marginTop: 24,
            lineHeight: 1.3,
          }}
        >
          A calm space for your wellbeing
        </div>
      </div>
    </div>,
    { ...size },
  )
}
