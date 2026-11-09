// Placeholder number — replace with the real Magabus Hub WhatsApp number (international format, digits only).
export const WHATSAPP_NUMBER = "2348000000000";

export function whatsappLink(message = "Hello Magabus Hub, I'd like to make an enquiry.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
