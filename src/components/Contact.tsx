"use client";
import { useEffect, useRef } from "react";

const socials = [
  {
    name: "GitHub",
    handle: "@Vcodes45",
    url: "https://github.com/Vcodes45",
    desc: "Code & Projects",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LeetCode",
    handle: "@Vansh2083",
    url: "https://leetcode.com/u/Vansh2083/",
    desc: "100+ Problems",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.823-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 00-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.querySelectorAll(".reveal").forEach((r, i) => {
            setTimeout(() => r.classList.add("visible"), i * 100);
          });
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-32 px-6 relative overflow-hidden bg-surface">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Massive BG text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <span className="font-syne font-extrabold text-[18vw] text-white/[0.018] whitespace-nowrap">
          LET&apos;S TALK
        </span>
      </div>

      {/* Decorative rotating circle */}
      <div className="absolute right-[-15vw] bottom-[-15vw] w-[500px] h-[500px] rounded-full border border-white/[0.03] animate-spin-slow pointer-events-none" />
      <div className="absolute right-[-10vw] bottom-[-10vw] w-[300px] h-[300px] rounded-full border border-[#CCFF00]/[0.04] animate-spin-rev pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-[10px] tracking-[0.5em] text-[#CCFF00] uppercase">04 — Contact</span>
          <div className="flex-1 h-px bg-white/5 max-w-[200px]" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h2 className="reveal font-syne font-extrabold text-[clamp(2.8rem,6vw,5rem)] text-white leading-[1.0] mb-8">
              Got a project?<br />
              Let&apos;s build<br />
              <span className="text-lime-gradient">something epic.</span>
            </h2>
            <p className="reveal font-jakarta text-[#888899] text-lg leading-relaxed mb-10">
              I&apos;m open to internships, freelance work, and collaboration.
              Drop me a message — I reply fast.
            </p>

            {/* Availability */}
            <div className="reveal flex items-center gap-3 mb-10">
              <div className="relative flex h-3 w-3">
                <span className="avail-ring absolute inline-flex h-full w-full rounded-full bg-[#CCFF00] opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-[#CCFF00]" />
              </div>
              <span className="font-mono text-xs tracking-[0.35em] text-[#CCFF00] uppercase">
                Available for opportunities
              </span>
            </div>

            {/* Email CTA */}
            <div className="reveal">
              <a
                href="mailto:vanshsharma2083@gmail.com"
                className="group relative inline-flex items-center gap-4 font-syne font-bold text-2xl md:text-3xl text-white hover:text-[#CCFF00] transition-colors duration-300"
                data-hover
              >
                <span className="hover-underline">vanshsharma020406@gmail.com</span>
                <span className="w-10 h-10 border border-current flex items-center justify-center text-base group-hover:bg-[#CCFF00] group-hover:border-[#CCFF00] group-hover:text-black transition-all duration-300">
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-4 lg:pt-8">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal group glass border border-white/5 p-6 flex items-center justify-between hover:border-[#CCFF00]/20 hover:bg-[#CCFF00]/[0.02] transition-all duration-400 block"
                data-hover
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-[#555566] group-hover:border-[#CCFF00]/30 group-hover:text-[#CCFF00] transition-all duration-300">
                    {s.icon}
                  </div>
                  <div>
                    <div className="font-syne font-semibold text-white group-hover:text-[#CCFF00] transition-colors duration-300 text-sm">
                      {s.name}
                    </div>
                    <div className="font-mono text-[10px] text-[#555566] tracking-wider">{s.desc}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-xs text-[#555566] group-hover:text-[#CCFF00] transition-colors duration-300">
                    {s.handle}
                  </div>
                  <div className="font-mono text-xs text-[#333344] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 inline-block mt-1">
                    ↗
                  </div>
                </div>
              </a>
            ))}

            {/* Quick message card */}
            <div className="reveal glass border border-white/5 p-6">
              <p className="font-mono text-[10px] text-[#555566] tracking-widest uppercase mb-4">Quick Response</p>
              <p className="font-jakarta text-[#888899] text-sm leading-relaxed">
                Whether it&apos;s a quick question or a full project brief — I typically
                respond within <span className="text-white">24 hours</span>.
              </p>
              <div className="mt-4 flex items-center gap-2 font-mono text-[10px] text-[#555566]">
                <span className="w-1 h-1 rounded-full bg-[#CCFF00]" />
                India (IST — UTC+5:30)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
