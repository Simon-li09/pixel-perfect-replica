import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  Crown,
  Settings,
  LogOut,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { whatsappLink } from "@/utils/whatsapp";

const navItems = [
  { to: "/",          icon: LayoutDashboard, label: "Dashboard" },
  { to: "/courses",   icon: BookOpen,        label: "Services" },
  { to: "/community", icon: Users,           label: "Community" },
];

export default function Sidebar() {
  const [userOpen, setUserOpen] = useState(false);
  const router = useRouterState();
  const pathname = router.location.pathname;

  return (
    <aside className="sidebar hidden lg:flex">
      {/* Logo */}
      <div className="flex items-center gap-2 px-4 py-5 border-b border-border">
        <img src="/logo.svg" alt="Magabus Hub" className="h-9 w-9 rounded-xl bg-white p-1 flex-shrink-0" />
        <div>
          <p className="font-display font-bold text-sm leading-none text-foreground">Magabus Hub</p>
          <p className="text-[10px] text-muted-foreground mt-0.5">Learn · Build · Earn</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {navItems.map(({ to, icon: Icon, label }) => {
          const active = to === "/" ? pathname === "/" : pathname.startsWith(to);
          return (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                active
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <Icon className="h-4 w-4 flex-shrink-0" />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Premium upgrade */}
      <div className="mx-3 mb-3 rounded-2xl bg-brand-gradient p-4 text-center">
        <Crown className="mx-auto h-6 w-6 text-gold mb-2" />
        <p className="font-display text-sm font-bold text-white">Go Premium</p>
        <p className="text-[11px] text-white/80 mt-1">Unlock all courses, tools & mentorship!</p>
        <a
          href={whatsappLink("I'd like to upgrade to Premium on Magabus Hub")}
          target="_blank"
          rel="noreferrer"
          className="mt-3 block rounded-full bg-gold py-1.5 text-xs font-bold text-black transition hover:opacity-90"
        >
          Upgrade Now →
        </a>
      </div>

      {/* User */}
      <div className="border-t border-border">
        <button
          onClick={() => setUserOpen(!userOpen)}
          className="flex w-full items-center gap-3 px-4 py-3 text-sm hover:bg-secondary transition-colors"
        >
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-white flex-shrink-0">M</div>
          <div className="flex-1 text-left">
            <p className="font-semibold text-foreground leading-none">Magabus</p>
            <p className="text-[11px] text-muted-foreground mt-0.5">Free Member</p>
          </div>
          {userOpen ? <ChevronUp className="h-3.5 w-3.5 text-muted-foreground" /> : <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />}
        </button>
        {userOpen && (
          <div className="px-3 pb-3 space-y-0.5">
            <Link to="/settings" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
              <Settings className="h-4 w-4" /> Settings
            </Link>
            <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
              <LogOut className="h-4 w-4" /> Logout
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
