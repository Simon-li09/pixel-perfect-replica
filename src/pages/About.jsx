import { Target, Eye, Heart } from "lucide-react";

export default function About() {
  return (
    <>
      <section className="bg-soft-gradient py-20">
        <div className="container-page max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">About us</p>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Building digital confidence for everyone</h1>
          <p className="mt-5 text-lg text-muted-foreground">Magabus Hub is a technology and digital learning hub helping individuals, students and businesses access modern digital services and skills — affordably and without limits.</p>
        </div>
      </section>
      <section className="container-page grid gap-6 py-20 md:grid-cols-3">
        {[[Target, "Our Mission", "Make quality digital services and tech education accessible to all."], [Eye, "Our Vision", "A world where everyone can thrive in the digital economy."], [Heart, "Our Values", "Excellence, integrity, innovation and community."]].map(([Icon, t, d]) => (
          <div key={t} className="card-lift rounded-2xl border bg-card p-8">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary"><Icon /></span>
            <h3 className="mt-5 text-xl font-semibold">{t}</h3>
            <p className="mt-2 text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>
    </>
  );
}
