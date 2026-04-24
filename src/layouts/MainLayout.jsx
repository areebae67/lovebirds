/* ─── Global Styles ──────────────────────────────────────────────────────── */
const GlobalStyles = () => (
    <style>{`
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'DM Sans', sans-serif; background: #ede8e0; }
    .nav-btn { transition: background 0.15s ease, color 0.15s ease; }
    .nav-btn:hover { background: #f2deda !important; color: #c0392b !important; }
    .send-btn:hover { background: #a52d22 !important; box-shadow: 0 4px 16px rgba(192,57,43,0.45) !important; }
    .send-btn:active { transform: scale(0.95); }
    .icon-btn:hover { background: rgba(0,0,0,0.06) !important; }
    .topbtn:hover { background: rgba(255,255,255,0.9) !important; }
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #d0c5bb; border-radius: 99px; }
  `}</style>
);

/* ─── Icons ──────────────────────────────────────────────────────────────── */
const HomeIco = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>;
const MsgIco = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>;
const SancIco = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>;
const VaultIco = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>;
const ProfIco = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>;

/* ─── Avatar ─────────────────────────────────────────────────────────────── */
const Avatar = ({ emoji = "🦁", size = 34, bg = "linear-gradient(135deg,#c49a6c,#7a4f2a)" }) => (
    <div style={{
        width: size, height: size, borderRadius: "50%", background: bg,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: size * 0.45, flexShrink: 0, boxShadow: "0 1px 4px rgba(0,0,0,0.15)"
    }}>{emoji}</div>
);

/* ─── Nav ────────────────────────────────────────────────────────────────── */
const NAV = [
    { label: "Home", id: "home", icon: <HomeIco /> },
    { label: "Messages", id: "messages", icon: <MsgIco /> },
    { label: "Sanctuary", id: "sanctuary", icon: <SancIco /> },
    { label: "Vault", id: "vault", icon: <VaultIco /> },
    { label: "Profile", id: "profile", icon: <ProfIco /> },
];

export default function MainLayout({ children, setPage, page }) {
    const RED = "#c0392b";
    const REDBG = "#fce8e8";
    const TEXT = "#1a1a1a";
    const MUTED = "#8a8a8a";

    return (
        <>
            <GlobalStyles />
            <div style={{ display: "flex", height: "100vh", overflow: "hidden", backgroundColor: "#ede8e0", fontFamily: "'DM Sans', sans-serif" }}>

                {/* ══ SIDEBAR ══════════════════════════════════════════════════════ */}
                <aside style={{
                    width: "220px", flexShrink: 0, display: "flex", flexDirection: "column",
                    justifyContent: "space-between", backgroundColor: "#e6dfd5",
                    borderRight: "1px solid rgba(0,0,0,0.07)", padding: "1.75rem 0 1.5rem"
                }}>
                    <div>
                        {/* Brand */}
                        <div style={{ padding: "0 1.4rem", marginBottom: "1.75rem" }}>
                            <p style={{ margin: 0, fontSize: "1.3rem", fontWeight: 700, color: RED, letterSpacing: "-0.01em" }}>Lovebirds</p>
                            <p style={{ margin: 0, fontSize: "0.75rem", color: MUTED, marginTop: "2px" }}>Your shared space</p>
                        </div>

                        {/* Nav */}
                        <nav style={{ padding: "0 0.7rem", display: "flex", flexDirection: "column", gap: "2px" }}>
                            {NAV.map(({ label, id, icon }) => {
                                const on = page === id;
                                return (
                                    <button key={id} onClick={() => setPage(id)} className="nav-btn"
                                        style={{
                                            display: "flex", alignItems: "center", gap: "0.65rem",
                                            padding: "0.58rem 0.85rem", borderRadius: "10px", border: "none",
                                            cursor: "pointer", fontSize: "0.875rem",
                                            fontWeight: on ? 600 : 400,
                                            color: on ? RED : "#5c5c5c",
                                            backgroundColor: on ? REDBG : "transparent",
                                            textAlign: "left", width: "100%", fontFamily: "inherit",
                                            position: "relative"
                                        }}
                                    >
                                        {/* Active: filled red bubble icon */}
                                        {on ? (
                                            <span style={{
                                                width: "26px", height: "26px", borderRadius: "8px",
                                                backgroundColor: RED, display: "flex", alignItems: "center",
                                                justifyContent: "center", flexShrink: 0
                                            }}>
                                                <span style={{ color: "#fff", display: "flex" }}>{icon}</span>
                                            </span>
                                        ) : (
                                            <span style={{ opacity: 0.45, color: "#444", display: "flex", flexShrink: 0 }}>{icon}</span>
                                        )}
                                        {label}
                                    </button>
                                );
                            })}
                        </nav>
                    </div>

                    {/* Profile card */}
                    <div style={{ margin: "0 0.7rem" }}>
                        <div style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "0.8rem 0.9rem", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.05)" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                                <Avatar emoji="🦊" size={34} bg="linear-gradient(135deg,#3a6bd4,#1e3a8a)" />
                                <div>
                                    <p style={{ margin: 0, fontWeight: 600, fontSize: "0.83rem", color: TEXT }}>Maya</p>
                                    <p style={{ margin: 0, fontSize: "0.68rem", color: MUTED }}>Connected with Leo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
                    {children}
                </main>
            </div>
        </>
    );
}