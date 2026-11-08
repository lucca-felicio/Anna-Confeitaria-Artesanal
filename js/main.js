import { BRAND_NAME, getInstagramUrl, getWhatsAppUrl } from "./config.js";
import {
  categories,
  getCategory,
  getProductBySlug,
  getProductsByCategory,
} from "./products.js";
import { navigate, parseRoute } from "./router.js";

const pageView = document.querySelector("#page-view");
const menuToggle = document.querySelector(".menu-toggle");
const primaryNavigation = document.querySelector("#primary-navigation");
const pageTitle = `${BRAND_NAME} — confeitaria artesanal`;

const renderProductCard = (product) => `
  <article class="product-card">
    <a class="product-card-image-link" href="#produto/${product.slug}" aria-label="Conhecer ${product.name}">
      <img class="product-card-image" src="${product.image}" alt="${product.imageAlt}" loading="lazy" width="1920" height="1446">
    </a>
    <div class="product-card-copy">
      <h3><a href="#produto/${product.slug}">${product.name}</a></h3>
      <p>${product.shortDescription}</p>
      <a class="text-link" href="#produto/${product.slug}">Conhecer produto</a>
    </div>
  </article>
`;

const renderHomeCategory = (category) => {
  const categoryProducts = getProductsByCategory(category.id);
  const contents = categoryProducts.length
    ? categoryProducts.map(renderProductCard).join("")
    : `<p class="empty-note">${category.homeEmptyMessage}</p>`;

  return `
    <section class="catalog-category" aria-labelledby="category-${category.id}">
      <h3 class="catalog-category-title" id="category-${category.id}"><a href="#${category.id}">${category.name}</a></h3>
      <div>${contents}</div>
    </section>
  `;
};

const renderHome = () => `
  <section class="hero page-shell" aria-labelledby="hero-title">
    <div class="hero-copy">
      <div class="hero-note">Confeitaria artesanal</div>
      <h1 id="hero-title">Pequenos detalhes,<span>sabores que encantam.</span></h1>
      <p>Uma vitrine feita para apresentar nossos bolos, tortas e cucas. Consulte a confeitaria para conhecer os detalhes de cada receita.</p>
      <div class="hero-actions">
        <a class="button-primary" href="#bolos">Conheça nossos produtos</a>
        <a class="text-link" href="#bolos">Ver catálogo</a>
      </div>
    </div>
    <div class="hero-visual">
      <img class="hero-image" src="assets/images/bolo-morango-ilustrativo.jpg" alt="Imagem ilustrativa de uma fatia de bolo decorada com morangos; não representa o produto real da confeitaria." width="1920" height="1446" fetchpriority="high">
      <span class="image-caption">Imagem ilustrativa</span>
    </div>
  </section>
  <section class="home-catalog" aria-labelledby="catalog-title">
    <div class="page-shell">
      <div class="section-intro">
        <h2 class="section-heading" id="catalog-title">Nossa vitrine</h2>
        <p>Explore as categorias e conheça o produto atualmente cadastrado.</p>
      </div>
      <div class="catalog-sections">${categories.map(renderHomeCategory).join("")}</div>
    </div>
  </section>
`;

const renderCategory = (categoryId) => {
  const category = getCategory(categoryId);
  if (!category) {
    return renderNotFound();
  }

  const categoryProducts = getProductsByCategory(categoryId);
  const contents = categoryProducts.length
    ? `<div class="product-grid">${categoryProducts.map(renderProductCard).join("")}</div>`
    : `<div class="empty-state"><p>${category.emptyMessage}</p></div>`;

  return `
    <section class="page-shell category-intro" aria-labelledby="category-title">
      <h1 class="page-heading" id="category-title">${category.title}</h1>
      <p>${category.description}</p>
    </section>
    <section class="page-shell category-content" aria-label="${category.name}">
      ${contents}
    </section>
  `;
};

