import { createFileRoute } from "@tanstack/react-router";
import Contact from "@/pages/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Magabus Hub" },
      { name: "description", content: "Send us an enquiry straight to WhatsApp." },
      { property: "og:title", content: "Contact Magabus Hub" },
      { property: "og:description", content: "Send us an enquiry straight to WhatsApp." },
    ],
  }),
  component: Contact,
});
