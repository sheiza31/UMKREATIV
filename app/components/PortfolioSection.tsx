import Image from "next/image";

const PortfolioSection = () => {
    return (
        <>
            <section className="w-full bg-surface-container py-16 md:py-24 border-y-[2.5px] border-[#111111]" id="portofolio">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border-[2px] border-[#111111] bg-[#FF6B9D] text-white font-label-sm text-xs uppercase font-extrabold shadow-[2px_2px_0px_#111111] mb-3">
                            <span className="">🔥 Portofolio UMKM Jawara</span>
                        </div>
                        <h2 className="font-headline-lg text-2xl sm:text-4xl text-on-surface font-extrabold">
                            Hasil Nyata Karya Tetangga, <br />
                            Omzet Naik Bukan Sekadar Janji
                        </h2>
                        <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-2">
                            Lihat transformasi visual brand lokal Indonesia dari biasa aja jadi pusat perhatian.
                        </p>
                    </div>  
                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                        {/* Item 1 */}
                        <div className="md:col-span-7 bg-white rounded-2xl border-[2.5px] border-[#111111] shadow-[5px_5px_0px_#111111] overflow-hidden flex flex-col justify-between hover:-translate-y-1 transition-all">
                            <div className="h-64 sm:h-72 w-full bg-[#111111]/5 relative overflow-hidden flex items-center justify-center p-3">
                                <Image
                                    alt="Kopi Sabang artisanal coffee branding"
                                    className="w-full h-full object-cover rounded-xl border-[2px] border-[#111111]"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpzWWkA-GxYEOw8MFuos9pZd_7rk_zkHjHjVcTyvTE5zqle5vQP9LfU4QD682LUeEsyfnb46sxgyfFcTRy1VgHHhmBQCJWzre6Rh8ly7idqX4sl6cCIXQ4R_wntVhsabVenuSDr87MHXsQPDboUDo3gsMg0KJ7zqXyVEAPr7Oh1jc8ZY9k4hWadlk6_rozp2P0Puc7-2IiT0PTIUaddt3yNhONnnJMTyXGd7Ze0uw"
                                    width={600}
                                    height={400}
                                    unoptimized
                                />
                                <div className="absolute top-4 left-4 bg-[#FFD93D] border-[2px] border-[#111111] px-3 py-1 rounded-full font-label-sm text-xs font-extrabold uppercase shadow-[2px_2px_0px_#111111]">
                                    Branding + Foto
                                </div>
                                <div className="absolute bottom-4 right-4 bg-[#111111] text-white border-[1.5px] border-white px-2.5 py-0.5 rounded font-label-sm text-xs font-mono font-bold">
                                    Omzet +180% 📈
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-headline-sm text-xl text-on-surface font-extrabold mb-2">Kopi Sabang - Rebranding Kedai Kopi Lokal</h3>
                                <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                                    Dari kedai rumahan menjadi franchise berkarakter dengan 4 cabang baru. Sentuhan logo kontemporer, kemasan biji kopi artisan, dan foto feed Instagram yang estetik.
                                </p>
                            </div>
                        </div>
                        {/* Item 2 */}
                        <div className="md:col-span-5 bg-white rounded-2xl border-[2.5px] border-[#111111] shadow-[5px_5px_0px_#111111] overflow-hidden flex flex-col justify-between hover:-translate-y-1 transition-all">
                            <div className="h-64 sm:h-72 w-full bg-[#111111]/5 relative overflow-hidden flex items-center justify-center p-3">
                                <Image
                                    alt="Sambal Bu Dewi Packaging"
                                    className="w-full h-full object-cover rounded-xl border-[2px] border-[#111111]"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnZAxOzDOgWS7g0ytPJTl70Ue9M3e3FJE5Wlub77IRWtZYCh0KCgZtzz_pp1Dbiu0nIy9s0fIq2DAUM-cF8GCqfjtffYUdULqfUzND0llX0BlZj8uAGJPa0bFKjZHuB3ZD7xxuy_6pFmxzVV6wISDBPKeowKu9t3oxUmad0mPhxLdv6fRCoCkWCbdES9Y7ULxF8tLP6-K5YHJAVtOEh7rSdg4D_k-OBW_srZgoUsw"
                                    width={600}
                                    height={400}
                                    unoptimized
                                />
                                <div className="absolute top-4 left-4 bg-[#FF6B9D] text-white border-[2px] border-[#111111] px-3 py-1 rounded-full font-label-sm text-xs font-extrabold uppercase shadow-[2px_2px_0px_#111111]">
                                    Packaging + Social
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-headline-sm text-xl text-on-surface font-extrabold mb-2">Dapur Bu Dewi - Sambal Roa &amp; Cumi Viral</h3>
                                <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                                    Redesain label toples anti-minyak plus strategi video TikTok short-form yang menghasilkan 5.000 toples terjual dalam minggu pertama peluncuran.
                                </p>
                            </div>
                        </div>
                        {/* Item 3 */}
                        <div className="md:col-span-5 bg-white rounded-2xl border-[2.5px] border-[#111111] shadow-[5px_5px_0px_#111111] overflow-hidden flex flex-col justify-between hover:-translate-y-1 transition-all">
                            <div className="h-64 sm:h-72 w-full bg-[#111111]/5 relative overflow-hidden flex items-center justify-center p-3">
                                <Image
                                    alt="Srikandi Modest fashion lookbook"
                                    className="w-full h-full object-cover rounded-xl border-[2px] border-[#111111]"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKxfCMW8OKAU1fMdvpGnKfrJksx8p-SEJ5KZ4XiiFkSwYoyupmHjUIHF3D9317qhgPbLKcvjBr7NrR6UgtpEFdXwOBDauzIYdn0Snn50E2Y8xBUFtYRfzk6rtwjXhvf2PDzJPMBa9GjxT-NkO2C_lc0mCj8h55-ebWwQ10houCRg_BeVhqRuV5GP9cSTe_QAROZEjG4014i2y6GkA9tvU3smYxwzeYl1wZCCb_kkQ"
                                    width={600}
                                    height={400}
                                    unoptimized
                                />
                                <div className="absolute top-4 left-4 bg-[#76f8e3] text-[#00201c] border-[2px] border-[#111111] px-3 py-1 rounded-full font-label-sm text-xs font-extrabold uppercase shadow-[2px_2px_0px_#111111]">
                                    Lookbook + Web
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-headline-sm text-xl text-on-surface font-extrabold mb-2">Srikandi Modest - Fashion Muslimah Lokal</h3>
                                <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                                    Pengembangan website mobile-first katalog busana terintegrasi payment gateway serta sesi photoshoot model lookbook bergaya editorial.
                                </p>
                            </div>
                        </div>
                        {/* Item 4 */}
                        <div className="md:col-span-7 bg-white rounded-2xl border-[2.5px] border-[#111111] shadow-[5px_5px_0px_#111111] overflow-hidden flex flex-col justify-between hover:-translate-y-1 transition-all">
                            <div className="h-64 sm:h-72 w-full bg-[#111111]/5 relative overflow-hidden flex items-center justify-center p-3">
                                <Image
                                    alt="Keripik Singkong Mas Gareng packaging"
                                    className="w-full h-full object-cover rounded-xl border-[2px] border-[#111111]"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbGxxffZbSjptLLx4V3HOVRjLCanVLLbaeaRINuSc5PMOUGFiKZZ6WZlOgkPsNCvdkl5-bzRkR2Wm4_l8SAD91VW2cCfV7fGXM8KK-HLau-61bcHIcXxydzE7U1PUPoiczhjD2FBfGoktTx9ZmR9ci0ToE5xtotnpbRRwLvXqUR_kvdy-N8-PgadpRHNd2p95QrrS1ojhSjgy70_IP3Wb6Ie1zAa50mNX8gd-GqSs"
                                    width={600}
                                    height={400}
                                    unoptimized
                                />
                                <div className="absolute top-4 left-4 bg-primary-container text-on-surface border-[2px] border-[#111111] px-3 py-1 rounded-full font-label-sm text-xs font-extrabold uppercase shadow-[2px_2px_0px_#111111]">
                                    Packaging + Ads
                                </div>
                                <div className="absolute bottom-4 right-4 bg-[#111111] text-white border-[1.5px] border-white px-2.5 py-0.5 rounded font-label-sm text-xs font-mono font-bold">
                                    Masuk 30 Supermarket 🛒
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-headline-sm text-xl text-on-surface font-extrabold mb-2">Keripik Singkong Renyah Mas Gareng</h3>
                                <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                                    Dari keripik kiloan pasar tradisonal kini bertransformasi menjadi snack modern berstandar retail nasional dengan kemasan alumunium foil tahan 12 bulan.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Metric Numbers Banner */}
                    <div className="mt-12 bg-white rounded-2xl border-[2.5px] border-[#111111] shadow-[5px_5px_0px_#111111] p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div className="flex flex-col items-center border-b md:border-b-0 md:border-r border-[#111111]/15 pb-6 md:pb-0">
                            <span className="font-headline-xl text-4xl sm:text-5xl text-[#FF7A1A] font-extrabold">+320%</span>
                            <span className="font-label-md text-sm text-on-surface font-extrabold uppercase mt-2">Rata-Rata Kenaikan Omzet</span>
                            <span className="font-body-sm text-xs text-on-surface-variant mt-1">Setelah 3 bulan rebranding visual</span>
                        </div>
                        <div className="flex flex-col items-center border-b md:border-b-0 md:border-r border-[#111111]/15 pb-6 md:pb-0">
                            <span className="font-headline-xl text-4xl sm:text-5xl text-[#1FB5A3] font-extrabold">98%</span>
                            <span className="font-label-md text-sm text-on-surface font-extrabold uppercase mt-2">Klien Puas &amp; Repeat Order</span>
                            <span className="font-body-sm text-xs text-on-surface-variant mt-1">Retensi kemitraan UMKM jangka panjang</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="font-headline-xl text-4xl sm:text-5xl text-[#FF6B9D] font-extrabold">120+</span>
                            <span className="font-label-md text-sm text-on-surface font-extrabold uppercase mt-2">Brand Lokal Diluncurkan</span>
                            <span className="font-body-sm text-xs text-on-surface-variant mt-1">Dari kuliner, craft, hingga fashion</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PortfolioSection;
