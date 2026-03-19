"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "py-3 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5"
          : "py-6 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-2.5 font-syne font-bold text-lg">
          <span className="relative w-8 h-8 flex items-center justify-center">
            <span className="absolute inset-0 border border-[#CCFF00]/30 rotate-45 group-hover:rotate-90 transition-transform duration-500" />
            <span className="text-[#CCFF00] text-sm font-mono">V</span>
          </span>
          <span className="text-white tracking-tight">vansh<span className="text-[#CCFF00]">.</span></span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setActive(link.label)}
                className={`relative px-4 py-2 font-mono text-xs tracking-widest uppercase transition-colors duration-300 hover-underline ${
                  active === link.label ? "text-[#CCFF00]" : "text-[#555566] hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:vanshsharma2083@gmail.com"
          className="hidden md:flex items-center gap-2 font-mono text-xs tracking-widest px-5 py-2.5 bg-[#CCFF00] text-black font-medium hover:bg-white transition-all duration-300 mag-btn group"
          data-hover
        >
          <span className="w-1.5 h-1.5 bg-black rounded-full group-hover:scale-150 transition-transform" />
          HIRE ME
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`w-6 h-px bg-[#CCFF00] block transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
          <span className={`w-4 h-px bg-white block transition-all duration-300 ${menuOpen ? "opacity-0 w-0" : ""}`} />
          <span className={`w-6 h-px bg-[#CCFF00] block transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${menuOpen ? "max-h-96" : "max-h-0"}`}>
        <div className="px-6 pt-4 pb-8 border-t border-white/5 bg-[#050505]/95 backdrop-blur-xl space-y-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 font-mono text-sm text-[#555566] hover:text-[#CCFF00] tracking-widest uppercase border-b border-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:vanshsharma2083@gmail.com"
            className="block mt-4 text-center font-mono text-sm px-5 py-3 bg-[#CCFF00] text-black font-medium"
          >
            HIRE ME
          </a>
        </div>
      </div>
    </header>
  );
}
