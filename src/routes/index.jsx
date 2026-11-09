import { createFileRoute } from "@tanstack/react-router";
import Home from "@/pages/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Magabus Hub — Your Digital World. Without Limits." },
      { name: "description", content: "Digital services, tech courses and support plans for individuals and businesses." },
      { property: "og:title", content: "Magabus Hub — Your Digital World. Without Limits." },
      { property: "og:description", content: "Digital services, tech courses and support plans for individuals and businesses." },
    ],
  }),
  component: Home,
});
