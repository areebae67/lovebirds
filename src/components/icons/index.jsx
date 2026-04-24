// ── Icons ─────────────────────────────────────────

const BellIcon = () => (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
);

const GearIcon = () => (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" />
    </svg>
);

const HomeIcon = () => (
    <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </svg>
);

const MessageIcon = () => (
    <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14z" />
    </svg>
);

const HeartIcon = ({ filled = false, size = 17, color = "currentColor" }) => (
    <svg width={size} height={size} fill={filled ? color : "none"} stroke={color} strokeWidth="2" viewBox="0 0 24 24">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23z" />
    </svg>
);

const BookIcon = () => (
    <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    </svg>
);

const UserIcon = () => (
    <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="7" r="4" />
    </svg>
);

const CalendarIcon = () => <div>📅</div>;
const MusicNote = () => <div>🎵</div>;
const SunIcon = () => <div>☀️</div>;
const PlusIcon = () => <div>➕</div>;
const ImagesIcon = () => <div>🖼️</div>;
const BookOpenIcon = () => <div>📖</div>;
const PinIcon = () => <div>📍</div>;

// ── EXPORTS (IMPORTANT) ─────────────────────────
export {
    BellIcon,
    GearIcon,
    HomeIcon,
    MessageIcon,
    HeartIcon,
    BookIcon,
    UserIcon,
    CalendarIcon,
    MusicNote,
    SunIcon,
    PlusIcon,
    ImagesIcon,
    BookOpenIcon,
    PinIcon,
};