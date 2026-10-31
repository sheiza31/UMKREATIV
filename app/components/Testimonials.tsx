const Testimonials = () => {
    return (
        <>
            <section className="w-full bg-[#FFF8E7] py-16 md:py-24 border-y-[2.5px] border-[#111111]">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border-[2px] border-[#111111] bg-secondary-container text-on-secondary-fixed font-label-sm text-xs uppercase font-extrabold shadow-[2px_2px_0px_#111111] mb-3">
                            <span className="">⭐ Suara Nyata Mitra</span>
                        </div>
                        <h2 className="font-headline-lg text-2xl sm:text-4xl text-on-surface font-extrabold">
                            Ulasan Jujur Pemilik Usaha
                        </h2>
                        <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-2">
                            Gak perlu kata manis, biar testimoni nyata dari sesama pejuang UMKM yang bicara.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Testi 1 */}
                        <div className="relative bg-white rounded-2xl border-[2.5px] border-[#111111] p-6 shadow-[5px_5px_0px_#111111] hover:-translate-y-1 transition-all flex flex-col justify-between">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#FFD93D] border-[1.5px] border-[#111111] rotate-2 shadow-sm pointer-events-none"></div>
                            <div>
                                <div className="flex items-center gap-1 text-[#FF7A1A] mb-4 pt-2">
                                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                </div>
                                <p className="font-body-md text-sm sm:text-base text-on-surface italic mb-6 leading-relaxed">
                                    &ldquo;Dulu kemasan polosan cuma pake stiker print kertas murah di kios fotokopi. Begitu dipoles UMKREATIV, harga jual bisa naik 40% dan produk kopi botol kami langsung tembus masuk cafe tier-1 di Bandung!&rdquo;
                                </p>
                            </div>
                            <div className="flex items-center gap-3 pt-4 border-t-[1.5px] border-[#111111]/15">
                                <div className="w-10 h-10 rounded-full bg-[#FF7A1A] border-[2px] border-[#111111] flex items-center justify-center font-extrabold text-white text-sm shadow-[2px_2px_0px_#111111]">
                                    PH
                                </div>
                                <div>
                                    <h4 className="font-headline-sm text-sm font-extrabold text-on-surface leading-tight">Pak Hendra</h4>
                                    <p className="font-body-sm text-xs text-on-surface-variant">Owner • Kopi Sabang</p>
                                </div>
                            </div>
                        </div>
                        {/* Testi 2 */}
                        <div className="relative bg-white rounded-2xl border-[2.5px] border-[#111111] p-6 shadow-[5px_5px_0px_#111111] hover:-translate-y-1 transition-all flex flex-col justify-between">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#FF6B9D] border-[1.5px] border-[#111111] -rotate-1 shadow-sm pointer-events-none"></div>
                            <div>
                                <div className="flex items-center gap-1 text-[#FF7A1A] mb-4 pt-2">
                                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                </div>
                                <p className="font-body-md text-sm sm:text-base text-on-surface italic mb-6 leading-relaxed">
                                    &ldquo;Timnya beneran kayak tetangga yang pinter desain! Gak kaku, diajak revisi enak banget, dan konten video TikTok buatan mereka langsung FYP dapat 1,2 juta views. DM orderan membludak sampai overload!&rdquo;
                                </p>
                            </div>
                            <div className="flex items-center gap-3 pt-4 border-t-[1.5px] border-[#111111]/15">
                                <div className="w-10 h-10 rounded-full bg-[#1FB5A3] border-[2px] border-[#111111] flex items-center justify-center font-extrabold text-white text-sm shadow-[2px_2px_0px_#111111]">
                                    MR
                                </div>
                                <div>
                                    <h4 className="font-headline-sm text-sm font-extrabold text-on-surface leading-tight">Mbak Rania</h4>
                                    <p className="font-body-sm text-xs text-on-surface-variant">Founder • SkinNara Herb</p>
                                </div>
                            </div>
                        </div>
                        {/* Testi 3 */}
                        <div className="relative bg-white rounded-2xl border-[2.5px] border-[#111111] p-6 shadow-[5px_5px_0px_#111111] hover:-translate-y-1 transition-all flex flex-col justify-between">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#76f8e3] border-[1.5px] border-[#111111] rotate-2 shadow-sm pointer-events-none"></div>
                            <div>
                                <div className="flex items-center gap-1 text-[#FF7A1A] mb-4 pt-2">
                                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                </div>
                                <p className="font-body-md text-sm sm:text-base text-on-surface italic mb-6 leading-relaxed">
                                    &ldquo;Website landing page-nya enteng banget diakses dari HP. Calon pembeli yang tadinya ragu-ragu tanya WA langsung bayar lunas karena portofolio produknya keliatan sangat profesional dan meyakinkan.&rdquo;
                                </p>
                            </div>
                            <div className="flex items-center gap-3 pt-4 border-t-[1.5px] border-[#111111]/15">
                                <div className="w-10 h-10 rounded-full bg-[#FFD93D] border-[2px] border-[#111111] flex items-center justify-center font-extrabold text-[#111111] text-sm shadow-[2px_2px_0px_#111111]">
                                    MB
                                </div>
                                <div>
                                    <h4 className="font-headline-sm text-sm font-extrabold text-on-surface leading-tight">Mas Bayu</h4>
                                    <p className="font-body-sm text-xs text-on-surface-variant">Owner • Gudang Kaos Polos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonials;
