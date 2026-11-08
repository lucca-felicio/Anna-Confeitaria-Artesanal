export const BRAND_NAME = "Anna Confeitaria Artesanal";
export const BRAND_ADDRESS = "Rua Servidão Família Damasco, 10, fundos";
export const WHATSAPP_NUMBER = "554891815494";
export const INSTAGRAM_URL = "";

export const getWhatsAppUrl = (message = "") => {
  const number = WHATSAPP_NUMBER.replace(/\D/g, "");
  const baseUrl = number ? `https://wa.me/${number}` : "https://wa.me/";
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
};

export const getInstagramUrl = () => INSTAGRAM_URL || "https://www.instagram.com/";

export const getMapsUrl = () =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BRAND_ADDRESS)}`;
