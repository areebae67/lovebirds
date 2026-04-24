import { useState, useRef, useEffect } from "react";

/* ─── Icons ──────────────────────────────────────────────────────────────── */
const SancIco = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>;
const VaultIco = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>;
const ProfIco = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>;
const BellIco = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>;
const GearIco = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>;
const PlusIco = () => <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>;
const EmojiIco = () => <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>;
const MicIco = () => <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>;
const SendIco = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>;
const BkOIco = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>;
const HrtIco = ({ filled = false, size = 16, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? color : "none"} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
);

/* ─── Mock flower image (SVG placeholder matching the dark floral photo) ─── */
const FlowerPhoto = () => (
    <div style={{
        width: "250px", height: "250px", borderRadius: "14px", overflow: "hidden",
        background: "linear-gradient(160deg, #0a0a0a 0%, #1a1a10 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0, position: "relative"
    }}>
        {/* Simulated wildflower bouquet using layered circles/ellipses */}
        <svg viewBox="0 0 250 250" width="250" height="250" style={{ position: "absolute", inset: 0 }}>
            {/* Stems */}
            <g stroke="#2d5a1b" strokeWidth="2.5" opacity="0.9">
                {[115, 120, 125, 130, 135, 110, 140, 105, 145].map((x, i) => (
                    <line key={i} x1={x} y1="240" x2={x + (i % 3 - 1) * 12} y2={160 + (i % 4) * 8} />
                ))}
            </g>
            {/* Leaves */}
            <ellipse cx="108" cy="195" rx="12" ry="6" fill="#2d5a1b" transform="rotate(-30 108 195)" opacity="0.85" />
            <ellipse cx="140" cy="200" rx="11" ry="5" fill="#356620" transform="rotate(25 140 200)" opacity="0.8" />
            <ellipse cx="120" cy="185" rx="10" ry="5" fill="#2a5018" transform="rotate(-15 120 185)" opacity="0.9" />
            {/* Yellow daisy centers + petals */}
            {[
                { cx: 118, cy: 148, r: 9, pc: "#f5c518", cc: "#b8860b" },
                { cx: 138, cy: 138, r: 10, pc: "#f5c518", cc: "#b8860b" },
                { cx: 105, cy: 155, r: 8, pc: "#f5c518", cc: "#c49a00" },
                { cx: 152, cy: 152, r: 9, pc: "#f5c518", cc: "#b8860b" },
                { cx: 128, cy: 125, r: 11, pc: "#f8d030", cc: "#c49a00" },
            ].map(({ cx, cy, r, pc, cc }, i) => (
                <g key={i}>
                    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(a => (
                        <ellipse key={a} cx={cx + Math.cos(a * Math.PI / 180) * (r + 5)} cy={cy + Math.sin(a * Math.PI / 180) * (r + 5)} rx={r * 0.45} ry={r * 0.22} fill={pc} transform={`rotate(${a} ${cx + Math.cos(a * Math.PI / 180) * (r + 5)} ${cy + Math.sin(a * Math.PI / 180) * (r + 5)})`} opacity="0.95" />
                    ))}
                    <circle cx={cx} cy={cy} r={r * 0.6} fill={cc} />
                </g>
            ))}
            {/* White daisy */}
            {[{ cx: 112, cy: 133, r: 8 }, { cx: 145, cy: 168, r: 7 }].map(({ cx, cy, r }, i) => (
                <g key={i}>
                    {[0, 40, 80, 120, 160, 200, 240, 280, 320].map(a => (
                        <ellipse key={a} cx={cx + Math.cos(a * Math.PI / 180) * (r + 4)} cy={cy + Math.sin(a * Math.PI / 180) * (r + 4)} rx={r * 0.4} ry={r * 0.18} fill="white" transform={`rotate(${a} ${cx + Math.cos(a * Math.PI / 180) * (r + 4)} ${cy + Math.sin(a * Math.PI / 180) * (r + 4)})`} opacity="0.9" />
                    ))}
                    <circle cx={cx} cy={cy} r={r * 0.55} fill="#f5c518" />
                </g>
            ))}
            {/* Purple wildflowers */}
            {[{ cx: 98, cy: 142, r: 5 }, { cx: 160, cy: 138, r: 5 }, { cx: 100, cy: 168, r: 4 }, { cx: 162, cy: 162, r: 4 }].map(({ cx, cy, r }, i) => (
                <g key={i}>
                    {[0, 60, 120, 180, 240, 300].map(a => (
                        <ellipse key={a} cx={cx + Math.cos(a * Math.PI / 180) * (r + 3)} cy={cy + Math.sin(a * Math.PI / 180) * (r + 3)} rx={r * 0.5} ry={r * 0.25} fill="#9b59b6" transform={`rotate(${a} ${cx + Math.cos(a * Math.PI / 180) * (r + 3)} ${cy + Math.sin(a * Math.PI / 180) * (r + 3)})`} opacity="0.85" />
                    ))}
                    <circle cx={cx} cy={cy} r={r * 0.5} fill="#6c3483" />
                </g>
            ))}
        </svg>
    </div>
);

