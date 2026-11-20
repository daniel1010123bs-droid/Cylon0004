// ============================================================================
// GENERADOR DE ARTE PROCEDURAL EN CANVAS (CERO ENLACES ROTOS EN GITHUB PAGES)
// ============================================================================
function generateGameArt(title, subtitle, palette, variant = 0) {
  const canvas = document.createElement("canvas");
  canvas.width = 640;
  canvas.height = 360;
  const ctx = canvas.getContext("2d");

  const grad = ctx.createLinearGradient(0, 0, 640, 360);
  grad.addColorStop(0, palette[0]);
  grad.addColorStop(0.55, palette[1]);
  grad.addColorStop(1, palette[2]);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 640, 360);

  // Elementos geométricos / atmosféricos según variante
  for (let i = 0; i < 18; i++) {
    const x = ((i * 97 + variant * 53) % 640);
    const y = ((i * 61 + variant * 37) % 360);
    const r = 24 + ((i * 19 + variant * 11) % 95);
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = i % 2 === 0 ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.16)";
    ctx.fill();
  }

  // Horizonte / líneas de acción
  ctx.strokeStyle = "rgba(255,255,255,0.14)";
  ctx.lineWidth = 2;
  for (let l = 0; l < 6; l++) {
    ctx.beginPath();
    ctx.moveTo(0, 210 + l * 26);
    ctx.lineTo(640, 185 + l * 30 + (variant * 8));
    ctx.stroke();
  }

  // Viñeta oscura inferior para legibilidad
  const vignette = ctx.createLinearGradient(0, 120, 0, 360);
  vignette.addColorStop(0, "rgba(0,0,0,0)");
  vignette.addColorStop(1, "rgba(8,12,18,0.88)");
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 120, 640, 240);

  if (variant === 0) {
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 34px 'Segoe UI', Arial, sans-serif";
    ctx.fillText(title.toUpperCase(), 28, 296);

    ctx.fillStyle = "#66c0f4";
    ctx.font = "600 16px 'Segoe UI', Arial, sans-serif";
    ctx.fillText(subtitle, 30, 326);
  } else {
    ctx.fillStyle = "rgba(255,255,255,0.82)";
    ctx.font = "600 15px 'Segoe UI', Arial, sans-serif";
    ctx.fillText(`${title} — Captura del juego #${variant}`, 24, 334);
  }

  return canvas.toDataURL("image/jpeg", 0.86);
}

