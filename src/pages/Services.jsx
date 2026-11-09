import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export default function Services() {
  return (
    <>
      <section className="bg-soft-gradient py-20">
        <div className="container-page max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Services</p>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Everything digital, in one hub</h1>
          <p className="mt-5 text-lg text-muted-foreground">Choose a service and send us an enquiry on WhatsApp in one tap.</p>
        </div>
      </section>
      <section className="container-page grid gap-6 py-20 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => <ServiceCard key={s.id} service={s} detailed />)}
      </section>
    </>
  );
}
