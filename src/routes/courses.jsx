import { createFileRoute } from "@tanstack/react-router";
import Courses from "@/pages/Courses";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — Magabus Hub" },
      { name: "description", content: "Practical courses in coding, design, marketing and digital skills." },
      { property: "og:title", content: "Courses — Magabus Hub" },
      { property: "og:description", content: "Practical courses in coding, design, marketing and digital skills." },
    ],
  }),
  component: Courses,
});