// ============================================================================
// CATÁLOGO DE VIDEOJUEGOS
// ============================================================================
const GAMES_DB = [
  {
    id: "cyber-protocol",
    title: "Cyber Protocol 2099",
    subtitle: "RPG de acción ciberpunk en mundo abierto",
    developer: "NeonByte Studios",
    releaseDate: "14 OCT 2026",
    genre: "RPG",
    tags: ["Ciberpunk", "Mundo abierto", "RPG", "Un jugador"],
    price: 59.99,
    discount: 50,
    rating: "Muy positivas (92%)",
    featured: true,
    tabs: ["popular", "bestsellers", "toprated", "all"],
    palette: ["#0f2027", "#203a43", "#ff007f"],
    description: "Explora una megaciudad vertical bañada en neón, mejora tus implantes cibernéticos y decide el destino de las corporaciones en una campaña ramificada de 60 horas.",
    reqMin: "SO: Windows 10 64-bit • CPU: Intel Core i5-10400 • RAM: 12 GB • GPU: GTX 1660 Super",
    reqRec: "SO: Windows 11 64-bit • CPU: Ryzen 7 5800X • RAM: 16 GB • GPU: RTX 4070",
    achievements: ["Primer Implantes", "Fantasma en la Red", "Leyenda de Neo-Bogotá", "Sin Rasguños"]
  },
  {
    id: "valhalla-ashes",
    title: "Ashes of Valhalla",
    subtitle: "Aventura épica de supervivencia nórdica",
    developer: "FrostForge Interactive",
    releaseDate: "22 AGO 2026",
    genre: "Acción",
    tags: ["Acción", "Aventura", "Mitología", "Cooperativo"],
    price: 49.99,
    discount: 40,
    rating: "Extremadamente positivas (96%)",
    featured: true,
    tabs: ["bestsellers", "toprated", "all"],
    palette: ["#1c2833", "#2e4053", "#d35400"],
    description: "Forja armas rúnicas, navega mares tormentosos con tu clan y enfréntate a colosos ancestrales en tierras heladas.",
    reqMin: "SO: Windows 10 • CPU: Core i5-9600K • RAM: 8 GB • GPU: GTX 1060",
    reqRec: "SO: Windows 11 • CPU: Core i7-12700 • RAM: 16 GB • GPU: RTX 3070",
    achievements: ["Hijo de Odín", "Navegante del Norte", "Cazador de Jotuns"]
  },
  {
    id: "starfield-odyssey",
    title: "Stellar Odyssey: Void Horizon",
    subtitle: "Simulación espacial y comercio galáctico",
    developer: "Orbital Works",
    releaseDate: "03 NOV 2026",
    genre: "Sci-Fi",
    tags: ["Espacial", "Sci-Fi", "Exploración", "Simulación"],
    price: 44.99,
    discount: 25,
    rating: "Muy positivas (89%)",
    featured: true,
    tabs: ["popular", "all"],
    palette: ["#090d16", "#1b2845", "#274060"],
    description: "Comanda tu propia fragata interestelar, cartografía más de 400 sistemas estelares y construye estaciones orbitales autosuficientes.",
    reqMin: "SO: Windows 10 • CPU: Ryzen 5 3600 • RAM: 16 GB • GPU: RX 5700",
    reqRec: "SO: Windows 11 • CPU: Ryzen 7 7700X • RAM: 32 GB • GPU: RX 7800 XT",
    achievements: ["Salto Hiperespacial", "Magnate Galáctico", "Primer Contacto"]
  },
  {
    id: "apex-velocity",
    title: "Apex Velocity GT",
    subtitle: "Carreras competitivas de alta precisión",
    developer: "TrackLine Motorsport",
    releaseDate: "19 JUN 2026",
    genre: "Carreras",
    tags: ["Carreras", "Multijugador", "Simulación", "Deportes"],
    price: 39.99,
    discount: 60,
    rating: "Muy positivas (91%)",
    featured: true,
    tabs: ["bestsellers", "all"],
    palette: ["#1a1a2e", "#16213e", "#e94560"],
    description: "Físicas de neumáticos de última generación, telemetría completa y 38 circuitos internacionales escaneados por láser.",
    reqMin: "SO: Windows 10 • CPU: Core i5-8400 • RAM: 8 GB • GPU: GTX 1050 Ti",
    reqRec: "SO: Windows 11 • CPU: Core i7-11700K • RAM: 16 GB • GPU: RTX 3060 Ti",
    achievements: ["Pole Position", "Vuelta Perfecta", "Campeón Mundial"]
  },
  {
    id: "eclipse-protocol",
    title: "Shadow Eclipse: Tactical Ops",
    subtitle: "Estrategia por turnos y sigilo táctico",
    developer: "IronGrid Games",
    releaseDate: "11 SEP 2026",
    genre: "Estrategia",
    tags: ["Estrategia", "Táctico", "Sigilo", "Por turnos"],
    price: 34.99,
    discount: 35,
    rating: "Extremadamente positivas (95%)",
    featured: true,
    tabs: ["toprated", "popular", "all"],
    palette: ["#141e30", "#243b55", "#1abc9c"],
    description: "Dirige un escuadrón de élite en operaciones encubiertas donde cada movimiento, cobertura y línea de visión cuenta.",
    reqMin: "SO: Windows 10 • CPU: Core i3-9100 • RAM: 8 GB • GPU: GTX 960",
    reqRec: "SO: Windows 10/11 • CPU: Core i5-11400 • RAM: 16 GB • GPU: GTX 1660",
    achievements: ["Operación Limpia", "Estratega Maestro", "Sin Bajas"]
  },
  {
    id: "hollow-depths",
    title: "Echoes of the Deep",
    subtitle: "Terror psicológico submarino",
    developer: "Abyssal Soft",
    releaseDate: "30 OCT 2026",
    genre: "Terror",
    tags: ["Terror", "Supervivencia", "Atmosférico", "Misterio"],
    price: 24.99,
    discount: 20,
    rating: "Muy positivas (93%)",
    featured: false,
    tabs: ["popular", "toprated", "all"],
    palette: ["#050d14", "#0d2538", "#1d4e68"],
    description: "Desciende a una estación abisal incomunicada a 9.000 metros de profundidad y descubre qué despertó en la fosa oceánica.",
    reqMin: "SO: Windows 10 • CPU: Core i5-7500 • RAM: 8 GB • GPU: GTX 1060",
    reqRec: "SO: Windows 11 • CPU: Ryzen 5 5600 • RAM: 16 GB • GPU: RTX 3060",
    achievements: ["Presión Extrema", "Luz en la Oscuridad", "Superviviente"]
  },
  {
    id: "kingdom-architect",
    title: "Crown & Stone: Empire Builder",
    subtitle: "Construcción de ciudades medievales",
    developer: "Bastion Studio",
    releaseDate: "05 MAY 2026",
    genre: "Estrategia",
    tags: ["Construcción", "Estrategia", "Medieval", "Gestión"],
    price: 29.99,
    discount: 50,
    rating: "Muy positivas (90%)",
    featured: false,
    tabs: ["bestsellers", "all"],
    palette: ["#2c3e50", "#4ca1af", "#27ae60"],
    description: "Diseña murallas, gestiona rutas comerciales y defiende tu ciudadela frente a asedios estacionales.",
    reqMin: "SO: Windows 10 • CPU: Core i5-8400 • RAM: 8 GB • GPU: GTX 1050",
    reqRec: "SO: Windows 11 • CPU: Core i7-10700 • RAM: 16 GB • GPU: RTX 2060",
    achievements: ["Gran Arquitecto", "Fortaleza Inexpugnable"]
  },
  {
    id: "pixel-ronin",
    title: "Neon Ronin: Blade Zero",
    subtitle: "Acción frenética de plataformas y katana",
    developer: "Kitsune Indie",
    releaseDate: "18 JUL 2026",
    genre: "Acción",
    tags: ["Indie", "Acción", "Plataformas", "Difícil"],
    price: 19.99,
    discount: 0,
    rating: "Extremadamente positivas (97%)",
    featured: false,
    tabs: ["popular", "toprated", "all"],
    palette: ["#2b1055", "#7597de", "#ff5e62"],
    description: "Combate instantáneo de un solo golpe con banda sonora synthwave original y 45 niveles llenos de secretos.",
    reqMin: "SO: Windows 10 • CPU: Dual Core 2.4 GHz • RAM: 4 GB • GPU: Integrada",
    reqRec: "SO: Windows 10/11 • CPU: Core i5 • RAM: 8 GB • GPU: GTX 950",
    achievements: ["Filo Relámpago", "Intocable", "Coleccionista"]
  },
  {
    id: "terra-colonist",
    title: "Terra Nova Colony",
    subtitle: "Terraformación y automatización planetaria",
    developer: "HexaCore Labs",
    releaseDate: "12 ABR 2026",
    genre: "Sci-Fi",
    tags: ["Automatización", "Sci-Fi", "Supervivencia", "Construcción"],
    price: 34.99,
    discount: 30,
    rating: "Muy positivas (94%)",
    featured: false,
    tabs: ["bestsellers", "toprated", "all"],
    palette: ["#1e3c72", "#2a5298", "#f39c12"],
    description: "Construye fábricas automatizadas, redes ferroviarias y biosferas autosuficientes en un exoplaneta hostil.",
    reqMin: "SO: Windows 10 • CPU: Core i5-9400 • RAM: 8 GB • GPU: GTX 1060",
    reqRec: "SO: Windows 11 • CPU: Ryzen 7 5700X • RAM: 16 GB • GPU: RTX 3060",
    achievements: ["Primera Fábrica", "Atmósfera Respirable"]
  },
  {
    id: "arcane-chronicles",
    title: "Arcane Chronicles: Elder Pact",
    subtitle: "RPG táctico de fantasía oscura",
    developer: "Grimoire Interactive",
    releaseDate: "09 FEB 2026",
    genre: "RPG",
    tags: ["RPG", "Fantasía", "Buena trama", "Un jugador"],
    price: 44.99,
    discount: 75,
    rating: "Muy positivas (88%)",
    featured: false,
    tabs: ["bestsellers", "all"],
    palette: ["#1f1c2c", "#928dab", "#4a148c"],
    description: "Reúne un grupo de héroes marcados por la magia antigua y altera el equilibrio de poder entre tres reinos.",
    reqMin: "SO: Windows 10 • CPU: Core i5-8600 • RAM: 8 GB • GPU: GTX 1060",
    reqRec: "SO: Windows 11 • CPU: Core i7-11700 • RAM: 16 GB • GPU: RTX 3060",
    achievements: ["Pacto Antiguo", "Archimago"]
  }
];

