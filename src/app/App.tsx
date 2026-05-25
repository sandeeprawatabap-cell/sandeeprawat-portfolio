import { useState } from "react";
import { motion } from "motion/react";
import {
  Award,
  Briefcase,
  Code2,
  Globe,
  Layers,
  Mail,
  MapPin,
  Server,
  Shield,
  TrendingUp,
  Users,
  Zap,
  ExternalLink,
  CheckCircle2,
  BarChart3,
  Cloud,
  Database,
  GitBranch,
  Package,
  ArrowRight,
  Star,
  BookOpen,
  Cpu,
  Brain,
  Sparkles,
  Bot,
  Network,
} from "lucide-react";

const NAV_ITEMS = ["About", "Competencies", "Roadmap", "Expertise", "AI Journey", "Certifications", "Achievements", "Contact"];

const STATS = [
  { label: "Years Experience", value: "17+" },
  { label: "SAP Implementations", value: "15+" },
  { label: "Countries Served", value: "12" },
  { label: "Enterprise Clients", value: "17+" },
];

const TICKER_ITEMS = [
  "SAP Enterprise Architecture",
  "S/4HANA Transformation",
  "Generative AI on SAP BTP",
  "LangChain & LangGraph",
  "SAP AI Core",
  "Program Management · PMP®",
  "SAP Fiori & UI5",
  "ABAP Development",
  "SAP GRC & Compliance",
  "Digital Transformation",
  "SAP Joule",
  "Automotive Industry SAP",
  "SAP Generative AI Developer",
  "Agile & Scrum",
];

const TRUSTED_AT = [
  "Volkswagen Group Digital Solution India",
  "IBM",
  "Deluxe",
  "Tata Consultancy Services",
  "Keane India",
];

const SERVICES = [
  {
    icon: Layers,
    title: "SAP Enterprise Architecture",
    desc: "Design and govern scalable S/4HANA landscapes — from greenfield blueprinting and fit-gap analysis to global template definition and multi-country rollouts.",
    tags: ["S/4HANA", "Greenfield", "Global Template", "Solution Design"],
    cta: "Architecture Advisory",
  },
  {
    icon: Brain,
    title: "Generative AI on SAP BTP",
    desc: "Embed intelligent automation into SAP workflows using SAP AI Core, Generative AI Hub, LangChain, LangGraph, and RAG on HANA Cloud Vector Engine.",
    tags: ["Gen AI Hub", "AI Core", "LangChain", "RAG", "Joule"],
    cta: "AI Integration",
  },
  {
    icon: Users,
    title: "SAP Program Management",
    desc: "Lead complex multi-vendor, multi-country SAP transformation programmes with PMP®-grade governance, risk management, and onsite-offshore coordination.",
    tags: ["PMP®", "Governance", "Multi-vendor", "Risk Management"],
    cta: "Program Leadership",
  },
  {
    icon: TrendingUp,
    title: "SAP Transformation Advisory",
    desc: "Strategic advisory on SAP roadmap, RISE with SAP migration, TCO optimisation, and building SAP Centres of Excellence for sustained enterprise innovation.",
    tags: ["Advisory", "RISE with SAP", "TCO", "CoE", "Strategy"],
    cta: "Start Advisory",
  },
];

const ROADMAP = [
  {
    year: "2009",
    role: "SAP Consultant",
    company: "Keane India Ltd",
    location: "India",
    desc: "Began SAP career delivering functional consulting engagements for enterprise clients. Built strong foundations in SAP configuration, client engagement, and onsite-offshore delivery models.",
    tags: ["SAP", "Functional", "ERP", "Consulting"],
  },
  {
    year: "2010",
    role: "Senior SAP Analyst",
    company: "Tata Consultancy Services",
    location: "India",
    desc: "Worked on SAP Standard Product — SAP PPM (Portfolio and Project Management). Delivered enhancements and production support for large-scale enterprise SAP engagements.",
    tags: ["SAP PPM", "ABAP", "Functional", "TCS"],
  },
  {
    year: "2012",
    role: "SAP Specialist",
    company: "IBM",
    location: "India",
    desc: "Provided deep SAP specialist expertise across multiple IBM client programmes. Led cross-functional teams in SAP solution design, implementation, and strategic advisory.",
    tags: ["S/4HANA", "Architecture", "Advisory", "IBM"],
  },
  {
    year: "2015",
    role: "SAP Principal Consultant",
    company: "Deluxe",
    location: "India / Global",
    desc: "Drove enterprise SAP transformation initiatives as Principal Consultant. Specialised in architecture design, project governance, and complex onsite-offshore multi-vendor delivery.",
    tags: ["SAP", "SAP Enterprise Architect", "Governance", "S/4HANA"],
  },
  {
    year: "2020",
    role: "SAP AI Evangelist | SAP Enterprise Architect",
    company: "Volkswagen Group Digital Solution India",
    location: "Pune, India",
    desc: "Leading SAP transformation programmes for Volkswagen Group as SAP AI Evangelist and Enterprise Architect. Driving S/4HANA adoption, Generative AI integration on SAP BTP, and enterprise architecture strategy across the global Volkswagen landscape.",
    tags: ["S/4HANA", "SAP AI Evangelist", "SAP Enterprise Architect", "Automotive"],
  },
];

