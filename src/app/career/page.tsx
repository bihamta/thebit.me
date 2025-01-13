import NavLink from "../components/NavLink";
import "@fortawesome/fontawesome-free/css/all.min.css";


export default function Career() {
    return (
        <div className="flex h-screen" >
            {/* Sidebar */}
            <aside className="w-full sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/6 p-8 border-r flex-shrink-0 bg-[#4f5b47]">
                <h1 className="text-4xl font-bold mb-8 text-[#F5F5DC]">The Bit</h1>
                <nav className="flex flex-col space-y-10">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/career">Career</NavLink>
                    <NavLink href="#">Resume</NavLink>
                    <NavLink href="#">Blog</NavLink>
                    <NavLink href="#">Photos</NavLink>
                    <NavLink href="#">Contact</NavLink>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col p-8 bg-[#ead1bf]">
                <section className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Image */}
                    <div className="flex justify-center items-center ml-10">
                        <img
                            src="/pixel_art.png"
                            alt="Profile Photo"
                            className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-96 xl:h-96 rounded-full border-4 border-[#4f5b47] shadow-lg"
                        />
                    </div>
                    {/* Right Content */}
                    <div>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            I am an AI researcher passionate about the intersection of machine
                            learning and psychology, with a focus on affective computing. My
                            work delves into facial expression editing and generation, exploring
                            how technology can better understand and emulate human emotions.
                            Outside of my research, I immerse myself in art, yoga, and fitness,
                            finding balance and creativity in all aspects of life.
                        </p>
                        <p className="font-semibold text-xl mb-6">
                            Vancouver, BC <span className="text-[#4f5b47]">Canada.</span>
                        </p>
                        <div className="flex space-x-12">
                            {/* <div>
                                <p className="text-[#4f5b47]">Contact Phone</p>
                                <p className="font-semibold">+1 (778) 522 8681</p>
                            </div> */}
                            <div>
                                <p className="text-gray-500">Contact Mail</p>
                                <p className="font-semibold text-[#4f5b47]">
                                    bazari@sfu.ca
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Portfolio Section */}
                <div className="mt-0 flex justify-center space-x-24 mb-12">
                    {/* Circle 1 - LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/bita-azari-26446b80/"
                        className="group relative w-24 h-24 flex items-center justify-center rounded-full shadow-md text-center bg-[#F5F5DC] transition-all duration-300 hover:bg-[#4f5b47]"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-linkedin text-4xl text-gray-600 group-hover:text-white"></i>
                    </a>

                    {/* Circle 2 - GitHub */}
                    <a
                        href="https://github.com/bihamta/"
                        className="group relative w-24 h-24 flex items-center justify-center rounded-full shadow-md text-center bg-[#F5F5DC] transition-all duration-300 hover:bg-[#4f5b47]"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-github text-4xl text-gray-600 group-hover:text-white"></i>
                    </a>

                    {/* Circle 3 - RosieLab */}
                    <a
                        href="https://www.rosielab.ca/team"
                        className="group relative w-24 h-24 flex items-center justify-center rounded-full shadow-md text-center bg-[#F5F5DC] transition-all duration-300 hover:bg-[#4f5b47]"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fas fa-robot text-4xl text-gray-600 group-hover:text-white"></i>
                    </a>
                </div>



            </main>
        </div>
    );
}
