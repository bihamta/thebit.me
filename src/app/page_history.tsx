import NavLink from "./components/NavLink";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function Home() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-full sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/11 bg-gray-100 p-8 border-r">
        <h1 className="text-4xl font-bold mb-8 text-red-600">The Bit</h1>
        <nav className="flex flex-col space-y-10">
          <NavLink href="#">Home</NavLink>
          <NavLink href="/career">Career</NavLink>
          <NavLink href="#">Resume</NavLink>
          <NavLink href="#">Blog</NavLink>
          <NavLink href="#">Photos</NavLink>
          <NavLink href="#">Contact</NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex items-center p-4 2xl:p-96 h-screen">
        {/* Left Side Text */}
        <div className="w-full max-w-md sm:max-w-2lg md:max-w2xl lg:max-w-2xl xl:max-w-2xl 2xl:max-w-5xl">
          <p className="text-red-600 font-semibold mb-2">Hey, I am</p>
          <h2 className="text-5xl font-bold mb-6">Bita Azari</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              <span className="block italic mb-4">
                I am she/her, and I embrace both my feminine and masculine sides,
                finding strength and balance in the combination of both.
              </span>

              <span className="block mb-4">
                I am not just defined by my career. <span className="font-bold">I am me</span>—curious, imperfect, and hoping to grow
                while exploring the world around me.
              </span>

              <span className="block mb-4">
                I am a <span className="text-red-600 font-semibold">computer science researcher</span>, staying active through
                <span className="font-medium"> yoga, spinning</span>, and <span className="font-medium">lifting heavy dumbbells</span>,
                expressing myself through <span className="font-medium">art</span>, and appreciating the beauty of
                <span className="font-medium"> nature and animals</span>.
              </span>

              <span className="block font-light">
                I value the little joys in life—they guide me forward.
              </span>
            </p>
          <p className="font-semibold text-xl">
            Vancouver, BC <span className="text-red-600">Canada</span>
          </p>
          <div className="mt-8 flex space-x-12">
            <div>
              <p className="text-gray-500">Contact Phone</p>
              <p className="font-semibold">+1 (778) 522 8681</p>
            </div>
            <div>
              <p className="text-gray-500">Contact Mail</p>
              <p className="font-semibold text-red-600">bazari@sfu.ca</p>
            </div>
          </div>
        </div>

        {/* Right Side Photo */}
        <div className="flex justify-center items-center ml-10 h-screen">
          <img
            src="/pixel_art.png"
            alt="Profile Photo"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-96 xl:h-96 rounded-full border-4 border-red-600 shadow-lg"
          />
        </div>
      </main>
    </div>
  );
}
