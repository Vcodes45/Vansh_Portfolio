"use client";
import { useEffect, useRef, useState } from "react";
import Terminal from "./Terminal";

function useReveal(ref: React.RefObject<Element>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal").forEach((r, i) => {
            setTimeout(() => r.classList.add("visible"), i * 100);
          });
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
}

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const step = target / 60;
          const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
          }, 20);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef as React.RefObject<Element>);

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Huge decorative number */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-syne font-extrabold text-[20vw] text-white/[0.015] pointer-events-none select-none leading-none">
        01
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-[10px] tracking-[0.5em] text-[#CCFF00] uppercase">01 — About Me</span>
          <div className="flex-1 h-px bg-white/5 max-w-[200px]" />
        </div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 xl:gap-24 items-start">
          {/* Left */}
          <div>
            <h2 className="reveal font-syne font-extrabold text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] text-white mb-8">
              Crafting digital<br />
              experiences that<br />
              <span className="text-lime-gradient">actually matter.</span>
            </h2>
            <p className="reveal font-jakarta text-[#888899] text-lg leading-[1.8] mb-5">
              I&apos;m Vansh — an aspiring full stack developer obsessed with building
              fast, beautiful, and accessible web applications. From pixel-perfect
              UIs to robust backends, I care about every detail.
            </p>
            <p className="reveal font-jakarta text-[#888899] text-lg leading-[1.8] mb-10">
              When I&apos;m not pushing commits, I&apos;m exploring machine learning —
              particularly regression techniques — or grinding DSA problems on
              LeetCode to stay algorithmically sharp.
            </p>

            {/* Links row */}
            <div className="reveal flex gap-6">
              <a
                href="https://github.com/Vcodes45"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[#555566] hover:text-[#CCFF00] tracking-widest uppercase transition-colors hover-underline"
                data-hover
              >
                GitHub ↗
              </a>
              <a
                href="https://leetcode.com/u/Vansh2083/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[#555566] hover:text-[#CCFF00] tracking-widest uppercase transition-colors hover-underline"
                data-hover
              >
                LeetCode ↗
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-5">
            {/* Stat grid */}
            <div className="reveal grid grid-cols-2 gap-4">
              {[
                { val: 100, suffix: "+", label: "DSA Problems Solved", color: "text-[#CCFF00]" },
                { val: 4, suffix: "+", label: "Projects Shipped", color: "text-[#CCFF00]" },
                { val: 3, suffix: "+", label: "Years of Learning", color: "text-white" },
                { val: 10, suffix: "+", label: "Technologies", color: "text-white" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="glass border border-white/5 p-6 group hover:border-[#CCFF00]/20 transition-all duration-500 hover:bg-[#CCFF00]/[0.02]"
                  data-hover
                >
                  <div className={`font-syne font-extrabold text-4xl ${s.color} mb-1`}>
                    <Counter target={s.val} suffix={s.suffix} />
                  </div>
                  <div className="font-mono text-[10px] text-[#555566] tracking-widest uppercase">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Interactive Terminal */}
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
}
