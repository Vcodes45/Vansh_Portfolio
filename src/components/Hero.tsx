"use client";
import { useEffect, useRef, useState } from "react";

const roles = ["Full Stack Developer", "React & Next.js Dev", "ML Enthusiast", "DSA Solver"];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    interface Particle {
      x: number; y: number; vx: number; vy: number;
      size: number; alpha: number; color: string;
    }
    const particles: Particle[] = [];
    const count = 80;
    const colors = ["#CCFF00", "#88dd00", "#ffffff", "#CCFF00"];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.3,
        alpha: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw connections
        particles.forEach((p2) => {
          const dx = p.x - p2.x, dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(204,255,0,${(0.08 * (1 - dist / 120))})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.alpha * 255).toString(16).padStart(2, "0");
        ctx.fill();
      });
      animFrame = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Typewriter effect
  useEffect(() => {
    const target = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  // Mount animation
  useEffect(() => { setTimeout(() => setMounted(true), 100); }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mesh-bg">
      {/* Canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Decorative rings */}
      <div className="absolute right-[-10vw] top-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full border border-white/[0.03] animate-spin-slow" />
        <div className="absolute inset-[60px] rounded-full border border-[#CCFF00]/[0.06] animate-spin-rev" />
        <div className="absolute inset-[140px] rounded-full border border-white/[0.04] animate-spin-slow" />
        <div className="absolute inset-[200px] rounded-full bg-[#CCFF00]/[0.03] blur-2xl animate-pulse-lime" />
      </div>

      {/* Corner decorations */}
      <div className="absolute top-28 left-6 font-mono text-xs text-white/10 tracking-[0.5em] uppercase writing-vertical hidden lg:block">
        PORTFOLIO 2025
      </div>
      <div className="absolute bottom-16 right-6 font-mono text-xs text-white/10 tracking-[0.5em] uppercase">
        VANSH SHARMA
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-28 pb-40">
        {/* Eyebrow */}
        <div
          className={`flex items-center gap-4 mb-10 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="font-mono text-xs tracking-[0.4em] text-[#CCFF00] uppercase">
            Available for Work
          </span>
          <span className="relative flex h-2 w-2">
            <span className="avail-ring absolute inline-flex h-full w-full rounded-full bg-[#CCFF00] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#CCFF00]" />
          </span>
        </div>

        {/* Giant name + Photo */}
        <div className="flex items-end gap-6 md:gap-10 mb-8">
          <div className="flex-1 min-w-0">
            <div className="overflow-hidden mb-2">
              <h1
                className={`font-syne font-extrabold leading-none text-[clamp(3rem,9vw,8rem)] text-white transition-all duration-1000 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"}`}
              >
                VANSH
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1
                className={`font-syne font-extrabold leading-none text-[clamp(3rem,9vw,8rem)] text-lime-gradient transition-all duration-1000 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"}`}
              >
                SHARMA
              </h1>
            </div>
          </div>

          {/* Profile Photo */}
          <div
            className={`hidden md:block flex-shrink-0 group transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}
          >
            <div className="relative overflow-hidden border border-white/10 group-hover:border-[#CCFF00]/30 transition-all duration-500">
              <img
                src="/vansh-photo.jpg"
                alt="Vansh Sharma"
                className="w-40 h-40 lg:w-52 lg:h-52 object-cover profile-photo"
              />
              <div className="absolute inset-0 bg-[#CCFF00]/0 group-hover:bg-[#CCFF00]/5 transition-all duration-500 pointer-events-none" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r border-b border-[#CCFF00]/0 group-hover:border-[#CCFF00]/40 transition-all duration-500" />
            <div className="absolute -top-2 -left-2 w-4 h-4 border-l border-t border-[#CCFF00]/0 group-hover:border-[#CCFF00]/40 transition-all duration-500" />
          </div>
        </div>

        {/* Typewriter */}
        <div
          className={`flex items-center gap-2 mb-10 transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span className="font-mono text-sm md:text-base text-[#555566] tracking-wide">~/</span>
          <span className="font-mono text-sm md:text-base text-white">{displayed}</span>
          <span className="typewriter-cursor" />
        </div>

        {/* Description */}
        <p
          className={`font-jakarta text-base md:text-lg text-[#888899] max-w-lg leading-relaxed mb-12 transition-all duration-1000 delay-400 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          Building elegant, high-performance web apps with{" "}
          <span className="text-white font-medium">React & Next.js</span>.
          Exploring machine learning with regression models. Sharpened by{" "}
          <span className="text-[#CCFF00]">100+</span> DSA problems on LeetCode.
        </p>

        {/* CTA buttons */}
        <div
          className={`flex flex-wrap gap-4 transition-all duration-1000 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <a
            href="#projects"
            className="group relative flex items-center gap-3 font-mono text-sm px-7 py-4 bg-[#CCFF00] text-black font-medium overflow-hidden"
            data-hover
          >
            <span className="relative z-10">VIEW PROJECTS</span>
            <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">→</span>
            <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
          </a>
          <a
            href="https://github.com/Vcodes45"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 font-mono text-sm px-7 py-4 border border-white/10 text-[#888899] hover:border-[#CCFF00]/40 hover:text-white transition-all duration-300 glass"
            data-hover
          >
            <GitHubIcon />
            GITHUB
          </a>
          <a
            href="https://leetcode.com/u/Vansh2083/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 font-mono text-sm px-7 py-4 border border-white/10 text-[#888899] hover:border-[#CCFF00]/40 hover:text-white transition-all duration-300 glass"
            data-hover
          >
            <LeetCodeIcon />
            LEETCODE
          </a>
        </div>

        {/* Bottom stat strip */}
        <div
          className={`absolute bottom-12 left-6 right-6 flex gap-8 md:gap-16 transition-all duration-1000 delay-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {[
            { val: "100+", label: "DSA Problems" },
            { val: "4+", label: "Projects Built" },
            { val: "3+", label: "Years Learning" },
            { val: "10+", label: "Technologies" },
          ].map((s) => (
            <div key={s.label} className="hidden sm:block">
              <div className="font-syne font-bold text-xl text-[#CCFF00]">{s.val}</div>
              <div className="font-mono text-[10px] text-[#555566] tracking-widest uppercase mt-0.5">{s.label}</div>
            </div>
          ))}
          {/* Scroll hint */}
          <div className="ml-auto flex items-center gap-2 self-end">
            <span className="font-mono text-[10px] text-[#555566] tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-[#555566] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LeetCodeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.823-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 00-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
    </svg>
  );
}
