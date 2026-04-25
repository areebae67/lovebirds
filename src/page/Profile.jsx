import { useState } from "react";

/* ─── Local Styles ──────────────────────────────────────────────────────── */
const LocalStyles = () => (
  <style>{`
    .card-lift { transition: box-shadow 0.2s, transform 0.18s; }
    .card-lift:hover { box-shadow: 0 8px 28px rgba(0,0,0,0.10) !important; transform: translateY(-1px); }
    .setting-row { transition: background 0.13s; border-radius: 10px; }
    .setting-row:hover { background: rgba(0,0,0,0.03); }
    .view-sanc-btn { transition: box-shadow 0.15s, background 0.15s; }
    .view-sanc-btn:hover { background: #f5dcd9 !important; }
  `}</style>
);

/* ─── Icons ──────────────────────────────────────────────────────────────── */
const HomeIco = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>;
const MsgIco = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>;
const SancIco = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>;
const VaultIco = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>;
const ProfIco = ({ filled = false }) => <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>;
const BellIco = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>;
const GearIco = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>;
const CakeIco = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" /><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" /><path d="M2 21h20" /><path d="M7 8v2" /><path d="M12 8v2" /><path d="M17 8v2" /><path d="M7 4h.01" /><path d="M12 4h.01" /><path d="M17 4h.01" /></svg>;
const PinIco = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>;
const SparkIco = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="#c0392b" stroke="none"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" /></svg>;
const HouseIco = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>;
const PlaneIco = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3a9dd4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 21 4s-2 0-3.5 1.5L14 9 5.8 7.2C5.3 7.1 4.7 7.3 4.4 7.8l-.8 1.4c-.3.5-.2 1.1.3 1.4L8 13l-2 2-4-1-.8.8 3 2 2 3 .8-.8-1-4 2-2 3.2 4.1c.3.4.9.5 1.4.3l1.4-.8c.5-.3.7-.9.6-1.4z" /></svg>;
const HrtFilIco = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="#c0392b" stroke="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>;
const PhotoIco = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>;
const MailIco = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>;
const CalIco = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2a9d8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>;
const BellNIco = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="#c0392b" stroke="none"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" /></svg>;
const LockIco = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="#c0392b" stroke="none"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" fill="none" stroke="#c0392b" strokeWidth="2" /></svg>;
const ChevIco = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>;
const EditIco = () => <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>;
const HrtWhtIco = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>;

/* ─── Toggle Switch ──────────────────────────────────────────────────────── */
function Toggle({ on = true, onChange }) {
  return (
    <div
      onClick={() => onChange && onChange(!on)}
      style={{
        width: "46px", height: "26px", borderRadius: "9999px",
        backgroundColor: on ? "#c0392b" : "#ddd",
        position: "relative", cursor: "pointer",
        transition: "background 0.2s", flexShrink: 0
      }}
    >
      <div style={{
        position: "absolute", top: "3px",
        left: on ? "23px" : "3px",
        width: "20px", height: "20px", borderRadius: "50%",
        backgroundColor: "#fff",
        boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
        transition: "left 0.2s"
      }} />
    </div>
  );
}



const RED = "#c0392b";
const TEXT = "#1a1a1a";
const MUTED = "#888";
const CARD = {
  backgroundColor: "#fff",
  borderRadius: "18px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.055)"
};

/* ─── User Avatar (illustrated person with suit) ─────────────────────────── */
const UserAvatar = () => (
  <div style={{
    width: "96px", height: "96px", borderRadius: "50%",
    background: "linear-gradient(160deg, #dce8f5 0%, #b8d4ea 100%)",
    display: "flex", alignItems: "flex-end", justifyContent: "center",
    overflow: "hidden", flexShrink: 0, position: "relative",
    border: "3px solid #fff", boxShadow: "0 2px 10px rgba(0,0,0,0.12)"
  }}>
    <svg viewBox="0 0 96 96" width="96" height="96" style={{ position: "absolute", bottom: 0 }}>
      {/* Head */}
      <circle cx="48" cy="34" r="20" fill="#f0c8a0" />
      {/* Hair */}
      <ellipse cx="48" cy="18" rx="18" ry="10" fill="#5a3a1a" />
      {/* Suit body */}
      <rect x="22" y="60" width="52" height="40" rx="4" fill="#2d3a4a" />
      {/* White shirt */}
      <rect x="40" y="60" width="16" height="40" fill="#f5f5f5" />
      {/* Red tie */}
      <polygon points="48,64 45,72 48,80 51,72" fill={RED} />
      {/* Collar */}
      <polygon points="40,60 48,70 56,60 52,60 48,66 44,60" fill="#fff" />
    </svg>
    {/* Edit badge */}
    <div style={{
      position: "absolute", bottom: "4px", right: "4px",
      width: "24px", height: "24px", borderRadius: "50%",
      backgroundColor: RED,
      display: "flex", alignItems: "center", justifyContent: "center",
      border: "2px solid #fff", zIndex: 2
    }}>
      <EditIco />
    </div>
  </div>
);