// Generar imágenes procedurales para cada juego al iniciar
GAMES_DB.forEach((game) => {
  game.cover = generateGameArt(game.title, game.subtitle, game.palette, 0);
  game.screenshots = [
    generateGameArt(game.title, game.subtitle, game.palette, 1),
    generateGameArt(game.title, game.subtitle, game.palette, 2),
    generateGameArt(game.title, game.subtitle, game.palette, 3),
    generateGameArt(game.title, game.subtitle, game.palette, 4)
  ];
});

// ============================================================================
// ESTADO PERSISTENTE EN LOCALSTORAGE
// ============================================================================
const STORAGE_KEY = "steam_clone_state_v1";

const DEFAULT_STATE = {
  walletBalance: 60.00,
  cart: ["apex-velocity"],
  wishlist: ["cyber-protocol", "hollow-depths"],
  library: [
    { id: "pixel-ronin", installed: true, hours: 14.6, unlockedAchievements: ["Filo Relámpago"] },
    { id: "kingdom-architect", installed: false, hours: 2.3, unlockedAchievements: [] }
  ],
  coupon: null,
  giftCardRedeemed: false,
  transactions: [
    { label: "Saldo inicial de bienvenida", amount: "+$60.00" }
  ],
  reviews: [
    {
      id: 1,
      author: "Valen_Tech",
      gameId: "cyber-protocol",
      recommended: true,
      hours: 68.4,
      text: "La ambientación nocturna y la libertad para resolver cada misión con sigilo o combate directo son espectaculares.",
      helpful: 42
    },
    {
      id: 2,
      author: "AndresRacer",
      gameId: "apex-velocity",
      recommended: true,
      hours: 112.0,
      text: "Con volante o mando se siente increíble. El sistema de clima dinámico cambia por completo la estrategia en pista.",
      helpful: 29
    }
  ]
};

let state = loadState();
let featuredIndex = 0;
let activeTab = "popular";
let activeGenre = "Todos";
let previewGameId = GAMES_DB[0].id;
let selectedLibraryId = state.library[0]?.id || null;
let reviewRecommendFlag = true;

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(DEFAULT_STATE);
    return { ...structuredClone(DEFAULT_STATE), ...JSON.parse(raw) };
  } catch {
    return structuredClone(DEFAULT_STATE);
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn("No se pudo guardar en localStorage:", e);
  }
  updateGlobalCounters();
}

// ============================================================================
// UTILIDADES DE PRECIO Y NOTIFICACIONES
// ============================================================================
function getGameById(id) {
  return GAMES_DB.find((g) => g.id === id);
}

function getFinalPrice(game) {
  if (!game.discount || game.discount <= 0) return game.price;
  return Number((game.price * (1 - game.discount / 100)).toFixed(2));
}

function formatMoney(val) {
  return `$${Number(val).toFixed(2)}`;
}

function renderPriceHtml(game) {
  const finalP = getFinalPrice(game);
  if (game.discount > 0) {
    return `
      <div class="price-block">
        <span class="discount-badge">-${game.discount}%</span>
        <div class="price-values">
          <span class="old-price">${formatMoney(game.price)}</span>
          <span class="final-price">${formatMoney(finalP)}</span>
        </div>
      </div>
    `;
  }
  return `
    <div class="price-block">
      <div class="price-values">
        <span class="final-price">${formatMoney(game.price)}</span>
      </div>
    </div>
  `;
}

function showToast(message) {
  const container = document.getElementById("toast-container");
  const el = document.createElement("div");
  el.className = "toast-msg";
  el.textContent = message;
  container.appendChild(el);
  setTimeout(() => {
    el.remove();
  }, 3200);
}

function updateGlobalCounters() {
  document.getElementById("header-wallet-balance").textContent = formatMoney(state.walletBalance);
  document.getElementById("header-cart-count").textContent = state.cart.length;
  document.getElementById("header-wishlist-count").textContent = state.wishlist.length;
  document.getElementById("nav-library-count").textContent = state.library.length;
}

