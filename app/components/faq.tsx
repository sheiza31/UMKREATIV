const Faq = () => {
    return (
        <>
            <section className="w-full max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24" id="faq">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border-[2px] border-[#111111] bg-[#FFD93D] text-[#111111] font-label-sm text-xs uppercase font-extrabold shadow-[2px_2px_0px_#111111] mb-3">
                        <span className="">❓ Tanya Jawab Santai</span>
                    </div>
                    <h2 className="font-headline-lg text-2xl sm:text-4xl text-on-surface font-extrabold">
                        Pertanyaan Sering Muncul
                    </h2>
                    <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-2">
                        Masih ragu atau ada yang mau dipastikan dulu? Ini jawaban buat hal yang sering ditanyakan.
                    </p>
                </div>
                <div className="space-y-4">
                    {/* FAQ 1 */}
                    <details className="group bg-white rounded-2xl border-[2.5px] border-[#111111] shadow-[4px_4px_0px_#111111] p-5 [&_summary::-webkit-details-marker]:hidden open:bg-[#FFF8E7] transition-all">
                        <summary className="flex items-center justify-between cursor-pointer font-headline-sm text-base sm:text-lg text-on-surface font-bold select-none gap-4">
                            <span className="">Budget usaha saya masih terbatas, apa bisa disesuaikan?</span>
                            <span className="w-8 h-8 rounded-full bg-surface-container border-[1.5px] border-[#111111] flex items-center justify-center text-sm shrink-0 group-open:rotate-180 group-open:bg-[#FFD93D] transition-all">▼</span>
                        </summary>
                        <p className="mt-4 pt-3 border-t-[1.5px] border-[#111111]/15 font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                            Bisa banget! UMKREATIV hadir memang khusus buat bantuin UMKM. Selain paket tetap di atas, kita punya paket custom modular per item (misalnya hanya mau bikin stiker kemasan aja atau feed IG aja). Chat kita dulu, kita carikan formula yang pas di kantong!
                        </p>
                    </details>
                    {/* FAQ 2 */}
                    <details className="group bg-white rounded-2xl border-[2.5px] border-[#111111] shadow-[4px_4px_0px_#111111] p-5 [&_summary::-webkit-details-marker]:hidden open:bg-[#FFF8E7] transition-all">
                        <summary className="flex items-center justify-between cursor-pointer font-headline-sm text-base sm:text-lg text-on-surface font-bold select-none gap-4">
                            <span className="">Berapa lama estimasi pengerjaannya?</span>
                            <span className="w-8 h-8 rounded-full bg-surface-container border-[1.5px] border-[#111111] flex items-center justify-center text-sm shrink-0 group-open:rotate-180 group-open:bg-[#FFD93D] transition-all">▼</span>
                        </summary>
                        <p className="mt-4 pt-3 border-t-[1.5px] border-[#111111]/15 font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                            Rata-rata 5 sampai 10 hari kerja tergantung kompleksitas paket yang lo ambil. Selama proses, kita selalu update timeline transparan via grup WhatsApp dedicated khusus proyek lo, jadi gak ada drama hilang kabar!
                        </p>
                    </details>
                    {/* FAQ 3 */}
                    <details className="group bg-white rounded-2xl border-[2.5px] border-[#111111] shadow-[4px_4px_0px_#111111] p-5 [&_summary::-webkit-details-marker]:hidden open:bg-[#FFF8E7] transition-all">
                        <summary className="flex items-center justify-between cursor-pointer font-headline-sm text-base sm:text-lg text-on-surface font-bold select-none gap-4">
                            <span className="">Kalau belum punya konsep atau ide sama sekali gimana?</span>
                            <span className="w-8 h-8 rounded-full bg-surface-container border-[1.5px] border-[#111111] flex items-center justify-center text-sm shrink-0 group-open:rotate-180 group-open:bg-[#FFD93D] transition-all">▼</span>
                        </summary>
                        <p className="mt-4 pt-3 border-t-[1.5px] border-[#111111]/15 font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                            Tenang aja! Lo gak perlu pusing mikir konsep rumit. Di tahap awal, tim kreatif kita yang akan bantu brainstorming dari nol lewat sesi tanya-jawab santai. Lo cukup ceritain produk dan target pembelinya, sisanya biar kita yang ramu visualnya.
                        </p>
                    </details>
                    {/* FAQ 4 */}
                    <details className="group bg-white rounded-2xl border-[2.5px] border-[#111111] shadow-[4px_4px_0px_#111111] p-5 [&_summary::-webkit-details-marker]:hidden open:bg-[#FFF8E7] transition-all">
                        <summary className="flex items-center justify-between cursor-pointer font-headline-sm text-base sm:text-lg text-on-surface font-bold select-none gap-4">
                            <span className="">File apa saja yang bakal saya dapatkan nanti?</span>
                            <span className="w-8 h-8 rounded-full bg-surface-container border-[1.5px] border-[#111111] flex items-center justify-center text-sm shrink-0 group-open:rotate-180 group-open:bg-[#FFD93D] transition-all">▼</span>
                        </summary>
                        <p className="mt-4 pt-3 border-t-[1.5px] border-[#111111]/15 font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                            Lo bakal dapat file master mentahan beresolusi tinggi lengkap (Adobe Illustrator .AI, Photoshop .PSD, PDF siap cetak dengan standar percetakan CMYK), plus format web siap upload sehari-hari (PNG transparan, JPG tajam, SVG, dan MP4 untuk konten video).
                        </p>
                    </details>
                    {/* FAQ 5 */}
                    <details className="group bg-white rounded-2xl border-[2.5px] border-[#111111] shadow-[4px_4px_0px_#111111] p-5 [&_summary::-webkit-details-marker]:hidden open:bg-[#FFF8E7] transition-all">
                        <summary className="flex items-center justify-between cursor-pointer font-headline-sm text-base sm:text-lg text-on-surface font-bold select-none gap-4">
                            <span className="">Apakah ada jaminan garansi atau revisi?</span>
                            <span className="w-8 h-8 rounded-full bg-surface-container border-[1.5px] border-[#111111] flex items-center justify-center text-sm shrink-0 group-open:rotate-180 group-open:bg-[#FFD93D] transition-all">▼</span>
                        </summary>
                        <p className="mt-4 pt-3 border-t-[1.5px] border-[#111111]/15 font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                            Pasti ada! Setiap paket sudah mencakup jaminan revisi sampai desainnya bener-bener mantap dan pas di hati lo. Kita gak bakal lepas proyek sebelum lo puas dengan hasil visual yang diserahkan.
                        </p>
                    </details>
                </div>
            </section>
        </>
    );
};

export default Faq;
