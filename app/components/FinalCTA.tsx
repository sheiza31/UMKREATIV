import Image from "next/image";

const FinalCta = () => {
    return (
        <>
            <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20" id="kontak">
                <div className="relative w-full rounded-3xl bg-primary-container border-[3.5px] border-[#111111] shadow-[8px_8px_0px_#111111] p-8 md:p-14 overflow-hidden">
                    <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#FFD93D] border-[3px] border-[#111111] opacity-70 pointer-events-none"></div>
                    <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-[#1FB5A3] border-[3px] border-[#111111] rounded-2xl rotate-12 opacity-70 pointer-events-none"></div>
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* Text CTA */}
                        <div className="lg:col-span-8 flex flex-col items-start gap-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border-[2px] border-[#111111] bg-white text-on-surface font-label-sm text-xs font-extrabold uppercase shadow-[2px_2px_0px_#111111]">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#1FB5A3] animate-ping"></span>
                                <span className="">Customer Service Fast Response via WhatsApp</span>
                            </div>
                            <h2 className="font-headline-xl text-3xl sm:text-5xl text-on-surface leading-[1.1] font-extrabold">
                                Siap Bikin Usaha Lo Rame &amp; Dilirik Jutaan Orang?
                            </h2>
                            <p className="font-body-lg text-base sm:text-lg text-[#111111] max-w-xl font-medium leading-relaxed">
                                Gak perlu nunggu modal miliaran buat punya branding sekelas brand multinasional. Ambil langkah pertama sekarang, konsultasikan kebutuhan usaha lo bareng tim UMKREATIV!
                            </p>
                            <div className="pt-4 flex flex-wrap items-center gap-4 w-full sm:w-auto">
                                <a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-[#111111] font-label-lg text-base uppercase tracking-wider rounded-2xl border-[3px] border-[#111111] shadow-[5px_5px_0px_#111111] hover:-translate-y-0.5 hover:shadow-[7px_7px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#111111] transition-all font-extrabold" href="https://wa.me/6289673557846?text=Halo%20UMKREATIV%2C%20saya%20tertarik%20konsultasi%20branding%20usaha%20saya" rel="noopener noreferrer" target="_blank">
                                    <span className="w-3.5 h-3.5 rounded-full bg-white border border-[#111111]"></span>
                                    <span className="">Chat WhatsApp Sekarang</span>
                                    <span className="text-xl">💬</span>
                                </a>
                                <div className="flex items-center gap-2 font-label-sm text-xs sm:text-sm text-[#111111] font-extrabold bg-[#ffe173] px-3.5 py-2.5 rounded-xl border-[2px] border-[#111111] shadow-[2px_2px_0px_#111111]">
                                    <span className="">⚡ Rata-rata dibalas dalam 5 menit</span>
                                </div>
                            </div>
                        </div>
                        {/* Celebrating Kreki Mascot */}
                        <div className="lg:col-span-4 flex justify-center items-center">
                            <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center bg-white rounded-full border-[3px] border-[#111111] shadow-[6px_6px_0px_#111111] p-4 transition-transform hover:scale-105">
                                <div className="w-full h-full flex items-center justify-center">
                                    <Image
                                        src="/kreki-mascot.jpg"
                                        alt="Kreki Mascot UMKM Kreativ Celebrating"
                                        className="w-full h-full object-contain mx-auto select-none pointer-events-none rounded-full"
                                        width={220}
                                        height={220}
                                    />
                                </div>
                                <div className="absolute -bottom-3 bg-[#FFD93D] border-[2px] border-[#111111] px-3.5 py-1 rounded-full font-label-sm text-xs font-black shadow-[2px_2px_0px_#111111]">
                                    KUY JOIN! 🎉
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FinalCta;
