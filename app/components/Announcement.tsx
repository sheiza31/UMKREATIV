const Announcement = () => {
    return (
        <>
            <div className="w-full bg-[#FFD93D] border-b-[2.5px] border-[#111111] py-2.5 px-4 overflow-hidden select-none">
                <div className="flex items-center justify-center gap-4 md:gap-8 font-label-md text-xs sm:text-sm text-[#111111] uppercase tracking-wider font-extrabold whitespace-nowrap overflow-x-auto">
                    <span className="inline-flex items-center gap-2 shrink-0">
                        <span className="w-2.5 h-2.5 rounded-full bg-primary border border-[#111111] animate-ping"></span>
                        PROMO BULAN INI: KONSULTASI KREATIF 100% GRATIS
                    </span>
                    <span className="hidden md:inline font-black">•</span>
                    <span className="hidden md:inline-flex items-center gap-1.5 shrink-0">⚡ PENGERJAAN CEPAT 5 HARI KERJA</span>
                    <span className="hidden md:inline font-black">•</span>
                    <span className="hidden lg:inline-flex items-center gap-1.5 shrink-0">🎉 50+ UMKM SUDAH NAIK KELAS &amp; OMZET MELEJIT</span>
                    <span className="hidden md:inline font-black">•</span>
                    <span className="inline-flex items-center gap-1.5 shrink-0 bg-[#111111] text-[#FFD93D] px-2.5 py-0.5 rounded-lg border border-[#111111]">SLOT TERBATAS</span>
                </div>
            </div>
        </>
    )
}

export default Announcement