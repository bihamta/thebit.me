"use client";

import Link from "next/link";

export default function Home() {
    return (
        <div
            className="relative flex items-center justify-center h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/bg_test.jpg')" }}
        >
            {/* Overlay (optional, for better text visibility) */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Main Content */}
            <div className="relative text-center z-10" style={{ color: "#F5F5DC" }}>
                <p className="font-semibold text-lg mb-2" style={{ color: "#ADDFAD" }}>Hey, I am</p>
                <h2 className="text-6xl font-extrabold mb-6">Bita Azari</h2>
                <p className="leading-relaxed max-w-2xl mx-auto space-y-6">
                    {/* <span className="block italic mb-4">
                        I am she/her, and I embrace both my feminine and masculine sides,
                        finding strength and balance in the combination of both.
                    </span> */}
                    <span className="block mb-4">
                        I am not just defined by my career.{" "}
                        <span className="font-bold" style={{ color: "#ADDFAD" }}>I am me</span> — curious,
                        imperfect, and hoping to grow while exploring the world around me.
                    </span>
                    <span className="block mb-4">
                        I am a{" "}
                        <span className="font-bold" style={{ color: "#ADDFAD" }}>computer science researcher</span>,
                        staying active through <span className="font-light" style={{ color: "#ADDFAD" }}>yoga, spinning</span>, and{" "}
                        <span className="font-light" style={{ color: "#ADDFAD" }}>lifting dumbbells</span>,
                        expressing myself through <span className="font-light" style={{ color: "#ADDFAD" }}>art</span>, and appreciating
                        the beauty of <span className="font-light" style={{ color: "#ADDFAD" }}>nature and animals</span>.
                    </span>
                    <span className="block font-light">I value the little joys in life—they guide me forward.</span>
                </p>
                {/* <p className="font-semibold mt-6 text-gray-100">
                    Vancouver, BC, <span style={{ color: "#ADDFAD" }}>Canada</span>
                </p> */}
            </div>

            {/* Circular Menu Buttons */}
            <div className="absolute bottom-8 flex justify-center space-x-12 z-10">
                {/* Home Button */}
                <div className="group relative">
                    <Link href="/" className="font-semibold transition relative z-20" style={{ color: "#F5F5DC" }}>
                            Home
                    </Link>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <img
                            src="/giphy.gif"
                            alt="Line Effect"
                            className="w-24 h-24"
                            style={{ minWidth: "10rem", minHeight: "10rem" }}
                        />
                    </div>
                </div>

                {/* Career Button */}
                <div className="group relative">
                    <Link href="/career" className="font-semibold transition relative z-20" style={{ color: "#F5F5DC" }}>
                            Career
                    </Link>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <img
                            src="/giphy.gif"
                            alt="Line Effect"
                            className="w-32 h-32"
                            style={{ minWidth: "10rem", minHeight: "10rem" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
