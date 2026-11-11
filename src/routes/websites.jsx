import { createFileRoute } from "@tanstack/react-router";
import { Globe } from "lucide-react";
export const Route = createFileRoute("/websites")({ component: Websites });
function Websites() {
  return (
    <div className="px-4 py-10 text-center">
      <Globe className="mx-auto h-12 w-12 text-primary mb-4" />
      <h1 className="font-display text-2xl font-bold text-foreground">Build Websites</h1>
      <p className="mt-2 text-muted-foreground">Create professional websites for any business — no coding needed.</p>
    </div>
  );
}