/* ─── Main Profile Component ─────────────────────────────────────────────── */
export default function Profile() {
  const [reminders, setReminders] = useState(true);
  const [diary, setDiary] = useState(true);

  const milestones = [
    {
      icon: <HouseIco />,
      iconBg: "#fce8e8",
      label: "Moved in together",
      detail: "August 12, 2023 · North Queen Anne"
    },
    {
      icon: <PlaneIco />,
      iconBg: "#e3f4fb",
      label: "First Trip to Kyoto",
      detail: "March 22, 2022 · Cherry Blossom Season"
    },
    {
      icon: <HrtFilIco />,
      iconBg: "#fce8e8",
      label: "Our First Date",
      detail: "January 04, 2021 · Pike Place Market"
    },
  ];

  return (
    <>
      <LocalStyles />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", backgroundColor: "#f0ebe3" }}>

          {/* Header */}
          <header style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "1.3rem 2rem 1rem", flexShrink: 0
          }}>
            <h1 style={{ margin: 0, fontSize: "1.4rem", fontWeight: 700, color: RED }}>Profile</h1>
            <div style={{ display: "flex", gap: "0.45rem" }}>
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

            {/* ROW 1 ── Profile card + Journey card */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 240px", gap: "1rem", marginBottom: "1rem" }}>

              {/* Member Profile card */}
              <div className="card-lift" style={{ ...CARD, padding: "2rem 2rem 1.75rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem" }}>
                  <UserAvatar />
                  <div style={{ paddingTop: "0.25rem" }}>
                    <p style={{ margin: "0 0 0.2rem", fontSize: "0.65rem", fontWeight: 700, color: RED, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      MEMBER PROFILE
                    </p>
                    <h2 style={{ margin: "0 0 0.35rem", fontSize: "1.75rem", fontWeight: 700, color: TEXT, lineHeight: 1.15 }}>
                      Maya Reynolds
                    </h2>
                    <p style={{ margin: "0 0 1.1rem", fontSize: "0.875rem", color: MUTED }}>
                      Living in the moments with Julian.
                    </p>
                    {/* Info pills */}
                    <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                      <div style={{
                        display: "flex", alignItems: "center", gap: "0.4rem",
                        backgroundColor: "#f5f0ea", borderRadius: "9999px",
                        padding: "0.38rem 0.9rem"
                      }}>
                        <span style={{ color: "#666", display: "flex" }}><CakeIco /></span>
                        <span style={{ fontSize: "0.82rem", color: TEXT, fontWeight: 500 }}>Nov 14, 1996</span>
                      </div>
                      <div style={{
                        display: "flex", alignItems: "center", gap: "0.4rem",
                        backgroundColor: "#f5f0ea", borderRadius: "9999px",
                        padding: "0.38rem 0.9rem"
                      }}>
                        <span style={{ color: "#666", display: "flex" }}><PinIco /></span>
                        <span style={{ fontSize: "0.82rem", color: TEXT, fontWeight: 500 }}>Seattle, WA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Our Journey card */}
              <div className="card-lift" style={{
                background: "linear-gradient(150deg, #c0392b 0%, #9e2a1e 100%)",
                borderRadius: "18px",
                boxShadow: "0 4px 20px rgba(192,57,43,0.32)",
                padding: "1.6rem 1.5rem",
                display: "flex", flexDirection: "column", justifyContent: "space-between",
                position: "relative", overflow: "hidden"
              }}>
                {/* Big heart watermark */}
                <div style={{
                  position: "absolute", bottom: "-20px", right: "-20px",
                  opacity: 0.15
                }}>
                  <svg width="130" height="130" viewBox="0 0 24 24" fill="white"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                </div>

                <div>
                  <p style={{ margin: "0 0 0.5rem", fontSize: "0.68rem", fontWeight: 700, color: "rgba(255,255,255,0.75)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    OUR JOURNEY
                  </p>
                  <p style={{ margin: "0 0 0.15rem", fontSize: "2.8rem", fontWeight: 800, color: "#fff", lineHeight: 1 }}>
                    842 Days
                  </p>
                  <p style={{ margin: 0, fontSize: "0.85rem", color: "rgba(255,255,255,0.75)" }}>
                    of love &amp; growth
                  </p>
                </div>

                {/* Avatars + heart button */}
                <div style={{ display: "flex", alignItems: "center", gap: "0", marginTop: "1.25rem" }}>
                  {/* Maya avatar */}
                  <div style={{
                    width: "38px", height: "38px", borderRadius: "50%",
                    background: "linear-gradient(135deg,#c0c8d8,#6a7888)",
                    border: "2px solid rgba(255,255,255,0.6)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    overflow: "hidden", position: "relative"
                  }}>
                    <svg viewBox="0 0 38 38" width="38" height="38" style={{ position: "absolute" }}>
                      <circle cx="19" cy="15" r="8" fill="#8a9bb0" />
                      <ellipse cx="19" cy="32" rx="13" ry="10" fill="#8a9bb0" />
                    </svg>
                  </div>
                  {/* Julian avatar */}
                  <div style={{
                    width: "38px", height: "38px", borderRadius: "50%",
                    background: "linear-gradient(135deg,#3a4a5a,#1a2a3a)",
                    border: "2px solid rgba(255,255,255,0.6)",
                    marginLeft: "-10px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    overflow: "hidden", position: "relative"
                  }}>
                    <svg viewBox="0 0 38 38" width="38" height="38" style={{ position: "absolute" }}>
                      <circle cx="19" cy="15" r="8" fill="#5a6a7a" />
                      <ellipse cx="19" cy="32" rx="13" ry="10" fill="#5a6a7a" />
                    </svg>
                  </div>
                  {/* Heart button */}
                  <div style={{
                    width: "38px", height: "38px", borderRadius: "50%",
                    backgroundColor: "#fff",
                    marginLeft: "-10px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
                  }}>
                    <HrtFilIco />
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 2 ── Milestones + Activity Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 240px", gap: "1rem", marginBottom: "1rem" }}>

              {/* Milestones card */}
              <div className="card-lift" style={{ ...CARD, padding: "1.5rem 1.75rem" }}>
                {/* Header */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.4rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <SparkIco />
                    <h3 style={{ margin: 0, fontSize: "1.15rem", fontWeight: 700, color: TEXT }}>Milestones</h3>
                  </div>
                  <button style={{
                    background: "none", border: "none", cursor: "pointer",
                    fontSize: "0.84rem", fontWeight: 600, color: RED, fontFamily: "inherit"
                  }}>Add New</button>
                </div>

                {/* Milestone rows */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                  {milestones.map((m, i) => (
                    <div key={i}>
                      <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "0.85rem 0" }}>
                        {/* Icon circle */}
                        <div style={{
                          width: "44px", height: "44px", borderRadius: "50%",
                          backgroundColor: m.iconBg,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          flexShrink: 0
                        }}>
                          {m.icon}
                        </div>
                        <div>
                          <p style={{ margin: "0 0 0.18rem", fontWeight: 600, fontSize: "0.92rem", color: TEXT }}>
                            {m.label}
                          </p>
                          <p style={{ margin: 0, fontSize: "0.78rem", color: MUTED }}>
                            {m.detail}
                          </p>
                        </div>
                      </div>
                      {i < milestones.length - 1 && (
                        <div style={{ height: "1px", backgroundColor: "#f0ebe3", margin: "0 0 0 56px" }} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity Stats card */}
              <div className="card-lift" style={{ ...CARD, padding: "1.4rem 1.4rem", display: "flex", flexDirection: "column", gap: "0" }}>
                <p style={{ margin: "0 0 1.1rem", fontSize: "0.65rem", fontWeight: 700, color: MUTED, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  ACTIVITY STATS
                </p>

                {/* Stat rows */}
                {[
                  { value: "1.2k", label: "Shared Photos", icon: <PhotoIco />, iconBg: "#fce8e8" },
                  { value: "42", label: "Love Letters", icon: <MailIco />, iconBg: "#fce8e8" },
                  { value: "8", label: "Upcoming Events", icon: <CalIco />, iconBg: "#e8f5f4" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.7rem 0" }}>
                      <div>
                        <p style={{ margin: "0 0 0.1rem", fontSize: "1.5rem", fontWeight: 700, color: TEXT, lineHeight: 1 }}>
                          {stat.value}
                        </p>
                        <p style={{ margin: 0, fontSize: "0.76rem", color: MUTED }}>{stat.label}</p>
                      </div>
                      <div style={{
                        width: "34px", height: "34px", borderRadius: "9px",
                        backgroundColor: stat.iconBg,
                        display: "flex", alignItems: "center", justifyContent: "center"
                      }}>
                        {stat.icon}
                      </div>
                    </div>
                    {i < 2 && <div style={{ height: "1px", backgroundColor: "#f0ebe3" }} />}
                  </div>
                ))}

                {/* View Sanctuary button */}
                <button className="view-sanc-btn" style={{
                  width: "100%", marginTop: "1.1rem",
                  padding: "0.65rem",
                  border: "1.5px solid #ddd", borderRadius: "9999px",
                  backgroundColor: "#fff", cursor: "pointer",
                  fontSize: "0.875rem", fontWeight: 600, color: TEXT,
                  fontFamily: "inherit", transition: "background 0.15s"
                }}>
                  View Sanctuary
                </button>
              </div>
            </div>

            {/* ROW 3 ── Settings card */}
            <div style={{ ...CARD, padding: "1.6rem 1.75rem" }}>
              <h3 style={{ margin: "0 0 1.4rem", fontSize: "1.15rem", fontWeight: 700, color: TEXT }}>Settings</h3>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 3rem" }}>

                {/* Left col — Notifications */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "1rem" }}>
                    <BellNIco />
                    <p style={{ margin: 0, fontSize: "0.88rem", fontWeight: 700, color: RED }}>Notifications</p>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                    {[
                      { label: "Relationship Reminders", sub: "Anniversaries and milestones", state: reminders, set: setReminders },
                      { label: "Shared Diary Updates", sub: "When Julian adds a new entry", state: diary, set: setDiary },
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="setting-row" style={{
                          display: "flex", alignItems: "center", justifyContent: "space-between",
                          padding: "0.85rem 0.5rem"
                        }}>
                          <div>
                            <p style={{ margin: "0 0 0.15rem", fontWeight: 500, fontSize: "0.88rem", color: TEXT }}>
                              {item.label}
                            </p>
                            <p style={{ margin: 0, fontSize: "0.76rem", color: MUTED }}>{item.sub}</p>
                          </div>
                          <Toggle on={item.state} onChange={item.set} />
                        </div>
                        {i < 1 && <div style={{ height: "1px", backgroundColor: "#f5f0ea" }} />}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Vertical divider */}
                <div style={{ position: "relative" }}>
                  <div style={{ position: "absolute", left: "-1.5rem", top: 0, bottom: 0, width: "1px", backgroundColor: "#f0ebe3" }} />

                  {/* Right col — Privacy & Security */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "1rem" }}>
                    <LockIco />
                    <p style={{ margin: 0, fontSize: "0.88rem", fontWeight: 700, color: RED }}>Privacy &amp; Security</p>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                    {[
                      { label: "Two-Factor Auth", sub: "Extra layer of protection" },
                      { label: "Vault Encryption", sub: "Manage your private keys" },
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="setting-row" style={{
                          display: "flex", alignItems: "center", justifyContent: "space-between",
                          padding: "0.85rem 0.5rem", cursor: "pointer"
                        }}>
                          <div>
                            <p style={{ margin: "0 0 0.15rem", fontWeight: 500, fontSize: "0.88rem", color: TEXT }}>
                              {item.label}
                            </p>
                            <p style={{ margin: 0, fontSize: "0.76rem", color: MUTED }}>{item.sub}</p>
                          </div>
                          <ChevIco />
                        </div>
                        {i < 1 && <div style={{ height: "1px", backgroundColor: "#f5f0ea" }} />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </main>
        </div>
    </>
  );
}
