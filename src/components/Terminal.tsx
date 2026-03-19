"use client";
import { useState, useRef, useEffect, KeyboardEvent } from "react";

/* ─── Command Definitions ─── */

interface OutputLine {
  text: string;
  className?: string;
  isHTML?: boolean;
}

const PROFILE_JSON: OutputLine[] = [
  { text: "{", className: "text-[#888899]" },
  { text: '  "name": "Vansh Sharma",', className: "", isHTML: true },
  { text: '  "role": "Full Stack Developer",', className: "", isHTML: true },
  { text: '  "passion": "Building & ML",', className: "", isHTML: true },
  { text: '  "available": true,', className: "", isHTML: true },
  { text: '  "location": "India 🇮🇳"', className: "", isHTML: true },
  { text: "}", className: "text-[#888899]" },
];

function profileLine(line: string): OutputLine[] {
  // Parse JSON-like lines for syntax highlighting
  const match = line.match(/^(\s*)"(\w+)":\s*(".*?"|true|false|\d+)(,?)$/);
  if (match) {
    const [, indent, key, value, comma] = match;
    const isString = value.startsWith('"');
    const isBool = value === "true" || value === "false";
    return [
      {
        text: `${indent}<span class="text-[#CCFF00]">"${key}"</span><span class="text-white/30">:</span> <span class="${isString ? "text-green-400" : isBool ? "text-blue-400" : "text-orange-400"}">${value}</span><span class="text-white/30">${comma}</span>`,
        isHTML: true,
      },
    ];
  }
  return [{ text: line, className: "text-[#888899]" }];
}

function getProfileOutput(): OutputLine[] {
  const lines = [
    "{",
    '  "name": "Vansh Sharma",',
    '  "role": "Full Stack Developer",',
    '  "passion": "Building & ML",',
    '  "available": true,',
    '  "location": "India 🇮🇳"',
    "}",
  ];
  return lines.flatMap(profileLine);
}

function getHelpOutput(): OutputLine[] {
  return [
    { text: "Available commands:", className: "text-white font-semibold" },
    { text: "" },
    { text: "  help              Show this help menu", className: "text-[#888899]" },
    { text: "  whoami            About me", className: "text-[#888899]" },
    { text: "  skills            My tech stack", className: "text-[#888899]" },
    { text: "  projects          Projects I've built", className: "text-[#888899]" },
    { text: "  contact           How to reach me", className: "text-[#888899]" },
    { text: "  cat profile.json  View my profile", className: "text-[#888899]" },
    { text: "  ls                List files", className: "text-[#888899]" },
    { text: "  echo <text>       Echo text back", className: "text-[#888899]" },
    { text: "  clear             Clear the terminal", className: "text-[#888899]" },
    { text: "" },
    { text: "Type a command and press Enter ↵", className: "text-[#555566]" },
  ];
}

function getWhoamiOutput(): OutputLine[] {
  return [
    { text: "┌─────────────────────────────────────┐", className: "text-[#CCFF00]/60" },
    { text: "│  Vansh Sharma                       │", className: "text-white" },
    { text: "│  Full Stack Developer               │", className: "text-[#888899]" },
    { text: "│  📍 India                            │", className: "text-[#888899]" },
    { text: "│  🎓 Aspiring Software Engineer       │", className: "text-[#888899]" },
    { text: "│  💡 React, Next.js, ML Enthusiast    │", className: "text-[#888899]" },
    { text: "└─────────────────────────────────────┘", className: "text-[#CCFF00]/60" },
  ];
}

function getSkillsOutput(): OutputLine[] {
  return [
    { text: "⚡ Frontend", className: "text-[#CCFF00] font-semibold" },
    { text: "   React • Next.js • TypeScript • TailwindCSS • HTML/CSS", className: "text-[#888899]" },
    { text: "" },
    { text: "🔧 Backend", className: "text-[#CCFF00] font-semibold" },
    { text: "   Done: Node.js • Next.js • Express • REST APIs • MongoDB", className: "text-[#888899]" },
    { text: "   Learning: Golang", className: "text-orange-400" },
    { text: "" },
    { text: "🧠 ML / Data", className: "text-[#CCFF00] font-semibold" },
    { text: "   Python • Regression Models • Pandas • NumPy", className: "text-[#888899]" },
    { text: "" },
    { text: "🛠️  Tools", className: "text-[#CCFF00] font-semibold" },
    { text: "   Git • GitHub • VS Code • Figma • Vercel", className: "text-[#888899]" },
  ];
}

function getProjectsOutput(): OutputLine[] {
  return [
    { text: "📁 Projects", className: "text-white font-semibold" },
    { text: "" },
    { text: "  1. Portfolio Website", className: "text-[#CCFF00]" },
    { text: "     Next.js + TailwindCSS personal portfolio with interactive terminal", className: "text-[#888899]" },
    { text: "" },
    { text: "  2. ML Regression Models", className: "text-[#CCFF00]" },
    { text: "     Machine learning projects exploring regression techniques", className: "text-[#888899]" },
    { text: "" },
    { text: "  3. Full Stack Web Apps", className: "text-[#CCFF00]" },
    { text: "     MERN stack applications with REST APIs and authentication", className: "text-[#888899]" },
    { text: "" },
    { text: "  Type 'contact' to collaborate on these →", className: "text-[#555566]" },
  ];
}

