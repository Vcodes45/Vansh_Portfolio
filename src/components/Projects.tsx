"use client";
import { useEffect, useRef, MouseEvent } from "react";

const projects = [
  {
    index: "01",
    title: "NyayShastra",
    subtitle: "Legal Knowledge Platform",
    description:
      "Making Indian law accessible. An intelligent legal knowledge platform with smart navigation, clean reading experience, and AI-augmented search through complex legal texts.",
    tags: ["Next.js", "React", "Tailwind", "Legal Tech"],
    live: "https://nyayashastra-v2.vercel.app/",
    github: "https://github.com/Vcodes45",
    accent: "#CCFF00",
    size: "large",
  },
  {
    index: "02",
    title: "Porsche Reimagined",
    subtitle: "Automotive Visual Experience",
    description:
      "A visually immersive showcase of Porsche vehicles. Pushing the boundaries of web aesthetics with fluid animations, dramatic scroll effects, and cinematic transitions.",
    tags: ["React", "CSS Animations", "GSAP", "UI Design"],
    live: "https://porsche-reimagined.vercel.app/",
    github: "https://github.com/Vcodes45",
    accent: "#FF3B3B",
    size: "normal",
  },
  {
    index: "03",
    title: "StockMaster",
    subtitle: "Portfolio Management App",
    description:
      "Real-time stock tracking and portfolio management. Clean financial dashboards, watchlists, and data visualization for informed investment decisions.",
    tags: ["Next.js", "Finance API", "Charts", "React"],
    live: "https://stockmaster-lovat.vercel.app/",
    github: "https://github.com/Vcodes45",
    accent: "#CCFF00",
    size: "normal",
  },
  {
    index: "04",
    title: "Dormitory Management",
    subtitle: "Full Stack Admin System",
    description:
      "End-to-end hostel management system covering room allocation, student records, fee tracking, and administrative workflows — all in a clean, role-based dashboard.",
    tags: ["Full Stack", "Database", "CRUD", "Admin"],
    live: null,
    github: "https://github.com/Vcodes45",
    accent: "#888DFF",
    size: "normal",
  },
];

function TiltCard({ project, children }: { project: typeof projects[0]; children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -8;
    const rotY = ((x - cx) / cx) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;
  };

  const onMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="tilt-card transition-transform duration-200 ease-out"
      data-hover
    >
      {children}
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.querySelectorAll(".reveal").forEach((r, i) => {
            setTimeout(() => r.classList.add("visible"), i * 120);
          });
          obs.disconnect();
        }
      },
      { threshold: 0.06 }
    );
    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-32 px-6 relative overflow-hidden mesh-bg">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="absolute left-0 top-1/2 -translate-y-1/2 font-syne font-extrabold text-[20vw] text-white/[0.015] pointer-events-none select-none leading-none">
        03
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-[10px] tracking-[0.5em] text-[#CCFF00] uppercase">03 — Projects</span>
          <div className="flex-1 h-px bg-white/5 max-w-[200px]" />
        </div>

        <div className="reveal mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="font-syne font-extrabold text-[clamp(2.5rem,5vw,4rem)] text-white leading-tight">
            Things I&apos;ve <br /><span className="text-lime-gradient">Shipped.</span>
          </h2>
          <a
            href="https://github.com/Vcodes45"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[#555566] hover:text-[#CCFF00] tracking-widest uppercase transition-colors hover-underline self-end"
            data-hover
          >
            All repos on GitHub ↗
          </a>
        </div>

        {/* Projects list */}
        <div className="space-y-5">
          {projects.map((project, idx) => (
            <div key={project.index} className={`reveal stagger-${idx + 1}`}>
              <TiltCard project={project}>
                <div
                  className="glass border border-white/5 p-7 md:p-9 group hover:border-white/10 transition-all duration-500 relative overflow-hidden"
                  style={{ "--hover-color": project.accent } as React.CSSProperties}
                >
                  {/* Background glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse 60% 50% at 50% 0%, ${project.accent}08 0%, transparent 70%)` }}
                  />

                  <div className="relative grid md:grid-cols-[80px_1fr_auto] gap-6 md:gap-10 items-start">
                    {/* Index */}
                    <div className="font-syne font-extrabold text-6xl text-white/5 group-hover:text-white/10 transition-colors duration-500 leading-none select-none mt-1">
                      {project.index}
                    </div>

                    {/* Content */}
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-syne font-bold text-2xl text-white group-hover:text-[#CCFF00] transition-colors duration-300 tilt-inner glitch-text" data-text={project.title}>
                          {project.title}
                        </h3>
                      </div>
                      <p className="font-mono text-xs text-[#555566] tracking-widest uppercase mb-4">{project.subtitle}</p>
                      <p className="font-jakarta text-[#888899] text-sm leading-relaxed mb-5 max-w-xl">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[10px] px-3 py-1.5 border border-white/5 text-[#555566] tracking-widest uppercase group-hover:border-white/10 transition-colors duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex md:flex-col gap-3 self-center">
                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn relative font-mono text-xs px-5 py-3 bg-[#CCFF00] text-black font-medium overflow-hidden text-center whitespace-nowrap"
                          data-hover
                        >
                          <span className="relative z-10 group-hover/btn:text-black transition-colors">Live ↗</span>
                          <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover/btn:translate-x-0 transition-transform duration-300" />
                        </a>
                      ) : (
                        <span className="font-mono text-xs px-5 py-3 border border-white/5 text-[#333344] text-center whitespace-nowrap cursor-not-allowed">
                          Private
                        </span>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs px-5 py-3 border border-white/8 text-[#555566] hover:border-[#CCFF00]/30 hover:text-[#CCFF00] transition-all duration-300 text-center whitespace-nowrap glass"
                        data-hover
                      >
                        Code ↗
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
