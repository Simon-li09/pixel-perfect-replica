import { useState } from "react";
import { Clock, BarChart3, Search } from "lucide-react";
import { courses } from "@/data/courses";
import { whatsappLink } from "@/utils/whatsapp";

const categories = ["All", ...new Set(courses.map((c) => c.category))];

export default function Courses() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const list = courses.filter((c) => (cat === "All" || c.category === cat) && c.title.toLowerCase().includes(q.toLowerCase()));

  return (
    <>
      <section className="bg-soft-gradient py-20">
        <div className="container-page max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Courses</p>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Learn skills that pay</h1>
          <p className="mt-5 text-lg text-muted-foreground">Hands-on courses taught by practitioners.</p>
        </div>
      </section>
      <section className="container-page py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`rounded-full px-4 py-2 text-sm font-medium transition ${cat === c ? "bg-primary text-primary-foreground" : "bg-card border hover:bg-secondary"}`}>{c}</button>
            ))}
          </div>
          <label className="flex items-center gap-2 rounded-full border bg-card px-4 py-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search courses" className="bg-transparent text-sm outline-none" />
          </label>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((c) => (
            <div key={c.id} className="card-lift flex flex-col rounded-2xl border bg-card p-7">
              <span className="w-fit rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">{c.category}</span>
              <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
              <div className="mt-4 flex gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Clock className="h-4 w-4 text-accent" />{c.duration}</span>
                <span className="flex items-center gap-1"><BarChart3 className="h-4 w-4 text-accent" />{c.level}</span>
              </div>
              <a href={whatsappLink(`Hello Magabus Hub, I'd like to enrol in "${c.title}".`)} target="_blank" rel="noreferrer" className="btn-primary mt-6 !py-2.5 text-sm">Enrol via WhatsApp</a>
            </div>
          ))}
          {list.length === 0 && <p className="text-muted-foreground">No courses match your search.</p>}
        </div>
      </section>
    </>
  );
}
