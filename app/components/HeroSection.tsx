import Image from "next/image";

const HeroSection = () => {
    return (
        <>
            <section className="relative w-full max-w-7xl mx-auto px-4 md:px-8 pt-10 md:pt-16 pb-16 md:pb-24 overflow-visible">
                <div className="absolute top-12 left-2 text-[#FF6B9D] opacity-30 pointer-events-none select-none hidden lg:block -rotate-12">
                    <svg fill="currentColor" height="56" viewBox="0 0 24 24" width="56"><path d="M12 2l2.4 6.6L21 11l-5.6 4.4L17 22l-5-4-5 4 1.6-6.6L3 11l6.6-2.4z"></path></svg>
                </div>
                <div className="absolute bottom-12 right-1/2 text-[#1FB5A3] opacity-25 pointer-events-none select-none hidden lg:block rotate-12">
                    <svg fill="currentColor" height="48" viewBox="0 0 24 24" width="48"><path d="M12 0l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z"></path></svg>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    <div className="lg:col-span-7 flex flex-col items-start gap-5">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border-[2.5px] border-[#111111] bg-[#76f8e3] text-[#00201c] font-label-md text-xs sm:text-sm font-extrabold shadow-[3px_3px_0px_#111111] -rotate-1">
                            <span className="text-base leading-none">👋</span>
                            <span className="">Solusi Desain Sat-Set Buat Usaha Rame</span>
                        </div>
                        <h1 className="font-headline-xl text-3xl sm:text-5xl lg:text-[56px] text-on-surface leading-[1.1] font-extrabold tracking-tight">
                            Usaha Kecil,
                            <span className="relative inline-block mt-1 sm:mt-2">
                                <span className="bg-[#FFD93D] px-3.5 py-1 border-[2.5px] border-[#111111] rounded-xl -rotate-1 inline-block shadow-[4px_4px_0px_#111111] text-[#111111]">
                                    Kreativitas Gak Kecil!
                                </span>
                            </span>
                        </h1>
                        <p className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
                            Bantu warung, resto, dan brand lokal naik kelas dengan branding kece, konten FYP, dan visual produk selevel brand mall. Budget ramah UMKM, hasil bikin kompetitor bengong!
                        </p>
                        <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
                            <a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary-container text-on-surface font-label-lg text-sm sm:text-base uppercase tracking-wider rounded-xl border-[2.5px] border-[#111111] shadow-[4px_4px_0px_#111111] hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#111111] transition-all font-extrabold" href="#kontak">
                                <span className="">Konsultasi Gratis</span>
                                <span className="text-lg">⚡</span>
                            </a>
                            <a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-surface-container-lowest text-on-surface font-label-lg text-sm sm:text-base uppercase tracking-wider rounded-xl border-[2.5px] border-[#111111] shadow-[4px_4px_0px_#111111] hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#111111] transition-all font-extrabold" href="#portofolio">
                                <span className="">Lihat Karya Kami</span>
                                <span className="text-lg">👀</span>
                            </a>
                        </div>
                        <div className="flex items-center gap-4 pt-3">
                            <div className="flex -space-x-2.5">
                                <span className="w-9 h-9 rounded-full bg-[#FFD93D] border-[2px] border-[#111111] flex items-center justify-center font-bold text-sm shadow-[2px_2px_0px_#111111]">☕</span>
                                <span className="w-9 h-9 rounded-full bg-[#1FB5A3] border-[2px] border-[#111111] flex items-center justify-center font-bold text-sm text-white shadow-[2px_2px_0px_#111111]">🌶️</span>
                                <span className="w-9 h-9 rounded-full bg-[#FF6B9D] border-[2px] border-[#111111] flex items-center justify-center font-bold text-sm text-white shadow-[2px_2px_0px_#111111]">👗</span>
                                <span className="w-9 h-9 rounded-full bg-[#FF7A1A] border-[2px] border-[#111111] flex items-center justify-center font-bold text-sm text-white shadow-[2px_2px_0px_#111111]">🍪</span>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center gap-1 text-[#FF7A1A] text-sm leading-none">
                                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                </div>
                                <span className="font-label-sm text-xs text-on-surface-variant font-bold mt-1">Rating 4.9/5 dari 50+ Pengusaha Lokal</span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0">
                        <div className="relative w-full max-w-[420px] aspect-square rounded-3xl bg-[#ffe173] border-[3px] border-[#111111] shadow-[8px_8px_0px_#111111] flex items-center justify-center p-6 overflow-visible">
                            <div className="w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center relative z-10 transition-transform duration-300 hover:scale-105">
                                <Image
                                    width={288}
                                    height={288}
                                    src="/kreki-mascot.jpg"
                                    alt="Kreki Mascot UMKM Kreativ Waving"
                                    className="w-full h-full object-contain mx-auto select-none pointer-events-none rounded-2xl"
                                    priority
                                />
                            </div>
                            <div className="absolute -top-4 -left-4 sm:-left-6 bg-[#1FB5A3] text-white px-3.5 py-1.5 rounded-full border-[2.5px] border-[#111111] font-label-md text-xs sm:text-sm shadow-[4px_4px_0px_#111111] -rotate-6 flex items-center gap-1.5 hover:rotate-0 transition-transform cursor-default">
                                <span className="">🚀</span>
                                <span className="font-extrabold uppercase">50+ UMKM Naik Kelas</span>
                            </div>
                            <div className="absolute top-1/2 -right-4 sm:-right-6 bg-[#FFD93D] text-[#111111] px-3.5 py-1.5 rounded-full border-[2.5px] border-[#111111] font-label-md text-xs sm:text-sm shadow-[4px_4px_0px_#111111] rotate-6 flex items-center gap-1.5 hover:rotate-0 transition-transform cursor-default">
                                <span className="">⚡</span>
                                <span className="font-extrabold uppercase">Pengerjaan Sat-Set</span>
                            </div>
                            <div className="absolute -bottom-4 left-4 sm:left-6 bg-[#FF6B9D] text-white px-3.5 py-1.5 rounded-full border-[2.5px] border-[#111111] font-label-md text-xs sm:text-sm shadow-[4px_4px_0px_#111111] rotate-3 flex items-center gap-1.5 hover:rotate-0 transition-transform cursor-default">
                                <span className="">🤝</span>
                                <span className="font-extrabold uppercase">Harga Tetangga Ramah</span>
                            </div>
                            <div className="absolute -top-9 right-2 sm:right-6 bg-white text-[#111111] border-[2px] border-[#111111] px-3 py-1 rounded-xl shadow-[2.5px_2.5px_0px_#111111] font-label-sm text-xs font-extrabold -rotate-3 hidden sm:flex items-center gap-1">
                                <span className="">💡</span> &quot;Halo Juragan! Aku Kreki!&quot;
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
