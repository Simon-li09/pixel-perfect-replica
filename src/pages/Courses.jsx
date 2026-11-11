import { useState } from "react";
import { Play, ChevronRight, BookOpen, Clock, Star, Zap } from "lucide-react";
import { whatsappLink } from "@/utils/whatsapp";

/* ── Service data ────────────────────────────────────────── */
/* 👇 Fill in name, tagline, description, and topics for each service */
const languages = [
  {
    id: "service-1",
    name: "Coin flashing ",           // ← add service name here
    tagline: "Coin flashing",        // ← add short tagline here
    description: "You also learn how to flash coins to any wallet and it reflects immediately you only need the wallet address ",    // ← add description here
    color: "#3B82F6",
    bgColor: "oklch(0.20 0.06 250)",
    badge: "",
    badgeColor: "#3B82F6",
    level: "Beginner",
    duration: "",
    lessons: 0,
    rating: 5.0,
    topics: [],
  },
  {
    id: "service-2",
    name: "Photo editing and id generation ",
    tagline: "Photo editing and id generation ",
    description: "You learn how to edit your working photos and videos, also how to generate international IDs, military IDs, and paperwork for proof, certificates of any kind, USA SSN, and Canada SIN",
    color: "#06B6D4",
    bgColor: "oklch(0.20 0.06 200)",
    badge: "",
    badgeColor: "#06B6D4",
    level: "Beginner",
    duration: "",
    lessons: 0,
    rating: 5.0,
    topics: [],
  },
  {
    id: "service-3",
    name: "Sms and email flashing ",
    tagline: "Sms and email flashing ",
    description: "Send customized sms and emails to any country or generate yours, send email as FBI, Trust Wallet or any crypto app ",
    color: "#F97316",
    bgColor: "oklch(0.20 0.06 55)",
    badge: "",
    badgeColor: "#F97316",
    level: "Beginner",
    duration: "",
    lessons: 0,
    rating: 5.0,
    topics: [],
  },
  {
    id: "service-4",
    name: "Transition recipe generation ",
    tagline: "Transition recipe generation ",
    description: "Generate any bank or wallet recipe as failed or successful transaction, shopping invoice ",
    color: "#22D3EE",
    bgColor: "oklch(0.20 0.05 210)",
    badge: "",
    badgeColor: "#22D3EE",
    level: "Intermediate",
    duration: "",
    lessons: 0,
    rating: 5.0,
    topics: [],
  },
  {
    id: "service-5",
    name: "Wallet creating ",
    tagline: "Wallet creating ",
    description: "Learn how to create a Cash App and PayPal wallet",
    color: "#EAB308",
    bgColor: "oklch(0.20 0.05 90)",
    badge: "",
    badgeColor: "#EAB308",
    level: "Beginner",
    duration: "",
    lessons: 0,
    rating: 5.0,
    topics: [],
  },

{
    id: "service-5",
    name: "Website creating ",
    tagline: "Wallet creating ",
    description:"You learn how to create an instant online banking website, trading broker, shipping website with tracking code, and learn how to use it you can add you own domain or use a custom domain you don't need a coding experience",
    color: "#EAB308",
    bgColor: "oklch(0.20 0.05 90)",
    badge: "",
    badgeColor: "#EAB308",
    level: "Beginner",
    duration: "",
    lessons: 0,
    rating: 5.0,
    topics: [],
  },
];


/* ── Helpers ─────────────────────────────────────────────── */
function LevelBadge({ level }) {
  const map = {
    Beginner:     { bg: "oklch(0.65 0.18 150 / 0.15)", color: "oklch(0.65 0.18 150)" },
    Intermediate: { bg: "oklch(0.78 0.15 85  / 0.15)", color: "oklch(0.78 0.15 85)"  },
    Advanced:     { bg: "oklch(0.65 0.22 15  / 0.15)", color: "oklch(0.65 0.22 15)"  },
  };
  const s = map[level] ?? map.Beginner;
  return (
    <span
      className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide"
      style={{ background: s.bg, color: s.color }}
    >
      {level}
    </span>
  );
}

function Stars({ rating }) {
  return (
    <span className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="h-3 w-3"
          style={{
            fill: i < Math.floor(rating) ? "var(--gold)" : "transparent",
            color: "var(--gold)",
          }}
        />
      ))}
      <span className="ml-1 text-[11px] font-semibold" style={{ color: "var(--gold)" }}>
        {rating}
      </span>
    </span>
  );
}

