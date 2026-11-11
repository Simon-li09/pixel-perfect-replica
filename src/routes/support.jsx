import { createFileRoute } from "@tanstack/react-router";
import { HeadphonesIcon } from "lucide-react";
import { whatsappLink } from "@/utils/whatsapp";
export const Route = createFileRoute("/support")({ component: Support });
function Support() {
  return (
    <div className="px-4 py-10 text-center">
      <HeadphonesIcon className="mx-auto h-12 w-12 text-primary mb-4" />
      <h1 className="font-display text-2xl font-bold text-foreground">Support</h1>
      <p className="mt-2 text-muted-foreground">Need help? Chat with us directly on WhatsApp — we reply fast.</p>
      <a href={whatsappLink("I need support with Magabus Hub")} target="_blank" rel="noreferrer" className="btn-primary mt-6 inline-flex">Chat on WhatsApp</a>
    </div>
  );
}
