import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/utils/whatsapp";

export default function WhatsAppButton() {
  return (
    <a href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-foreground shadow-card transition hover:scale-110 lg:bottom-5 bottom-24">
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
