import { createFileRoute } from "@tanstack/react-router";
import { Users } from "lucide-react";
import { TELEGRAM_LINK } from "@/utils/whatsapp";

export const Route = createFileRoute("/community")({ component: Community });

function Community() {
  return (
    <div className="px-4 py-10 text-center">
      <Users className="mx-auto h-12 w-12 text-primary mb-4" />
      <h1 className="font-display text-2xl font-bold text-foreground">Community</h1>
      <p className="mt-2 text-muted-foreground">Connect with fellow learners, share projects and grow together.</p>
      <a
        href={TELEGRAM_LINK}
        target="_blank"
        rel="noreferrer"
        className="btn-primary mt-6 inline-flex"
      >
        Join on Telegram
      </a>
    </div>
  );
}
