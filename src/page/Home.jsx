import { useState } from "react";

// ── Icons (inline SVG, no external deps) ─────────────────────────────────────
const BellIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);
const GearIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);
const HomeIcon = () => (
  <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const MessageIcon = () => (
  <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const HeartIcon = ({ filled = false, size = 17, color = "currentColor" }) => (
  <svg width={size} height={size} fill={filled ? color : "none"} stroke={color} strokeWidth="2" viewBox="0 0 24 24">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const BookIcon = () => (
  <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);
const UserIcon = () => (
  <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const CalendarIcon = () => (
  <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const MusicNote = () => (
  <svg width="18" height="18" fill="#c0392b" viewBox="0 0 24 24">
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);
const SunIcon = () => (
  <svg width="20" height="20" fill="none" stroke="#3a9dd4" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);
const PlusIcon = () => (
  <svg width="18" height="18" fill="none" stroke="#c0392b" strokeWidth="2.5" viewBox="0 0 24 24">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
const ImagesIcon = () => (
  <svg width="22" height="22" fill="none" stroke="#c0392b" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);
const BookOpenIcon = () => (
  <svg width="22" height="22" fill="none" stroke="#c0392b" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);
const PinIcon = () => (
  <svg width="26" height="26" fill="none" stroke="#c0392b" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" fill="#c0392b" stroke="none" />
  </svg>
);

// ── Data ──────────────────────────────────────────────────────────────────────
const NAV = [
  { label: "Home",      icon: <HomeIcon /> },
  { label: "Messages",  icon: <MessageIcon /> },
  { label: "Sanctuary", icon: <HeartIcon /> },
  { label: "Vault",     icon: <BookIcon /> },
  { label: "Profile",   icon: <UserIcon /> },
];

// ── Styles (inline to remain self-contained) ──────────────────────────────────
const card = {
  backgroundColor: "#ffffff",
  borderRadius: "20px",
  boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
};

export default function Home() {
  const [active, setActive] = useState("Home");

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#ede8e0", fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>

      {/* ────────────────── Sidebar ────────────────── */}
      <aside style={{ width: "210px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "1.5rem 0.85rem", backgroundColor: "#ede8e0" }}>

        {/* Logo tile */}
        <div>
          <div style={{ width: "70px", height: "70px", backgroundColor: "#fff", borderRadius: "14px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginBottom: "2rem", boxShadow: "0 1px 4px rgba(0,0,0,0.07)" }}>
            <PinIcon />
            <span style={{ fontSize: "0.5rem", fontWeight: 800, color: "#c0392b", letterSpacing: "0.12em", marginTop: "1px" }}>LOVEBIRDS</span>
          </div>

          {/* Nav links */}
          <nav style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {NAV.map(({ label, icon }) => {
              const isActive = active === label;
              return (
                <button
                  key={label}
                  onClick={() => setActive(label)}
                  style={{
                    display: "flex", alignItems: "center", gap: "0.7rem",
                    padding: "0.6rem 0.9rem",
                    borderRadius: "12px", border: "none", cursor: "pointer",
                    fontSize: "0.9rem", fontWeight: isActive ? 600 : 400,
                    color: isActive ? "#c0392b" : "#666",
                    backgroundColor: isActive ? "#f5dcd9" : "transparent",
                    transition: "background-color 0.15s",
                    textAlign: "left", width: "100%",
                  }}
                >
                  <span style={{ opacity: isActive ? 1 : 0.55 }}>{icon}</span>
                  {label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Profile card */}
        <div style={{ ...card, padding: "0.9rem 1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "#b07070", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden" }}>
              <span style={{ fontSize: "1.1rem" }}>🧑</span>
            </div>
            <div>
              <p style={{ margin: 0, fontWeight: 600, fontSize: "0.85rem", color: "#2d2d2d" }}>Alex &amp; Sam</p>
              <p style={{ margin: 0, fontSize: "0.7rem", color: "#999" }}>Day 432 together</p>
            </div>
          </div>
        </div>
      </aside>

      {/* ────────────────── Main ────────────────── */}
      <main style={{ flex: 1, padding: "1.6rem 1.75rem", overflowY: "auto", display: "flex", flexDirection: "column", gap: "0.9rem" }}>

        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h1 style={{ margin: 0, fontSize: "1.45rem", fontWeight: 700, color: "#c0392b" }}>Morning, Alex</h1>
          <div style={{ display: "flex", gap: "0.6rem", color: "#666" }}>
            {[<BellIcon key="bell" />, <GearIcon key="gear" />].map((ic, i) => (
              <button key={i} style={{ background: "none", border: "none", cursor: "pointer", color: "#666", padding: "3px", display: "flex" }}>{ic}</button>
            ))}
          </div>
        </div>

        {/* Row 1 ── Current Mood + Date Night */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 270px", gap: "0.9rem" }}>

          {/* Current Mood */}
          <div style={{ ...card, padding: "1.4rem 1.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              {/* Badge */}
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", backgroundColor: "#fce8e8", borderRadius: "9999px", padding: "0.28rem 0.8rem", marginBottom: "0.9rem" }}>
                <HeartIcon filled color="#c0392b" size={12} />
                <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#c0392b" }}>Current Mood</span>
              </div>
              <p style={{ margin: "0 0 0.3rem", fontWeight: 700, fontSize: "0.98rem", color: "#2d2d2d" }}>Sam is thinking of you</p>
              <p style={{ margin: 0, fontSize: "0.88rem", color: "#777", lineHeight: 1.55 }}>
                "Can't wait for our dinner tonight. Thinking about that Italian place we saw."
              </p>
            </div>
            <div style={{ display: "flex", gap: "0.7rem", marginTop: "1.2rem" }}>
              <button style={{ backgroundColor: "#c0392b", color: "#fff", border: "none", borderRadius: "9999px", padding: "0.58rem 1.4rem", fontSize: "0.87rem", fontWeight: 600, cursor: "pointer" }}>
                Send Love
              </button>
              <button style={{ backgroundColor: "#fce8e8", color: "#c0392b", border: "none", borderRadius: "9999px", padding: "0.58rem 1.4rem", fontSize: "0.87rem", fontWeight: 600, cursor: "pointer" }}>
                Write Note
              </button>
            </div>
          </div>

          {/* Date Night */}
          <div style={{ backgroundColor: "#c0392b", borderRadius: "20px", padding: "1.4rem 1.5rem", color: "#fff", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ width: "42px", height: "42px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.22)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.9rem" }}>
                <CalendarIcon />
              </div>
              <p style={{ margin: "0 0 0.35rem", fontWeight: 600, fontSize: "0.97rem" }}>Next Date Night</p>
              <p style={{ margin: 0, fontSize: "0.86rem", opacity: 0.85 }}>Friday, Oct 24 • 7:00 PM</p>
            </div>
            <div>
              <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.25)", margin: "1rem 0 0.7rem" }} />
              <p style={{ margin: 0, fontWeight: 600, fontSize: "0.93rem", opacity: 0.92 }}>3 days to go</p>
            </div>
          </div>
        </div>

        {/* Row 2 ── Memory + Music + Weather */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.9rem" }}>

          {/* Shared Memory */}
          <div style={{ ...card, overflow: "hidden" }}>
            {/* Dark image area */}
            <div style={{ position: "relative", height: "176px", backgroundColor: "#181825", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ position: "absolute", top: "11px", left: "11px", backgroundColor: "#c0392b", color: "#fff", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.07em", borderRadius: "6px", padding: "3px 8px" }}>
                NEW IN VAULT
              </div>
              <div style={{ backgroundColor: "#2d2d3a", borderRadius: "10px", padding: "0.7rem 1.1rem", textAlign: "center" }}>
                <p style={{ margin: 0, fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.15em", color: "#aaa", textTransform: "uppercase" }}>SHARED MEMORY</p>
                <p style={{ margin: "2px 0 0", fontSize: "0.54rem", letterSpacing: "0.1em", color: "#666", textTransform: "uppercase" }}>SAFE WORK</p>
              </div>
            </div>
            <div style={{ padding: "0.85rem 1rem" }}>
              <p style={{ margin: "0 0 0.18rem", fontWeight: 600, fontSize: "0.87rem", color: "#2d2d2d" }}>Sam added a new photo</p>
              <p style={{ margin: 0, fontSize: "0.76rem", color: "#888" }}>"From our walk last Sunday ✨"</p>
            </div>
          </div>

          {/* Now Listening */}
          <div style={{ ...card, padding: "1.2rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <p style={{ margin: "0 0 0.9rem", fontSize: "0.66rem", fontWeight: 700, letterSpacing: "0.1em", color: "#aaa", textTransform: "uppercase" }}>NOW LISTENING</p>
              <div style={{ width: "42px", height: "42px", borderRadius: "50%", backgroundColor: "#fce8e8", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.8rem" }}>
                <MusicNote />
              </div>
              <p style={{ margin: "0 0 0.2rem", fontWeight: 700, fontSize: "0.97rem", color: "#2d2d2d" }}>Sweet Disposition</p>
              <p style={{ margin: 0, fontSize: "0.8rem", color: "#888" }}>The Temper Trap</p>
            </div>
            {/* Avatars + label */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.9rem" }}>
              <div style={{ display: "flex" }}>
                {["#c0392b", "#3a7bd5"].map((bg, i) => (
                  <div key={i} style={{ width: "22px", height: "22px", borderRadius: "50%", backgroundColor: bg, border: "2px solid #fff", marginLeft: i ? "-7px" : 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.52rem", color: "#fff", fontWeight: 700 }}>
                    {i === 0 ? "S" : "A"}
                  </div>
                ))}
              </div>
              <span style={{ fontSize: "0.7rem", color: "#888" }}>Shared Playlist</span>
            </div>
          </div>

          {/* Weather */}
          <div style={{ ...card, padding: "1.2rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <p style={{ margin: "0 0 0.9rem", fontSize: "0.66rem", fontWeight: 700, letterSpacing: "0.1em", color: "#aaa", textTransform: "uppercase" }}>WEATHER</p>
              <div style={{ width: "42px", height: "42px", borderRadius: "50%", backgroundColor: "#e6f4fb", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.8rem" }}>
                <SunIcon />
              </div>
              <p style={{ margin: "0 0 0.2rem", fontWeight: 700, fontSize: "0.97rem", color: "#2d2d2d" }}>Sunny in London</p>
              <p style={{ margin: 0, fontSize: "0.8rem", color: "#888" }}>Perfect for that walk!</p>
            </div>
            {/* Battery */}
            <div style={{ marginTop: "0.9rem" }}>
              <div style={{ height: "5px", backgroundColor: "#e5ede5", borderRadius: "9999px", overflow: "hidden", marginBottom: "0.35rem" }}>
                <div style={{ height: "100%", width: "72%", backgroundColor: "#4a9e5c", borderRadius: "9999px" }} />
              </div>
              <p style={{ margin: 0, fontSize: "0.7rem", color: "#aaa" }}>Sam's battery: 72%</p>
            </div>
          </div>
        </div>

        {/* Row 3 ── Sanctuary prompt */}
        <div style={{ backgroundColor: "#f5efe7", border: "1.5px dashed #cfc0ad", borderRadius: "20px", padding: "1.6rem", textAlign: "center", cursor: "pointer" }}>
          <div style={{ width: "38px", height: "38px", borderRadius: "50%", border: "1.5px solid #c0392b", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 0.7rem" }}>
            <PlusIcon />
          </div>
          <p style={{ margin: "0 0 0.2rem", fontWeight: 600, fontSize: "0.93rem", color: "#2d2d2d" }}>Add to your Sanctuary</p>
          <p style={{ margin: 0, fontSize: "0.8rem", color: "#999" }}>Share a thought, a photo, or a dream for the future.</p>
        </div>

        {/* Row 4 ── Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.9rem" }}>
          {[
            { icon: <HeartIcon filled color="#c0392b" size={22} />, value: "1,240", label: "Love Sparks Sent" },
            { icon: <ImagesIcon />, value: "842",   label: "Memories in Vault" },
            { icon: <BookOpenIcon />, value: "12",   label: "Active Chapters" },
          ].map((s, i) => (
            <div key={i} style={{ ...card, padding: "1.1rem 1.3rem", display: "flex", alignItems: "center", gap: "0.9rem" }}>
              <span style={{ flexShrink: 0 }}>{s.icon}</span>
              <div>
                <p style={{ margin: "0 0 0.12rem", fontWeight: 700, fontSize: "1.3rem", color: "#2d2d2d" }}>{s.value}</p>
                <p style={{ margin: 0, fontSize: "0.76rem", color: "#999" }}>{s.label}</p>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}