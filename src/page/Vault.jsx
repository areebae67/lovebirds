import { useState } from "react";

/* ─── Local Styles ──────────────────────────────────────────────────────── */
const LocalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Playfair+Display:ital,wght@0,500;1,500;1,600&display=swap');
    .card-lift { transition: box-shadow 0.2s, transform 0.18s; }
    .card-lift:hover { box-shadow: 0 10px 32px rgba(0,0,0,0.10) !important; transform: translateY(-2px); }
    .scrap-row { transition: background 0.13s; }
    .scrap-row:hover { background: #fce8e8 !important; }
  `}</style>
);

/* ─── Icons ──────────────────────────────────────────────────────────────── */
const HomeIco = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>;
const MsgIco = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>;
const SancIco = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>;
const VaultIco = ({ filled = false }) => <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>;
const ProfIco = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>;
const BellIco = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>;
const GearIco = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>;
const LockIco = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>;
const PinIco = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="#c0392b" stroke="#c0392b" strokeWidth="1"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>;
const MicIco = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2a9d8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>;
const QuoteIco = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="#f0c0c0"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" /><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" /></svg>;
const PlaneIco = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="#c0392b" stroke="none"><path d="M21.29 7.85L3.54 1.08A1 1 0 0 0 2.2 2.44l2.52 7.48L2.2 17.4a1 1 0 0 0 1.34 1.36l17.75-6.77a1 1 0 0 0 0-1.88zM5.08 15.35l1.51-4.47 7.37 1.23-8.88 3.24zm8.72-5.69L6.43 8.43 4.92 3.96l8.88 5.7z" /></svg>;
const ChartIco = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>;
const PlusIco = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>;
const DotsIco = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" /></svg>;
const HrtIco = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="#c0392b" stroke="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>;
const BmkIco = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="#c0392b" stroke="none"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg>;



const RED = "#c0392b";
const TEXT = "#1a1a1a";
const MUTED = "#888";
const CARD = { backgroundColor: "#fff", borderRadius: "16px", boxShadow: "0 2px 10px rgba(0,0,0,0.06)" };

/* ─── Couple dinner photo placeholder ───────────────────────────────────── */
const CandlelightPhoto = () => (
  <div style={{
    width: "100%", height: "100%",
    background: "linear-gradient(160deg, #1a0a00 0%, #3d1a00 40%, #6b2a00 70%, #2a0a00 100%)",
    display: "flex", alignItems: "flex-end",
    position: "relative", overflow: "hidden"
  }}>
    {/* Candlelight warmth glow */}
    <div style={{ position: "absolute", bottom: "20%", left: "50%", transform: "translateX(-50%)", width: "120px", height: "80px", background: "radial-gradient(ellipse, rgba(255,160,30,0.35) 0%, transparent 70%)", borderRadius: "50%" }} />
    {/* Two silhouettes */}
    <svg viewBox="0 0 260 200" width="100%" height="100%" style={{ position: "absolute", bottom: 0 }}>
      {/* Left person */}
      <ellipse cx="85" cy="200" rx="35" ry="60" fill="#0d0500" opacity="0.9" />
      <circle cx="85" cy="128" r="18" fill="#0d0500" opacity="0.9" />
      {/* Right person */}
      <ellipse cx="170" cy="200" rx="35" ry="55" fill="#0d0500" opacity="0.9" />
      <circle cx="170" cy="133" r="16" fill="#0d0500" opacity="0.9" />
      {/* Candle flames */}
      <ellipse cx="128" cy="152" rx="3" ry="6" fill="#ffb830" opacity="0.9" />
      <ellipse cx="128" cy="148" rx="2" ry="4" fill="#fff4c2" opacity="0.8" />
    </svg>
    {/* Caption overlay at bottom */}
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)", padding: "1.25rem 1.1rem 0.9rem" }}>
      <p style={{ margin: "0 0 2px", fontWeight: 600, fontSize: "0.88rem", color: "#fff" }}>First Apartment Dinner</p>
      <p style={{ margin: 0, fontSize: "0.72rem", color: "rgba(255,255,255,0.7)" }}>Saved from Messages</p>
    </div>
  </div>
);



/* ─── Main Vault Component ───────────────────────────────────────────────── */
export default function Vault() {
  return (
    <>
      <LocalStyles />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", backgroundColor: "#f0ebe3" }}>

          {/* Header */}
          <header style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "1.3rem 2rem 1rem", flexShrink: 0
          }}>
            {/* Left: lock icon + Vault label */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <LockIco />
              <span style={{ fontSize: "1.05rem", fontWeight: 700, color: RED }}>Vault</span>
            </div>
            {/* Right: encrypted badge + icons */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <div style={{
                display: "flex", alignItems: "center", gap: "0.4rem",
                border: "1px solid rgba(0,0,0,0.15)", borderRadius: "9999px",
                padding: "0.3rem 0.85rem", backgroundColor: "#fff"
              }}>
                <div style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "#2a9d8f" }} />
                <span style={{ fontSize: "0.72rem", fontWeight: 600, color: TEXT, letterSpacing: "0.04em" }}>END-TO-END ENCRYPTED</span>
              </div>
              {[<BellIco key="b" />, <GearIco key="g" />].map((ic, i) => (
                <button key={i} className="topbtn" style={{
                  background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.09)",
                  borderRadius: "9px", padding: "0.42rem 0.52rem", cursor: "pointer",
                  color: "#666", display: "flex", alignItems: "center", transition: "background 0.15s"
                }}>{ic}</button>
              ))}
            </div>
          </header>

          {/* Scrollable content */}
          <main style={{ flex: 1, overflowY: "auto", padding: "0 2rem 2.5rem" }}>

            {/* Page title + subtitle */}
            <div style={{ marginBottom: "1.5rem" }}>
              <h1 style={{ margin: "0 0 0.4rem", fontSize: "1.8rem", fontWeight: 700, color: TEXT, fontFamily: "'Playfair Display', serif" }}>
                Preserved Moments
              </h1>
              <p style={{ margin: 0, fontSize: "0.88rem", color: MUTED, lineHeight: 1.65, maxWidth: "520px" }}>
                A quiet corner for your most cherished notes, late-night whispers, and shared promises. Safe, private, and just for the two of you.
              </p>
            </div>

            {/* ROW 1: Big quote card + photo card (side by side) */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: "1rem", marginBottom: "1rem" }}>

              {/* Quote card */}
              <div className="card-lift" style={{ ...CARD, padding: "1.75rem 2rem", position: "relative", minHeight: "220px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                {/* Pinned badge */}
                <div style={{ position: "absolute", top: "1.1rem", right: "1.1rem" }}>
                  <span style={{
                    backgroundColor: "#fce8e8", color: RED,
                    fontSize: "0.72rem", fontWeight: 600,
                    borderRadius: "9999px", padding: "3px 10px"
                  }}>Pinned Anniversary</span>
                </div>
                {/* Quote icon */}
                <div style={{ marginBottom: "0.75rem" }}>
                  <QuoteIco />
                </div>
                {/* Quote text */}
                <p style={{
                  margin: 0, fontSize: "1.1rem", lineHeight: 1.65,
                  color: TEXT, fontStyle: "italic",
                  fontFamily: "'Playfair Display', serif", fontWeight: 500
                }}>
                  "Remember that night in Lisbon? The rain didn't matter because we had that tiny yellow umbrella and the best custard tarts in the world. I never want to stop exploring with you. "
                </p>
              </div>

              {/* Photo card */}
              <div className="card-lift" style={{ ...CARD, overflow: "hidden", minHeight: "220px" }}>
                <CandlelightPhoto />
              </div>
            </div>

            {/* ROW 2: Voice memo card + Pinned note card + Shared goal card */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>

              {/* Voice memo */}
              <div className="card-lift" style={{ ...CARD, padding: "1.4rem 1.5rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                {/* Mic circle */}
                <div style={{
                  width: "72px", height: "72px", borderRadius: "50%",
                  backgroundColor: "#e8f6f5",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "1rem"
                }}>
                  <MicIco />
                </div>
                <p style={{ margin: "0 0 0.2rem", fontWeight: 600, fontSize: "0.95rem", color: TEXT }}>Good Morning Voice</p>
                <p style={{ margin: "0 0 1rem", fontSize: "0.78rem", color: MUTED }}>0:12 · Jan 04</p>
                {/* Waveform bar */}
                <div style={{ width: "100%", height: "4px", backgroundColor: "#e0e0e0", borderRadius: "9999px", overflow: "hidden" }}>
                  <div style={{ width: "35%", height: "100%", background: "linear-gradient(90deg, #2a9d8f, #1a7a70)", borderRadius: "9999px" }} />
                </div>
              </div>

              {/* Pinned note */}
              <div className="card-lift" style={{ ...CARD, padding: "1.35rem 1.4rem", position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                {/* Top row: pin icon + avatars */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "0.85rem" }}>
                  <span style={{ display: "flex", alignItems: "center" }}><PinIco /></span>
                  {/* Two avatar circles */}
                  <div style={{ display: "flex" }}>
                    {[
                      { letter: "L", bg: RED },
                      { letter: "M", bg: "#e91e8c" },
                    ].map((av, i) => (
                      <div key={i} style={{
                        width: "24px", height: "24px", borderRadius: "50%",
                        backgroundColor: av.bg,
                        border: "2px solid #fff",
                        marginLeft: i ? "-7px" : 0,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "0.58rem", color: "#fff", fontWeight: 700
                      }}>{av.letter}</div>
                    ))}
                  </div>
                </div>
                <p style={{ margin: "0 0 1rem", fontSize: "0.88rem", color: TEXT, lineHeight: 1.65, fontStyle: "italic", fontFamily: "'Playfair Display', serif" }}>
                  "Your laugh is my favorite soundtrack. Just wanted you to know that before you wake up."
                </p>
                <div>
                  <p style={{ margin: 0, fontSize: "0.68rem", fontWeight: 700, color: MUTED, letterSpacing: "0.07em" }}>
                    MAYA · 4:20 AM
                  </p>
                </div>
              </div>

              {/* Shared goal */}
              <div className="card-lift" style={{
                ...CARD, padding: "1.35rem 1.4rem", display: "flex", flexDirection: "column",
                border: "1.5px solid #fce8e8"
              }}>
                {/* Label */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "1rem" }}>
                  <PlaneIco />
                  <span style={{ fontSize: "0.65rem", fontWeight: 700, color: RED, letterSpacing: "0.1em", textTransform: "uppercase" }}>SHARED GOAL</span>
                </div>
                <p style={{ margin: "0 0 0.75rem", fontWeight: 700, fontSize: "1.1rem", color: TEXT, lineHeight: 1.3 }}>
                  The Kyoto Trip 2025
                </p>
                {/* Link */}
                <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                  <div style={{ width: "14px", height: "14px", borderRadius: "3px", border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "1px", backgroundColor: "#aaa" }} />
                  </div>
                  <span style={{ fontSize: "0.72rem", color: MUTED, textDecoration: "underline" }}>
                    airbnb.com/rooms/kyoto-sanctuary...
                  </span>
                </div>
              </div>
            </div>

            {/* ROW 3: Recent Scraps + Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>

              {/* Recent Scraps */}
              <div style={{ ...CARD, padding: "1.3rem 1.4rem" }}>
                {/* Header row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.9rem" }}>
                  <p style={{ margin: 0, fontWeight: 700, fontSize: "0.95rem", color: TEXT }}>Recent Scraps</p>
                  <button style={{ background: "none", border: "none", cursor: "pointer", color: MUTED, display: "flex" }}>
                    <DotsIco />
                  </button>
                </div>

                {/* Scrap items */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                  {[
                    { icon: <HrtIco />, label: "Song we heard at the cafe", time: "3 hours ago" },
                    { icon: <BmkIco />, label: "Maya's favorite poem", time: "Yesterday" },
                  ].map((scrap, i) => (
                    <div key={i} className="scrap-row" style={{
                      display: "flex", alignItems: "center", gap: "0.75rem",
                      padding: "0.7rem 0.85rem", borderRadius: "10px",
                      backgroundColor: "#fce8e8", cursor: "pointer",
                      transition: "background 0.13s"
                    }}>
                      <span style={{ display: "flex", flexShrink: 0 }}>{scrap.icon}</span>
                      <div>
                        <p style={{ margin: 0, fontWeight: 500, fontSize: "0.85rem", color: TEXT }}>{scrap.label}</p>
                        <p style={{ margin: 0, fontSize: "0.72rem", color: MUTED }}>{scrap.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vault Stats */}
              <div style={{
                background: "linear-gradient(145deg, #c0392b 0%, #9e2a1e 100%)",
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(192,57,43,0.32)",
                padding: "1.5rem 1.6rem",
                display: "flex", flexDirection: "column", justifyContent: "space-between",
                position: "relative", overflow: "hidden"
              }}>
                {/* Soft circle decoration */}
                <div style={{ position: "absolute", top: "-30px", right: "-30px", width: "120px", height: "120px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.08)" }} />

                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  {/* Chart icon box */}
                  <div style={{
                    width: "52px", height: "52px", borderRadius: "14px",
                    backgroundColor: "rgba(255,255,255,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0
                  }}>
                    <ChartIco />
                  </div>
                  <div>
                    <p style={{ margin: "0 0 0.15rem", fontSize: "0.78rem", color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>Vault Stats</p>
                    <p style={{ margin: "0 0 0.1rem", fontSize: "2rem", fontWeight: 700, color: "#fff", lineHeight: 1.1 }}>142 Memories</p>
                    <p style={{ margin: 0, fontSize: "0.78rem", color: "rgba(255,255,255,0.65)" }}>Growing since 2019</p>
                  </div>
                </div>

                {/* Plus button bottom-right */}
                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1.5rem" }}>
                  <button style={{
                    width: "38px", height: "38px", borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.22)", border: "none",
                    cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "background 0.15s"
                  }}>
                    <PlusIco />
                  </button>
                </div>
              </div>
            </div>

          </main>
        </div>
    </>
  );
}