// ============================================================================
// NAVEGACIÓN ENTRE VISTAS
// ============================================================================
function switchView(viewName, scrollTargetId = null) {
  document.querySelectorAll(".view-section").forEach((sec) => sec.classList.remove("active"));
  const target = document.getElementById(`view-${viewName}`);
  if (target) target.classList.add("active");

  document.querySelectorAll(".nav-link").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.nav === viewName);
  });

  if (viewName === "cart") renderCart();
  if (viewName === "library") renderLibrary();
  if (viewName === "wishlist") renderWishlist();
  if (viewName === "community") renderCommunity();
  if (viewName === "wallet") renderWallet();

  if (scrollTargetId) {
    setTimeout(() => {
      const el = document.getElementById(scrollTargetId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 50);
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// ============================================================================
// ACCIONES DE TIENDA (CARRO Y LISTA DE DESEADOS)
// ============================================================================
function addToCart(gameId) {
  const game = getGameById(gameId);
  if (!game) return;

  if (state.library.some((item) => item.id === gameId)) {
    showToast(`Ya tienes "${game.title}" en tu Biblioteca.`);
    return;
  }

  if (state.cart.includes(gameId)) {
    showToast(`"${game.title}" ya está en tu carro.`);
    switchView("cart");
    return;
  }

  state.cart.push(gameId);
  saveState();
  showToast(`✔ "${game.title}" añadido al carro de compras.`);
}

function removeFromCart(gameId) {
  state.cart = state.cart.filter((id) => id !== gameId);
  saveState();
  renderCart();
}

function toggleWishlist(gameId) {
  const game = getGameById(gameId);
  if (!game) return;

  if (state.wishlist.includes(gameId)) {
    state.wishlist = state.wishlist.filter((id) => id !== gameId);
    showToast(`Eliminado de tu lista de deseados: ${game.title}`);
  } else {
    state.wishlist.push(gameId);
    showToast(`♡ Añadido a tu lista de deseados: ${game.title}`);
  }
  saveState();
  renderFeatured();
  renderWishlist();
}

// ============================================================================
// CARRUSEL DESTACADO
// ============================================================================
function renderFeatured() {
  const featuredGames = GAMES_DB.filter((g) => g.featured);
  const game = featuredGames[featuredIndex % featuredGames.length];

  const mainImg = document.getElementById("featured-main-img");
  mainImg.src = game.cover;
  document.getElementById("featured-title").textContent = game.title;
  document.getElementById("featured-subtitle").textContent = `${game.subtitle} • ${game.rating}`;
  document.getElementById("featured-media-badge").textContent =
    game.discount > 0 ? `OFERTA -${game.discount}%` : "DESTACADO";

  const thumbsWrap = document.getElementById("featured-thumbs");
  thumbsWrap.innerHTML = "";
  game.screenshots.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = game.title;
    img.addEventListener("mouseenter", () => {
      mainImg.src = src;
    });
    img.addEventListener("mouseleave", () => {
      mainImg.src = game.cover;
    });
    thumbsWrap.appendChild(img);
  });

  document.getElementById("featured-tags").innerHTML = game.tags
    .map((t) => `<span class="steam-tag">${t}</span>`)
    .join("");

  document.getElementById("featured-price-block").innerHTML = renderPriceHtml(game);

  const inWishlist = state.wishlist.includes(game.id);
  const wishBtn = document.getElementById("featured-wishlist");
  wishBtn.textContent = inWishlist ? "♥ En deseados" : "♡ Deseados";
  wishBtn.onclick = () => toggleWishlist(game.id);

  document.getElementById("featured-add-cart").onclick = () => addToCart(game.id);
  document.getElementById("featured-details").onclick = () => openProductModal(game.id);

  const dotsWrap = document.getElementById("carousel-dots");
  dotsWrap.innerHTML = featuredGames
    .map(
      (_, idx) =>
        `<button class="carousel-dot ${idx === featuredIndex ? "active" : ""}" data-dot="${idx}" aria-label="Diapositiva ${idx + 1}"></button>`
    )
    .join("");

  dotsWrap.querySelectorAll(".carousel-dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      featuredIndex = Number(dot.dataset.dot);
      renderFeatured();
    });
  });
}

// ============================================================================
// OFERTAS ESPECIALES Y CATÁLOGO
// ============================================================================
function renderOffers() {
  const deals = GAMES_DB.filter((g) => g.discount >= 35).slice(0, 4);
  const grid = document.getElementById("offers-grid");
  grid.innerHTML = deals
    .map(
      (game) => `
      <article class="offer-card">
        <img src="${game.cover}" alt="${game.title}" data-open-modal="${game.id}" />
        <div class="offer-body">
          <div>
            <div class="offer-title" data-open-modal="${game.id}">${game.title}</div>
            <div class="offer-sub">OFERTA DEL FIN DE SEMANA • ${game.genre}</div>
          </div>
          <div class="offer-footer">
            ${renderPriceHtml(game)}
            <button class="btn-steam-green" data-add-cart="${game.id}">+ Carro</button>
          </div>
        </div>
      </article>
    `
    )
    .join("");
}

function renderGenrePills() {
  const genres = ["Todos", ...new Set(GAMES_DB.map((g) => g.genre))];
  const wrap = document.getElementById("genre-pills");
  wrap.innerHTML = genres
    .map(
      (g) =>
        `<button class="genre-pill ${g === activeGenre ? "active" : ""}" data-genre="${g}">${g}</button>`
    )
    .join("");

  wrap.querySelectorAll(".genre-pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeGenre = btn.dataset.genre;
      renderGenrePills();
      renderCatalog();
    });
  });
}

function renderCatalog() {
  const onlyDeals = document.getElementById("filter-only-deals").checked;
  const sortBy = document.getElementById("catalog-sort").value;

  let list = GAMES_DB.filter((g) => g.tabs.includes(activeTab));
  if (activeGenre !== "Todos") {
    list = list.filter((g) => g.genre === activeGenre);
  }
  if (onlyDeals) {
    list = list.filter((g) => g.discount > 0);
  }

  if (sortBy === "price-asc") {
    list.sort((a, b) => getFinalPrice(a) - getFinalPrice(b));
  } else if (sortBy === "price-desc") {
    list.sort((a, b) => getFinalPrice(b) - getFinalPrice(a));
  } else if (sortBy === "discount") {
    list.sort((a, b) => b.discount - a.discount);
  }

  const listEl = document.getElementById("catalog-list");
  if (list.length === 0) {
    listEl.innerHTML = `<div class="empty-state-box">No hay juegos que coincidan con estos filtros.</div>`;
    return;
  }

  if (!list.some((g) => g.id === previewGameId)) {
    previewGameId = list[0].id;
  }

  listEl.innerHTML = list
    .map(
      (game) => `
      <div class="catalog-row ${game.id === previewGameId ? "active-preview" : ""}" data-preview-id="${game.id}">
        <img src="${game.cover}" alt="${game.title}" />
        <div>
          <div class="catalog-row-title">${game.title}</div>
          <div class="catalog-row-tags">${game.tags.join(", ")}</div>
        </div>
        <div class="catalog-row-actions">
          ${renderPriceHtml(game)}
          <button class="btn-steam-green" data-add-cart="${game.id}">+ Carro</button>
        </div>
      </div>
    `
    )
    .join("");

  listEl.querySelectorAll(".catalog-row").forEach((row) => {
    row.addEventListener("mouseenter", () => {
      previewGameId = row.dataset.previewId;
      listEl.querySelectorAll(".catalog-row").forEach((r) =>
        r.classList.toggle("active-preview", r.dataset.previewId === previewGameId)
      );
      updateCatalogPreview(previewGameId);
    });
    row.addEventListener("click", (e) => {
      if (e.target.closest("button")) return;
      openProductModal(row.dataset.previewId);
    });
  });

  updateCatalogPreview(previewGameId);
}

function updateCatalogPreview(gameId) {
  const game = getGameById(gameId) || GAMES_DB[0];
  document.getElementById("preview-title").textContent = game.title;
  document.getElementById("preview-rating").textContent = game.rating;
  document.getElementById("preview-tags").innerHTML = game.tags
    .map((t) => `<span class="steam-tag">${t}</span>`)
    .join("");
  document.getElementById("preview-screenshots").innerHTML = game.screenshots
    .slice(0, 3)
    .map((src) => `<img src="${src}" alt="${game.title}" />`)
    .join("");
  document.getElementById("preview-open-detail").onclick = () => openProductModal(game.id);
}

