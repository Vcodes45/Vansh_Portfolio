export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bg px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-syne font-bold text-white/30 text-sm">
          vansh<span className="text-[#CCFF00]/50">.</span>sharma
        </div>
        <p className="font-mono text-[11px] text-[#333344] tracking-widest text-center">
          DESIGNED & BUILT BY VANSH SHARMA © 2025
        </p>
        <div className="flex items-center gap-2 font-mono text-[11px] text-[#333344]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]/40" />
          <span>NEXT.JS + TAILWIND</span>
        </div>
      </div>
    </footer>
  );
}
