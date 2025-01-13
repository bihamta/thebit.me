import React from "react";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="group relative text-[#F5F5DC] hover:text-[#ADDFAD] hover:italic flex items-center"
    >
      {/* Line */}
      <div className="absolute left-0 h-[2px] bg-[#ADDFAD] w-0 transition-all duration-300 ease-in-out group-hover:w-[40px] group-hover:translate-x-0"></div>

      {/* Word */}
      <span className="ml-0 group-hover:text-[#ADDFAD] group-hover:ml-12 transition-all duration-300">
        {children}
      </span>
    </a>
  );
}