// ============================================================================
// MODAL FICHA DE PRODUCTO
// ============================================================================
function openProductModal(gameId) {
  const game = getGameById(gameId);
  if (!game) return;

  const modal = document.getElementById("product-modal");
  const body = document.getElementById("product-modal-body");
  const owned = state.library.some((item) => item.id === game.id);

  body.innerHTML = `
    <h2 class="page-title" style="margin-bottom:6px">${game.title}</h2>
    <p class="muted-text" style="margin-bottom:12px">Desarrollador: <strong>${game.developer}</strong> • Lanzamiento: ${game.releaseDate}</p>

    <div class="product-modal-grid">
      <div>
        <img id="modal-active-media" class="modal-main-img" src="${game.cover}" alt="${game.title}" />
        <div class="modal-thumb-strip">
          <img src="${game.cover}" data-modal-src="${game.cover}" alt="Portada" />
          ${game.screenshots
            .slice(0, 3)
            .map((s) => `<img src="${s}" data-modal-src="${s}" alt="Captura" />`)
            .join("")}
        </div>
      </div>

      <div style="display:flex;flex-direction:column;justify-content:space-between;gap:12px">
        <div>
          <p style="font-size:0.9rem;color:#d6e2ec">${game.description}</p>
          <div class="preview-rating-box" style="margin-top:12px">
            <span class="rating-label">Reseñas generales:</span>
            <div class="rating-value">${game.rating}</div>
          </div>
          <div class="tag-row">${game.tags.map((t) => `<span class="steam-tag">${t}</span>`).join("")}</div>
        </div>

        <div class="summary-card">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
            <span>Edición Estándar</span>
            ${renderPriceHtml(game)}
          </div>
          ${
            owned
              ? `<button class="btn-steam-blue full-width" id="modal-go-library">Ya en tu Biblioteca — Ir a jugar</button>`
              : `<div style="display:flex;gap:8px">
                  <button class="btn-steam-green" style="flex:1" id="modal-add-cart">Añadir al carro</button>
                  <button class="btn-steam-blue" id="modal-toggle-wish">${state.wishlist.includes(game.id) ? "♥" : "♡"}</button>
                </div>`
          }
        </div>
      </div>
    </div>

    <div class="req-grid">
      <div>
        <strong style="color:var(--accent-blue)">REQUISITOS MÍNIMOS</strong>
        <p style="margin-top:4px">${game.reqMin}</p>
      </div>
      <div>
        <strong style="color:var(--accent-blue)">REQUISITOS RECOMENDADOS</strong>
        <p style="margin-top:4px">${game.reqRec}</p>
      </div>
    </div>
  `;

  body.querySelectorAll("[data-modal-src]").forEach((thumb) => {
    thumb.addEventListener("click", () => {
      document.getElementById("modal-active-media").src = thumb.dataset.modalSrc;
    });
  });

  const addBtn = document.getElementById("modal-add-cart");
  if (addBtn) {
    addBtn.onclick = () => {
      addToCart(game.id);
      modal.classList.add("hidden");
    };
  }

  const wishBtn = document.getElementById("modal-toggle-wish");
  if (wishBtn) {
    wishBtn.onclick = () => {
      toggleWishlist(game.id);
      openProductModal(game.id);
    };
  }

  const libBtn = document.getElementById("modal-go-library");
  if (libBtn) {
    libBtn.onclick = () => {
      modal.classList.add("hidden");
      selectedLibraryId = game.id;
      switchView("library");
    };
  }

  modal.classList.remove("hidden");
}

// ============================================================================
// CARRO DE COMPRAS Y CHECKOUT
// ============================================================================
function calculateCartTotals() {
  const items = state.cart.map(getGameById).filter(Boolean);
  const subtotal = items.reduce((acc, g) => acc + getFinalPrice(g), 0);
  let discountAmount = 0;

  if (state.coupon === "STEAM15") {
    discountAmount = subtotal * 0.15;
  } else if (state.coupon === "BIENVENIDO10") {
    discountAmount = Math.min(subtotal, 10);
  }

  const total = Math.max(0, subtotal - discountAmount);
  return { items, subtotal, discountAmount, total };
}

function renderCart() {
  const container = document.getElementById("cart-items-container");
  const { items, subtotal, discountAmount, total } = calculateCartTotals();

  if (items.length === 0) {
    container.innerHTML = `
      <div class="empty-state-box">
        <h3>Tu carro de compras está vacío</h3>
        <p class="muted-text" style="margin:8px 0 14px">Explora las ofertas destacadas y añade tus próximos juegos favoritos.</p>
        <button class="btn-steam-green" data-nav="store">Volver a la tienda</button>
      </div>
    `;
  } else {
    container.innerHTML = items
      .map(
        (game) => `
        <div class="cart-item-card">
          <div class="cart-item-left">
            <img src="${game.cover}" alt="${game.title}" />
            <div>
              <div class="cart-item-title">${game.title}</div>
              <div class="cart-item-meta">Plataforma: Windows / SteamOS • Descarga digital</div>
            </div>
          </div>
          <div class="cart-item-right">
            ${renderPriceHtml(game)}
            <button class="remove-link" data-remove-cart="${game.id}">Eliminar</button>
          </div>
        </div>
      `
      )
      .join("");
  }

  document.getElementById("cart-subtotal").textContent = formatMoney(subtotal);
  const couponRow = document.getElementById("cart-coupon-row");
  if (discountAmount > 0) {
    couponRow.classList.remove("hidden");
    document.getElementById("cart-coupon-amount").textContent = `-${formatMoney(discountAmount)}`;
  } else {
    couponRow.classList.add("hidden");
  }
  document.getElementById("cart-total").textContent = formatMoney(total);
}

