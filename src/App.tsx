const PORTFOLIO_URL = "https://aszlaczek.github.io/website/";
const LIME = "#d4ff1e";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100%",
        backgroundColor: "#0a0a0a",
        fontFamily: "'Outfit', sans-serif",
        color: "#f2f2f2",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "fixed",
          top: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "500px",
          borderRadius: "50%",
          background: `radial-gradient(ellipse, ${LIME}18 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* Content card */}
      <div
        className="fade-up d1"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "640px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* Live badge */}
        <div
          className="fade-up d1"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "48px",
            padding: "6px 14px",
            border: `1px solid ${LIME}33`,
            borderRadius: "2px",
          }}
        >
          <span
            className="pulse"
            style={{
              display: "block",
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: LIME,
            }}
          />
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: LIME,
            }}
          >
            Now Live
          </span>
        </div>

        {/* Headline */}
        <h1
          className="fade-up d2"
          style={{
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            marginBottom: "28px",
            color: "#f2f2f2",
          }}
        >
          My portfolio
          <br />
          <span style={{ color: LIME }}>is online.</span>
        </h1>

        {/* Description */}
        <p
          className="fade-up d3"
          style={{
            fontSize: "1.05rem",
            fontWeight: 300,
            lineHeight: 1.7,
            color: "#666666",
            marginBottom: "56px",
            maxWidth: "440px",
            margin: "0 auto 56px",
          }}
        >
          A new portfolio website is now available — featuring selected projects,
          case studies, and ways to get in touch. Head over and take a look.
        </p>

        {/* CTA */}
        <div className="fade-up d4" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
          <a
            href={PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "16px 36px",
              backgroundColor: LIME,
              color: "#0a0a0a",
              fontWeight: 700,
              fontSize: "0.95rem",
              letterSpacing: "0.02em",
              borderRadius: "2px",
              textDecoration: "none",
              transition: "opacity 0.15s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
          >
            Visit Portfolio
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <a
            href={PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              letterSpacing: "0.12em",
              color: "#333333",
              textDecoration: "none",
              transition: "color 0.15s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = LIME)}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#333333")}
          >
            {PORTFOLIO_URL.replace("https://", "")}
          </a>
        </div>
      </div>

      {/* Bottom label */}
      <div
        style={{
          position: "fixed",
          bottom: "28px",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "'DM Mono', monospace",
          fontSize: "10px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#222222",
          whiteSpace: "nowrap",
        }}
      >
        © 2026 — All rights reserved
      </div>
    </div>
  );
}
