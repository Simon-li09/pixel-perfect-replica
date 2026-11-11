import { Link } from "@tanstack/react-router";
import { Play, Code2, Globe, Briefcase } from "lucide-react";

export default function Hero() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl mx-4 mt-4"
      style={{
        background: "linear-gradient(135deg, oklch(0.19 0.08 285) 0%, oklch(0.14 0.04 265) 60%, oklch(0.12 0.02 265) 100%)",
        minHeight: "220px",
      }}
    >
      {/* Glow blobs */}
      <div
        className="pointer-events-none absolute -top-16 -left-16 h-64 w-64 rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, oklch(0.52 0.22 285), transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 right-32 h-72 w-72 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, oklch(0.52 0.22 300), transparent 70%)" }}
      />

      <div className="relative z-10 flex items-center gap-6 px-7 py-7">
        {/* Text */}
        <div className="flex-1 min-w-0">
          <h1 className="font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
            Welcome to{" "}
            <span
              style={{
                background: "linear-gradient(90deg, oklch(0.72 0.17 182), oklch(0.65 0.22 300))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Magabus Hub!
            </span>
          </h1>
          <p className="mt-2 max-w-sm text-sm text-white/75 leading-relaxed">
            Learn how to generate your own working tools and websites for any job —{" "}
            <span className="font-semibold" style={{ color: "var(--gold)" }}>
              even with no coding experience!
            </span>
          </p>
          <Link
            to="/courses"
            className="btn-primary mt-5 inline-flex !gap-1.5"
          >
            <Play className="h-3.5 w-3.5 fill-current" />
            Start Learning Now →
          </Link>
        </div>

        {/* Feature chips */}
        <div className="hidden md:flex flex-col gap-2.5 mr-4">
          {[
            { icon: Code2, label: "Create Tools" },
            { icon: Globe,  label: "Build Websites" },
            { icon: Briefcase, label: "Grow Your Skills" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold text-white backdrop-blur-sm"
              style={{ background: "oklch(1 0 0 / 0.08)", border: "1px solid oklch(1 0 0 / 0.12)" }}
            >
              <Icon className="h-4 w-4 text-primary" style={{ color: "oklch(0.72 0.17 182)" }} />
              {label}
            </div>
          ))}
        </div>

        {/* "Build Anything" badge */}
        <div
          className="hidden lg:flex flex-col items-center justify-center rounded-2xl px-5 py-4 text-center"
          style={{ background: "oklch(1 0 0 / 0.05)", border: "1px solid oklch(1 0 0 / 0.10)", minWidth: "120px" }}
        >
          <span className="font-display text-lg font-extrabold leading-tight text-white tracking-tight">BUILD</span>
          <span className="font-display text-lg font-extrabold leading-tight text-white tracking-tight">ANYTHING</span>
        </div>
      </div>
    </div>
  );
}
