import { Link } from "@tanstack/react-router";
import { ShieldCheck, Zap, Users } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import { whatsappLink } from "@/utils/whatsapp";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="container-page py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">What we do</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Six ways we power your digital life</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => <ServiceCard key={s.id} service={s} />)}
        </div>
      </section>
      <section className="bg-secondary py-20">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {[[Zap, "Fast delivery", "Quick turnaround on every project and request."], [ShieldCheck, "Trusted quality", "Professional standards on every job."], [Users, "Real people", "Friendly support directly on WhatsApp."]].map(([Icon, t, d]) => (
            <div key={t} className="rounded-2xl bg-card p-7 shadow-card">
              <Icon className="h-7 w-7 text-accent" />
              <h3 className="mt-4 font-semibold">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="container-page py-20">
        <div className="rounded-3xl bg-brand-gradient p-10 text-center text-primary-foreground md:p-16">
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">Ready to start your digital journey?</h2>
          <p className="mx-auto mt-3 max-w-xl opacity-90">Pick a plan or send us a message — we reply fast.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/pricing" className="btn-outline">View Plans</Link>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-primary">Message Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
