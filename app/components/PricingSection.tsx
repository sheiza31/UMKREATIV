const PricingSection = () => {
    return (
        <>
            <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24" id="harga">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border-[2px] border-[#111111] bg-primary-container text-on-surface font-label-sm text-xs uppercase font-extrabold shadow-[2px_2px_0px_#111111] mb-3">
                        <span className="">💰 Investasi Terukur</span>
                    </div>
                    <h2 className="font-headline-lg text-2xl sm:text-4xl text-on-surface font-extrabold">
                        Paket Investasi Usaha
                    </h2>
                    <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-2">
                        Sekali investasi, dampaknya bertahun-tahun. Pilih paket yang paling cocok dengan tahap ekspansi bisnis lo.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {/* Tier 1: Starter */}
                    <div className="bg-white rounded-2xl border-[2.5px] border-[#111111] shadow-[5px_5px_0px_#111111] p-6 sm:p-8 flex flex-col justify-between hover:-translate-y-1 transition-all">
                        <div>
                            <div className="inline-block px-3 py-1 rounded-lg bg-surface-container border-[1.5px] border-[#111111] font-label-sm text-xs uppercase font-extrabold text-on-surface mb-4">
                                Paket Starter
                            </div>
                            <h3 className="font-headline-sm text-xl text-on-surface font-extrabold">Untuk Usaha Pemula</h3>
                            <p className="font-body-sm text-sm text-on-surface-variant mt-1 leading-relaxed">Cocok buat usaha yang baru mulai merintis dan butuh fondasi visual awal.</p>
                            <div className="mt-6 mb-6">
                                <span className="font-body-sm text-xs text-on-surface-variant uppercase font-bold">Investasi:</span>
                                <div className="flex items-baseline gap-1 mt-1">
                                    <span className="font-headline-xl text-3xl sm:text-4xl text-on-surface font-extrabold">Rp 1.499.000</span>
                                </div>
                                <span className="font-body-sm text-xs text-[#006b5f] font-bold mt-1 inline-block">✓ Bayar sekali tanpa langganan</span>
                            </div>
                            <div className="space-y-3 pt-4 border-t-[1.5px] border-[#111111]/15 font-body-sm text-sm">
                                <div className="flex items-start gap-2.5">
                                    <span className="w-5 h-5 rounded-full bg-[#1FB5A3] text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</span>
                                    <span className="">1 Konsep Logo Utama + Favicon</span>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <span className="w-5 h-5 rounded-full bg-[#1FB5A3] text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</span>
                                    <span className="">Palet Warna &amp; Panduan Font</span>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <span className="w-5 h-5 rounded-full bg-[#1FB5A3] text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</span>
                                    <span className="">3 Template Feed Instagram (Canva editable)</span>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <span className="w-5 h-5 rounded-full bg-[#1FB5A3] text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</span>
                                    <span className="">1 Desain Stiker Label Kemasan</span>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <span className="w-5 h-5 rounded-full bg-[#1FB5A3] text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</span>
                                    <span className="">Garansi 2x Kuota Revisi</span>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <a className="w-full inline-flex items-center justify-center py-3.5 px-4 rounded-xl border-[2.5px] border-[#111111] bg-surface-container-lowest font-label-md text-sm uppercase tracking-wider shadow-[3px_3px_0px_#111111] hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#111111] transition-all font-extrabold" href="#kontak">
                                Pilih Paket Starter
                            </a>
                        </div>
                    </div>
                    {/* Tier 2: Tumbuh (Featured) */}
                    <div className="relative bg-[#fffbe6] rounded-2xl border-[3px] border-[#111111] shadow-[7px_7px_0px_#111111] p-6 sm:p-8 flex flex-col justify-between -translate-y-2 lg:-translate-y-4">
                        <div className="absolute -top-4 right-6 bg-[#FF6B9D] text-white px-3.5 py-1 rounded-full border-[2px] border-[#111111] font-label-sm text-xs font-extrabold uppercase shadow-[3px_3px_0px_#111111] rotate-2">
                            Paling Laris 🔥
                        </div>
                        <div>
                            <div className="inline-block px-3 py-1 rounded-lg bg-[#FFD93D] border-[1.5px] border-[#111111] font-label-sm text-xs uppercase font-extrabold text-[#111111] mb-4">
                                Paket Tumbuh
                            </div>
                            <h3 className="font-headline-sm text-xl text-on-surface font-extrabold">Komplit Untuk Ekspansi</h3>
                            <p className="font-body-sm text-sm text-on-surface-variant mt-1 leading-relaxed">Solusi komplit buat usaha yang mau memperluas pasar dan naikin omzet signifikan.</p>
                            <div className="mt-6 mb-6">
                                <span className="font-body-sm text-xs text-on-surface-variant uppercase font-bold">Investasi:</span>
                                <div className="flex items-baseline gap-1 mt-1">
                                    <span className="font-headline-xl text-3xl sm:text-4xl text-primary font-extrabold">Rp 3.899.000</span>
                                </div>
                                <span className="font-body-sm text-xs text-[#006b5f] font-bold mt-1 inline-block">✓ Best Value • Hemat Rp 1,5 Jt</span>
                            </div>
                            <div className="space-y-3 pt-4 border-t-[2px] border-[#111111]/20 font-body-sm text-sm">
                                <div className="flex items-start gap-2.5">
                                    <span className="w-5 h-5 rounded-full bg-[#FF7A1A] text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</span>
                                    <span className="font-bold text-on-surface">Full Brand Identity (Master AI/EPS)</span>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <span className="w-5 h-5 rounded-full bg-[#FF7A1A] text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</span>
                                    <span className="">12 Konten Medsos Siap Upload (Copywriting + Visual)</span>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <span className="w-5 h-5 rounded-full bg-[#FF7A1A] text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</span>
                                    <span className="">Foto Studio 10 Produk Terlaris</span>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <span className="w-5 h-5 rounded-full bg-[#FF7A1A] text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</span>
                                    <span className="">Desain Kemasan Lengkap (Pouch / Box Siap Cetak)</span>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <span className="w-5 h-5 rounded-full bg-[#FF7A1A] text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</span>
                                    <span className="">Banner Promosi Shopee &amp; Tokopedia</span>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <span className="w-5 h-5 rounded-full bg-[#FF7A1A] text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</span>
                                    <span className="font-bold">Prioritas Revisi + Support 30 Hari</span>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <a className="w-full inline-flex items-center justify-center py-3.5 px-4 rounded-xl border-[2.5px] border-[#111111] bg-primary-container text-on-surface font-label-lg text-sm sm:text-base uppercase tracking-wider shadow-[4px_4px_0px_#111111] hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#111111] transition-all font-extrabold" href="#kontak">
                                Gaspol Paket Tumbuh 🚀
                            </a>
                        </div>
                    </div>
                    {/* Tier 3: Juara */}
                    <div className="bg-white rounded-2xl border-[2.5px] border-[#111111] shadow-[5px_5px_0px_#111111] p-6 sm:p-8 flex flex-col justify-between hover:-translate-y-1 transition-all">
                        <div>
                            <div className="inline-block px-3 py-1 rounded-lg bg-[#76f8e3] border-[1.5px] border-[#111111] font-label-sm text-xs uppercase font-extrabold text-[#00201c] mb-4">
                                Paket Juara
                            </div>
                            <h3 className="font-headline-sm text-xl text-on-surface font-extrabold">Kuasai Pasar Nasional</h3>
                            <p className="font-body-sm text-sm text-on-surface-variant mt-1 leading-relaxed">Buat brand yang mau bersaing langsung dengan brand ritel skala mall dan modern market.</p>
                            <div className="mt-6 mb-6">
                                <span className="font-body-sm text-xs text-on-surface-variant uppercase font-bold">Investasi:</span>
                                <div className="flex items-baseline gap-1 mt-1">
                                    <span className="font-headline-xl text-3xl sm:text-4xl text-on-surface font-extrabold">Rp 7.499.000</span>
                                </div>
                                <span className="font-body-sm text-xs text-[#006b5f] font-bold mt-1 inline-block">✓ Ekosistem Digital Total</span>
                            </div>
                            <div className="space-y-3 pt-4 border-t-[1.5px] border-[#111111]/15 font-body-sm text-sm">
                                <div className="flex items-start gap-2.5">
                                    <span className="w-5 h-5 rounded-full bg-[#1FB5A3] text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</span>
                                    <span className="">Seluruh fitur Paket Tumbuh</span>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <span className="w-5 h-5 rounded-full bg-[#1FB5A3] text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</span>
                                    <span className="">Website Katalog / Landing Page Responsif</span>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <span className="w-5 h-5 rounded-full bg-[#1FB5A3] text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</span>
                                    <span className="">3 Video Cinematic Reels / TikTok (Script to Edit)</span>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <span className="w-5 h-5 rounded-full bg-[#1FB5A3] text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</span>
                                    <span className="">Dekorasi &amp; Optimalisasi Toko Marketplace</span>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <span className="w-5 h-5 rounded-full bg-[#1FB5A3] text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</span>
                                    <span className="">Sesi Konsultasi Brand Strategy 1-on-1 (2 Jam)</span>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <a className="w-full inline-flex items-center justify-center py-3.5 px-4 rounded-xl border-[2.5px] border-[#111111] bg-surface-container-lowest font-label-md text-sm uppercase tracking-wider shadow-[3px_3px_0px_#111111] hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#111111] transition-all font-extrabold" href="#kontak">
                                Pilih Paket Juara
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PricingSection;
