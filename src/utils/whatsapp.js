export const WHATSAPP_LINK = "https://wa.me/message/STI4ZMOOTCNNH1";
export const TELEGRAM_LINK = "https://t.me/+BM8JtVl9Z88wN2M0";

export function whatsappLink(message = "") {
  if (message) {
    return `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;
  }
  return WHATSAPP_LINK;
}
