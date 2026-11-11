import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  BookOpen,
  Users,
} from "lucide-react";

const tabs = [
  { to: "/",          icon: LayoutDashboard, label: "Home"      },
  { to: "/courses",   icon: BookOpen,        label: "Services"  },
  { to: "/community", icon: Users,           label: "Community" },
];

export default function BottomNav() {
  const router = useRouterState();
  const pathname = router.location.pathname;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 flex h-16 items-center justify-around border-t border-border bg-background/95 backdrop-blur-sm lg:hidden">
      {tabs.map(({ to, icon: Icon, label }) => {
        const active = to === "/" ? pathname === "/" : pathname.startsWith(to);
        return (
          <Link
            key={to}
            to={to}
            className="flex flex-col items-center gap-0.5 px-3 py-1 transition-colors"
          >
            <Icon
              className="h-5 w-5"
              style={{ color: active ? "var(--primary)" : "var(--color-muted-foreground)" }}
            />
            <span
              className="text-[10px] font-medium"
              style={{ color: active ? "var(--primary)" : "var(--color-muted-foreground)" }}
            >
              {label}
            </span>
            {active && (
              <span
                className="h-1 w-1 rounded-full"
                style={{ background: "var(--primary)" }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
