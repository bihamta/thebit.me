"use client";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-full sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/11 bg-gray-100 p-8 border-r fixed h-screen">
        <h1 className="text-4xl font-bold mb-8 text-red-600">The Bit</h1>
        <nav className="flex flex-col space-y-10">
          <a href="#home" className="text-gray-600 hover:text-red-600 pl-2">
            Home
          </a>
          <a href="#about" className="text-gray-600 hover:text-red-600 pl-2">
            About
          </a>
          <a href="#resume" className="text-gray-600 hover:text-red-600 pl-2">
            Resume
          </a>
          <a href="#blog" className="text-gray-600 hover:text-red-600 pl-2">
            Blog
          </a>
          <a href="#photos" className="text-gray-600 hover:text-red-600 pl-2">
            Photos
          </a>
          <a href="#contact" className="text-gray-600 hover:text-red-600 pl-2">
            Contact
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto scroll-smooth">{children}</main>
    </div>
  );
}
