import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-tech.jpg";
import { whatsappLink } from "@/utils/whatsapp";

export default function Hero() {
  return (
    <section className="bg-soft-gradient">
      <div className="container-page grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-sm font-medium text-primary shadow-card"><Sparkles className="h-4 w-4 text-accent" /> Technology · Learning · Growth</span>
          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Your Digital World. <span className="text-brand-gradient">Without Limits.</span></h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">Magabus Hub delivers digital services, practical tech courses and support plans that help individuals and businesses thrive online.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/services" className="btn-primary">Explore Services</Link>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-outline">Chat on WhatsApp</a>
          </div>
          <div className="mt-10 flex gap-8">
            {[["500+", "Students trained"], ["6", "Service areas"], ["24/7", "WhatsApp support"]].map(([n, l]) => (
              <div key={l}><p className="font-display text-2xl font-bold text-primary">{n}</p><p className="text-xs text-muted-foreground">{l}</p></div>
            ))}
          </div>
        </div>
        <img src={heroImg} alt="Digital learning and technology illustration" width={1280} height={1024} className="w-full rounded-3xl shadow-card" />
      </div>
    </section>
  );
}