/* ─── Typing dots animation ──────────────────────────────────────────────── */
const TypingDots = () => (
    <div style={{ display: "flex", gap: "4px", alignItems: "center", padding: "2px 0" }}>
        {[0, 1, 2].map(i => (
            <div key={i} style={{
                width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#c0392b",
                animation: `typingBounce 1.2s ease-in-out ${i * 0.18}s infinite`
            }} />
        ))}
        <style>{`
      @keyframes typingBounce {
        0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
        30% { transform: translateY(-5px); opacity: 1; }
      }
    `}</style>
    </div>
);

/* ─── Avatar ─────────────────────────────────────────────────────────────── */
const Avatar = ({ emoji = "🦁", size = 34, bg = "linear-gradient(135deg,#c49a6c,#7a4f2a)" }) => (
    <div style={{
        width: size, height: size, borderRadius: "50%", background: bg,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: size * 0.45, flexShrink: 0, boxShadow: "0 1px 4px rgba(0,0,0,0.15)"
    }}>{emoji}</div>
);

/* ─── Messages data ──────────────────────────────────────────────────────── */
const MESSAGES = [
    {
        id: 1, from: "partner", type: "text",
        text: "Hey love, I saw these flowers today and immediately thought of that weekend in the valley. Do you remember the scent of the rain there?",
        time: "10:24 AM"
    },
    { id: 2, from: "partner", type: "image", time: "10:24 AM" },
    {
        id: 3, from: "me", type: "text",
        text: "I remember perfectly. It was so peaceful. Those flowers are beautiful—thank you for thinking of me. Can't wait to see you tonight! 🧡",
        time: "10:27 AM", read: true
    },
    { id: 4, from: "system", type: "vault" },
    {
        id: 5, from: "partner", type: "text",
        text: "I'm making your favorite pasta tonight. See you at 7?",
        time: "11:12 AM"
    },
];