function handleCheckout() {
  const { items, total } = calculateCartTotals();
  if (items.length === 0) {
    showToast("Añade al menos un juego al carro antes de pagar.");
    return;
  }

  const paymentMethod = document.getElementById("payment-method").value;
  const purchaseType = document.querySelector('input[name="purchase-type"]:checked').value;
  const giftRecipient = document.getElementById("gift-recipient").value.trim();

  if (purchaseType === "gift" && !giftRecipient) {
    showToast("Escribe el nombre del destinatario para enviar el regalo.");
    return;
  }

  if (paymentMethod === "wallet" && state.walletBalance < total) {
    showToast("Saldo insuficiente en tu Cartera Steam. Recarga fondos o elige tarjeta.");
    return;
  }

  if (paymentMethod === "wallet") {
    state.walletBalance = Number((state.walletBalance - total).toFixed(2));
    state.transactions.unshift({
      label: `Compra en tienda (${items.length} juego${items.length > 1 ? "s" : ""})`,
      amount: `-${formatMoney(total)}`
    });
  }

  if (purchaseType === "self") {
    items.forEach((game) => {
      if (!state.library.some((entry) => entry.id === game.id)) {
        state.library.unshift({
          id: game.id,
          installed: false,
          hours: 0.0,
          unlockedAchievements: []
        });
      }
      state.wishlist = state.wishlist.filter((id) => id !== game.id);
    });
    selectedLibraryId = items[0].id;
  }

  state.cart = [];
  state.coupon = null;
  document.getElementById("coupon-input").value = "";
  document.getElementById("coupon-feedback").textContent = "";
  saveState();
  renderCart();

  // Mostrar recibo digital
  const receiptModal = document.getElementById("receipt-modal");
  document.getElementById("receipt-modal-body").innerHTML = `
    <h2 style="color:#a4d007;margin-bottom:8px">✔ ¡GRACIAS POR TU COMPRA!</h2>
    <p style="font-size:0.9rem;margin-bottom:14px">
      ${
        purchaseType === "gift"
          ? `Tu regalo ha sido enviado correctamente a <strong>${giftRecipient}</strong>.`
          : "Tus juegos ya están disponibles en tu Biblioteca de Steam."
      }
    </p>
    <div class="summary-card" style="margin-bottom:14px">
      ${items.map((g) => `<div class="total-row"><span>${g.title}</span><span>${formatMoney(getFinalPrice(g))}</span></div>`).join("")}
      <div class="total-row grand-total"><span>Total pagado</span><span>${formatMoney(total)}</span></div>
    </div>
    <button class="btn-steam-green full-width" id="receipt-go-library">Ir a mi Biblioteca</button>
  `;
  document.getElementById("receipt-go-library").onclick = () => {
    receiptModal.classList.add("hidden");
    switchView("library");
  };
  receiptModal.classList.remove("hidden");
}

// ============================================================================
// BIBLIOTECA CON DESCARGA ANIMADA Y LOGROS
// ============================================================================
function renderLibrary() {
  const filter = document.getElementById("library-search").value.toLowerCase();
  const listEl = document.getElementById("library-game-list");
  document.getElementById("library-total-count").textContent = state.library.length;

  const entries = state.library.filter((entry) => {
    const g = getGameById(entry.id);
    return g && g.title.toLowerCase().includes(filter);
  });

  if (entries.length === 0) {
    listEl.innerHTML = `<p style="padding:14px;font-size:0.82rem;color:var(--text-muted)">No se encontraron juegos.</p>`;
    return;
  }

  if (!entries.some((e) => e.id === selectedLibraryId)) {
    selectedLibraryId = entries[0].id;
  }

  listEl.innerHTML = entries
    .map((entry) => {
      const g = getGameById(entry.id);
      return `
        <div class="lib-sidebar-item ${entry.id === selectedLibraryId ? "active" : ""}" data-lib-id="${entry.id}">
          <span class="lib-dot ${entry.installed ? "installed" : ""}"></span>
          <span>${g.title}</span>
        </div>
      `;
    })
    .join("");

  listEl.querySelectorAll(".lib-sidebar-item").forEach((item) => {
    item.addEventListener("click", () => {
      selectedLibraryId = item.dataset.libId;
      renderLibrary();
    });
  });

  renderLibraryDetail(selectedLibraryId);
}

function renderLibraryDetail(gameId) {
  const entry = state.library.find((e) => e.id === gameId);
  const game = getGameById(gameId);
  const panel = document.getElementById("library-main-panel");
  if (!entry || !game) return;

  panel.innerHTML = `
    <div class="library-hero">
      <img src="${game.cover}" alt="${game.title}" />
      <div class="library-hero-overlay">
        <h2>${game.title}</h2>
      </div>
    </div>

    <div class="library-action-bar">
      <div style="display:flex;gap:10px;align-items:center">
        ${
          entry.installed
            ? `<button class="btn-steam-green large-btn" id="btn-play-game">▶ JUGAR</button>
               <button class="btn-steam-dark" id="btn-uninstall-game">Desinstalar</button>`
            : `<button class="btn-steam-blue large-btn" id="btn-install-game">⬇ INSTALAR (34.2 GB)</button>`
        }
      </div>

      <div class="lib-stats-row">
        <div>
          <span class="lib-stat-label">Tiempo de juego</span>
          <strong>${entry.hours.toFixed(1)} horas</strong>
        </div>
        <div>
          <span class="lib-stat-label">Logros</span>
          <strong>${entry.unlockedAchievements.length} / ${game.achievements.length}</strong>
        </div>
        <div>
          <span class="lib-stat-label">Estado</span>
          <strong>${entry.installed ? "Instalado en disco" : "En la nube"}</strong>
        </div>
      </div>
    </div>

    <div class="download-progress-wrap hidden" id="lib-download-box">
      <div style="display:flex;justify-content:space-between;font-size:0.82rem">
        <span>Descargando archivos del juego...</span>
        <span id="lib-download-pct">0% • 62.4 MB/s</span>
      </div>
      <div class="progress-bar-track">
        <div class="progress-bar-fill" id="lib-download-fill"></div>
      </div>
    </div>

    <div class="library-body">
      <h3>LOGROS DESBLOQUEABLES</h3>
      <div class="achievements-grid">
        ${game.achievements
          .map((ach) => {
            const unlocked = entry.unlockedAchievements.includes(ach);
            return `
              <div class="achievement-card ${unlocked ? "unlocked" : ""}">
                <strong>${unlocked ? "🏆" : "🔒"} ${ach}</strong>
                <div style="font-size:0.75rem;color:var(--text-muted);margin-top:3px">
                  ${unlocked ? "Desbloqueado" : "Juega para desbloquear"}
                </div>
              </div>
            `;
          })
          .join("")}
      </div>
    </div>
  `;

  const installBtn = document.getElementById("btn-install-game");
  if (installBtn) {
    installBtn.onclick = () => {
      installBtn.disabled = true;
      const box = document.getElementById("lib-download-box");
      const fill = document.getElementById("lib-download-fill");
      const pct = document.getElementById("lib-download-pct");
      box.classList.remove("hidden");

      let progress = 0;
      const timer = setInterval(() => {
        progress += 20;
        fill.style.width = `${progress}%`;
        pct.textContent = `${progress}% • 68.2 MB/s`;
        if (progress >= 100) {
          clearInterval(timer);
          entry.installed = true;
          saveState();
          showToast(`✔ "${game.title}" instalado y listo para jugar.`);
          renderLibrary();
        }
      }, 280);
    };
  }

  const uninstallBtn = document.getElementById("btn-uninstall-game");
  if (uninstallBtn) {
    uninstallBtn.onclick = () => {
      entry.installed = false;
      saveState();
      showToast(`Archivos locales de "${game.title}" eliminados.`);
      renderLibrary();
    };
  }

  const playBtn = document.getElementById("btn-play-game");
  if (playBtn) {
    playBtn.onclick = () => {
      entry.hours = Number((entry.hours + 0.5).toFixed(1));
      const locked = game.achievements.find((a) => !entry.unlockedAchievements.includes(a));
      if (locked) {
        entry.unlockedAchievements.push(locked);
        showToast(`🏆 ¡Logro desbloqueado en ${game.title}: "${locked}"!`);
      } else {
        showToast(`▶ Ejecutando ${game.title} (+0.5 h registradas).`);
      }
      saveState();
      renderLibrary();
    };
  }
}

