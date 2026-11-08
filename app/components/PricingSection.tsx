const packages = [
    {
        name: "Starter",
        description: "Bangun identitas visual sederhana untuk usaha baru.",
        price: "Rp199.000",
        features: [
            "1 desain logo sederhana",
            "Palet warna brand",
            "2 template feed Instagram",
            "File final PNG/JPG",
            "Maksimal 2x revisi",
        ],
        cta: "PILIH PAKET STARTER",
    },
    {
        name: "Tumbuh",
        description: "Bikin media sosial bisnis lebih aktif dan menarik.",
        price: "Rp250.000",
        features: [
            "12 desain konten Instagram",
            "Desain feed promosi produk",
            "Copywriting sederhana",
            "Penyesuaian warna dan identitas brand",
            "Maksimal 1x revisi per desain",
        ],
        cta: "GASPOL PAKET TUMBUH 🚀",
        featured: true,
    },
    {
        name: "Juara",
        description: "Solusi branding dan promosi digital dalam satu paket.",
        price: "Rp699.000",
        features: [
            "1 desain logo sederhana",
            "Palet warna dan panduan font",
            "12 desain konten Instagram",
            "3 desain banner promosi marketplace",
            "1 desain label produk",
            "Maksimal 2x revisi per kategori",
        ],
        cta: "PILIH PAKET JUARA",
    },
];

const PricingSection = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24" id="harga">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border-[2px] border-[#111111] bg-primary-container text-on-surface font-label-sm text-xs uppercase font-extrabold shadow-[2px_2px_0px_#111111] mb-3">
                    <span>💰 Investasi Terjangkau</span>
                </div>
                <h2 className="font-headline-lg text-2xl sm:text-4xl text-on-surface font-extrabold">
                    Paket Layanan UMKREATIV
                </h2>
                <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-2">
                    Pilih layanan kreatif yang sesuai kebutuhan usaha dan ramah di kantong, tanpa mengorbankan tampilan profesional.
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                {packages.map((servicePackage) => (
                    <div
                        key={servicePackage.name}
                        className={`relative h-full rounded-2xl p-6 sm:p-8 flex flex-col justify-between ${
                            servicePackage.featured
                                ? "bg-[#fffbe6] border-[3px] border-[#111111] shadow-[7px_7px_0px_#111111] lg:-translate-y-4"
                                : "bg-white border-[2.5px] border-[#111111] shadow-[5px_5px_0px_#111111] hover:-translate-y-1"
                        } transition-all`}
                    >
                        {servicePackage.featured && (
                            <div className="absolute -top-4 right-6 bg-[#FF6B9D] text-[#111111] px-3.5 py-1 rounded-full border-[2px] border-[#111111] font-label-sm text-xs font-extrabold uppercase shadow-[3px_3px_0px_#111111] rotate-2">
                                Paling Laris 🔥
                            </div>
                        )}
                        <div>
                            <div
                                className={`inline-block px-3 py-1 rounded-lg border-[1.5px] border-[#111111] font-label-sm text-xs uppercase font-extrabold text-[#111111] mb-4 ${
                                    servicePackage.featured
                                        ? "bg-[#FFD93D]"
                                        : servicePackage.name === "Juara"
                                          ? "bg-[#76f8e3]"
                                          : "bg-surface-container"
                                }`}
                            >
                                Paket {servicePackage.name}
                            </div>
                            <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                                {servicePackage.description}
                            </p>
                            <div className="mt-6 mb-6">
                                <span className="font-body-sm text-xs text-on-surface-variant uppercase font-bold">
                                    Harga paket
                                </span>
                                <p className="font-headline-xl text-3xl sm:text-4xl text-on-surface font-extrabold tracking-tight mt-1">
                                    {servicePackage.price}
                                </p>
                            </div>
                            <ul className="space-y-3 pt-4 border-t-[1.5px] border-[#111111]/20 font-body-sm text-sm text-on-surface">
                                {servicePackage.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-2.5">
                                        <span
                                            className={`w-5 h-5 rounded-full text-[#111111] flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold ${
                                                servicePackage.featured
                                                    ? "bg-[#FF7A1A]"
                                                    : "bg-[#1FB5A3]"
                                            }`}
                                            aria-hidden="true"
                                        >
                                            ✓
                                        </span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="pt-8">
                            <a
                                className={`w-full inline-flex items-center justify-center py-3.5 px-4 rounded-xl border-[2.5px] border-[#111111] font-label-md text-sm uppercase tracking-wider transition-all font-extrabold hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 ${
                                    servicePackage.featured
                                        ? "bg-primary-container text-on-surface shadow-[4px_4px_0px_#111111] hover:shadow-[6px_6px_0px_#111111] active:shadow-[1px_1px_0px_#111111]"
                                        : "bg-surface-container-lowest text-on-surface shadow-[3px_3px_0px_#111111] hover:shadow-[5px_5px_0px_#111111] active:shadow-[1px_1px_0px_#111111]"
                                }`}
                                href="#kontak"
                            >
                                {servicePackage.cta}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PricingSection;
