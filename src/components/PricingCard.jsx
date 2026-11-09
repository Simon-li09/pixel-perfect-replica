import { Check } from "lucide-react";
import { formatNaira } from "@/data/pricing";
import { whatsappLink } from "@/utils/whatsapp";

export default function PricingCard({ plan, yearly }) {
  const price = yearly ? plan.yearly : plan.monthly;
  return (
    <div className={`card-lift relative flex flex-col rounded-3xl border bg-card p-8 ${plan.popular ? "border-accent ring-2 ring-accent" : ""}`}>
      {plan.popular && <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">Most popular</span>}
      <h3 className="text-xl font-semibold">{plan.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{plan.tagline}</p>
      <p className="mt-6 font-display text-4xl font-bold text-navy">{formatNaira(price)}<span className="text-base font-medium text-muted-foreground">/{yearly ? "year" : "month"}</span></p>
      <ul className="mt-6 space-y-3 text-sm">
        {plan.features.map((f) => <li key={f} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-accent" />{f}</li>)}
      </ul>
      <a href={whatsappLink(`Hello Magabus Hub, I'd like to subscribe to the ${plan.name} plan (${yearly ? "yearly" : "monthly"}).`)} target="_blank" rel="noreferrer"
        className={`${plan.popular ? "btn-teal" : "btn-primary"} mt-8`}>Subscribe via WhatsApp</a>
    </div>
  );
}