const SAP_MODULES = [
  { name: "SAP Program Management", level: 99 },
  { name: "SAP Greenfield/Brownfield Transformation", level: 95 },
  { name: "S/4HANA Supply Chain (MM/SD/PP)", level: 90 },
  { name: "SAP BTP & Integration Suite", level: 88 },
  { name: "SAP Generative AI & AI Core", level: 87 },
  { name: "SAP Fiori / UI5", level: 88 },
  { name: "SAP Change Management", level: 80 },
  { name: "SAP PPM / Portfolio Management", level: 87 },
];

const TECH_SKILLS = [
  { icon: Cloud,     label: "Cloud Platforms",  items: ["AWS", "Azure", "SAP BTP", "Cloud Foundry"] },
  { icon: Database,  label: "Data & Analytics", items: ["SAP Datasphere", "BW/4HANA", "SAC", "HANA Vector Engine"] },
  { icon: GitBranch, label: "Integration",      items: ["SAP Integration Suite", "SAP PI/PO", "REST/SOAP", "APIs"] },
  { icon: Code2,     label: "Development",      items: ["ABAP OO", "SAP Fiori", "CAP (Node/Java)", "Python"] },
  { icon: Brain,     label: "AI & GenAI",       items: ["SAP Gen AI Hub", "LangChain", "LangGraph", "RAG"] },
  { icon: BarChart3, label: "Architecture",     items: ["SAP EA Framework", "TOGAF", "Solution Architecture", "Microservices"] },
];

const AI_ROADMAP = [
  {
    step: "01", icon: Brain,
    title: "AI & ML Fundamentals",
    desc: "Built foundational understanding of Machine Learning, Deep Learning, Neural Networks, and enterprise AI strategy.",
    tags: ["Python", "ML Basics", "Neural Networks", "scikit-learn"],
    status: "completed",
  },
  {
    step: "02", icon: Code2,
    title: "LangChain Framework",
    desc: "Mastered LangChain for LLM-powered apps — RAG pipelines, prompt templates, memory, and tool-calling agents.",
    tags: ["LangChain", "RAG", "LLMs", "Vector DBs"],
    status: "completed",
  },
  {
    step: "03", icon: Network,
    title: "LangGraph — Agentic AI",
    desc: "Built stateful multi-step AI agents using LangGraph with conditional routing and human-in-the-loop patterns.",
    tags: ["LangGraph", "AI Agents", "State Machines", "Orchestration"],
    status: "completed",
  },
  {
    step: "04", icon: Server,
    title: "SAP AI Foundation & BTP AI Core",
    desc: "Deployed AI models on SAP AI Core — resource groups, model serving, AI Launchpad, and AI API integration.",
    tags: ["SAP AI Core", "BTP", "AI Launchpad", "Model Serving"],
    status: "completed",
  },
  {
    step: "05", icon: Sparkles,
    title: "SAP Generative AI Hub",
    desc: "Built GenAI apps via SAP's unified Gen AI Hub — GPT-4, Claude, Gemini; prompt registries and HANA Vector RAG.",
    tags: ["Gen AI Hub", "Prompt Engineering", "LLM Gateway", "HANA Vector"],
    status: "completed",
  },
  {
    step: "06", icon: Award,
    title: "SAP Generative AI Developer — Certified",
    desc: "Achieved SAP Certified Associate — Generative AI Developer (C_AIG), validating expertise across BTP AI Core, Gen AI Hub, and LangChain RAG.",
    tags: ["C_AIG", "SAP Certified", "Gen AI", "BTP AI Core"],
    status: "certified",
  },
  {
    step: "07", icon: Bot,
    title: "SAP Joule for Developers",
    desc: "Extending SAP Joule with custom skills via Joule Studio — multi-skill agents integrated with S/4HANA and SAP Build Code.",
    tags: ["SAP Joule", "Joule Studio", "AI Copilot", "Agent Builder"],
    status: "in-progress",
  },
  {
    step: "08", icon: Globe,
    title: "SAP AI Evangelist",
    desc: "Architecting enterprise-grade AI on SAP — multi-agent RAG, SAP AI Core, Generative AI Hub, and Joule at scale.",
    tags: ["AI Architecture", "Enterprise AI", "Multi-Agent", "SAP BTP"],
    status: "current",
  },
];

