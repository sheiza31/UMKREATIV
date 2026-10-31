const CaraKerja = () => {
    return (
        <>
            <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24" id="cara-kerja">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border-[2px] border-[#111111] bg-[#76f8e3] text-[#00201c] font-label-sm text-xs uppercase font-extrabold shadow-[2px_2px_0px_#111111] mb-3">
                        <span className="">⚙️ Alur Kerjasama</span>
                    </div>
                    <h2 className="font-headline-lg text-2xl sm:text-4xl text-on-surface font-extrabold">
                        Cara Kerja Santuy Tapi Pasti!
                    </h2>
                    <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-2">
                        Gak pake birokrasi berbelit-belit. Kita gerak sat-set biar lo bisa fokus jualan dan ngitung omzet.
                    </p>
                </div>
                {/* 4 Step Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Step 1 */}
                    <div className="bg-white rounded-2xl border-[2.5px] border-[#111111] p-6 shadow-[4px_4px_0px_#111111] flex flex-col justify-between relative hover:-translate-y-1 transition-all">
                        <div className="absolute -top-3.5 -left-3 bg-[#FFD93D] border-[2px] border-[#111111] px-3 py-0.5 rounded-full font-headline-sm text-xs font-extrabold shadow-[2px_2px_0px_#111111]">
                            Langkah 01
                        </div>
                        <div className="pt-3">
                            <div className="text-4xl mb-3">☕</div>
                            <h3 className="font-headline-sm text-lg text-on-surface font-extrabold mb-2">Kenalan &amp; Ngopi</h3>
                            <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                                Ngobrol santai lewat WhatsApp atau Google Meet. Bahas uneg-uneg bisnis, target pasar yang dibidik, dan impian brand lo ke depan.
                            </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-[#111111]/10">
                            <span className="inline-block bg-surface-container border border-[#111111] rounded-lg px-2.5 py-1 text-xs font-bold text-on-surface-variant">
                                ⏱️ Estimasi: 1 Hari
                            </span>
                        </div>
                    </div>
                    {/* Step 2 */}
                    <div className="bg-white rounded-2xl border-[2.5px] border-[#111111] p-6 shadow-[4px_4px_0px_#111111] flex flex-col justify-between relative hover:-translate-y-1 transition-all">
                        <div className="absolute -top-3.5 -left-3 bg-[#FF7A1A] text-white border-[2px] border-[#111111] px-3 py-0.5 rounded-full font-headline-sm text-xs font-extrabold shadow-[2px_2px_0px_#111111]">
                            Langkah 02
                        </div>
                        <div className="pt-3">
                            <div className="text-4xl mb-3">🎯</div>
                            <h3 className="font-headline-sm text-lg text-on-surface font-extrabold mb-2">Racik Strategi</h3>
                            <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                                Kita susun moodboard konsep visual, color palette, dan formula kreatif paling cocok yang fit dengan budget kantong UMKM.
                            </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-[#111111]/10">
                            <span className="inline-block bg-surface-container border border-[#111111] rounded-lg px-2.5 py-1 text-xs font-bold text-on-surface-variant">
                                ⏱️ Estimasi: 2 Hari
                            </span>
                        </div>
                    </div>
                    {/* Step 3 */}
                    <div className="bg-white rounded-2xl border-[2.5px] border-[#111111] p-6 shadow-[4px_4px_0px_#111111] flex flex-col justify-between relative hover:-translate-y-1 transition-all">
                        <div className="absolute -top-3.5 -left-3 bg-[#1FB5A3] text-white border-[2px] border-[#111111] px-3 py-0.5 rounded-full font-headline-sm text-xs font-extrabold shadow-[2px_2px_0px_#111111]">
                            Langkah 03
                        </div>
                        <div className="pt-3">
                            <div className="text-4xl mb-3">🎨</div>
                            <h3 className="font-headline-sm text-lg text-on-surface font-extrabold mb-2">Eksekusi Sat-Set</h3>
                            <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                                Tim desainer &amp; kreator UMKREATIV langsung gaspol produksi visual terbaik. Lo bakal dapat preview berkala untuk feedback cepat.
                            </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-[#111111]/10">
                            <span className="inline-block bg-surface-container border border-[#111111] rounded-lg px-2.5 py-1 text-xs font-bold text-on-surface-variant">
                                ⏱️ Estimasi: 3-5 Hari
                            </span>
                        </div>
                    </div>
                    {/* Step 4 */}
                    <div className="bg-white rounded-2xl border-[2.5px] border-[#111111] p-6 shadow-[4px_4px_0px_#111111] flex flex-col justify-between relative hover:-translate-y-1 transition-all">
                        <div className="absolute -top-3.5 -left-3 bg-[#FF6B9D] text-white border-[2px] border-[#111111] px-3 py-0.5 rounded-full font-headline-sm text-xs font-extrabold shadow-[2px_2px_0px_#111111]">
                            Langkah 04
                        </div>
                        <div className="pt-3">
                            <div className="text-4xl mb-3">🚀</div>
                            <h3 className="font-headline-sm text-lg text-on-surface font-extrabold mb-2">Launching &amp; Cuan!</h3>
                            <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                                File master siap pakai (AI, PSD, PDF siap cetak, SVG) diserahterimakan penuh. Brand lo langsung siap bikin heboh medsos dan pasar!
                            </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-[#111111]/10">
                            <span className="inline-block bg-[#76f8e3] text-[#00201c] border border-[#111111] rounded-lg px-2.5 py-1 text-xs font-extrabold">
                                🎉 Siap Gaspol!
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CaraKerja;
