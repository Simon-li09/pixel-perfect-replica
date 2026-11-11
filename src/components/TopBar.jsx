import { useState, useRef, useEffect } from "react";
import { Search, Bell, MessageCircle, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { whatsappLink } from "@/utils/whatsapp";

/* ── All searchable services ─────────────────────────────── */
const allServices = [
  { id: "service-1", name: "Coin Flashing",                    desc: "Flash coins to any wallet instantly",                    color: "#3B82F6" },
  { id: "service-2", name: "Photo Editing & ID Generation",    desc: "Edit photos and generate international IDs",             color: "#06B6D4" },
  { id: "service-3", name: "SMS & Email Flashing",             desc: "Send customised SMS and emails to any country",          color: "#F97316" },
  { id: "service-4", name: "Transaction Receipt Generation",   desc: "Generate bank or wallet receipts and invoices",          color: "#22D3EE" },
  { id: "service-5", name: "Wallet Creating",                  desc: "Create Cash App and PayPal wallets",                     color: "#EAB308" },
  { id: "service-6", name: "Website Creating",                 desc: "Create banking, trading broker and shipping websites",   color: "#F87171" },
];

export default function TopBar() {
  const [query, setQuery]       = useState("");
  const [open, setOpen]         = useState(false);
  const containerRef            = useRef(null);

  const results = query.trim().length > 0
    ? allServices.filter(
        (s) =>
          s.name.toLowerCase().includes(query.toLowerCase()) ||
          s.desc.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  /* Close dropdown when clicking outside */
  useEffect(() => {
    function handleClick(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function handleChange(e) {
    setQuery(e.target.value);
    setOpen(true);
  }

  function clear() {
    setQuery("");
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-border bg-background/95 px-4 backdrop-blur-sm">
      {/* Search */}
      <div className="relative flex-1 max-w-xl" ref={containerRef}>
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => query && setOpen(true)}
          placeholder="Search services..."
          className="w-full rounded-full bg-secondary border border-border pl-9 pr-9 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        {query && (
          <button
            onClick={clear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}

        {/* Dropdown results */}
        {open && query.trim().length > 0 && (
          <div
            className="absolute top-full left-0 right-0 mt-2 rounded-2xl overflow-hidden shadow-lg z-50"
            style={{ background: "var(--color-card)", border: "1px solid var(--color-border)" }}
          >
            {results.length > 0 ? (
              <>
                <p className="px-4 pt-3 pb-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  Services
                </p>
                {results.map((s) => (
                  <Link
                    key={s.id}
                    to="/courses"
                    onClick={clear}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-secondary transition-colors"
                  >
                    <span
                      className="h-2 w-2 rounded-full flex-shrink-0"
                      style={{ background: s.color }}
                    />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{s.name}</p>
                      <p className="text-xs text-muted-foreground">{s.desc}</p>
                    </div>
                  </Link>
                ))}
              </>
            ) : (
              <p className="px-4 py-4 text-sm text-muted-foreground">
                No services found for "<span className="font-semibold text-foreground">{query}</span>"
              </p>
            )}
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 ml-auto">
        <button className="relative flex h-9 w-9 items-center justify-center rounded-full hover:bg-secondary transition-colors">
          <Bell className="h-5 w-5 text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noreferrer"
          className="btn-primary hidden sm:inline-flex !py-1.5 !px-3 !text-xs gap-1.5"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          Contact Us
        </a>
      </div>
    </header>
  );
}
