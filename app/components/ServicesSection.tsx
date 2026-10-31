const ServicesSection = () => {
    return (
        <>
            <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24" id="layanan">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border-[2px] border-[#111111] bg-secondary-container text-on-secondary-fixed font-label-sm text-xs uppercase font-extrabold shadow-[2px_2px_0px_#111111] mb-3">
                            <span className="">🛠️ Katalis Pertumbuhan Bisnis</span>
                        </div>
                        <h2 className="font-headline-lg text-2xl sm:text-4xl text-on-surface font-extrabold leading-tight">
                            Layanan Serba Ada,<br className="hidden sm:inline" />
                            <span className="bg-[#1bb3a1] text-white px-2.5 py-0.5 rounded-lg border-[2px] border-[#111111] inline-block shadow-[3px_3px_0px_#111111] mt-1">
                                Solusi Usaha Rame
                            </span>
                        </h2>
                    </div>
                    <p className="font-body-md text-sm sm:text-base text-on-surface-variant max-w-md">
                        Pilih per paket atau borongan sesuai fase bisnis lo. Gak ada biaya tersembunyi, semua transparan dan sat-set.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <div className="group bg-[#e6faf8] rounded-2xl border-[2.5px] border-[#111111] p-6 shadow-[5px_5px_0px_#111111] hover:-translate-y-1 hover:shadow-[7px_7px_0px_#111111] transition-all flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-[#1FB5A3] border-[2px] border-[#111111] shadow-[3px_3px_0px_#111111] flex items-center justify-center text-white mb-4">
                                <span className="material-symbols-outlined text-2xl">draw</span>
                            </div>
                            <h3 className="font-headline-sm text-xl text-on-surface font-extrabold mb-2">Branding &amp; Logo</h3>
                            <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                                Logo memorable, buku panduan warna, font, dan identitas visual yang bikin usaha lo gampang diingat dan gak kalah sama brand korporat.
                            </p>
                        </div>
                        <div className="mt-6 pt-4 border-t-[1.5px] border-[#111111]/20 flex items-center justify-between">
                            <span className="font-label-sm text-xs text-[#006b5f] font-extrabold uppercase bg-white px-2.5 py-1 rounded-full border border-[#111111]">Mulai Rp 1,5 Jt</span>
                            <a className="font-label-md text-sm font-extrabold text-on-surface group-hover:text-primary transition-colors flex items-center gap-1" href="#kontak">
                                Selengkapnya <span className="">→</span>
                            </a>
                        </div>
                    </div>
                    <div className="group bg-[#fff2e8] rounded-2xl border-[2.5px] border-[#111111] p-6 shadow-[5px_5px_0px_#111111] hover:-translate-y-1 hover:shadow-[7px_7px_0px_#111111] transition-all flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-primary-container border-[2px] border-[#111111] shadow-[3px_3px_0px_#111111] flex items-center justify-center text-[#111111] mb-4">
                                <span className="material-symbols-outlined text-2xl">campaign</span>
                            </div>
                            <h3 className="font-headline-sm text-xl text-on-surface font-extrabold mb-2">Social Media Mgmt</h3>
                            <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                                Riset tren TikTok &amp; Reels, jadwal posting rapi, copy nendang yang bikin followers betah dan terkonversi jadi pembeli loyal.
                            </p>
                        </div>
                        <div className="mt-6 pt-4 border-t-[1.5px] border-[#111111]/20 flex items-center justify-between">
                            <span className="font-label-sm text-xs text-[#5e2700] font-extrabold uppercase bg-white px-2.5 py-1 rounded-full border border-[#111111]">12 Konten/Bln</span>
                            <a className="font-label-md text-sm font-extrabold text-on-surface group-hover:text-primary transition-colors flex items-center gap-1" href="#kontak">
                                Selengkapnya <span className="">→</span>
                            </a>
                        </div>
                    </div>
                    <div className="group bg-[#ffeef4] rounded-2xl border-[2.5px] border-[#111111] p-6 shadow-[5px_5px_0px_#111111] hover:-translate-y-1 hover:shadow-[7px_7px_0px_#111111] transition-all flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-[#FF6B9D] border-[2px] border-[#111111] shadow-[3px_3px_0px_#111111] flex items-center justify-center text-white mb-4">
                                <span className="material-symbols-outlined text-2xl">photo_camera</span>
                            </div>
                            <h3 className="font-headline-sm text-xl text-on-surface font-extrabold mb-2">Foto &amp; Video Produk</h3>
                            <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                                Jepretan studio estetik dan video cinematic tajam yang bikin makanan, fashion, atau barang lo auto-ngiler saat dilihat di layar hape.
                            </p>
                        </div>
                        <div className="mt-6 pt-4 border-t-[1.5px] border-[#111111]/20 flex items-center justify-between">
                            <span className="font-label-sm text-xs text-[#93000a] font-extrabold uppercase bg-white px-2.5 py-1 rounded-full border border-[#111111]">Studio Shot</span>
                            <a className="font-label-md text-sm font-extrabold text-on-surface group-hover:text-primary transition-colors flex items-center gap-1" href="#kontak">
                                Selengkapnya <span className="">→</span>
                            </a>
                        </div>
                    </div>
                    <div className="group bg-[#fffbe6] rounded-2xl border-[2.5px] border-[#111111] p-6 shadow-[5px_5px_0px_#111111] hover:-translate-y-1 hover:shadow-[7px_7px_0px_#111111] transition-all flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-[#FFD93D] border-[2px] border-[#111111] shadow-[3px_3px_0px_#111111] flex items-center justify-center text-[#111111] mb-4">
                                <span className="material-symbols-outlined text-2xl">inventory_2</span>
                            </div>
                            <h3 className="font-headline-sm text-xl text-on-surface font-extrabold mb-2">Desain Kemasan</h3>
                            <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                                Kemasan standing pouch, box, kaleng, atau sleeve unik yang stand-out di etalase toko dan unboxing-worthy untuk story customer.
                            </p>
                        </div>
                        <div className="mt-6 pt-4 border-t-[1.5px] border-[#111111]/20 flex items-center justify-between">
                            <span className="font-label-sm text-xs text-[#705d00] font-extrabold uppercase bg-white px-2.5 py-1 rounded-full border border-[#111111]">Siap Cetak PDF</span>
                            <a className="font-label-md text-sm font-extrabold text-on-surface group-hover:text-primary transition-colors flex items-center gap-1" href="#kontak">
                                Selengkapnya <span className="">→</span>
                            </a>
                        </div>
                    </div>
                    <div className="group bg-[#f3edff] rounded-2xl border-[2.5px] border-[#111111] p-6 shadow-[5px_5px_0px_#111111] hover:-translate-y-1 hover:shadow-[7px_7px_0px_#111111] transition-all flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-[#8c52ff] border-[2px] border-[#111111] shadow-[3px_3px_0px_#111111] flex items-center justify-center text-white mb-4">
                                <span className="material-symbols-outlined text-2xl">language</span>
                            </div>
                            <h3 className="font-headline-sm text-xl text-on-surface font-extrabold mb-2">Website &amp; Toko Online</h3>
                            <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                                Website sat-set anti-ribet, katalog produk rapi diakses via smartphone, terintegrasi tombol direct WhatsApp dan checkout mulus.
                            </p>
                        </div>
                        <div className="mt-6 pt-4 border-t-[1.5px] border-[#111111]/20 flex items-center justify-between">
                            <span className="font-label-sm text-xs text-[#491b9c] font-extrabold uppercase bg-white px-2.5 py-1 rounded-full border border-[#111111]">Mobile Optimized</span>
                            <a className="font-label-md text-sm font-extrabold text-on-surface group-hover:text-primary transition-colors flex items-center gap-1" href="#kontak">
                                Selengkapnya <span className="">→</span>
                            </a>
                        </div>
                    </div>
                    <div className="group bg-[#eefae6] rounded-2xl border-[2.5px] border-[#111111] p-6 shadow-[5px_5px_0px_#111111] hover:-translate-y-1 hover:shadow-[7px_7px_0px_#111111] transition-all flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-[#52b788] border-[2px] border-[#111111] shadow-[3px_3px_0px_#111111] flex items-center justify-center text-white mb-4">
                                <span className="material-symbols-outlined text-2xl">storefront</span>
                            </div>
                            <h3 className="font-headline-sm text-xl text-on-surface font-extrabold mb-2">Konten Marketplace</h3>
                            <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                                Banner Shopee/Tokopedia, infografis detail keunggulan produk, dan copywriting yang naikin rasio konversi klik menjadi pembelian nyata.
                            </p>
                        </div>
                        <div className="mt-6 pt-4 border-t-[1.5px] border-[#111111]/20 flex items-center justify-between">
                            <span className="font-label-sm text-xs text-[#1b5e20] font-extrabold uppercase bg-white px-2.5 py-1 rounded-full border border-[#111111]">Naikin Checkout</span>
                            <a className="font-label-md text-sm font-extrabold text-on-surface group-hover:text-primary transition-colors flex items-center gap-1" href="#kontak">
                                Selengkapnya <span className="">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesSection;
