import { createFileRoute } from "@tanstack/react-router";
import About from "@/pages/About";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Magabus Hub" },
      { name: "description", content: "Our mission to make digital services and tech education accessible to all." },
      { property: "og:title", content: "About Magabus Hub" },
      { property: "og:description", content: "Our mission to make digital services and tech education accessible to all." },
    ],
  }),
  component: About,
});
