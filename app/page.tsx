export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        boxSizing: "border-box",
        background: "#EDECE8",
        padding: "80px 64px 56px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ height: 12 }} />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 96,
        }}
      >
        <h1
          aria-label="Salcantay Global"
          style={{
            margin: 0,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 30,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-cormorant-garamond), Georgia, serif",
              fontWeight: 600,
              fontSize: 56,
              lineHeight: 1,
              letterSpacing: "0.2em",
              marginRight: "-0.2em",
              color: "#2C6A4E",
            }}
          >
            SALCANTAY
          </span>
          <span
            style={{
              display: "block",
              width: 1,
              height: 50,
              background: "#5B9E80",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-montserrat), 'Helvetica Neue', sans-serif",
              fontWeight: 300,
              fontSize: 23,
              lineHeight: 1,
              letterSpacing: "0.42em",
              marginRight: "-0.42em",
              color: "#5B9E80",
            }}
          >
            GLOBAL
          </span>
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}
        >
          {[
            "Salcantay Global is a private investment company founded in 2017.",
            "We invest proprietary capital in private equity and real estate.",
            "Driven by enduring partnerships and an entrepreneurial spirit.",
          ].map((line) => (
            <p
              key={line}
              style={{
                margin: 0,
                fontFamily: "var(--font-montserrat), 'Helvetica Neue', sans-serif",
                fontWeight: 300,
                fontSize: 21,
                lineHeight: 1.45,
                color: "#2C6A4E",
                textAlign: "center",
              }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-montserrat), 'Helvetica Neue', sans-serif",
            fontWeight: 400,
            fontSize: 12,
            letterSpacing: "0.18em",
            color: "#2C6A4E",
          }}
        >
          -13.332867, -72.546171
        </div>
        <div
          style={{
            fontFamily: "var(--font-montserrat), 'Helvetica Neue', sans-serif",
            fontWeight: 300,
            fontSize: 11,
            letterSpacing: "0.04em",
            color: "#2C6A4E",
          }}
        >
          © 2026 Salcantay Global Ltd.
        </div>
      </div>
    </div>
  );
}
