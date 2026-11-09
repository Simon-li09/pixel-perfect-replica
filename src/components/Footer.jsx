import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold">MAGABUS <span className="text-accent">HUB</span></p>
          <p className="mt-3 text-sm opacity-75">Your Digital World. Without Limits.</p>
        </div>
        <div>
          <p className="font-display font-semibold">Explore</p>
          <ul className="mt-3 space-y-2 text-sm opacity-80">
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="space-y-2 text-sm opacity-80">
          <p className="font-display font-semibold opacity-100">Get in touch</p>
          <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> +234 800 000 0000</p>
          <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> hello@magabushub.com</p>
          <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> Lagos, Nigeria</p>
        </div>
      </div>
      <p className="border-t border-navy-foreground/10 py-5 text-center text-xs opacity-60">© {new Date().getFullYear()} Magabus Hub. All rights reserved.</p>
    </footer>
  );
}
