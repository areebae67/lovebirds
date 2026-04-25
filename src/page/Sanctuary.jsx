import { useState } from "react";

/* ─── Local Styles ─────────────────────────────────────────────────────── */
const LocalStyles = () => (
  <style>{`
    .emotion-card { transition: box-shadow 0.2s, transform 0.18s; }
    .emotion-card:hover { box-shadow: 0 8px 28px rgba(0,0,0,0.10) !important; transform: translateY(-2px); }
    .note-btn { transition: opacity 0.15s, transform 0.1s; }
    .note-btn:hover { opacity: 0.85; }
    .note-btn:active { transform: scale(0.97); }
  `}</style>
);

/* ─── Icons ──────────────────────────────────────────────────────────────── */
const HomeIco = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>;
const MsgIco = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>;
const SancIco = ({ filled = false }) => <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>;
const VaultIco = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>;
const ProfIco = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>;
const BellIco = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>;
const GearIco = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>;
const PlusIco = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>;
const EditIco = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>;



/* ─── Emotion cards data ─────────────────────────────────────────────────── */
const EMOTIONS = [
  {
    id: "missing",
    icon: "📍",
    iconBg: "#fce8e8",
    label: "Missing You",
    desc: "Longing for your presence.",
    btnColor: "#c0392b",
    btnBg: "#fce8e8",
    btnText: "#c0392b",
  },
  {
    id: "low",
    icon: "☁️",
    iconBg: "#e8e8e8",
    label: "Low",
    desc: "Feeling a bit quiet and down.",
    btnColor: "#555",
    btnBg: "#f0ebe3",
    btnText: "#555",
  },
  {
    id: "anxious",
    icon: "🌊",
    iconBg: "#e0f4f4",
    label: "Anxious",
    desc: "Unsettled or worrying thoughts.",
    btnColor: "#2a9d8f",
    btnBg: "#e0f4f4",
    btnText: "#2a9d8f",
  },
  {
    id: "overwhelmed",
    icon: "⚡",
    iconBg: "#fff3e0",
    label: "Overwhelmed",
    desc: "Too much is happening right now.",
    btnColor: "#e67e22",
    btnBg: "#fff3e0",
    btnText: "#e67e22",
  },
  {
    id: "reassurance",
    icon: "💗",
    iconBg: "#fce8f0",
    label: "Need Reassurance",
    desc: "Looking for a gentle reminder.",
    btnColor: "#e91e8c",
    btnBg: "#fce8f0",
    btnText: "#e91e8c",
  },
  {
    id: "lonely",
    icon: "📶",
    iconBg: "#ede8ff",
    label: "Lonely",
    desc: "Missing our special connection.",
    btnColor: "#7c6ff7",
    btnBg: "#ede8ff",
    btnText: "#7c6ff7",
  },
  {
    id: "happy",
    icon: "☀️",
    iconBg: "#fffbe0",
    label: "Happy",
    desc: "Feeling light and full of joy.",
    btnColor: "#d4a017",
    btnBg: "#fffbe0",
    btnText: "#d4a017",
  },
  {
    id: "grateful",
    icon: "🌱",
    iconBg: "#e8f5e9",
    label: "Grateful",
    desc: "Appreciating all we have.",
    btnColor: "#2e7d32",
    btnBg: "#e8f5e9",
    btnText: "#2e7d32",
  },
  {
    id: "thinking",
    icon: "✨",
    iconBg: "#fce8e8",
    label: "Thinking of You",
    desc: "You're on my mind right now.",
    btnColor: "#c0392b",
    btnBg: "#fce8e8",
    btnText: "#c0392b",
  },
];

/* ─── Shared pulse entries ───────────────────────────────────────────────── */
const PULSE = [
  {
    name: "Jamie",
    emotion: "Grateful",
    emotionColor: "#c0392b",
    quote: '"Thinking about our walk yesterday. It was perfect."',
    time: "24 MINUTES AGO",
    avatarBg: "#3a3a3a",
    emoji: "🧔",
  },
  {
    name: "You",
    emotion: "Thinking of You",
    emotionColor: "#c0392b",
    quote: '"Can\'t wait to see you tonight."',
    time: "2 HOURS AGO",
    avatarBg: "#b07070",
    emoji: "👤",
  },
];

const RED = "#c0392b";
const TEXT = "#1a1a1a";
const MUTED = "#888";
const CARD = { backgroundColor: "#fff", borderRadius: "16px", boxShadow: "0 2px 10px rgba(0,0,0,0.055)" };