function getContactOutput(): OutputLine[] {
  return [
    { text: "📬 Contact Me", className: "text-white font-semibold" },
    { text: "" },
    { text: "  GitHub    → github.com/Vcodes45", className: "text-[#888899]" },
    { text: "  LeetCode  → leetcode.com/u/Vansh2083", className: "text-[#888899]" },
    { text: "  Status    → Available for work ✅", className: "text-green-400" },
  ];
}

function getLsOutput(): OutputLine[] {
  return [
    { text: "  profile.json", className: "text-green-400" },
    { text: "  skills.txt", className: "text-green-400" },
    { text: "  projects/", className: "text-[#CCFF00]" },
    { text: "  contact.md", className: "text-green-400" },
    { text: "  README.md", className: "text-green-400" },
  ];
}

function processCommand(input: string): { output: OutputLine[]; clear?: boolean } {
  const trimmed = input.trim().toLowerCase();
  const raw = input.trim();

  if (trimmed === "clear") return { output: [], clear: true };
  if (trimmed === "help" || trimmed === "?") return { output: getHelpOutput() };
  if (trimmed === "whoami") return { output: getWhoamiOutput() };
  if (trimmed === "skills") return { output: getSkillsOutput() };
  if (trimmed === "projects") return { output: getProjectsOutput() };
  if (trimmed === "contact") return { output: getContactOutput() };
  if (trimmed === "cat profile.json") return { output: getProfileOutput() };
  if (trimmed === "ls" || trimmed === "ls -la" || trimmed === "ls -a") return { output: getLsOutput() };
  if (trimmed.startsWith("echo ")) {
    const text = raw.slice(5);
    return { output: [{ text, className: "text-white" }] };
  }
  if (trimmed === "") return { output: [] };

  return {
    output: [
      { text: `zsh: command not found: ${raw.split(" ")[0]}`, className: "text-red-400" },
      { text: "Type 'help' to see available commands", className: "text-[#555566]" },
    ],
  };
}

/* ─── History Entry ─── */
interface HistoryEntry {
  command: string;
  output: OutputLine[];
}

/* ─── Component ─── */
export default function Terminal() {
  const [history, setHistory] = useState<HistoryEntry[]>([
    { command: "cat profile.json", output: getProfileOutput() },
  ]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = () => {
    const { output, clear } = processCommand(input);
    if (clear) {
      setHistory([]);
    } else {
      setHistory((prev) => [...prev, { command: input, output }]);
    }
    if (input.trim()) {
      setCmdHistory((prev) => [input, ...prev]);
    }
    setInput("");
    setHistoryIdx(-1);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIdx = Math.min(historyIdx + 1, cmdHistory.length - 1);
        setHistoryIdx(nextIdx);
        setInput(cmdHistory[nextIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInput(cmdHistory[nextIdx]);
      } else {
        setHistoryIdx(-1);
        setInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      // Simple tab-completion
      const commands = ["help", "whoami", "skills", "projects", "contact", "cat profile.json", "ls", "echo ", "clear"];
      const match = commands.find((c) => c.startsWith(input.toLowerCase()));
      if (match) setInput(match);
    }
  };

  const focusInput = () => inputRef.current?.focus();

  return (
    <div className="reveal glass border border-white/5 rounded-none overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
        <div className="w-3 h-3 rounded-full bg-red-500/60" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
        <div className="w-3 h-3 rounded-full bg-green-500/60" />
        <span className="font-mono text-xs text-[#555566] ml-3">~/vansh — zsh</span>
      </div>

      {/* Terminal body */}
      <div
        ref={scrollRef}
        className="p-5 font-mono text-sm space-y-2 max-h-[380px] overflow-y-auto terminal-scrollbar cursor-text"
        onClick={focusInput}
      >
        {/* History */}
        {history.map((entry, i) => (
          <div key={i} className="space-y-1">
            {/* Command prompt line */}
            <p>
              <span className="text-[#CCFF00]">❯</span>{" "}
              <span className="text-white/40">{entry.command}</span>
            </p>
            {/* Output */}
            {entry.output.map((line, j) => (
              <p
                key={j}
                className={line.className || ""}
                {...(line.isHTML
                  ? { dangerouslySetInnerHTML: { __html: line.text } }
                  : { children: line.text || "\u00A0" })}
              />
            ))}
          </div>
        ))}

        {/* Active prompt */}
        <div className="flex items-center gap-1">
          <span className="text-[#CCFF00]">❯</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none border-none text-white/90 font-mono text-sm caret-[#CCFF00] placeholder:text-[#333344]"
            placeholder="type 'help' for commands..."
            spellCheck={false}
            autoComplete="off"
            autoCapitalize="off"
          />
          <span className="typewriter-cursor" />
        </div>
      </div>
    </div>
  );
}
