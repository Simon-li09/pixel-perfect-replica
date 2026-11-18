import { Link } from "@tanstack/react-router";
import {
  Users, Play, Trophy, Star, TrendingUp,
  Zap, ArrowRight, ChevronRight, Rocket,
} from "lucide-react";
import Hero from "@/components/Hero";
import { stats } from "@/data/courses";
import { whatsappLink, TELEGRAM_LINK } from "@/utils/whatsapp";

/* ── First 4 services (mirrors Courses.jsx data) ─────────── */
const featuredServices = [
  {
    id: "service-1",
    name: "Coin Flashing",
    description: "Flash coins to any wallet instantly. You only need the wallet address.",
    color: "#3B82F6",
  },
  {
    id: "service-2",
    name: "Photo Editing",
    description: "Edit your photos and videos professionally.",
    color: "#06B6D4",
  },
  {
    id: "service-3",
    name: "SMS & Email Flashing",
    description: "Send customised SMS and emails to any country.",
    color: "#F97316",
  },
  {
    id: "service-4",
    name: "Recipe Generation",
    description: "Generate any bank or wallet receipt as failed or successful transaction.",
    color: "#22D3EE",
  },
];

/* ── Stats strip ─────────────────────────────────────── */
function StatsStrip() {
  const icons = [Users, Play, Trophy, Star];
  return (
    <div className="mx-4 mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map((s, i) => {
        const Icon = icons[i];
        return (
          <div
            key={s.label}
            className="flex items-center gap-3 rounded-xl p-4"
            style={{ background: "var(--color-card)", border: "1px solid var(--color-border)" }}
          >
            <div
              className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full"
              style={{ background: "color-mix(in oklab, var(--primary) 20%, transparent)" }}
            >
              <Icon className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="font-display font-bold text-foreground leading-none">{s.value}</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">{s.label}</p>
              {s.change && (
                <p className="text-[10px] mt-0.5 flex items-center gap-0.5 text-green-400 font-semibold">
                  <TrendingUp className="h-3 w-3" />{s.change}
                </p>
              )}
              {s.stars && (
                <div className="flex gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-2.5 w-2.5 fill-current text-gold" />
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ── Service card ────────────────────────────────────── */
function ServiceCard({ service }) {
  return (
    <div
      className="card-lift flex flex-col rounded-2xl overflow-hidden"
      style={{ background: "var(--color-card)", border: "1px solid var(--color-border)" }}
    >
      {/* Colour strip */}
      <div className="h-2 w-full" style={{ background: service.color }} />
      <div className="flex flex-col flex-1 p-4">
        <div
          className="mb-2 w-fit rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide"
          style={{ background: service.color + "22", color: service.color }}
        >
          Service
        </div>
        <p className="font-display font-bold text-foreground text-sm leading-snug">{service.name}</p>
        <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed flex-1">{service.description}</p>
        <Link
          to="/courses"
          className="mt-4 flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-secondary transition-colors"
        >
          <Play className="h-3 w-3 fill-current" style={{ color: service.color }} />
          Learn More →
        </Link>
      </div>
    </div>
  );
}

/* ── Progress panel ──────────────────────────────────── */
function ProgressPanel() {
  const pct = 60;
  const r = 32;
  const circ = 2 * Math.PI * r;
  const dash = circ * (pct / 100);

  return (
    <div
      className="rounded-2xl p-5 flex flex-col gap-4"
      style={{ background: "var(--color-card)", border: "1px solid var(--color-border)" }}
    >
      <div className="flex items-center gap-2">
        <Zap className="h-4 w-4 text-gold" />
        <p className="font-display font-bold text-sm text-foreground">Your Learning Progress</p>
      </div>

      {/* Donut */}
      <div className="flex items-center gap-4">
        <div className="relative flex h-20 w-20 flex-shrink-0 items-center justify-center">
          <svg className="absolute inset-0 -rotate-90" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r={r} fill="none" strokeWidth="8" stroke="oklch(0.25 0.03 265)" />
            <circle
              cx="40" cy="40" r={r}
              fill="none" strokeWidth="8"
              stroke="oklch(0.52 0.22 285)"
              strokeLinecap="round"
              strokeDasharray={`${dash} ${circ}`}
            />
          </svg>
          <span className="font-display text-lg font-bold text-foreground">{pct}%</span>
        </div>
        <div>
          <p className="font-display font-bold text-primary">Keep Going!</p>
          <p className="text-xs text-muted-foreground">You're doing great.</p>
          <Link to="/courses" className="btn-primary mt-2 !text-xs !py-1.5 !px-3">
            Continue Learning →
          </Link>
        </div>
      </div>

      {/* Next lesson */}
      <div
        className="flex items-start gap-2 rounded-xl p-3"
        style={{ background: "var(--color-secondary)" }}
      >
        <Play className="h-4 w-4 mt-0.5 flex-shrink-0 fill-current text-primary" />
        <div>
          <p className="text-[11px] text-muted-foreground font-medium">Next Lesson:</p>
          <p className="text-xs text-foreground font-semibold mt-0.5">Connect Your Website to a Domain</p>
        </div>
      </div>
    </div>
  );
}

/* ── Main Home page ──────────────────────────────────── */
export default function Home() {
  return (
    <div className="pb-10">
      {/* Hero banner */}
      <Hero />

      {/* Stats */}
      <StatsStrip />

      {/* Services + progress */}
      <div className="mt-5 flex flex-col gap-5 px-4 lg:flex-row lg:items-start">

        {/* Left: Featured Services */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="h-5 w-1 rounded-full bg-primary" />
              <h2 className="font-display font-bold text-foreground">Our Services</h2>
            </div>
            <Link
              to="/courses"
              className="flex items-center gap-1 text-xs text-primary font-semibold hover:underline"
            >
              View All Services <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {featuredServices.map((s) => <ServiceCard key={s.id} service={s} />)}
          </div>
        </div>

        {/* Right: Progress */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <ProgressPanel />
        </div>
      </div>

      {/* Bottom CTA banner */}
      <div
        className="mx-4 mt-5 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl px-7 py-6 overflow-hidden relative"
        style={{
          background: "linear-gradient(135deg, oklch(0.52 0.22 285) 0%, oklch(0.19 0.08 300) 50%, oklch(0.14 0.04 265) 100%)",
        }}
      >
        {/* cityscape / decoration */}
        <div className="pointer-events-none absolute bottom-0 right-0 opacity-20">
          <svg viewBox="0 0 320 80" className="w-72 h-20" fill="white">
            <rect x="10"  y="40" width="20" height="40" /><rect x="15" y="30" width="10" height="10" />
            <rect x="40"  y="20" width="30" height="60" /><rect x="45" y="10" width="20" height="10" />
            <rect x="80"  y="35" width="25" height="45" />
            <rect x="115" y="15" width="35" height="65" /><rect x="120" y="5" width="25" height="10" />
            <rect x="160" y="30" width="20" height="50" />
            <rect x="190" y="10" width="40" height="70" /><rect x="195" y="0"  width="30" height="10" />
            <rect x="240" y="25" width="30" height="55" />
            <rect x="280" y="40" width="20" height="40" />
          </svg>
        </div>

        <div className="flex items-center gap-4 z-10">
          <Rocket className="h-8 w-8 text-white/80 flex-shrink-0" />
          <div>
            <p className="font-display text-lg font-bold text-white">Join Our Telegram Group</p>
            <p className="text-sm text-white/75">Get free updates, tips and exclusive content — join us on Telegram!</p>
          </div>
        </div>

        <a
          href={TELEGRAM_LINK}
          target="_blank"
          rel="noreferrer"
          className="flex-shrink-0 z-10 flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition hover:opacity-90"
          style={{ background: "#229ED9", color: "#fff" }}
        >
          Join Our Community <ChevronRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
