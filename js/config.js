export const BRAND_NAME = "Anna Confeitaria Artesanal";
export const WHATSAPP_NUMBER = "554891815494";
export const INSTAGRAM_URL = "";

export const getWhatsAppUrl = (message = "") => {
  const number = WHATSAPP_NUMBER.replace(/\D/g, "");
  const baseUrl = number ? `https://wa.me/${number}` : "https://wa.me/";
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
};

export const getInstagramUrl = () => INSTAGRAM_URL || "https://www.instagram.com/";
