import { ImageResponse } from "next/og";

export const alt =
  "Suporte In Tech — Criação de Sites, Desenvolvimento de Software Sob Medida & Infraestrutura de TI";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#09090B",
          backgroundImage:
            "radial-gradient(circle at 80% 35%, rgba(250, 250, 250, 0.09) 0%, rgba(9, 9, 11, 0) 60%)",
          padding: "64px 76px",
          color: "#FAFAFA",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top Row: Brand & Tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px 18px",
                borderRadius: "10px",
                backgroundColor: "#FAFAFA",
                color: "#09090B",
                fontSize: "24px",
                fontWeight: 800,
                letterSpacing: "-0.04em",
              }}
            >
              SIT
            </div>
            <span
              style={{
                fontSize: "28px",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "#FAFAFA",
              }}
            >
              Suporte In Tech
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 18px",
              borderRadius: "9999px",
              border: "1px solid #27272A",
              backgroundColor: "#18181B",
              color: "#A1A1AA",
              fontSize: "16px",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Engenharia de Software & TI
          </div>
        </div>

        {/* Center Content: Headline & Description */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "22px",
            maxWidth: "960px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "5px",
              borderRadius: "999px",
              backgroundColor: "#FAFAFA",
            }}
          />
          <div
            style={{
              fontSize: "62px",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.035em",
              color: "#FAFAFA",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Da infraestrutura à tela,</span>
            <span style={{ color: "#D4D4D8" }}>nós construímos o futuro.</span>
          </div>
          <div
            style={{
              fontSize: "24px",
              lineHeight: 1.45,
              color: "#A1A1AA",
              maxWidth: "880px",
              fontWeight: 400,
            }}
          >
            Criação de sites profissionais, desenvolvimento de software sob
            medida, plataformas web de alta performance e infraestrutura de
            redes corporativas.
          </div>
        </div>

        {/* Bottom Row: 4 Pillars */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #27272A",
            paddingTop: "28px",
            width: "100%",
            fontSize: "16px",
            color: "#D4D4D8",
            fontWeight: 500,
          }}
        >
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <span>Criação de Sites & Portais</span>
            <span style={{ color: "#52525B" }}>•</span>
            <span>Software Sob Medida</span>
            <span style={{ color: "#52525B" }}>•</span>
            <span>UI/UX & Design System</span>
            <span style={{ color: "#52525B" }}>•</span>
            <span>Redes & Infraestrutura de TI</span>
          </div>
          <div style={{ color: "#FAFAFA", fontWeight: 700 }}>
            (11) 99252-7640
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
