import { createFileRoute } from "@tanstack/react-router";
import { FolderOpen } from "lucide-react";
export const Route = createFileRoute("/resources")({ component: Resources });
function Resources() {
  return (
    <div className="px-4 py-10 text-center">
      <FolderOpen className="mx-auto h-12 w-12 text-primary mb-4" />
      <h1 className="font-display text-2xl font-bold text-foreground">Resources</h1>
      <p className="mt-2 text-muted-foreground">Templates, guides and assets to help you build faster.</p>
    </div>
  );
}