// ============================================================================
// LISTA DE DESEADOS, COMUNIDAD Y CARTERA
// ============================================================================
function renderWishlist() {
  const container = document.getElementById("wishlist-container");
  const items = state.wishlist.map(getGameById).filter(Boolean);

  if (items.length === 0) {
    container.innerHTML = `
      <div class="empty-state-box">
        <h3>Tu lista de deseados está vacía</h3>
        <p class="muted-text" style="margin:8px 0 14px">Pulsa el botón "♡ Deseados" en cualquier título de la tienda para guardarlo aquí.</p>
        <button class="btn-steam-blue" data-nav="store">Explorar tienda</button>
      </div>
    `;
    return;
  }

  container.innerHTML = items
    .map(
      (game) => `
      <div class="wishlist-card">
        <img src="${game.cover}" alt="${game.title}" />
        <div>
          <h3 style="color:#fff;margin-bottom:4px">${game.title}</h3>
          <div style="font-size:0.8rem;color:var(--accent-blue)">Reseñas: ${game.rating}</div>
          <div class="tag-row">${game.tags.map((t) => `<span class="steam-tag">${t}</span>`).join("")}</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px">
          ${renderPriceHtml(game)}
          <div style="display:flex;gap:8px">
            <button class="btn-steam-green" data-add-cart="${game.id}">Añadir al carro</button>
            <button class="btn-steam-danger" data-remove-wish="${game.id}">Quitar</button>
          </div>
        </div>
      </div>
    `
    )
    .join("");
}