/* ─── Main Component ─────────────────────────────────────────────────────── */
export default function Messages() {
    const [active, setActive] = useState("Messages");
    const [input, setInput] = useState("");
    const feedRef = useRef(null);

    useEffect(() => {
        if (feedRef.current) {
            feedRef.current.scrollTop = feedRef.current.scrollHeight;
        }
    }, []);

    const RED = "#c0392b";
    const REDBG = "#fce8e8";
    const TEXT = "#1a1a1a";
    const MUTED = "#8a8a8a";

    return (

        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", backgroundColor: "#ede8e0" }}>

            {/* Chat header */}
            <header style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "0.9rem 1.75rem", backgroundColor: "#ede8e0",
                borderBottom: "1px solid rgba(0,0,0,0.07)", flexShrink: 0
            }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                    {/* Partner avatar with red heart indicator */}
                    <div style={{ position: "relative" }}>
                        <Avatar emoji="🦁" size={40} bg="linear-gradient(135deg,#c49a6c,#7a4f2a)" />
                        <div style={{
                            position: "absolute", bottom: "-1px", right: "-2px",
                            width: "16px", height: "16px", borderRadius: "50%",
                            backgroundColor: RED, border: "2px solid #ede8e0",
                            display: "flex", alignItems: "center", justifyContent: "center"
                        }}>
                            <HrtIco filled color="#fff" size={8} />
                        </div>
                    </div>
                    <div>
                        <p style={{ margin: 0, fontWeight: 700, fontSize: "1rem", color: TEXT }}>Leo</p>
                        <div style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "1px" }}>
                            <TypingDots />
                            <span style={{ fontSize: "0.74rem", color: MUTED }}>Typing something sweet...</span>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", gap: "0.45rem" }}>
                    {[<BellIco key="b" />, <GearIco key="g" />].map((ic, i) => (
                        <button key={i} className="topbtn" style={{
                            background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.09)",
                            borderRadius: "9px", padding: "0.42rem 0.52rem", cursor: "pointer",
                            color: "#666", display: "flex", alignItems: "center",
                            transition: "background 0.15s"
                        }}>{ic}</button>
                    ))}
                </div>
            </header>

            {/* Message feed */}
            <div ref={feedRef} style={{
                flex: 1, overflowY: "auto", padding: "1.25rem 2.5rem",
                display: "flex", flexDirection: "column", gap: "0"
            }}>
                {/* Date divider */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", margin: "0.25rem 0 1.5rem" }}>
                    <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(0,0,0,0.1)" }} />
                    <span style={{
                        fontSize: "0.68rem", fontWeight: 600, color: MUTED, letterSpacing: "0.08em",
                        textTransform: "uppercase", backgroundColor: "#ddd7cd",
                        padding: "3px 12px", borderRadius: "9999px"
                    }}>Today</span>
                    <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(0,0,0,0.1)" }} />
                </div>

                {MESSAGES.map((msg) => {
                    const isMe = msg.from === "me";
                    const isSystem = msg.from === "system";

                    /* ── System / vault card ── */
                    if (isSystem && msg.type === "vault") {
                        return (
                            <div key={msg.id} style={{ display: "flex", justifyContent: "center", margin: "1.5rem 0" }}>
                                <div style={{
                                    backgroundColor: "rgba(255,255,255,0.82)", borderRadius: "16px",
                                    padding: "1.2rem 2rem", textAlign: "center", maxWidth: "320px",
                                    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                                    border: "1px solid rgba(0,0,0,0.05)"
                                }}>
                                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "0.5rem" }}>
                                        <BkOIco />
                                    </div>
                                    <p style={{ margin: "0 0 0.3rem", fontWeight: 600, fontSize: "0.88rem", color: TEXT }}>Added to Vault</p>
                                    <p style={{ margin: "0 0 0.75rem", fontSize: "0.78rem", color: MUTED, lineHeight: 1.5 }}>
                                        Maya added "Valley Wildflowers" to your shared memories collection.
                                    </p>
                                    {/* Two avatars */}
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <div style={{ display: "flex" }}>
                                            {[
                                                { emoji: "🦊", bg: "linear-gradient(135deg,#3a6bd4,#1e3a8a)" },
                                                { emoji: "🦁", bg: "linear-gradient(135deg,#c49a6c,#7a4f2a)" },
                                            ].map((av, i) => (
                                                <div key={i} style={{
                                                    width: "26px", height: "26px", borderRadius: "50%",
                                                    background: av.bg, border: "2px solid #fff",
                                                    marginLeft: i ? "-8px" : 0,
                                                    display: "flex", alignItems: "center", justifyContent: "center",
                                                    fontSize: "0.7rem"
                                                }}>{av.emoji}</div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }

                    /* ── Image message ── */
                    if (msg.type === "image") {
                        return (
                            <div key={msg.id} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                                <FlowerPhoto />
                            </div>
                        );
                    }

                    /* ── Text message ── */
                    return (
                        <div key={msg.id}
                            style={{
                                display: "flex", flexDirection: "column",
                                alignItems: isMe ? "flex-end" : "flex-start",
                                marginBottom: "1rem"
                            }}
                        >
                            {/* Avatar + bubble row for partner */}
                            <div style={{ display: "flex", alignItems: "flex-end", gap: "0.6rem", flexDirection: isMe ? "row-reverse" : "row" }}>
                                {!isMe && <Avatar emoji="🦁" size={32} bg="linear-gradient(135deg,#c49a6c,#7a4f2a)" />}

                                <div style={{
                                    maxWidth: "55%", padding: "0.8rem 1.1rem",
                                    borderRadius: isMe ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                                    backgroundColor: isMe ? RED : "#fff",
                                    color: isMe ? "#fff" : TEXT,
                                    fontSize: "0.9rem", lineHeight: 1.6,
                                    boxShadow: isMe
                                        ? "0 3px 14px rgba(192,57,43,0.28)"
                                        : "0 2px 8px rgba(0,0,0,0.07)"
                                }}>
                                    {msg.text}
                                </div>
                            </div>

                            {/* Time + read */}
                            <div style={{
                                marginTop: "0.3rem",
                                marginLeft: isMe ? 0 : "2.4rem",
                                display: "flex", gap: "0.4rem", alignItems: "center"
                            }}>
                                <span style={{ fontSize: "0.68rem", color: MUTED }}>{msg.time}</span>
                                {msg.read && <span style={{ fontSize: "0.68rem", color: MUTED }}>· Read</span>}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* ── Composer ──────────────────────────────────────────────────── */}
            <div style={{
                padding: "0.9rem 1.75rem 1.1rem",
                backgroundColor: "#ede8e0",
                borderTop: "1px solid rgba(0,0,0,0.07)",
                flexShrink: 0
            }}>
                <div style={{
                    display: "flex", alignItems: "center", gap: "0.6rem",
                    backgroundColor: "rgba(255,255,255,0.75)",
                    borderRadius: "14px", padding: "0.55rem 0.65rem",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
                    border: "1px solid rgba(0,0,0,0.06)"
                }}>
                    {/* Plus button */}
                    <button className="icon-btn" style={{
                        width: "34px", height: "34px", borderRadius: "50%",
                        border: "none", background: "transparent", cursor: "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: MUTED, transition: "background 0.15s", flexShrink: 0
                    }}>
                        <PlusIco />
                    </button>

                    {/* Input */}
                    <input
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="Write something from the heart..."
                        style={{
                            flex: 1, border: "none", background: "transparent", outline: "none",
                            fontSize: "0.9rem", color: TEXT, fontFamily: "inherit",
                        }}
                    />

                    {/* Right action icons */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.1rem", flexShrink: 0 }}>
                        <button className="icon-btn" style={{ width: "34px", height: "34px", borderRadius: "50%", border: "none", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: MUTED, transition: "background 0.15s" }}>
                            <EmojiIco />
                        </button>
                        <button className="icon-btn" style={{ width: "34px", height: "34px", borderRadius: "50%", border: "none", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: MUTED, transition: "background 0.15s" }}>
                            <MicIco />
                        </button>
                        <button className="send-btn" style={{
                            width: "38px", height: "38px", borderRadius: "50%", border: "none",
                            backgroundColor: RED, cursor: "pointer",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            boxShadow: "0 2px 10px rgba(192,57,43,0.32)",
                            transition: "background 0.15s, box-shadow 0.15s, transform 0.1s",
                            flexShrink: 0
                        }}>
                            <SendIco />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}
