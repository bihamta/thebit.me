"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import Navbar from "./components/Navbar"; 

export default function Home() {
    const homeRef = useRef<HTMLDivElement>(null!);
    const aiResearcherRef = useRef<HTMLDivElement>(null!);
    const portfolioRef = useRef<HTMLDivElement>(null!);
    const contactRef = useRef<HTMLDivElement>(null!);
    

    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" });

        }
    };
    useEffect(() => {
        console.log("Client-side rendering confirmed.");
    }, []);

    return (
        <div className="relative w-full h-screen overflow-y-scroll scroll-smooth">
            {/* 🔹 Sticky Navigation Bar */}
            <Navbar scrollToSection={scrollToSection} homeRef={homeRef} aiResearcherRef={aiResearcherRef} contactRef={contactRef} />


            {/* 🔹 Home Section */}
            <section ref={homeRef} className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/bg_test.jpg')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative text-center z-10" style={{ color: "#F5F5DC" }}>
                    <h2 className="text-6xl font-extrabold mb-6">Bita Azari</h2>
                    <p className="leading-relaxed max-w-2xl mx-auto">
                        I am a <span className="font-bold" style={{ color: "#ADDFAD" }}>computer science researcher</span>, staying active through
                        <span className="font-light" style={{ color: "#ADDFAD" }}> yoga, spinning, lifting dumbbells</span>, and expressing myself through art.
                    </p>
                </div>
            </section>

            {/* 🔹 About Section */}
            <section ref={aiResearcherRef} className="h-screen flex flex-col items-center justify-center bg-[#ead1bf] p-10">
                <h2 className="text-5xl font-bold text-[#4f5b47] mb-6">About Me</h2>
                <p className="max-w-2xl text-center text-gray-700">
                    I am an AI researcher passionate about machine learning and psychology, with a focus on affective computing.
                    My research explores how technology can better understand and emulate human emotions.
                </p>
            </section>

            {/* 🔹 Portfolio Section (Photos, Drawings) */}
            <section ref={portfolioRef} className="h-screen flex flex-col items-center justify-center bg-[#4f5b47] p-10">
                <h2 className="text-5xl font-bold text-[#F5F5DC] mb-6">Portfolio</h2>
                <div className="flex space-x-12">
                    <img src="/pixel_art.png" alt="Drawing" className="w-48 h-48 rounded-lg shadow-lg" />
                    <img src="/photography_sample.jpg" alt="Photography" className="w-48 h-48 rounded-lg shadow-lg" />
                </div>
            </section>

            {/* 🔹 Contact Section */}
            <section ref={contactRef} className="h-screen flex flex-col items-center justify-center bg-[#F5F5DC] p-10">
                <h2 className="text-5xl font-bold text-[#4f5b47] mb-6">Contact</h2>
                <p className="text-gray-700 mb-4">Email: bazari@sfu.ca</p>
                <div className="flex space-x-6">
                    <a href="https://www.linkedin.com/in/bita-azari-26446b80/" className="text-4xl text-gray-600 hover:text-[#4f5b47]"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/bihamta/" className="text-4xl text-gray-600 hover:text-[#4f5b47]"><i className="fab fa-github"></i></a>
                </div>
            </section>
        </div>
    );
}
