import { createFileRoute } from "@tanstack/react-router";
import Services from "@/pages/Services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Magabus Hub" },
      { name: "description", content: "Web development, design, marketing, training, tech support and document services." },
      { property: "og:title", content: "Services — Magabus Hub" },
      { property: "og:description", content: "Web development, design, marketing, training, tech support and document services." },
    ],
  }),
  component: Services,
});
