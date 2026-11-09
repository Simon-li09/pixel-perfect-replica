import { Check, ArrowRight } from "lucide-react";
import { whatsappLink } from "@/utils/whatsapp";

export default function ServiceCard({ service, detailed = false }) {
  const Icon = service.icon;
  return (
    <div className="card-lift flex flex-col rounded-2xl border bg-card p-7">
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary"><Icon className="h-6 w-6" /></span>
      <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
      {detailed && (
        <ul className="mt-4 space-y-2 text-sm">
          {service.items.map((i) => (
            <li key={i} className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" />{i}</li>
          ))}
        </ul>
      )}
      <a href={whatsappLink(`Hello Magabus Hub, I'm interested in ${service.title}.`)} target="_blank" rel="noreferrer"
        className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-semibold text-primary hover:text-accent">
        Enquire on WhatsApp <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}
