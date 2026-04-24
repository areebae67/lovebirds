// No state needed as navigation is handled globally

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
  <svg width="18" height="18" fill="#e23d3d" viewBox="0 0 24 24">
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);
const SunIcon = () => (
  <svg width="20" height="20" fill="none" stroke="#00bcd4" strokeWidth="2" viewBox="0 0 24 24">
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
  <svg width="18" height="18" fill="none" stroke="#e23d3d" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
const ImagesIcon = ({ size = 26, color = "#e23d3d" }) => (
  <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);
const BookOpenIcon = ({ size = 26, color = "#e23d3d" }) => (
  <svg width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);
const PinIcon = () => (
  <svg width="24" height="24" fill="none" stroke="#e23d3d" strokeWidth="2.5" viewBox="0 0 24 24">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="#e23d3d" stroke="none" />
  </svg>
);



// ── Styles (inline to remain self-contained) ──────────────────────────────────
const card = {
  backgroundColor: "#ffffff",
  borderRadius: "24px",
  boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
};

export default function Home() {
  return (
    <div style={{ flex: 1, padding: "2rem 3rem 2rem 2rem", overflowY: "auto", display: "flex", flexDirection: "column", gap: "1.2rem" }}>

          {/* Top bar */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem" }}>
            <h1 style={{ margin: 0, fontSize: "1.6rem", fontWeight: 700, color: "#e23d3d", letterSpacing: "-0.02em" }}>Morning, Alex</h1>
            <div style={{ display: "flex", gap: "1rem", color: "#888" }}>
              {[<BellIcon key="bell" />, <GearIcon key="gear" />].map((ic, i) => (
                <button key={i} style={{ background: "none", border: "none", cursor: "pointer", color: "inherit", padding: 0, display: "flex", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = '#333'} onMouseOut={e => e.currentTarget.style.color = '#888'}>
                  {ic}
                </button>
              ))}
            </div>
          </div>

          {/* Row 1 ── Current Mood + Date Night */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: "1.2rem" }}>

            {/* Current Mood */}
            <div className="card-hover" style={{ ...card, padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                {/* Badge */}
                <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", backgroundColor: "rgba(226, 61, 61, 0.08)", borderRadius: "9999px", padding: "0.35rem 0.85rem", marginBottom: "1.2rem" }}>
                  <HeartIcon filled color="#e23d3d" size={14} />
                  <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#e23d3d" }}>Current Mood</span>
                </div>
                <p style={{ margin: "0 0 0.5rem", fontWeight: 700, fontSize: "1.1rem", color: "#1f1f1f" }}>Sam is thinking of you</p>
                <p style={{ margin: 0, fontSize: "0.95rem", color: "#666", lineHeight: 1.6, maxWidth: "90%" }}>
                  "Can't wait for our dinner tonight. Thinking about that Italian place we saw."
                </p>
              </div>
              <div style={{ display: "flex", gap: "0.8rem", marginTop: "1.8rem" }}>
                <button style={{ backgroundColor: "#e23d3d", color: "#fff", border: "none", borderRadius: "9999px", padding: "0.75rem 1.6rem", fontSize: "0.9rem", fontWeight: 600, cursor: "pointer", boxShadow: "0 4px 12px rgba(226, 61, 61, 0.25)" }}>
                  Send Love
                </button>
                <button style={{ backgroundColor: "rgba(226, 61, 61, 0.08)", color: "#e23d3d", border: "none", borderRadius: "9999px", padding: "0.75rem 1.6rem", fontSize: "0.9rem", fontWeight: 600, cursor: "pointer", transition: "background 0.2s" }} onMouseOver={e => e.currentTarget.style.backgroundColor = 'rgba(226, 61, 61, 0.15)'} onMouseOut={e => e.currentTarget.style.backgroundColor = 'rgba(226, 61, 61, 0.08)'}>
                  Write Note
                </button>
              </div>
            </div>

            {/* Date Night */}
            <div className="card-hover" style={{ backgroundColor: "#e23d3d", borderRadius: "24px", padding: "2rem", color: "#fff", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "-20px", right: "-20px", width: "120px", height: "120px", background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)", borderRadius: "50%" }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "14px", backgroundColor: "rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.2rem", backdropFilter: "blur(4px)" }}>
                  <CalendarIcon />
                </div>
                <p style={{ margin: "0 0 0.4rem", fontWeight: 600, fontSize: "1.05rem" }}>Next Date Night</p>
                <p style={{ margin: 0, fontSize: "0.9rem", opacity: 0.9 }}>Friday, Oct 24 • 7:00 PM</p>
              </div>
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.3)", margin: "1.4rem 0 0.8rem" }} />
                <p style={{ margin: 0, fontWeight: 600, fontSize: "0.95rem" }}>3 days to go</p>
              </div>
            </div>
          </div>

          {/* Row 2 ── Memory + Music + Weather */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.2rem" }}>

            {/* Shared Memory */}
            <div className="card-hover" style={{ ...card, overflow: "hidden", display: "flex", flexDirection: "column", padding: "0.5rem" }}>
              {/* Dark image area */}
              <div style={{ position: "relative", flex: 1, minHeight: "150px", backgroundColor: "#0f172a", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                {/* Subtle starry background effect */}
                <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 1px)", backgroundSize: "14px 14px" }} />
                <div style={{ position: "absolute", top: "12px", left: "12px", backgroundColor: "#fff", color: "#1f1f1f", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.08em", borderRadius: "9999px", padding: "4px 10px" }}>
                  NEW IN VAULT
                </div>
                <div style={{ backgroundColor: "rgba(255,255,255,0.08)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "14px", padding: "0.8rem 1.4rem", textAlign: "center", zIndex: 1 }}>
                  <p style={{ margin: 0, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", color: "#e2e8f0", textTransform: "uppercase" }}>SHARED MEMORY</p>
                  <p style={{ margin: "2px 0 0", fontSize: "0.6rem", letterSpacing: "0.1em", color: "#94a3b8", textTransform: "uppercase" }}>SAFE WORK</p>
                </div>
              </div>
              <div style={{ padding: "0.8rem 0.5rem 0.5rem" }}>
                <p style={{ margin: "0 0 0.25rem", fontWeight: 600, fontSize: "0.95rem", color: "#1f1f1f" }}>Sam added a new photo</p>
                <p style={{ margin: 0, fontSize: "0.85rem", color: "#8a8a8a" }}>"From our walk last Sunday ✨"</p>
              </div>
            </div>

            {/* Now Listening */}
            <div className="card-hover" style={{ ...card, padding: "1.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                  <div style={{ width: "46px", height: "46px", borderRadius: "50%", backgroundColor: "rgba(226, 61, 61, 0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <MusicNote />
                  </div>
                  <p style={{ margin: 0, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", color: "#a8a29e", textTransform: "uppercase", marginTop: "10px" }}>NOW LISTENING</p>
                </div>
                <p style={{ margin: "0 0 0.25rem", fontWeight: 600, fontSize: "1.05rem", color: "#1f1f1f" }}>Sweet Disposition</p>
                <p style={{ margin: 0, fontSize: "0.9rem", color: "#8a8a8a" }}>The Temper Trap</p>
              </div>
              {/* Avatars + label */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginTop: "1.5rem" }}>
                <div style={{ display: "flex" }}>
                  {["#e23d3d", "#d6d3d1"].map((bg, i) => (
                    <div key={i} style={{ width: "26px", height: "26px", borderRadius: "50%", backgroundColor: bg, border: "2px solid #fff", marginLeft: i ? "-8px" : 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", color: i === 0 ? "#fff" : "#57534e", fontWeight: 700 }}>
                      {i === 0 ? "S" : "A"}
                    </div>
                  ))}
                </div>
                <span style={{ fontSize: "0.75rem", color: "#a8a29e", fontWeight: 500 }}>Shared Playlist</span>
              </div>
            </div>

            {/* Weather */}
            <div className="card-hover" style={{ ...card, padding: "1.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                  <div style={{ width: "46px", height: "46px", borderRadius: "50%", backgroundColor: "#e0f2fe", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <SunIcon />
                  </div>
                  <p style={{ margin: 0, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", color: "#a8a29e", textTransform: "uppercase", marginTop: "10px" }}>WEATHER</p>
                </div>
                <p style={{ margin: "0 0 0.25rem", fontWeight: 600, fontSize: "1.05rem", color: "#1f1f1f" }}>Sunny in London</p>
                <p style={{ margin: 0, fontSize: "0.9rem", color: "#8a8a8a" }}>Perfect for that walk!</p>
              </div>
              {/* Battery */}
              <div style={{ marginTop: "1.5rem" }}>
                <div style={{ height: "6px", backgroundColor: "#f5f5f4", borderRadius: "9999px", overflow: "hidden", marginBottom: "0.5rem" }}>
                  <div style={{ height: "100%", width: "72%", backgroundColor: "#0d9488", borderRadius: "9999px" }} />
                </div>
                <p style={{ margin: 0, fontSize: "0.75rem", color: "#a8a29e", fontWeight: 500 }}>Sam's battery: 72%</p>
              </div>
            </div>
          </div>

          {/* Row 3 ── Sanctuary prompt */}
          <div className="card-hover" style={{ backgroundColor: "#fdfcfa", border: "2px dashed rgba(226, 61, 61, 0.2)", borderRadius: "24px", padding: "2.2rem", textAlign: "center", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "44px", height: "44px", borderRadius: "50%", backgroundColor: "#fff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
              <PlusIcon />
            </div>
            <p style={{ margin: "0 0 0.3rem", fontWeight: 600, fontSize: "1.05rem", color: "#1f1f1f" }}>Add to your Sanctuary</p>
            <p style={{ margin: 0, fontSize: "0.95rem", color: "#8a8a8a" }}>Share a thought, a photo, or a dream for the future.</p>
          </div>

          {/* Row 4 ── Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.2rem", marginBottom: "2rem" }}>
            {[
              { icon: <HeartIcon filled color="#e23d3d" size={26} />, value: "1,240", label: "Love Sparks Sent" },
              { icon: <ImagesIcon />, value: "842", label: "Memories in Vault" },
              { icon: <BookOpenIcon />, value: "12", label: "Active Chapters" },
            ].map((s, i) => (
              <div key={i} className="card-hover" style={{ ...card, padding: "1.5rem", display: "flex", alignItems: "center", gap: "1.2rem" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {s.icon}
                </div>
                <div>
                  <p style={{ margin: "0 0 0.15rem", fontWeight: 700, fontSize: "1.5rem", color: "#1f1f1f", lineHeight: 1.1 }}>{s.value}</p>
                  <p style={{ margin: 0, fontSize: "0.85rem", color: "#8a8a8a", fontWeight: 500 }}>{s.label}</p>
                </div>
              </div>
            ))}
          </div>

    </div>
  );
}