const CERTIFICATIONS = [
  { title: "SAP Generative AI Developer", issuer: "SAP SE", year: "2025", badge: "C_AIG", image: "/sap-gen-ai-cert.png", imgFit: "cover" as const },
  { title: "Project Management Professional", issuer: "Project Management Institute", year: "Active", badge: "PMP®", image: "/pmp-badge.png", imgFit: "contain" as const },
  { title: "Certified Associate in Project Management", issuer: "Project Management Institute", year: "Active", badge: "CAPM®", image: "/capm-badge.png", imgFit: "contain" as const },
  { title: "SAP Certified Development Specialist — ABAP for SAP HANA", issuer: "SAP SE", year: "2014", badge: "HANA ABAP", image: "/hana-abap-badge-lg.png", imgFit: "contain" as const },
  { title: "SAP Certified Development Associate — SAP Fiori Application Developer", issuer: "SAP SE", year: "Active", badge: "SAP Fiori", image: "/sap-fiori-badge.png", imgFit: "contain" as const },
  { title: "Scrum Master Certified", issuer: "SCRUMstudy", year: "Active", badge: "SMC™", image: null, imgFit: "contain" as const },
];

const ACHIEVEMENTS = [
  {
    icon: TrendingUp,
    title: "S/4HANA Greenfield Transformation",
    company: "Volkswagen Group Digital Solution India — Automotive",
    desc: "Leading end-to-end SAP S/4HANA transformation at Volkswagen Group as SAP AI Evangelist and Enterprise Architect — governance, architecture, and multi-team delivery.",
    impact: "On-time delivery, zero disruption",
  },
  {
    icon: Globe,
    title: "Multi-Country SAP Rollout",
    company: "Global Enterprise — EMEA",
    desc: "Designed global SAP template and managed country localisations for a GxP-compliant ERP programme. Introduced centralised master data governance across business units.",
    impact: "99%+ system uptime post-go-live",
  },
  {
    icon: Zap,
    title: "Onsite-Offshore Delivery Model",
    company: "Top-tier IT Firms — Global",
    desc: "Expert in transitioning complex SAP programmes between onshore and offshore teams across multiple vendors and time zones while maintaining quality.",
    impact: "30% reduction in delivery overhead",
  },
  {
    icon: Users,
    title: "SAP Centre of Excellence",
    company: "IBM — India",
    desc: "Built and contributed to SAP CoEs at IBM — architecture review processes, delivery accelerators, and reusable asset libraries for client programmes.",
    impact: "Faster kick-off, stronger quality gates",
  },
  {
    icon: Server,
    title: "SAP PPM Implementation",
    company: "Tata Consultancy Services — India",
    desc: "Delivered SAP Portfolio and Project Management standard product implementations and enhancements for large enterprise clients — working directly on SAP's own product codebase.",
    impact: "SAP Standard Product contributor",
  },
  {
    icon: Layers,
    title: "SAP Digital Transformation Leader",
    company: "Deluxe — Global",
    desc: "Principal Consultant driving enterprise-wide SAP transformation at Deluxe — architecture design, governance, and complex multi-vendor onsite-offshore programme management over 4+ years.",
    impact: "4 years 10 months sustained delivery",
  },
];

const PRODUCTS = [
  {
    icon: Cpu,       category: "Framework",          name: "S4Accelerate",
    tagline: "SAP S/4HANA Greenfield Starter Kit",
    desc: "Pre-configured S/4HANA template library with 200+ tested process scenarios, RICEFW catalog, and automated fit-gap documentation.",
    tags: ["S/4HANA", "ABAP", "CAP", "Fiori"], stars: 1240, downloads: "4.8K", status: "Open Source",
  },
  {
    icon: GitBranch, category: "Integration Toolkit", name: "BTP Connect Pro",
    tagline: "SAP BTP Integration Accelerator",
    desc: "Production-ready iFlow templates for 40+ SAP-to-cloud integration patterns with monitoring dashboards and error alerting.",
    tags: ["BTP", "Integration Suite", "API", "iFlow"], stars: 876, downloads: "3.2K", status: "Open Source",
  },
  {
    icon: Shield,    category: "Compliance Tool",    name: "GRC Analyzer",
    tagline: "SAP GRC SOD Risk Detection Engine",
    desc: "Automated Segregation of Duties engine generating board-ready risk reports and remediation roadmaps compliant with SoX and GDPR.",
    tags: ["GRC", "SoX", "GDPR", "Risk"], stars: 543, downloads: "1.9K", status: "Commercial",
  },
  {
    icon: BarChart3, category: "Analytics",          name: "SAP EA Canvas",
    tagline: "Enterprise Architecture Visualizer",
    desc: "Auto-generates architecture diagrams from SAP Solution Manager data with TOGAF ArchiMate notation and Confluence/PowerPoint export.",
    tags: ["TOGAF", "ArchiMate", "SolMan", "Visio"], stars: 698, downloads: "2.6K", status: "Commercial",
  },
  {
    icon: BookOpen,  category: "Knowledge Base",     name: "SAP Mentor Playbooks",
    tagline: "Enterprise Transformation Methodology",
    desc: "30+ architecture decision records, governance templates, and TCO models from 17 years of real SAP programmes. Used by 200+ architects globally.",
    tags: ["Methodology", "TCO", "Governance", "Templates"], stars: 2100, downloads: "12K", status: "Open Source",
  },
  {
    icon: Package,   category: "AI Add-on",          name: "DemandIQ for SAP",
    tagline: "ML Demand Forecasting on S/4HANA APO",
    desc: "Python-based ML demand forecasting embedded into SAP IBP/APO via BTP AI Core, trained on 5 years of retail and pharma data.",
    tags: ["AI/ML", "BTP AI Core", "IBP", "Python"], stars: 412, downloads: "890", status: "Commercial",
  },
];

