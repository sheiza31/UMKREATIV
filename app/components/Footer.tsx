"use client";

import Image from "next/image";

const Footer = () => {
    return (
        <>
            <footer className="w-full bg-[#111111] text-white pt-16 pb-12 border-t-[3px] border-[#111111]">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/20">
                        {/* Brand Info */}
                        <div className="md:col-span-5 flex flex-col items-start gap-4">
                            <div className="flex items-center gap-3">
                                <Image
                                    alt="UMKREATIV Logo"
                                    className="h-9 w-9 object-contain transition-transform group-hover:scale-105"
                                    src="/logo.svg"
                                    width={36}
                                    height={36}
                                />
                                <span className="font-headline-sm text-2xl text-white font-extrabold tracking-tight">UMKREATIV</span>
                            </div>
                            <p className="font-body-sm text-sm text-white/70 max-w-sm leading-relaxed">
                                Studio kreatif berbasis gotong-royong untuk pelaku UMKM Indonesia. Menghadirkan identitas brand berkelas mall dengan sentuhan hangat tetangga sendiri.
                            </p>
                            <div className="flex items-center gap-2 pt-2">
                                <span className="px-3 py-1 rounded-full border-[1.5px] border-white/30 bg-[#222222] font-label-sm text-xs text-[#FFD93D] font-mono font-bold">
                                    🇮🇩 100% Karya Anak Bangsa
                                </span>
                            </div>
                        </div>
                        {/* Quick Links */}
                        <div className="md:col-span-3 flex flex-col gap-2.5">
                            <h4 className="font-label-md text-sm uppercase tracking-wider text-[#FFD93D] font-extrabold mb-1">
                                Navigasi Cepat
                            </h4>
                            <a className="font-body-sm text-sm text-white/80 hover:text-white transition-colors" href="#layanan">Layanan Agensi</a>
                            <a className="font-body-sm text-sm text-white/80 hover:text-white transition-colors" href="#portofolio">Portofolio UMKM</a>
                            <a className="font-body-sm text-sm text-white/80 hover:text-white transition-colors" href="#cara-kerja">Alur Cara Kerja</a>
                            <a className="font-body-sm text-sm text-white/80 hover:text-white transition-colors" href="#harga">Paket &amp; Harga</a>
                            <a className="font-body-sm text-sm text-white/80 hover:text-white transition-colors" href="#kontak">Hubungi Kami</a>
                        </div>
                        {/* Newsletter Subscription */}
                        <div className="md:col-span-4 flex flex-col gap-3">
                            <h4 className="font-label-md text-sm uppercase tracking-wider text-[#76f8e3] font-extrabold mb-1">
                                Tips Branding Mingguan
                            </h4>
                            <p className="font-body-sm text-sm text-white/70 leading-relaxed">
                                Dapatkan inspirasi tren visual dan tips praktis naikin omzet UMKM langsung di email kamu, gratis tiap Senin.
                            </p>
                            <form
                                className="flex flex-col sm:flex-row gap-2 mt-2"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    alert("Terima kasih! Kamu sudah terdaftar di newsletter UMKREATIV.");
                                }}
                            >
                                <input
                                    className="bg-white text-[#111111] px-3.5 py-2.5 rounded-xl border-[2px] border-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A1A] grow"
                                    placeholder="Ketik email usaha kamu..."
                                    required
                                    type="email"
                                />
                                <button
                                    className="px-4 py-2.5 bg-primary-container text-on-surface font-label-md text-sm uppercase rounded-xl border-[2px] border-white font-extrabold shadow-[2px_2px_0px_white] hover:bg-[#FFD93D] transition-colors whitespace-nowrap"
                                    type="submit"
                                >
                                    Langganan
                                </button>
                            </form>
                            {/* Social Media Links */}
                            <div className="flex items-center gap-3 pt-3">
                                <a className="w-9 h-9 rounded-xl bg-[#222222] border-[1.5px] border-white/40 flex items-center justify-center hover:bg-[#FF6B9D] hover:text-white transition-all shadow-[2px_2px_0px_white]" href="https://instagram.com" rel="noopener noreferrer" target="_blank" title="Instagram">
                                    <span className="font-extrabold text-xs">IG</span>
                                </a>
                                <a className="w-9 h-9 rounded-xl bg-[#222222] border-[1.5px] border-white/40 flex items-center justify-center hover:bg-[#1FB5A3] hover:text-white transition-all shadow-[2px_2px_0px_white]" href="https://tiktok.com" rel="noopener noreferrer" target="_blank" title="TikTok">
                                    <span className="font-extrabold text-xs">TT</span>
                                </a>
                                <a className="w-9 h-9 rounded-xl bg-[#222222] border-[1.5px] border-white/40 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all shadow-[2px_2px_0px_white]" href="https://wa.me/6281234567890" rel="noopener noreferrer" target="_blank" title="WhatsApp">
                                    <span className="font-extrabold text-xs">WA</span>
                                </a>
                                <a className="w-9 h-9 rounded-xl bg-[#222222] border-[1.5px] border-white/40 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all shadow-[2px_2px_0px_white]" href="https://linkedin.com" rel="noopener noreferrer" target="_blank" title="LinkedIn">
                                    <span className="font-extrabold text-xs">IN</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Footer Sub-bar */}
                    <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-body-sm text-xs text-white/60">
                        <p className="">© 2025 UMKREATIV Creative Service Agency. Karya Nyata untuk UMKM Juara. Dibuat dengan bangga di Indonesia 🇮🇩</p>
                        <div className="flex items-center gap-4">
                            <span className="px-3 py-1 rounded-full border-[1.5px] border-white/30 bg-[#222222] text-[#76f8e3] font-bold">JAKARTA • BANDUNG • SURABAYA</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
