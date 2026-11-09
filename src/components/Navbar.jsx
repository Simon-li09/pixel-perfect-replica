import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Hexagon } from "lucide-react";
import { whatsappLink } from "@/utils/whatsapp";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/courses", label: "Courses" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-navy text-navy-foreground shadow-card">
      <nav className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient"><Hexagon className="h-5 w-5" /></span>
          MAGABUS <span className="text-accent">HUB</span>
        </Link>
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link to={l.to} activeOptions={{ exact: true }} className="rounded-full px-4 py-2 text-sm font-medium opacity-80 transition hover:opacity-100" activeProps={{ className: "bg-primary !opacity-100" }}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-teal hidden !py-2 text-sm lg:inline-flex">Chat on WhatsApp</a>
        <button className="lg:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="container-page flex flex-col gap-1 pb-4 lg:hidden">
          {links.map((l) => (
            <li key={l.to}>
              <Link to={l.to} onClick={() => setOpen(false)} activeOptions={{ exact: true }} className="block rounded-lg px-4 py-3" activeProps={{ className: "bg-primary" }}>{l.label}</Link>
            </li>
          ))}
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-teal mt-2">Chat on WhatsApp</a>
        </ul>
      )}
    </header>
  );
}