const renderProduct = (slug) => {
  const product = getProductBySlug(slug);
  if (!product) {
    return renderNotFound();
  }

  const ingredientDetails = product.ingredients.length
    ? `<ul>${product.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}</ul>`
    : `<p>Aguardando informações da confeitaria.</p>`;
  const whatsappMessage = `Olá! Gostaria de saber mais sobre o ${product.name}.`;

  return `
    <section class="page-shell product-page" aria-labelledby="product-title">
      <a class="back-link" href="#${product.category}">
        <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M12.5 4.5 7 10l5.5 5.5M7.5 10H17" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Voltar para ${getCategory(product.category).name.toLowerCase()}
      </a>
      <div class="product-detail">
        <div class="product-detail-visual">
          <img class="product-detail-image" src="${product.image}" alt="${product.imageAlt}" width="1920" height="1446" fetchpriority="high">
          <span class="image-caption">${product.imageCaption}</span>
        </div>
        <div class="product-detail-copy">
          <div class="hero-note">${getCategory(product.category).name}</div>
          <h1 class="product-title" id="product-title">${product.name}</h1>
          <p class="product-description">${product.fullDescription}</p>
          <section class="product-info" aria-labelledby="ingredients-title">
            <h2 id="ingredients-title">Ingredientes principais</h2>
            ${ingredientDetails}
          </section>
          <section class="product-info" aria-labelledby="additional-info-title">
            <h2 id="additional-info-title">Informações adicionais</h2>
            <p>${product.additionalInfo}</p>
          </section>
          <div class="product-contact">
            <a class="button-primary" data-contact="whatsapp" data-message="${whatsappMessage}" href="${getWhatsAppUrl(whatsappMessage)}" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.7a8 8 0 0 1-11.8 7l-4.2 1.1 1.1-4.1A8 8 0 1 1 20 11.7Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M9 8.5c.3-.5.6-.4.8-.4h.3c.2 0 .4 0 .5.4l.7 1.6c.1.3.1.5-.1.7l-.5.6c-.2.2-.2.4 0 .6.4.7 1 1.3 1.7 1.7.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.7-.1l1.5.7c.3.1.4.3.4.5 0 .3-.2 1.1-.7 1.4-.5.4-1.1.5-1.8.3-1-.3-2.2-.9-3.3-2-1.2-1.1-1.8-2.4-2-3.3-.2-.7 0-1.3.5-1.8Z" fill="currentColor"/></svg>
              Consultar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
};

const renderNotFound = () => `
  <section class="page-shell category-intro" aria-labelledby="not-found-title">
    <h1 class="page-heading" id="not-found-title">Não encontramos esta página</h1>
    <p>Volte à vitrine para continuar explorando.</p>
    <a class="button-primary" href="#inicio">Ir para o início</a>
  </section>
`;

const updateContacts = () => {
  document.querySelectorAll('[data-contact="instagram"]').forEach((link) => {
    link.href = getInstagramUrl();
  });
  document.querySelectorAll('[data-contact="whatsapp"]').forEach((link) => {
    link.href = getWhatsAppUrl(link.dataset.message || "");
  });
};

const updateNavigation = (route) => {
  const currentPage = route.type === "home"
    ? "inicio"
    : route.type === "category"
      ? route.categoryId
      : route.type === "product"
        ? getProductBySlug(route.slug)?.category
        : "";

  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.dataset.nav === currentPage) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

const renderRoute = () => {
  const route = parseRoute();
  if (!window.location.hash) {
    navigate("inicio");
  }

  if (route.type === "home") {
    pageView.innerHTML = renderHome();
    document.title = pageTitle;
  } else if (route.type === "category") {
    pageView.innerHTML = renderCategory(route.categoryId);
    document.title = `${getCategory(route.categoryId)?.title || "Catálogo"} — ${BRAND_NAME}`;
  } else if (route.type === "product") {
    pageView.innerHTML = renderProduct(route.slug);
    document.title = `${getProductBySlug(route.slug)?.name || "Produto"} — ${BRAND_NAME}`;
  } else {
    pageView.innerHTML = renderNotFound();
    document.title = `Página não encontrada — ${BRAND_NAME}`;
  }

  updateContacts();
  updateNavigation(route);
  primaryNavigation.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
  window.scrollTo({ top: 0, behavior: "instant" });
};

document.querySelector("#brand-name").textContent = BRAND_NAME;
document.querySelector("#footer-brand-name").textContent = BRAND_NAME;

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
  primaryNavigation.classList.toggle("is-open", !isOpen);
});

primaryNavigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    primaryNavigation.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
  }
});

window.addEventListener("hashchange", renderRoute);
window.addEventListener("popstate", renderRoute);
renderRoute();
