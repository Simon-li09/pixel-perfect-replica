export const plans = [
  { id: "basic", name: "Basic", monthly: 5000, yearly: 50000, tagline: "For individuals getting started", features: ["Access to 2 beginner courses", "Monthly tech support session", "Community group access", "WhatsApp support"] },
  { id: "pro", name: "Pro", monthly: 15000, yearly: 150000, popular: true, tagline: "For learners & small businesses", features: ["Access to all courses", "Weekly tech support", "1 design request / month", "Certificate of completion", "Priority WhatsApp support"] },
  { id: "business", name: "Business", monthly: 40000, yearly: 400000, tagline: "For growing teams", features: ["Everything in Pro", "Social media management", "Website maintenance", "Team training (up to 5)", "Dedicated account manager"] },
];

export const formatNaira = (n) => "₦" + n.toLocaleString("en-NG");
