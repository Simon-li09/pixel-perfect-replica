import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { services } from "@/data/services";
import { whatsappLink } from "@/utils/whatsapp";

export default function Contact() {
  const [form, setForm] = useState({ name: "", service: services[0].title, message: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const msg = `Hello Magabus Hub, my name is ${form.name}.\nService: ${form.service}\n\n${form.message}`;
    window.open(whatsappLink(msg), "_blank");
  };

  const field = "w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring";

  return (
    <section className="bg-soft-gradient py-20">
      <div className="container-page grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Contact</p>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Let's talk</h1>
          <p className="mt-5 text-lg text-muted-foreground">Fill the form and it opens WhatsApp with your message ready to send.</p>
          <div className="mt-8 space-y-4">
            {[[Phone, "+234 800 000 0000"], [Mail, "hello@magabushub.com"], [MapPin, "Lagos, Nigeria"]].map(([Icon, t]) => (
              <p key={t} className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-card text-primary shadow-card"><Icon className="h-5 w-5" /></span>{t}</p>
            ))}
          </div>
        </div>
        <form onSubmit={submit} className="space-y-4 rounded-3xl border bg-card p-8 shadow-card">
          <input required value={form.name} onChange={set("name")} placeholder="Your name" className={field} />
          <select value={form.service} onChange={set("service")} className={field}>
            {services.map((s) => <option key={s.id}>{s.title}</option>)}
          </select>
          <textarea required rows={5} value={form.message} onChange={set("message")} placeholder="How can we help?" className={field} />
          <button type="submit" className="btn-teal w-full"><Send className="h-4 w-4" /> Send via WhatsApp</button>
        </form>
      </div>
    </section>
  );
}
