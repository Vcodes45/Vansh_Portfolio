"use client";
import { useEffect, useRef } from "react";

const skills = [
  { name: "Next.js", pct: 82, cat: "Frontend", slug: "nextdotjs" },
  { name: "React", pct: 87, cat: "Frontend", slug: "react" },
  { name: "JavaScript", pct: 90, cat: "Frontend", slug: "javascript" },
  { name: "TypeScript", pct: 72, cat: "Frontend", slug: "typescript" },
  { name: "Tailwind CSS", pct: 90, cat: "Frontend", slug: "tailwindcss" },
  { name: "LangChain", pct: 75, cat: "ML", slug: "langchain" },
  { name: "Python", pct: 78, cat: "ML", slug: "python" },
  { name: "Scikit-learn", pct: 68, cat: "ML", slug: "scikitlearn" },
  { name: "Node.js", pct: 85, cat: "Backend", slug: "nodedotjs" },
  { name: "Git & GitHub", pct: 88, cat: "CS", slug: "github" },
  { name: "DSA / LeetCode", pct: 80, cat: "CS", slug: "leetcode" },
];

const row1 = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Python", "Scikit-learn", "HTML5", "CSS3", "Git", "Vercel", "LangChain"];
const row2 = ["JavaScript", "REST API", "NumPy", "Pandas", "DSA", "Node.js", "GitHub", "LeetCode", "ML", "LangChain"];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.querySelectorAll(".reveal").forEach((r, i) => {
            setTimeout(() => r.classList.add("visible"), i * 80);
          });
          // Animate bars
          setTimeout(() => {
            barsRef.current?.querySelectorAll<HTMLElement>(".skill-fill").forEach((bar) => {
              bar.style.width = bar.dataset.pct + "%";
            });
          }, 500);
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  const catColor = (cat: string) => {
    if (cat === "Frontend") return "text-[#CCFF00] border-[#CCFF00]/20";
    if (cat === "Backend") return "text-green-400 border-green-400/20";
    if (cat === "ML") return "text-blue-400 border-blue-400/20";
    return "text-orange-400 border-orange-400/20";
  };
  const barColor = (cat: string) => {
    if (cat === "Frontend") return "bg-[#CCFF00]";
    if (cat === "Backend") return "bg-green-400";
    if (cat === "ML") return "bg-blue-400";
    return "bg-orange-400";
  };

  return (
    <section id="skills" ref={sectionRef} className="py-32 px-6 relative overflow-hidden bg-surface">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="section-divider absolute bottom-0 left-0 right-0" />

      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-syne font-extrabold text-[20vw] text-white/[0.015] pointer-events-none select-none leading-none">
        02
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-[10px] tracking-[0.5em] text-[#CCFF00] uppercase">02 — Skills</span>
          <div className="flex-1 h-px bg-white/5 max-w-[200px]" />
        </div>

        <div className="reveal mb-14">
          <h2 className="font-syne font-extrabold text-[clamp(2.5rem,5vw,4rem)] text-white leading-tight">
            My <span className="text-lime-gradient">Arsenal</span>
          </h2>
          <p className="font-jakarta text-[#888899] text-lg mt-4 max-w-md">
            Technologies I wield daily to build, ship, and scale.
          </p>
        </div>

        {/* Skill bars grid */}
        <div ref={barsRef} className="reveal grid md:grid-cols-2 xl:grid-cols-3 gap-5 mb-20">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group glass border border-white/5 p-5 hover:border-[#CCFF00]/15 transition-all duration-500"
              data-hover
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  {skill.slug && (
                    <img
                      src={`https://cdn.simpleicons.org/${skill.slug}/CCFF00`}
                      alt={skill.name}
                      className="w-5 h-5 object-contain"
                    />
                  )}
                  <span className="font-jakarta font-medium text-white text-sm">{skill.name}</span>
                  <span className={`font-mono text-[9px] px-2 py-0.5 border tracking-widest uppercase ${catColor(skill.cat)}`}>
                    {skill.cat}
                  </span>
                </div>
                <span className="font-mono text-xs text-[#555566]">{skill.pct}%</span>
              </div>
              {/* Bar track */}
              <div className="h-px bg-white/5 relative">
                <div
                  className={`skill-fill absolute left-0 top-0 h-full transition-all duration-1200 ease-out ${barColor(skill.cat)}`}
                  style={{ width: "0%", height: "2px" }}
                  data-pct={skill.pct}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Double marquee */}
        <div className="reveal space-y-3 overflow-hidden border-y border-white/5 py-5">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...row1, ...row1].map((t, i) => (
              <span key={i} className="font-mono text-xs text-[#555566] uppercase tracking-[0.4em] px-8 border-r border-white/5 flex items-center gap-4">
                <span className="w-1 h-1 rounded-full bg-[#CCFF00]" />{t}
              </span>
            ))}
          </div>
          <div className="flex animate-marquee-rev whitespace-nowrap">
            {[...row2, ...row2].map((t, i) => (
              <span key={i} className="font-mono text-xs text-[#333344] uppercase tracking-[0.4em] px-8 border-r border-white/5 flex items-center gap-4">
                <span className="w-1 h-1 rounded-full bg-white/10" />{t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