/* ─── Emotion Card ───────────────────────────────────────────────────────── */
function EmotionCard({ emotion }) {
  return (
    <div className="emotion-card" style={{ ...CARD, padding: "1.4rem 1.3rem", display: "flex", flexDirection: "column", gap: "0", position: "relative" }}>
      {/* Plus button top-right */}
      <button style={{
        position: "absolute", top: "12px", right: "12px",
        width: "26px", height: "26px", borderRadius: "50%",
        border: "1.5px solid #ddd", background: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer", color: "#aaa", transition: "border-color 0.15s, color 0.15s"
      }}>
        <PlusIco />
      </button>

      {/* Icon */}
      <div style={{
        width: "44px", height: "44px", borderRadius: "12px",
        backgroundColor: emotion.iconBg,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "1.3rem", marginBottom: "1rem"
      }}>
        {emotion.icon}
      </div>

      {/* Label + desc */}
      <p style={{ margin: "0 0 0.25rem", fontWeight: 700, fontSize: "1.3rem", color: TEXT, lineHeight: 1.2 }}>
        {emotion.label}
      </p>
      <p style={{ margin: "0 0 1.25rem", fontSize: "0.82rem", color: MUTED, lineHeight: 1.5 }}>
        {emotion.desc}
      </p>

      {/* Add a Note button */}
      <button className="note-btn" style={{
        width: "100%", padding: "0.58rem",
        border: "none", borderRadius: "9999px",
        backgroundColor: emotion.btnBg,
        color: emotion.btnText,
        fontSize: "0.84rem", fontWeight: 600,
        cursor: "pointer", fontFamily: "inherit",
      }}>
        Add a Note
      </button>
    </div>
  );
}

/* ─── Main Sanctuary Component ───────────────────────────────────────────── */
export default function Sanctuary() {
  return (
    <>
      <LocalStyles />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", backgroundColor: "#f0ebe3" }}>

          {/* Header */}
          <header style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "1.4rem 2rem 1.2rem",
            flexShrink: 0
          }}>
            <h1 style={{ margin: 0, fontSize: "1.5rem", fontWeight: 700, color: TEXT }}>The Sanctuary</h1>
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
          <main style={{ flex: 1, overflowY: "auto", padding: "0 2rem 2rem" }}>

            {/* How are you feeling card */}
            <div style={{ ...CARD, padding: "1.4rem 1.75rem", marginBottom: "1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ maxWidth: "480px" }}>
                <p style={{ margin: "0 0 0.35rem", fontWeight: 600, fontSize: "0.9rem", color: RED }}>
                  How are you feeling today?
                </p>
                <p style={{ margin: 0, fontSize: "0.875rem", color: "#555", lineHeight: 1.6 }}>
                  Share your emotional state with your partner. Your feelings help us create a safe, supportive space for both of you.
                </p>
              </div>
              {/* Stats */}
              <div style={{ display: "flex", alignItems: "center", gap: "0", flexShrink: 0 }}>
                <div style={{ textAlign: "center", padding: "0 2rem" }}>
                  <p style={{ margin: 0, fontSize: "1.8rem", fontWeight: 700, color: TEXT, lineHeight: 1 }}>12</p>
                  <p style={{ margin: "4px 0 0", fontSize: "0.65rem", fontWeight: 600, color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>MOMENTS SHARED</p>
                </div>
                <div style={{ width: "1px", height: "40px", backgroundColor: "#e0d8d0" }} />
                <div style={{ textAlign: "center", padding: "0 2rem" }}>
                  <p style={{ margin: 0, fontSize: "1.8rem", fontWeight: 700, color: TEXT, lineHeight: 1 }}>3h</p>
                  <p style={{ margin: "4px 0 0", fontSize: "0.65rem", fontWeight: 600, color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>SINCE LAST SYNC</p>
                </div>
              </div>
            </div>

            {/* Emotion grid — 3 columns */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
              {EMOTIONS.map(emotion => (
                <EmotionCard key={emotion.id} emotion={emotion} />
              ))}
            </div>

            {/* Shared Pulse section */}
            <div style={{ marginBottom: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                <h2 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 700, color: TEXT }}>Shared Pulse</h2>
                <button style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontSize: "0.84rem", fontWeight: 600, color: RED, fontFamily: "inherit"
                }}>View History</button>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {PULSE.map((entry, i) => (
                  <div key={i} style={{ ...CARD, padding: "1.25rem 1.3rem", display: "flex", alignItems: "flex-start", gap: "0.9rem" }}>
                    {/* Avatar */}
                    <div style={{
                      width: "48px", height: "48px", borderRadius: "12px",
                      background: entry.avatarBg,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1.4rem", flexShrink: 0, overflow: "hidden"
                    }}>{entry.emoji}</div>
                    <div>
                      <p style={{ margin: "0 0 0.2rem", fontSize: "0.88rem", color: TEXT, lineHeight: 1.4 }}>
                        <span style={{ fontWeight: 600 }}>{entry.name}</span>
                        {" "}shared{" "}
                        <span style={{ fontWeight: 700, color: entry.emotionColor }}>{entry.emotion}</span>
                      </p>
                      <p style={{ margin: "0 0 0.4rem", fontSize: "0.82rem", color: "#555", fontStyle: "italic", lineHeight: 1.5 }}>
                        {entry.quote}
                      </p>
                      <p style={{ margin: 0, fontSize: "0.68rem", fontWeight: 600, color: MUTED, letterSpacing: "0.07em" }}>
                        {entry.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>

        {/* FAB */}
        <button style={{
          position: "fixed", bottom: "1.75rem", right: "1.75rem",
          width: "52px", height: "52px", borderRadius: "50%",
          backgroundColor: RED, border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 18px rgba(192,57,43,0.38)",
          transition: "transform 0.15s, box-shadow 0.15s",
          zIndex: 100
        }}>
          <EditIco />
        </button>
    </>
  );
}
