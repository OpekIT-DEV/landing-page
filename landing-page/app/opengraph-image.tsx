import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Opekit — IT Services & Digital Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.8, marginBottom: 24 }}>Opekit</div>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1, maxWidth: 900 }}>
          IT Services &amp; Digital Solutions
        </div>
        <div style={{ fontSize: 28, opacity: 0.85, marginTop: 32, maxWidth: 800 }}>
          Custom software, cloud, cybersecurity, and managed IT support for growing
          businesses.
        </div>
        <div
          style={{
            marginTop: 60,
            display: "flex",
            gap: 16,
          }}
        >
          <div
            style={{
              background: "#6366f1",
              padding: "14px 28px",
              borderRadius: 8,
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            Get a free quote
          </div>
        </div>
      </div>
    ),
    size
  );
}