import { useState } from "react";
import PricingCard from "@/components/PricingCard";
import { plans } from "@/data/pricing";

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  return (
    <>
      <section className="bg-soft-gradient py-20">
        <div className="container-page max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Subscription plans</p>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Simple, transparent pricing</h1>
          <div className="mt-8 inline-flex rounded-full border bg-card p-1">
            {[["Monthly", false], ["Yearly (save ~17%)", true]].map(([l, v]) => (
              <button key={l} onClick={() => setYearly(v)} className={`rounded-full px-5 py-2 text-sm font-medium transition ${yearly === v ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>{l}</button>
            ))}
          </div>
        </div>
      </section>
      <section className="container-page grid gap-8 py-20 md:grid-cols-3">
        {plans.map((p) => <PricingCard key={p.id} plan={p} yearly={yearly} />)}
      </section>
    </>
  );
}