/* ── Service card (collapsed) ────────────────────────────── */
function LangCard({ lang, onSelect, selected }) {
  const isSelected = selected?.id === lang.id;
  return (
    <button
      onClick={() => onSelect(isSelected ? null : lang)}
      className="w-full text-left rounded-2xl p-5 transition-all duration-200"
      style={{
        background: isSelected ? lang.bgColor : "var(--color-card)",
        border: `1px solid ${isSelected ? lang.color + "66" : "var(--color-border)"}`,
        boxShadow: isSelected ? `0 0 0 1px ${lang.color}33, 0 8px 30px ${lang.color}22` : "none",
        transform: isSelected ? "translateY(-2px)" : "none",
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <p className="font-display font-bold text-sm text-foreground">
              {lang.name || <span className="italic text-muted-foreground">— name —</span>}
            </p>
            <span
              className="rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide"
              style={{ background: lang.badgeColor + "22", color: lang.badgeColor }}
            >
              {lang.badge}
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">
            {lang.tagline || <span className="italic">— tagline —</span>}
          </p>
        </div>
        {/* Colour dot */}
        <div
          className="h-3 w-3 rounded-full flex-shrink-0 mt-1"
          style={{ background: lang.color }}
        />
        {/* Arrow */}
        <ChevronRight
          className="h-4 w-4 flex-shrink-0 mt-0.5 transition-transform duration-200"
          style={{
            color: isSelected ? lang.color : "var(--color-muted-foreground)",
            transform: isSelected ? "rotate(90deg)" : "none",
          }}
        />
      </div>

      {/* Meta row */}
      <div className="mt-3 flex items-center gap-4 flex-wrap">
        <LevelBadge level={lang.level} />
        {lang.duration && (
          <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
            <Clock className="h-3 w-3" />{lang.duration}
          </span>
        )}
        {lang.lessons > 0 && (
          <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
            <BookOpen className="h-3 w-3" />{lang.lessons} lessons
          </span>
        )}
        <Stars rating={lang.rating} />
      </div>
    </button>
  );
}

/* ── Expanded detail panel ───────────────────────────────── */
function LangDetail({ lang }) {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "var(--color-card)",
        border: `1px solid ${lang.color}44`,
        boxShadow: `0 0 0 1px ${lang.color}22, 0 16px 48px ${lang.color}18`,
      }}
    >
      {/* Header strip */}
      <div
        className="px-6 py-4 flex items-center justify-between gap-4"
        style={{ background: lang.color + "18", borderBottom: `1px solid ${lang.color}33` }}
      >
        <div>
          <p className="font-display font-bold text-foreground">
            {lang.name || <span className="italic text-muted-foreground">— name —</span>}
          </p>
          <p className="text-xs text-muted-foreground">
            {lang.tagline || <span className="italic">— tagline —</span>}
          </p>
        </div>
        <a
          href={whatsappLink(`Hello Magabus Hub, I'd like to enrol in the ${lang.name || "this"} course.`)}
          target="_blank"
          rel="noreferrer"
          className="btn-primary flex-shrink-0 !text-xs !py-1.5 !px-4"
          style={{ background: lang.color }}
        >
          <Play className="h-3 w-3 fill-current" /> Enrol Now
        </a>
      </div>

      {/* Body — description + topics only, no code panel */}
      <div className="p-6">
        {lang.description && (
          <p className="text-sm text-muted-foreground leading-relaxed">{lang.description}</p>
        )}

        {lang.topics.length > 0 && (
          <>
            <p className="mt-5 font-display text-xs font-bold uppercase tracking-widest text-foreground/60">
              What you'll learn
            </p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {lang.topics.map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-foreground">
                  <span
                    className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                    style={{ background: lang.color }}
                  />
                  {t}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

/* ── Main page ───────────────────────────────────────────── */
export default function Courses() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");

  const levels = ["All", "Beginner", "Intermediate", "Advanced"];
  const filtered =
    filter === "All" ? languages : languages.filter((l) => l.level === filter);

  return (
    <div className="px-4 py-6 pb-12">
      {/* Page header */}
      <div className="mb-6 flex items-start justify-between gap-4 flex-wrap">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Zap className="h-5 w-5" style={{ color: "var(--gold)" }} />
            <h1 className="font-display text-2xl font-bold text-foreground">Services</h1>
          </div>
          <p className="text-sm text-muted-foreground">
            Learn 9 professional skills and start building real tools today.
          </p>
        </div>
        {/* Stats chips */}
        <div className="flex gap-2 flex-wrap">
          {[
            { n: "9", label: "Services" },
            { n: "176+", label: "Total Lessons" },
            { n: "43 wks", label: "Full Track" },
          ].map(({ n, label }) => (
            <div
              key={label}
              className="rounded-xl px-3 py-2 text-center"
              style={{ background: "var(--color-card)", border: "1px solid var(--color-border)" }}
            >
              <p className="font-display font-bold text-sm text-foreground leading-none">{n}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Level filter */}
      <div className="flex gap-2 flex-wrap mb-5">
        {levels.map((l) => (
          <button
            key={l}
            onClick={() => { setFilter(l); setSelected(null); }}
            className="rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors"
            style={
              filter === l
                ? { background: "var(--primary)", color: "#fff" }
                : { background: "var(--color-secondary)", color: "var(--color-muted-foreground)", border: "1px solid var(--color-border)" }
            }
          >
            {l}
          </button>
        ))}
      </div>

      {/* Grid of service cards */}
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3 mb-5">
        {filtered.map((lang) => (
          <LangCard
            key={lang.id}
            lang={lang}
            selected={selected}
            onSelect={setSelected}
          />
        ))}
      </div>

      {/* Expanded detail — renders below the grid */}
      {selected && (
        <div className="mt-2">
          <LangDetail lang={selected} />
        </div>
      )}

      {/* Bottom CTA */}
      {!selected && (
        <div
          className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl px-6 py-5"
          style={{
            background: "linear-gradient(135deg, oklch(0.52 0.22 285) 0%, oklch(0.19 0.08 300) 100%)",
          }}
        >
          <div>
            <p className="font-display font-bold text-white">Not sure where to start?</p>
            <p className="text-sm text-white/75 mt-0.5">Chat with us on WhatsApp and we'll recommend the best path for you.</p>
          </div>
          <a
            href={whatsappLink("I'd like help choosing a service on Magabus Hub")}
            target="_blank"
            rel="noreferrer"
            className="btn-gold flex-shrink-0"
          >
            Get a Free Recommendation →
          </a>
        </div>
      )}
    </div>
  );
}
