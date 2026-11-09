import { createFileRoute } from "@tanstack/react-router";
import Pricing from "@/pages/Pricing";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing Plans — Magabus Hub" },
      { name: "description", content: "Affordable monthly and yearly subscription plans for learners and businesses." },
      { property: "og:title", content: "Pricing Plans — Magabus Hub" },
      { property: "og:description", content: "Affordable monthly and yearly subscription plans for learners and businesses." },
    ],
  }),
  component: Pricing,
});
