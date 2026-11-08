"use client";

import { motion } from "motion/react";

const brands = [
    { name: "Kopi Sedjiwa ☕", color: "text-[#FFD93D]" },
    { name: "Sambal Bu Joko 🌶️", color: "text-[#76f8e3]" },
    { name: "Batik Nawasena 🧵", color: "text-[#FF6B9D]" },
    { name: "Keripik Mantul 🍌", color: "text-[#FF7A1A]" },
    { name: "GlowUp Herbal 🌿", color: "text-[#ffe173]" },
    { name: "Roti Bakar Juara 🍞", color: "text-[#76f8e3]" },
];

const MarqueBrand = () => {
    return (
        <section className="w-full bg-[#111111] text-white py-5 border-y-[2.5px] border-[#111111] overflow-hidden select-none">
            <div className="max-w-7xl mx-auto px-4 mb-2 flex items-center justify-center gap-2">
                <span className="text-[#FFD93D] text-sm">✦</span>
                <p className="font-label-md text-xs sm:text-sm uppercase tracking-widest text-center text-white/90 font-bold">
                    Dipercaya Ratusan Usaha Lokal Yang Berani Tampil Beda &amp; Unik
                </p>
                <span className="text-[#FFD93D] text-sm">✦</span>
            </div>
            <div className="flex overflow-hidden py-2 items-center">
                <motion.div
                    className="flex shrink-0 gap-6 pr-6 items-center"
                    animate={{ x: ["-100%", "0%"] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 25,
                        ease: "linear",
                    }}
                >
                    {[...brands, ...brands].map((brand, i) => (
                        <span
                            key={i}
                            className={`px-4 py-1.5 bg-[#222222] border-[1.5px] border-white/40 rounded-xl font-headline-sm text-sm sm:text-base ${brand.color} uppercase tracking-wider font-extrabold shrink-0`}
                        >
                            {brand.name}
                        </span>
                    ))}
                </motion.div>
                <motion.div
                    aria-hidden="true"
                    className="flex shrink-0 gap-6 pr-6 items-center"
                    animate={{ x: ["-100%", "0%"] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 25,
                        ease: "linear",
                    }}
                >
                    {[...brands, ...brands].map((brand, i) => (
                        <span
                            key={i}
                            className={`px-4 py-1.5 bg-[#222222] border-[1.5px] border-white/40 rounded-xl font-headline-sm text-sm sm:text-base ${brand.color} uppercase tracking-wider font-extrabold shrink-0`}
                        >
                            {brand.name}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default MarqueBrand;
