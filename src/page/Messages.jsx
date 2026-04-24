import React from "react";

export default function MessagesPage() {
    return (
        <>
            {/* Fixed Sidebar (SideNavBar) */}
            <aside className="w-[280px] h-screen fixed left-0 top-0 border-r border-[#E23D3D]/5 bg-[#F5EBDD] flex flex-col py-10 px-4 space-y-8 z-50">
                <div className="px-6">
                    <h1 className="text-2xl font-bold text-[#E23D3D] tracking-tighter font-['Plus_Jakarta_Sans']">
                        Lovebirds
                    </h1>
                    <p className="text-stone-600 text-sm mt-1">Your shared space</p>
                </div>

                <nav className="flex-1 space-y-2">
                    <a
                        className="text-stone-600 px-6 py-3 hover:text-[#E23D3D] transition-all duration-300 flex items-center gap-4 group scale-95 active:scale-90"
                        href="#"
                    >
                        <span className="material-symbols-outlined">home</span>
                        <span className="font-['Plus_Jakarta_Sans'] text-sm font-medium tracking-tight">
                            Home
                        </span>
                    </a>

                    <a
                        className="bg-[#E23D3D]/10 text-[#E23D3D] font-semibold rounded-full px-6 py-3 flex items-center gap-4 scale-95 active:scale-90 transition-transform"
                        href="#"
                    >
                        <span
                            className="material-symbols-outlined"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            chat_bubble
                        </span>
                        <span className="font-['Plus_Jakarta_Sans'] text-sm font-medium tracking-tight">
                            Messages
                        </span>
                    </a>

                    <a
                        className="text-stone-600 px-6 py-3 hover:text-[#E23D3D] transition-all duration-300 flex items-center gap-4 group scale-95 active:scale-90"
                        href="#"
                    >
                        <span className="material-symbols-outlined">favorite</span>
                        <span className="font-['Plus_Jakarta_Sans'] text-sm font-medium tracking-tight">
                            Sanctuary
                        </span>
                    </a>

                    <a
                        className="text-stone-600 px-6 py-3 hover:text-[#E23D3D] transition-all duration-300 flex items-center gap-4 group scale-95 active:scale-90"
                        href="#"
                    >
                        <span className="material-symbols-outlined">auto_stories</span>
                        <span className="font-['Plus_Jakarta_Sans'] text-sm font-medium tracking-tight">
                            Vault
                        </span>
                    </a>

                    <a
                        className="text-stone-600 px-6 py-3 hover:text-[#E23D3D] transition-all duration-300 flex items-center gap-4 group scale-95 active:scale-90"
                        href="#"
                    >
                        <span className="material-symbols-outlined">person</span>
                        <span className="font-['Plus_Jakarta_Sans'] text-sm font-medium tracking-tight">
                            Profile
                        </span>
                    </a>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="ml-[280px] w-[calc(100%-280px)] min-h-screen flex flex-col relative bg-[#F5EBDD]">
                {/* Header */}
                <header className="h-20 flex justify-between items-center px-10 sticky top-0 z-40 bg-transparent">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                            <span
                                className="material-symbols-outlined text-[#E23D3D]"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                                favorite
                            </span>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-stone-800">Leo</h2>
                            <p className="text-xs text-stone-500 font-medium">
                                Typing something sweet...
                            </p>
                        </div>
                    </div>
                </header>

                {/* Chat */}
                <section className="flex-1 px-10 pb-32 pt-4 overflow-y-auto">
                    <div className="max-w-4xl mx-auto space-y-8 flex flex-col">
                        <div className="flex justify-center">
                            <span className="px-4 py-1 bg-stone-200/50 rounded-full text-[11px] font-bold text-stone-500 uppercase tracking-widest">
                                Today
                            </span>
                        </div>

                        {/* Received */}
                        <div className="flex items-end gap-3 self-start max-w-[70%]">
                            <div className="flex flex-col gap-1">
                                <div className="bg-white p-5 rounded-[28px] shadow text-stone-800">
                                    Hey love, I saw these flowers today and immediately thought of
                                    that weekend in the valley.
                                </div>
                                <span className="text-[10px] text-stone-400 ml-2 font-medium">
                                    10:24 AM
                                </span>
                            </div>
                        </div>

                        {/* Sent */}
                        <div className="flex items-end gap-3 self-end max-w-[70%]">
                            <div className="flex flex-col items-end gap-1">
                                <div className="bg-[#E23D3D] text-white p-5 rounded-[28px] shadow">
                                    I remember perfectly. Those flowers are beautiful ❤️
                                </div>
                                <span className="text-[10px] text-stone-400 mr-2 font-medium">
                                    10:27 AM · Read
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Input */}
                <footer className="fixed bottom-0 ml-[280px] w-[calc(100%-280px)] px-10 py-8 bg-gradient-to-t from-[#F5EBDD] via-[#F5EBDD] to-transparent">
                    <div className="max-w-4xl mx-auto flex items-center gap-4 bg-white p-2 pl-6 rounded-full shadow border border-red-100">
                        <input
                            className="flex-1 bg-transparent border-none outline-none text-stone-800 placeholder-stone-400 py-3"
                            placeholder="Write something from the heart..."
                            type="text"
                        />

                        <button className="bg-[#E23D3D] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                            <span
                                className="material-symbols-outlined"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                                send
                            </span>
                        </button>
                    </div>
                </footer>
            </main>
        </>
    );
}
