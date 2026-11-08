const validCategories = new Set(["bolos", "tortas", "cucas"]);

export const parseRoute = (hash = window.location.hash) => {
  const path = hash.replace(/^#\/?/, "").trim();

  if (!path || path === "inicio") {
    return { type: "home" };
  }

  const [section, slug] = path.split("/");
  if (section === "produto" && slug) {
    return { type: "product", slug };
  }

  if (validCategories.has(section)) {
    return { type: "category", categoryId: section };
  }

  return { type: "not-found" };
};

export const navigate = (route) => {
  window.location.hash = route;
};
