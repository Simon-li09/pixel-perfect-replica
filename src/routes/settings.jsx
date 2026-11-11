import { createFileRoute } from "@tanstack/react-router";
import { Settings } from "lucide-react";
export const Route = createFileRoute("/settings")({ component: SettingsPage });
function SettingsPage() {
  return (
    <div className="px-4 py-10 text-center">
      <Settings className="mx-auto h-12 w-12 text-primary mb-4" />
      <h1 className="font-display text-2xl font-bold text-foreground">Settings</h1>
      <p className="mt-2 text-muted-foreground">Manage your account, notifications and preferences.</p>
    </div>
  );
}