const CONTACT_ITEMS = [
  { icon: Mail,   label: "Email",    value: "sandeeprawatabap@gmail.com" },
  { icon: MapPin, label: "Location", value: "Pune, Maharashtra, India" },
  { icon: Globe,  label: "LinkedIn", value: "linkedin.com/in/sandeep-rawat-pmp-b72a55219" },
];

const STATUS_CONFIG = {
  completed:    { label: "Completed",    bg: "rgba(26,58,110,0.07)",   color: "#1A3A6E",  dot: "#4A7BC8" },
  certified:    { label: "Certified ⭐", bg: "rgba(196,155,75,0.12)",  color: "#8B6914",  dot: "#C49B4B" },
  "in-progress":{ label: "In Progress", bg: "rgba(26,58,110,0.06)",   color: "#2C5FAA",  dot: "#5B9BD5" },
  current:      { label: "Current Role",bg: "rgba(196,155,75,0.10)",  color: "#8B6914",  dot: "#C49B4B" },
};

// ── Shared components ─────────────────────────────────────────
function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium" style={{ color: "var(--foreground)", fontFamily: "Inter, sans-serif" }}>{name}</span>
        <span className="text-xs font-semibold tabular-nums" style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--primary)" }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--muted)" }}>
        <motion.div className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg, var(--primary) 0%, #C49B4B 100%)" }}
          initial={{ width: 0 }} whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.3, delay, ease: [0.25, 0.46, 0.45, 0.94] }} viewport={{ once: true }} />
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="h-px w-6" style={{ background: "var(--accent)" }} />
      <span className="text-xs font-semibold uppercase tracking-[0.18em]"
        style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--accent)" }}>
        {children}
      </span>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-2.5 py-0.5 rounded text-xs"
      style={{ background: "rgba(26,58,110,0.06)", color: "var(--muted-foreground)", fontFamily: "JetBrains Mono, monospace", fontSize: "11px", border: "1px solid rgba(26,58,110,0.10)" }}>
      {children}
    </span>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("About");
  const [activeRoadmapItem, setActiveRoadmapItem] = useState(4);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase().replace(/\s+/g, "-"));
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "Inter, sans-serif" }}>

      {/* ── Subtle warm background ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 40% at 50% -5%, rgba(196,155,75,0.10) 0%, transparent 60%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 30% at 80% 100%, rgba(26,58,110,0.05) 0%, transparent 60%)" }} />
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle, rgba(26,58,110,0.07) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%)",
        }} />
        <style>{`
          @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        `}</style>
      </div>

      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border" style={{ backdropFilter: "blur(20px)", background: "rgba(248,246,241,0.95)", boxShadow: "0 1px 8px rgba(13,27,46,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm flex items-center justify-center text-xs font-bold" style={{ background: "var(--primary)", color: "var(--primary-foreground)", fontFamily: "Outfit, sans-serif" }}>SR</div>
            <div>
              <div className="text-sm font-semibold leading-none" style={{ fontFamily: "Outfit, sans-serif", color: "var(--foreground)" }}>Sandeep Rawat</div>
              <div className="text-xs leading-none mt-0.5" style={{ color: "var(--muted-foreground)", fontFamily: "JetBrains Mono, monospace" }}>SAP Enterprise Architect | SAP AI Evangelist</div>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-0">
            {NAV_ITEMS.map((item) => (
              <button key={item} onClick={() => scrollTo(item)} className="relative px-3 py-2 text-xs transition-all duration-200"
                style={{ color: activeSection === item ? "var(--primary)" : "var(--muted-foreground)", fontFamily: "Inter, sans-serif", fontWeight: activeSection === item ? 600 : 400, letterSpacing: "0.02em" }}>
                {item}
                {activeSection === item && (
                  <motion.div layoutId="nav-underline" className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                    style={{ background: "var(--accent)" }} transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                )}
              </button>
            ))}
          </div>
          <a href="mailto:sandeeprawatabap@gmail.com" className="hidden md:flex items-center gap-2 text-xs px-4 py-2 rounded-sm transition-all duration-200 hover:opacity-85"
            style={{ background: "var(--primary)", color: "var(--primary-foreground)", fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
            <Mail size={12} /> Connect
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section id="about" className="relative overflow-hidden" style={{ minHeight: "92vh", background: "#050508" }}>

        {/* Full-bleed profile photo — merged background effect */}
        <div className="absolute inset-0">
          <img src="/profile.jpg" alt=""
            className="absolute"
            style={{
              top: 0, right: "-4%",
              width: "48%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "40% 12%",
              transform: "scale(1.25)",
              transformOrigin: "50% 12%",
              filter: "brightness(0.72) saturate(0.85)",
            }} />
          {/* Sharp gradient: left 52% pure dark, right shows photo */}
          <div className="absolute inset-0" style={{
            background: "linear-gradient(to right, #050508 48%, rgba(5,5,8,0.72) 58%, rgba(5,5,8,0.08) 72%, transparent 100%)"
          }} />
          {/* Top fade for navbar clearance */}
          <div className="absolute top-0 left-0 right-0" style={{ height: "120px", background: "linear-gradient(to bottom, #050508, transparent)" }} />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0" style={{ height: "160px", background: "linear-gradient(to bottom, transparent, #050508)" }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center" style={{ minHeight: "92vh" }}>
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 items-center w-full pt-28 pb-16">

            {/* Left — large text overlaying image */}
            <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              {/* Status badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 border"
                style={{ background: "rgba(196,155,75,0.08)", borderColor: "rgba(196,155,75,0.25)" }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#4ade80", boxShadow: "0 0 6px #4ade80" }} />
                <span className="text-xs" style={{ fontFamily: "JetBrains Mono, monospace", color: "rgba(240,237,230,0.6)" }}>
                  Available · View Capabilities · Pune, India
                </span>
              </div>

              <h1 className="font-bold leading-[1.0] mb-6 tracking-tight"
                style={{ fontFamily: "Outfit, sans-serif", fontSize: "clamp(3.2rem, 7vw, 5.5rem)", color: "#F0EDE6" }}>
                Helping<br />
                <span style={{ color: "var(--primary)" }}>Organizations</span><br />
                Transform with SAP
              </h1>

              <div className="flex flex-wrap gap-3 mb-12">
                <button onClick={() => scrollTo("Services")}
                  className="flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-semibold transition-all duration-200 hover:opacity-88"
                  style={{ background: "var(--primary)", color: "var(--primary-foreground)", fontFamily: "Outfit, sans-serif" }}>
                  View Competencies <ArrowRight size={15} />
                </button>
                <button onClick={() => scrollTo("AI Journey")}
                  className="flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-medium border transition-all duration-200"
                  style={{ borderColor: "rgba(240,237,230,0.2)", color: "#F0EDE6", fontFamily: "Outfit, sans-serif", background: "transparent" }}>
                  SAP AI Journey <ExternalLink size={14} />
                </button>
              </div>

              {/* Delivered at */}
              <div>
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "rgba(240,237,230,0.38)", fontFamily: "JetBrains Mono, monospace" }}>
                  Delivered at
                </p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  {TRUSTED_AT.map((company, i) => (
                    <span key={company} className="text-sm font-medium" style={{ color: i === 0 ? "var(--primary)" : "rgba(240,237,230,0.5)" }}>
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right — bio + stats (overlaps the photo) */}
            <motion.div className="flex flex-col gap-7" initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>

              {/* Name / title */}
              <div>
                <div className="font-bold text-xl mb-1" style={{ fontFamily: "Outfit, sans-serif", color: "#F0EDE6" }}>
                  Sandeep Rawat <span style={{ color: "var(--primary)", fontSize: "0.7em" }}>PMP®</span>
                </div>
                <div className="text-sm mb-1.5" style={{ color: "rgba(240,237,230,0.6)" }}>SAP AI Evangelist | SAP Enterprise Architect</div>
                <div className="flex items-center gap-1.5 text-xs" style={{ color: "rgba(240,237,230,0.4)" }}>
                  <MapPin size={11} /> Pune, Maharashtra · India
                </div>
              </div>

              {/* Bio */}
              <div>
                <p className="text-base leading-relaxed mb-3" style={{ color: "rgba(240,237,230,0.8)" }}>
                  I'm <strong style={{ color: "#F0EDE6" }}>Sandeep Rawat PMP®</strong> — SAP AI Evangelist & Enterprise Architect with 17+ years driving complex SAP transformations at Volkswagen, IBM, Deluxe, and TCS.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(240,237,230,0.5)" }}>
                  From S/4HANA architecture to Generative AI on SAP BTP — I bridge enterprise strategy with hands-on delivery. SAP Gen AI Certified · PMP® · 6 active certifications.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                {STATS.map((stat) => (
                  <div key={stat.label} className="p-4 rounded-xl border"
                    style={{ background: "rgba(240,237,230,0.04)", borderColor: "rgba(240,237,230,0.08)" }}>
                    <div className="text-2xl font-bold mb-1" style={{ fontFamily: "Outfit, sans-serif", color: "var(--primary)" }}>{stat.value}</div>
                    <div className="text-xs uppercase tracking-wider" style={{ color: "rgba(240,237,230,0.4)", fontFamily: "JetBrains Mono, monospace" }}>{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Cert badge */}
              <div className="p-4 rounded-xl border flex items-center gap-4"
                style={{ background: "rgba(196,155,75,0.06)", borderColor: "rgba(196,155,75,0.2)" }}>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(196,155,75,0.12)" }}>
                  <Sparkles size={17} style={{ color: "#C49B4B" }} />
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ fontFamily: "Outfit, sans-serif", color: "#F0EDE6" }}>SAP Gen AI Certified · PMP®</div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(240,237,230,0.45)" }}>SAP AI Evangelist · 6 Active Certifications</div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ── Core Competencies ── */}
      <section id="services" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Core Competencies</SectionLabel>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <h2 className="text-4xl font-bold tracking-tight" style={{ fontFamily: "Outfit, sans-serif", color: "var(--foreground)" }}>
              Areas of Deep<br />SAP Expertise
            </h2>
            <p className="max-w-sm text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              17+ years of hands-on SAP experience spanning enterprise architecture, AI integration, program governance, and digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SERVICES.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div key={svc.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }}
                  className="flex flex-col p-8 rounded-xl border"
                  style={{ background: "var(--card)", borderColor: "var(--border)", boxShadow: "0 1px 4px rgba(13,27,46,0.05)" }}>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-11 h-11 rounded-lg flex items-center justify-center" style={{ background: "rgba(196,155,75,0.10)", border: "1px solid rgba(196,155,75,0.18)" }}>
                      <Icon size={20} style={{ color: "#C49B4B" }} />
                    </div>
                    <span className="text-xs" style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--primary)", opacity: 0.4 }}>0{i + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "Outfit, sans-serif", color: "var(--foreground)" }}>{svc.title}</h3>
                  <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "var(--muted-foreground)" }}>{svc.desc}</p>
                  <div className="flex flex-wrap gap-1.5">{svc.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Career Roadmap ── */}
      <section id="roadmap" className="relative z-10 py-24 px-6" style={{ background: "var(--secondary)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Professional Journey</SectionLabel>
          <h2 className="text-4xl font-bold mb-14 tracking-tight" style={{ fontFamily: "Outfit, sans-serif", color: "var(--foreground)" }}>Career Roadmap</h2>
          <div className="relative">
            {ROADMAP.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: i * 0.07 }} viewport={{ once: true }}
                className="relative flex gap-6 mb-0">
                <div className="flex flex-col items-center flex-shrink-0" style={{ width: "48px" }}>
                  <button onClick={() => setActiveRoadmapItem(i)} className="w-10 h-10 rounded-full border-2 flex items-center justify-center z-10 transition-all duration-200 flex-shrink-0"
                    style={{ borderColor: activeRoadmapItem === i ? "var(--primary)" : "var(--border)", background: activeRoadmapItem === i ? "var(--primary)" : "var(--card)" }}>
                    <Briefcase size={14} style={{ color: activeRoadmapItem === i ? "var(--primary-foreground)" : "var(--muted-foreground)" }} />
                  </button>
                  {i < ROADMAP.length - 1 && <div className="flex-1 w-px mt-1 mb-1" style={{ background: "var(--border)", minHeight: "3rem" }} />}
                </div>
                <div className="pb-8 flex-1">
                  <button onClick={() => setActiveRoadmapItem(i)} className="text-left w-full">
                    <div className="text-xs font-medium mb-1" style={{ fontFamily: "JetBrains Mono, monospace", color: "#C49B4B" }}>{item.year}</div>
                    <div className="text-lg font-semibold mb-0.5 transition-colors" style={{ fontFamily: "Outfit, sans-serif", color: activeRoadmapItem === i ? "var(--foreground)" : "var(--muted-foreground)" }}>{item.role}</div>
                    <div className="flex items-center gap-3 text-sm mb-3" style={{ color: "var(--muted-foreground)" }}>
                      <span className="flex items-center gap-1"><Briefcase size={11} /> {item.company}</span>
                      <span className="flex items-center gap-1"><MapPin size={11} /> {item.location}</span>
                    </div>
                  </button>
                  {activeRoadmapItem === i && (
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="p-5 rounded-xl border"
                      style={{ background: "var(--card)", borderColor: "rgba(196,155,75,0.25)", boxShadow: "0 4px 16px rgba(196,155,75,0.08)" }}>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--foreground)", opacity: 0.80 }}>{item.desc}</p>
                      <div className="flex flex-wrap gap-1.5">{item.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Expertise ── */}
      <section id="expertise" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Technology Stack</SectionLabel>
          <h2 className="text-4xl font-bold mb-14 tracking-tight" style={{ fontFamily: "Outfit, sans-serif", color: "var(--foreground)" }}>Technology Expertise</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-2 mb-8">
                <div className="w-1 h-5 rounded-full" style={{ background: "var(--primary)" }} />
                <h3 className="text-base font-semibold" style={{ fontFamily: "Outfit, sans-serif", color: "var(--foreground)" }}>SAP Module Proficiency</h3>
              </div>
              {SAP_MODULES.map((mod, i) => <SkillBar key={mod.name} name={mod.name} level={mod.level} delay={i * 0.08} />)}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-8">
                <div className="w-1 h-5 rounded-full" style={{ background: "#C49B4B" }} />
                <h3 className="text-base font-semibold" style={{ fontFamily: "Outfit, sans-serif", color: "var(--foreground)" }}>Technology Domains</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {TECH_SKILLS.map(({ icon: Icon, label, items }) => (
                  <div key={label} className="p-5 rounded-xl border transition-all duration-200 hover:border-primary/25 hover:shadow-sm"
                    style={{ background: "var(--card)", borderColor: "var(--border)", boxShadow: "0 1px 3px rgba(13,27,46,0.05)" }}>
                    <div className="flex items-center gap-2 mb-3">
                      <Icon size={14} style={{ color: "var(--primary)" }} />
                      <span className="text-sm font-semibold" style={{ fontFamily: "Outfit, sans-serif", color: "var(--foreground)" }}>{label}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">{items.map((it) => <Tag key={it}>{it}</Tag>)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SAP AI Journey ── */}
      <section id="ai-journey" className="relative z-10 py-24 px-6" style={{ background: "var(--secondary)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Generative AI Evolution</SectionLabel>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <h2 className="text-4xl font-bold tracking-tight" style={{ fontFamily: "Outfit, sans-serif", color: "var(--foreground)" }}>SAP AI Journey</h2>
            <p className="max-w-md text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              From AI fundamentals to SAP Certified Generative AI Developer — LangChain, LangGraph, SAP AI Core, Generative AI Hub, and SAP Joule.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {AI_ROADMAP.map((step, i) => {
              const cfg = STATUS_CONFIG[step.status as keyof typeof STATUS_CONFIG];
              const Icon = step.icon;
              const isCertified = step.status === "certified";
              return (
                <motion.div key={step.step} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.07 }} viewport={{ once: true }}
                  className="flex flex-col p-5 rounded-xl border transition-all duration-200 hover:border-primary/25 hover:shadow-sm"
                  style={{ background: "var(--card)", borderColor: isCertified ? "rgba(196,155,75,0.35)" : "var(--border)", boxShadow: isCertified ? "0 2px 16px rgba(196,155,75,0.10)" : "0 1px 4px rgba(13,27,46,0.05)" }}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold" style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--primary)", opacity: 0.4 }}>{step.step}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: cfg.bg, color: cfg.color, fontFamily: "JetBrains Mono, monospace", fontSize: "10px" }}>{cfg.label}</span>
                  </div>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3" style={{ background: isCertified ? "rgba(196,155,75,0.12)" : "rgba(26,58,110,0.07)" }}>
                    <Icon size={17} style={{ color: isCertified ? "#C49B4B" : "var(--primary)" }} />
                  </div>
                  <h3 className="text-sm font-bold mb-2 leading-snug" style={{ fontFamily: "Outfit, sans-serif", color: "var(--foreground)" }}>{step.title}</h3>
                  <p className="text-xs leading-relaxed flex-1 mb-3" style={{ color: "var(--muted-foreground)" }}>{step.desc}</p>
                  <div className="flex flex-wrap gap-1">{step.tags.slice(0, 3).map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 justify-center">
            {Object.entries(STATUS_CONFIG).map(([key, cfg]) => (
              <div key={key} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ background: cfg.dot }} />
                <span className="text-xs" style={{ color: "var(--muted-foreground)", fontFamily: "JetBrains Mono, monospace" }}>{cfg.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section id="certifications" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Credentials</SectionLabel>
          <h2 className="text-4xl font-bold mb-14 tracking-tight" style={{ fontFamily: "Outfit, sans-serif", color: "var(--foreground)" }}>Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div key={cert.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.07 }} viewport={{ once: true }}
                className="rounded-xl border overflow-hidden transition-all duration-200 hover:border-primary/25 hover:shadow-sm"
                style={{ background: "var(--card)", borderColor: i === 0 ? "rgba(196,155,75,0.35)" : "var(--border)", boxShadow: i === 0 ? "0 4px 16px rgba(196,155,75,0.08)" : "0 1px 4px rgba(13,27,46,0.05)" }}>
                {/* Badge image area */}
                <div className="flex items-center justify-center" style={{ height: "140px", background: i === 0 ? "#0a1a4e" : i <= 2 ? "#f8f8f8" : "#f4f4f4", overflow: "hidden" }}>
                  {cert.image ? (
                    <img src={cert.image} alt={cert.title}
                      style={{ maxHeight: "130px", maxWidth: "100%", objectFit: cert.imgFit, padding: cert.imgFit === "contain" ? "10px" : "0" }} />
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "rgba(196,155,75,0.12)", border: "2px solid rgba(196,155,75,0.3)" }}>
                        <CheckCircle2 size={26} style={{ color: "#C49B4B" }} />
                      </div>
                      <span className="text-xs font-bold" style={{ fontFamily: "JetBrains Mono, monospace", color: "#C49B4B" }}>{cert.badge}</span>
                    </div>
                  )}
                </div>
                {/* Card info */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="text-xs font-medium" style={{ fontFamily: "JetBrains Mono, monospace", color: "#C49B4B" }}>{cert.badge}</div>
                    <span className="text-xs" style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--muted-foreground)" }}>{cert.year}</span>
                  </div>
                  <h4 className="text-sm font-semibold leading-snug mb-0.5" style={{ fontFamily: "Outfit, sans-serif", color: "var(--foreground)" }}>{cert.title}</h4>
                  <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Achievements ── */}
      <section id="achievements" className="relative z-10 py-24 px-6" style={{ background: "var(--secondary)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Case Studies</SectionLabel>
          <h2 className="text-4xl font-bold mb-14 tracking-tight" style={{ fontFamily: "Outfit, sans-serif", color: "var(--foreground)" }}>Key Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ACHIEVEMENTS.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }}
                className="flex flex-col p-6 rounded-xl border transition-all duration-200 hover:border-primary/20 hover:shadow-sm"
                style={{ background: "var(--card)", borderColor: "var(--border)", boxShadow: "0 1px 4px rgba(13,27,46,0.05)" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5" style={{ background: "rgba(26,58,110,0.07)" }}>
                  <item.icon size={19} style={{ color: "var(--primary)" }} />
                </div>
                <h3 className="text-base font-bold mb-1" style={{ fontFamily: "Outfit, sans-serif", color: "var(--foreground)" }}>{item.title}</h3>
                <div className="text-xs mb-4" style={{ color: "var(--muted-foreground)", fontFamily: "JetBrains Mono, monospace" }}>{item.company}</div>
                <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "var(--muted-foreground)" }}>{item.desc}</p>
                <div className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full self-start"
                  style={{ background: "rgba(196,155,75,0.08)", color: "#8B6914", fontFamily: "JetBrains Mono, monospace", border: "1px solid rgba(196,155,75,0.20)" }}>
                  <TrendingUp size={11} />{item.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Get in Touch</SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-5 tracking-tight" style={{ fontFamily: "Outfit, sans-serif", color: "var(--foreground)" }}>
                Let's Architect
              </h2>
              <div className="space-y-5 mb-10">
                {CONTACT_ITEMS.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--card)", border: "1px solid var(--border)", boxShadow: "0 1px 3px rgba(13,27,46,0.05)" }}>
                      <Icon size={15} style={{ color: "var(--primary)" }} />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider mb-0.5" style={{ color: "var(--muted-foreground)", fontFamily: "JetBrains Mono, monospace" }}>{label}</div>
                      <div className="text-sm font-medium" style={{ color: "var(--foreground)" }}>{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-xl border" style={{ background: "var(--card)", borderColor: "var(--border)", boxShadow: "0 4px 24px rgba(13,27,46,0.07)" }}>
              <h3 className="text-lg font-semibold mb-6" style={{ fontFamily: "Outfit, sans-serif", color: "var(--foreground)" }}>Contact me</h3>
              <div className="space-y-4">
                {[{ label: "Full Name", placeholder: "John Smith", type: "text" }, { label: "Company", placeholder: "Acme Corporation", type: "text" }, { label: "Email Address", placeholder: "john@acme.com", type: "email" }].map(({ label, placeholder, type }) => (
                  <div key={label}>
                    <label className="block text-xs uppercase tracking-wider mb-1.5" style={{ color: "var(--muted-foreground)", fontFamily: "JetBrains Mono, monospace" }}>{label}</label>
                    <input type={type} placeholder={placeholder} className="w-full px-4 py-2.5 rounded-lg text-sm border outline-none transition-colors focus:border-primary/40"
                      style={{ background: "var(--input-background)", borderColor: "var(--border)", color: "var(--foreground)" }} />
                  </div>
                ))}
                <div>
                  <label className="block text-xs uppercase tracking-wider mb-1.5" style={{ color: "var(--muted-foreground)", fontFamily: "JetBrains Mono, monospace" }}>Message</label>
                  <textarea rows={4} placeholder="Describe your SAP transformation needs..." className="w-full px-4 py-2.5 rounded-lg text-sm border outline-none transition-colors resize-none focus:border-primary/40"
                    style={{ background: "var(--input-background)", borderColor: "var(--border)", color: "var(--foreground)" }} />
                </div>
                <button className="w-full py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-88 flex items-center justify-center gap-2"
                  style={{ background: "var(--primary)", color: "var(--primary-foreground)", fontFamily: "Outfit, sans-serif" }}>
                  Send Request <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="relative z-10 py-10 px-6 border-t border-border" style={{ background: "var(--secondary)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-sm flex items-center justify-center text-xs font-bold" style={{ background: "var(--primary)", color: "var(--primary-foreground)", fontFamily: "Outfit, sans-serif" }}>SR</div>
            <div>
              <span className="text-sm font-semibold" style={{ fontFamily: "Outfit, sans-serif", color: "var(--foreground)" }}>Sandeep Rawat</span>
              <span className="text-sm ml-2" style={{ color: "var(--muted-foreground)" }}>SAP Enterprise Architect | SAP AI Evangelist</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            {NAV_ITEMS.slice(0, 5).map(item => (
              <button key={item} onClick={() => scrollTo(item)} className="text-xs transition-colors hover:text-foreground"
                style={{ color: "var(--muted-foreground)", fontFamily: "Inter, sans-serif" }}>{item}</button>
            ))}
          </div>
          <span className="text-xs" style={{ color: "var(--muted-foreground)", fontFamily: "JetBrains Mono, monospace" }}>
            © 2025 · 17+ years · Pune, India
          </span>
        </div>
      </footer>
    </div>
  );
}
