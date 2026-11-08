export const categories = [
  {
    id: "bolos",
    name: "Bolos",
    title: "Nossos Bolos",
    description: "Conheça os bolos disponíveis no nosso catálogo.",
    emptyMessage: "Novidades deliciosas em breve.",
    homeEmptyMessage: "Novidades deliciosas em breve.",
  },
  {
    id: "tortas",
    name: "Tortas",
    title: "Nossas Tortas",
    description: "Uma seleção especial está sendo preparada.",
    emptyMessage: "Estamos preparando novidades para você.",
    homeEmptyMessage: "Novidades deliciosas em breve.",
  },
  {
    id: "cucas",
    name: "Cucas",
    title: "Nossas Cucas",
    description: "Em breve, mais detalhes sobre nossas cucas.",
    emptyMessage: "Estamos preparando novidades para você.",
    homeEmptyMessage: "Novidades deliciosas em breve.",
  },
];

export const products = [
  {
    id: "bolo-de-morango",
    name: "Bolo de Morango",
    category: "bolos",
    slug: "bolo-de-morango",
    shortDescription: "Descrição em atualização pela confeitaria.",
    fullDescription: "Aguardando informações da confeitaria.",
    ingredients: [],
    image: "assets/images/bolo-morango-ilustrativo.jpg",
    imageAlt: "Fotografia ilustrativa de uma fatia de bolo decorada com morangos; não representa o produto real da confeitaria.",
    imageCaption: "Imagem ilustrativa",
    additionalInfo: "Aguardando informações da confeitaria.",
  },
];

export const getCategory = (categoryId) =>
  categories.find((category) => category.id === categoryId);

export const getProductsByCategory = (categoryId) =>
  products.filter((product) => product.category === categoryId);

export const getProductBySlug = (slug) =>
  products.find((product) => product.slug === slug);
