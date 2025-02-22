
import Link from "next/link";
import { use } from "react";

import { RefObject } from "react";

interface NavbarProps {
    scrollToSection: (ref: RefObject<HTMLDivElement>) => void;
    homeRef: RefObject<HTMLDivElement>;
    aiResearcherRef: RefObject<HTMLDivElement>;
    contactRef: RefObject<HTMLDivElement>;
}
export default function Navbar({ scrollToSection, homeRef, aiResearcherRef, contactRef }: NavbarProps) {
    return (
        <nav className="fixed top-0 left-0 w-full p-4 z-50">
            <div className="w-full flex justify-end space-x-8 text-[#F5F5DC] font-semibold gap gap-links pr-10">
                {/* Home Link */}
                <button onClick={() => scrollToSection(homeRef)} className="relative hoverable _link_siw6m_9">
                <div className="overflow-hidden">
                    <div>
                        {"Home".split("").map((char, i) => (
                            <span key={i} className="_span_siw6m_37" style={{ transitionDelay: `${i * 0.03}s` }}>
                            {char}
                            </span>
                        ))}
                    </div>

                    <div className="absolute inset-0">
                        {"Home".split("").map((char, i) => (
                            <span key={i} className="_mint_siw6m_41" style={{ transitionDelay: `${i * 0.03}s` }}>
                            {char}
                            </span>
                        ))}
                    </div>
                </div>
                </button>
                {/* AI Researcher Link */}
                <button onClick={() => scrollToSection(aiResearcherRef)} className="relative hoverable _link_siw6m_9">
                <div className="overflow-hidden">
                    <div>
                        {"AI Researcher".split("").map((char, i) => (
                            <span key={i} className="_span_siw6m_37" style={{ transitionDelay: `${i * 0.03}s` }}>
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </div>
                    <div className="absolute inset-0">
                        {"AI Researcher".split("").map((char, i) => (
                            <span key={i} className=" _mint_siw6m_41" style={{ transitionDelay: `${i * 0.03}s` }}>
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </div>
                </div>
                </button>

                {/* Contact Me Link */}
                <button onClick={() => scrollToSection(contactRef)} className="relative hoverable _link_siw6m_9">
                <div className="overflow-hidden">
                    <div>
                        {"Contact Me".split("").map((char, i) => (
                            <span key={i} className="_span_siw6m_37" style={{ transitionDelay: `${i * 0.03}s` }}>
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </div>
                    <div className="absolute inset-0">
                        {"Contact Me".split("").map((char, i) => (
                            <span key={i} className="_mint_siw6m_41" style={{ transitionDelay: `${i * 0.03}s` }}>
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </div>
                </div>
                </button>
            </div>
        </nav>
    );
}
