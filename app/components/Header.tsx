"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const navigationItems = [
    { id: "layanan", label: "Layanan" },
    { id: "portofolio", label: "Portofolio" },
    { id: "cara-kerja", label: "Cara Kerja" },
    { id: "harga", label: "Harga" },
    { id: "faq", label: "FAQ" },
];

const Header = () => {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        const syncActiveSectionFromHash = () => {
            const hash = decodeURIComponent(window.location.hash.slice(1));
            const matchingItem = navigationItems.find((item) => item.id === hash);
            setActiveSection(matchingItem?.id ?? null);
        };

        syncActiveSectionFromHash();
        window.addEventListener("hashchange", syncActiveSectionFromHash);
        window.addEventListener("popstate", syncActiveSectionFromHash);

        const visibleSections = new Map<string, IntersectionObserverEntry>();
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        visibleSections.set(entry.target.id, entry);
                    } else {
                        visibleSections.delete(entry.target.id);
                    }
                });

                const visibleSection = [...visibleSections.values()]
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                setActiveSection(visibleSection?.target.id ?? null);
            },
            { rootMargin: "-20% 0px -60% 0px" },
        );

        navigationItems.forEach(({ id }) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        return () => {
            window.removeEventListener("hashchange", syncActiveSectionFromHash);
            window.removeEventListener("popstate", syncActiveSectionFromHash);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md border-b-[2.5px] border-[#111111]">
                <div className="h-20 max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
                    <Link className="flex items-center gap-2.5 group" href="#">
                        <Image
                            height={36}
                            width={36}
                            alt="UMKREATIV Logo"
                            className="h-9 w-9 object-contain transition-transform group-hover:scale-105"
                            src="/logo.svg"
                            priority
                        />
                        <span className="font-headline-sm text-xl font-extrabold tracking-tight text-on-surface hidden sm:inline-block">UMKREATIV</span>
                        <span className="hidden lg:inline-block px-2 py-0.5 rounded-full border-[1.5px] border-[#111111] bg-secondary-container text-on-secondary-fixed text-[10px] font-extrabold uppercase shadow-[1.5px_1.5px_0px_#111111]">Studio</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-2 lg:gap-3">
                        {navigationItems.map(({ id, label }) => {
                            const isActive = activeSection === id;

                            return (
                                <Link
                                    key={id}
                                    aria-current={isActive ? "location" : undefined}
                                    className={`px-3 py-1.5 rounded-xl border-[2px] text-sm transition-all ${
                                        isActive
                                            ? "border-[#111111] bg-secondary-container text-on-surface font-extrabold shadow-[2px_2px_0px_#111111]"
                                            : "border-transparent text-on-surface-variant font-bold hover:border-[#111111] hover:bg-surface-container hover:text-on-surface"
                                    }`}
                                    href={`#${id}`}
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </nav>
                    <div className="flex items-center gap-3">
                        <Link className="inline-flex items-center justify-center px-4 py-2 bg-primary-container text-on-surface font-label-lg text-sm uppercase tracking-wide rounded-xl border-[2.5px] border-[#111111] shadow-[3px_3px_0px_#111111] hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#111111] transition-all font-extrabold" href="#kontak">
                            Ngobrol Yuk
                        </Link>
                        <div className="w-9 h-9 rounded-full bg-secondary-fixed border-[2px] border-[#111111] flex items-center justify-center shadow-[2px_2px_0px_#111111]">
                            <span className="material-symbols-outlined text-on-secondary-fixed text-[20px]">storefront</span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