function renderCommunity() {
  const select = document.getElementById("review-game-select");
  select.innerHTML = GAMES_DB.map((g) => `<option value="${g.id}">${g.title}</option>`).join("");

  const feed = document.getElementById("community-feed");
  feed.innerHTML = state.reviews
    .map((rev) => {
      const game = getGameById(rev.gameId) || GAMES_DB[0];
      return `
        <article class="review-card">
          <div class="review-header">
            <div>
              <span class="review-verdict ${rev.recommended ? "" : "negative"}">
                ${rev.recommended ? "👍 Recomendado" : "👎 No recomendado"}
              </span>
              <span style="font-size:0.82rem;color:var(--text-muted);margin-left:8px">
                por <strong>${rev.author}</strong> • ${rev.hours} h registradas
              </span>
            </div>
            <span class="steam-tag">${game.title}</span>
          </div>
          <p class="review-body">${rev.text}</p>
          <div class="review-footer">
            <span>¿Te ha resultado útil esta reseña? (${rev.helpful} personas dicen que sí)</span>
            <button class="btn-steam-dark" data-helpful-id="${rev.id}">👍 Útil</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderWallet() {
  document.getElementById("wallet-page-balance").textContent = `${formatMoney(state.walletBalance)} USD`;
  const list = document.getElementById("wallet-tx-history");
  list.innerHTML = state.transactions
    .slice(0, 6)
    .map((tx) => `<li><span>${tx.label}</span><strong>${tx.amount}</strong></li>`)
    .join("");
}

// ============================================================================
// BUSCADOR EN TIEMPO REAL Y EVENTOS GLOBALES
// ============================================================================
function setupEvents() {
  // Delegación global de clics
  document.body.addEventListener("click", (e) => {
    const navBtn = e.target.closest("[data-nav]");
    if (navBtn) {
      e.preventDefault();
      switchView(navBtn.dataset.nav, navBtn.dataset.scroll || null);
      return;
    }

    const addCartBtn = e.target.closest("[data-add-cart]");
    if (addCartBtn) {
      addToCart(addCartBtn.dataset.addCart);
      return;
    }

    const removeCartBtn = e.target.closest("[data-remove-cart]");
    if (removeCartBtn) {
      removeFromCart(removeCartBtn.dataset.removeCart);
      return;
    }

    const removeWishBtn = e.target.closest("[data-remove-wish]");
    if (removeWishBtn) {
      toggleWishlist(removeWishBtn.dataset.removeWish);
      return;
    }

    const openModalBtn = e.target.closest("[data-open-modal]");
    if (openModalBtn) {
      openProductModal(openModalBtn.dataset.openModal);
      return;
    }

    const helpfulBtn = e.target.closest("[data-helpful-id]");
    if (helpfulBtn) {
      const rev = state.reviews.find((r) => r.id === Number(helpfulBtn.dataset.helpfulId));
      if (rev) {
        rev.helpful += 1;
        saveState();
        renderCommunity();
      }
      return;
    }

    const addFundsBtn = e.target.closest("[data-add-funds]");
    if (addFundsBtn) {
      const amount = Number(addFundsBtn.dataset.addFunds);
      state.walletBalance = Number((state.walletBalance + amount).toFixed(2));
      state.transactions.unshift({
        label: "Recarga de Cartera Steam",
        amount: `+${formatMoney(amount)}`
      });
      saveState();
      renderWallet();
      showToast(`✔ Se han añadido ${formatMoney(amount)} a tu Cartera Steam.`);
    }
  });

  // Flechas del carrusel
  const featuredCount = GAMES_DB.filter((g) => g.featured).length;
  document.getElementById("carousel-prev").onclick = () => {
    featuredIndex = (featuredIndex - 1 + featuredCount) % featuredCount;
    renderFeatured();
  };
  document.getElementById("carousel-next").onclick = () => {
    featuredIndex = (featuredIndex + 1) % featuredCount;
    renderFeatured();
  };

  // Pestañas y filtros del catálogo
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeTab = btn.dataset.tab;
      document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderCatalog();
    });
  });

  document.getElementById("filter-only-deals").addEventListener("change", renderCatalog);
  document.getElementById("catalog-sort").addEventListener("change", renderCatalog);

  // Buscador en vivo
  const searchInput = document.getElementById("global-search-input");
  const dropdown = document.getElementById("search-dropdown");

  searchInput.addEventListener("input", () => {
    const q = searchInput.value.trim().toLowerCase();
    if (!q) {
      dropdown.classList.add("hidden");
      return;
    }
    const matches = GAMES_DB.filter(
      (g) => g.title.toLowerCase().includes(q) || g.genre.toLowerCase().includes(q)
    );
    if (matches.length === 0) {
      dropdown.innerHTML = `<div class="search-item"><span class="search-item-title">Sin resultados para "${q}"</span></div>`;
    } else {
      dropdown.innerHTML = matches
        .slice(0, 5)
        .map(
          (g) => `
          <div class="search-item" data-search-pick="${g.id}">
            <img src="${g.cover}" alt="${g.title}" />
            <div class="search-item-info">
              <div class="search-item-title">${g.title}</div>
              <div class="search-item-price">${formatMoney(getFinalPrice(g))}</div>
            </div>
          </div>
        `
        )
        .join("");
    }
    dropdown.classList.remove("hidden");

    dropdown.querySelectorAll("[data-search-pick]").forEach((item) => {
      item.addEventListener("click", () => {
        dropdown.classList.add("hidden");
        searchInput.value = "";
        openProductModal(item.dataset.searchPick);
      });
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-wrapper")) {
      dropdown.classList.add("hidden");
    }
  });

  // Cupones y regalo en carrito
  document.getElementById("btn-apply-coupon").onclick = () => {
    const code = document.getElementById("coupon-input").value.trim().toUpperCase();
    const fb = document.getElementById("coupon-feedback");
    if (code === "STEAM15" || code === "BIENVENIDO10") {
      state.coupon = code;
      fb.style.color = "#a4d007";
      fb.textContent = `✔ Cupón ${code} aplicado correctamente.`;
      saveState();
      renderCart();
    } else {
      fb.style.color = "#ff8b8b";
      fb.textContent = "Código no válido. Prueba con STEAM15 o BIENVENIDO10.";
    }
  };

  document.querySelectorAll('input[name="purchase-type"]').forEach((radio) => {
    radio.addEventListener("change", () => {
      const isGift = radio.value === "gift" && radio.checked;
      document.getElementById("gift-fields").classList.toggle("hidden", !isGift);
    });
  });

  document.getElementById("btn-clear-cart").onclick = () => {
    state.cart = [];
    state.coupon = null;
    saveState();
    renderCart();
  };

  document.getElementById("btn-checkout").onclick = handleCheckout;

  // Biblioteca filtro
  document.getElementById("library-search").addEventListener("input", renderLibrary);

  // Comunidad reseñas
  document.getElementById("rec-yes").onclick = () => {
    reviewRecommendFlag = true;
    document.getElementById("rec-yes").classList.add("active");
    document.getElementById("rec-no").classList.remove("active");
  };
  document.getElementById("rec-no").onclick = () => {
    reviewRecommendFlag = false;
    document.getElementById("rec-no").classList.add("active");
    document.getElementById("rec-yes").classList.remove("active");
  };

  document.getElementById("btn-submit-review").onclick = () => {
    const text = document.getElementById("review-text-input").value.trim();
    const gameId = document.getElementById("review-game-select").value;
    if (!text) {
      showToast("Escribe el texto de tu reseña antes de publicar.");
      return;
    }
    state.reviews.unshift({
      id: Date.now(),
      author: "GamerPro_LATAM",
      gameId,
      recommended: reviewRecommendFlag,
      hours: 12.5,
      text,
      helpful: 1
    });
    document.getElementById("review-text-input").value = "";
    saveState();
    renderCommunity();
    showToast("✔ Tu reseña ha sido publicada en la Comunidad.");
  };

  // Canjear tarjeta en Cartera
  document.getElementById("btn-redeem-giftcard").onclick = () => {
    const code = document.getElementById("giftcard-code-input").value.trim().toUpperCase();
    if (code === "STEAM2026" && !state.giftCardRedeemed) {
      state.giftCardRedeemed = true;
      state.walletBalance = Number((state.walletBalance + 25).toFixed(2));
      state.transactions.unshift({
        label: "Tarjeta de regalo (STEAM2026)",
        amount: "+$25.00"
      });
      saveState();
      renderWallet();
      showToast("🎉 ¡Canjeaste $25.00 USD en tu Cartera Steam!");
    } else if (state.giftCardRedeemed) {
      showToast("Este código promocional ya fue canjeado en esta cuenta.");
    } else {
      showToast("Código inválido. Prueba con STEAM2026.");
    }
  };

  // Cerrar modales
  document.getElementById("close-product-modal").onclick = () =>
    document.getElementById("product-modal").classList.add("hidden");
  document.getElementById("close-receipt-modal").onclick = () =>
    document.getElementById("receipt-modal").classList.add("hidden");

  document.getElementById("btn-install-client").onclick = () =>
    showToast("Descargando instalador oficial SteamSetup.exe (v2026.11)...");
}

// ============================================================================
// INICIALIZACIÓN
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  updateGlobalCounters();
  renderFeatured();
  renderOffers();
  renderGenrePills();
  renderCatalog();
  setupEvents();
});
