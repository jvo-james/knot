const CART_KEY = 'knot-guilty-shared-cart';

const PRODUCTS = [
  {
    "slug": "apple-chausson",
    "name": "Organic Apple Chausson",
    "category": "Specials",
    "section": "August Specials",
    "price": "$7.91",
    "tax": "Includes HST",
    "badge": "Seasonal",
    "image": "images/p1.jpg",
    "short": "Flaky apple pastry with a bright finish and a soft, fruit-forward center.",
    "tags": [
      "Minimum 2",
      "Seasonal",
      "Best seller"
    ],
    "featured": true
  },
  {
    "slug": "apple-chausson-pack6",
    "name": "Organic Apple Chausson",
    "category": "Specials",
    "section": "August Specials",
    "price": "$7.00",
    "tax": "No HST",
    "badge": "Value pack",
    "image": "images/p2.jpg",
    "short": "A sharing box of six for brunch tables, gifting, or stocking the freezer.",
    "tags": [
      "Pack of 6",
      "Save more",
      "Shareable"
    ],
    "featured": false
  },
  {
    "slug": "rosemary-sourdough",
    "name": "Organic Rosemary Sourdough Bread",
    "category": "Specials",
    "section": "August Specials",
    "price": "$14.00",
    "tax": "No HST",
    "badge": "Herb loaf",
    "image": "images/p3.jpg",
    "short": "A fragrant loaf with rosemary folded into a crisp crust and open crumb.",
    "tags": [
      "Organic",
      "Herbaceous"
    ],
    "featured": false
  },
  {
    "slug": "olive-sourdough",
    "name": "Organic Olive Sourdough Bread",
    "category": "Specials",
    "section": "August Specials",
    "price": "$14.00",
    "tax": "No HST",
    "badge": "Savory",
    "image": "images/p4.jpg",
    "short": "Briny olives folded through a rustic sourdough with a clean, balanced finish.",
    "tags": [
      "Organic",
      "Savory"
    ],
    "featured": false
  },
  {
    "slug": "vanilla-knot",
    "name": "Vanilla Knot Croissants",
    "category": "Specials",
    "section": "August Specials",
    "price": "$7.91",
    "tax": "Includes HST",
    "badge": "Soft batch",
    "image": "images/p5.jpg",
    "short": "A tender knot with vanilla warmth and a glossy bakery shine.",
    "tags": [
      "Minimum 2",
      "Tender"
    ],
    "featured": false
  },
  {
    "slug": "vanilla-knot-pack6",
    "name": "Vanilla Knot Croissants",
    "category": "Specials",
    "section": "August Specials",
    "price": "$7.00",
    "tax": "No HST",
    "badge": "Value pack",
    "image": "images/p6.jpg",
    "short": "A six-pack made for sharing, brunch tables, and easy weekend grazing.",
    "tags": [
      "Pack of 6",
      "Shareable"
    ],
    "featured": false
  },
  {
    "slug": "elegant-cocoa-chocolatine",
    "name": "Organic Elegant Cocoa Chocolatine",
    "category": "Specials",
    "section": "August Specials",
    "price": "$8.48",
    "tax": "Includes HST",
    "badge": "Cocoa",
    "image": "images/p7.jpg",
    "short": "Layered cocoa pastry with a clean, elegant profile and a glossy finish.",
    "tags": [
      "Minimum 2",
      "Chocolate"
    ],
    "featured": false
  },
  {
    "slug": "elegant-cocoa-chocolatine-pack6",
    "name": "Organic Elegant Cocoa Chocolatine",
    "category": "Specials",
    "section": "August Specials",
    "price": "$7.50",
    "tax": "No HST",
    "badge": "Value pack",
    "image": "images/p8.jpg",
    "short": "A six-pack box for serious chocolate days and generous sharing.",
    "tags": [
      "Pack of 6",
      "Chocolate"
    ],
    "featured": false
  },
  {
    "slug": "country-sourdough",
    "name": "Organic Country Sourdough Bread",
    "category": "Bread",
    "section": "Organic Sourdough Bread and Fresh Pizza Dough",
    "price": "$12.00",
    "tax": "No HST",
    "badge": "Classic loaf",
    "image": "images/p9.jpg",
    "short": "Deep crust, open crumb, naturally fermented for a clean, classic slice.",
    "tags": [
      "Organic",
      "Everyday"
    ],
    "featured": false
  },
  {
    "slug": "grand-white-sourdough",
    "name": "Organic Grand White Sourdough Bread",
    "category": "Bread",
    "section": "Organic Sourdough Bread and Fresh Pizza Dough",
    "price": "$12.00",
    "tax": "No HST",
    "badge": "Soft crumb",
    "image": "images/p10.png",
    "short": "A lighter loaf with a refined crumb and a calm, versatile flavor.",
    "tags": [
      "Organic",
      "Versatile"
    ],
    "featured": false
  },
  {
    "slug": "whole-wheat",
    "name": "Organic Whole Wheat Bread",
    "category": "Bread",
    "section": "Organic Sourdough Bread and Fresh Pizza Dough",
    "price": "$12.00",
    "tax": "No HST",
    "badge": "Whole grain",
    "image": "images/p11.jpg",
    "short": "Nutty, earthy, and wholesome with a deeply satisfying crust.",
    "tags": [
      "Organic",
      "Whole grain"
    ],
    "featured": true
  },
  {
    "slug": "cheddar-sourdough",
    "name": "Organic Cheddar Sourdough Bread",
    "category": "Bread",
    "section": "Organic Sourdough Bread and Fresh Pizza Dough",
    "price": "$14.00",
    "tax": "No HST",
    "badge": "Savory",
    "image": "images/p12.jpg",
    "short": "Sharp cheddar folded through a golden sourdough with a rich savory edge.",
    "tags": [
      "Organic",
      "Cheese"
    ],
    "featured": false
  },
  {
    "slug": "italian-sourdough",
    "name": "Organic Italian Sourdough Bread",
    "category": "Bread",
    "section": "Organic Sourdough Bread and Fresh Pizza Dough",
    "price": "$15.00",
    "tax": "No HST",
    "badge": "Herb loaf",
    "image": "images/p13.jpg",
    "short": "Fresh basil pesto, sun-dried tomato, and organic Red Fife flour for a bright loaf.",
    "tags": [
      "Organic",
      "Basil pesto",
      "Sun-dried tomato"
    ],
    "featured": false
  },
  {
    "slug": "pizza-dough",
    "name": "Organic Fresh Sourdough Pizza Dough",
    "category": "Bread",
    "section": "Organic Sourdough Bread and Fresh Pizza Dough",
    "price": "$11.00",
    "tax": "No HST",
    "badge": "Bake at home",
    "image": "images/p14.jpg",
    "short": "Ready-to-bake dough for a crisp base and a chewy, airy finish.",
    "tags": [
      "Organic",
      "Home bake"
    ],
    "featured": false
  },
  {
    "slug": "cinnamon-rolls",
    "name": "Classic Sourdough Cinnamon Rolls",
    "category": "Pastries",
    "section": "Organic Sourdough Pastries",
    "price": "$5.65",
    "tax": "Includes HST",
    "badge": "Warm spice",
    "image": "images/p15.jpg",
    "short": "Soft swirls with warm cinnamon notes and a buttery bakery finish.",
    "tags": [
      "Minimum 2",
      "Sweet"
    ],
    "featured": true
  },
  {
    "slug": "cinnamon-rolls-pack6",
    "name": "Classic Sourdough Cinnamon Rolls",
    "category": "Pastries",
    "section": "Organic Sourdough Pastries",
    "price": "$5.00",
    "tax": "No HST",
    "badge": "Value pack",
    "image": "images/p16.jpg",
    "short": "A six-pack for breakfast trays, office sharing, and weekend plans.",
    "tags": [
      "Pack of 6",
      "Sweet"
    ],
    "featured": false
  },
  {
    "slug": "double-chocolate-muffins",
    "name": "Double Chocolate Proteinated Sourdough Muffins Box",
    "category": "Pastries",
    "section": "Organic Sourdough Pastries",
    "price": "$27.00",
    "tax": "No HST",
    "badge": "Box of 6",
    "image": "images/p17.jpg",
    "short": "A small batch box with rich cocoa depth and a fuller, more substantial bite.",
    "tags": [
      "Pack of 6",
      "Chocolate"
    ],
    "featured": false
  },
  {
    "slug": "butter-croissant",
    "name": "Artisan Butter Croissants",
    "category": "Viennoiserie",
    "section": "Organic Handmade Viennoiserie",
    "price": "$5.00",
    "tax": "No HST",
    "badge": "Butter layers",
    "image": "images/p18.webp",
    "short": "Classic laminated layers with a crisp shell and a soft, buttery center.",
    "tags": [
      "Minimum 2",
      "Classic"
    ],
    "featured": false
  },
  {
    "slug": "chocolate-croissant",
    "name": "Premium Chocolate Croissants",
    "category": "Viennoiserie",
    "section": "Organic Handmade Viennoiserie",
    "price": "$6.22",
    "tax": "Includes HST",
    "badge": "Chocolate",
    "image": "images/p19.jpg",
    "short": "Dark cocoa filling wrapped in a flaky shell with a polished finish.",
    "tags": [
      "Minimum 2",
      "Rich"
    ],
    "featured": true
  },
  {
    "slug": "chocolate-croissant-pack6",
    "name": "Premium Chocolate Croissants",
    "category": "Viennoiserie",
    "section": "Organic Handmade Viennoiserie",
    "price": "$5.50",
    "tax": "No HST",
    "badge": "Value pack",
    "image": "images/p20.jpg",
    "short": "A six-pack built for the chocolate lovers and the weekend planners.",
    "tags": [
      "Pack of 6",
      "Rich"
    ],
    "featured": false
  },
  {
    "slug": "ham-cheese-croissant",
    "name": "Ham and Cheese Croissants",
    "category": "Viennoiserie",
    "section": "Organic Handmade Viennoiserie",
    "price": "$8.00",
    "tax": "No HST",
    "badge": "Savory",
    "image": "images/p21.jpg",
    "short": "A savory croissant with a clean, comforting balance of salt and butter.",
    "tags": [
      "Savory",
      "Lunch"
    ],
    "featured": false
  },
  {
    "slug": "pesto-olive-danish",
    "name": "Pesto Sun-Dried Tomato Olive Croissant Danish",
    "category": "Viennoiserie",
    "section": "Organic Handmade Viennoiserie",
    "price": "$9.00",
    "tax": "No HST",
    "badge": "Herb twist",
    "image": "images/p22.jpg",
    "short": "Pesto, olive, and sun-dried tomato in a layered croissant danish format.",
    "tags": [
      "Savory",
      "Bold"
    ],
    "featured": false
  },
  {
    "slug": "wildberry-danish",
    "name": "Wildberry Fruit Danish",
    "category": "Viennoiserie",
    "section": "Organic Handmade Viennoiserie",
    "price": "$9.04",
    "tax": "Includes HST",
    "badge": "Berry",
    "image": "images/p23.jpg",
    "short": "Juicy wildberry brightness with a glossy finish and tender layers.",
    "tags": [
      "Minimum 2",
      "Fruit"
    ],
    "featured": false
  },
  {
    "slug": "wildberry-danish-pack6",
    "name": "Wildberry Fruit Danish",
    "category": "Viennoiserie",
    "section": "Organic Handmade Viennoiserie",
    "price": "$8.00",
    "tax": "No HST",
    "badge": "Value pack",
    "image": "images/p24.jpg",
    "short": "A six-pack box for brunch plates, gifting, or a beautiful freezer stash.",
    "tags": [
      "Pack of 6",
      "Fruit"
    ],
    "featured": false
  },
  {
    "slug": "almond-croissant",
    "name": "Double-Baked Almond Croissants",
    "category": "Viennoiserie",
    "section": "Organic Handmade Viennoiserie",
    "price": "$9.04",
    "tax": "Includes HST",
    "badge": "Almond",
    "image": "images/p25.jpg",
    "short": "Twice-baked layers with toasted almond richness and a crisp, flaky finish.",
    "tags": [
      "Minimum 2",
      "Nutty"
    ],
    "featured": false
  },
  {
    "slug": "almond-croissant-pack6",
    "name": "Double-Baked Almond Croissants",
    "category": "Viennoiserie",
    "section": "Organic Handmade Viennoiserie",
    "price": "$8.00",
    "tax": "No HST",
    "badge": "Value pack",
    "image": "images/p26.jpg",
    "short": "A six-pack for the people who never want to share their almond croissants.",
    "tags": [
      "Pack of 6",
      "Nutty"
    ],
    "featured": false
  },
  {
    "slug": "chocolate-almond-croissant",
    "name": "Double-Baked Chocolate Almond Croissant",
    "category": "Viennoiserie",
    "section": "Organic Handmade Viennoiserie",
    "price": "$9.61",
    "tax": "Includes HST",
    "badge": "Chocolate almond",
    "image": "images/p27.jpg",
    "short": "A deeper, more decadent almond croissant with a chocolate finish.",
    "tags": [
      "Minimum 2",
      "Decadent"
    ],
    "featured": false
  },
  {
    "slug": "chocolate-almond-croissant-pack6",
    "name": "Double-Baked Chocolate Almond Croissant",
    "category": "Viennoiserie",
    "section": "Organic Handmade Viennoiserie",
    "price": "$8.50",
    "tax": "No HST",
    "badge": "Value pack",
    "image": "images/p28.jpg",
    "short": "A six-pack that turns the pastry case into a small celebration.",
    "tags": [
      "Pack of 6",
      "Decadent"
    ],
    "featured": false
  }
];

const CATEGORY_ORDER = ['Specials', 'Bread', 'Pastries', 'Viennoiserie'];

const CATEGORY_META = {
  Specials: {
    title: 'August Specials',
    copy: 'Limited weekly bakes, seasonal pastries, and small batch favorites.',
    icon: 'fa-sparkles'
  },
  Bread: {
    title: 'Organic Sourdough Bread and Fresh Pizza Dough',
    copy: 'Slow-fermented loaves, savory bread, and ready-to-bake dough.',
    icon: 'fa-bread-slice'
  },
  Pastries: {
    title: 'Organic Sourdough Pastries',
    copy: 'Soft sweet bakes with a deeper crumb and a richer finish.',
    icon: 'fa-cake-candles'
  },
  Viennoiserie: {
    title: 'Organic Handmade Viennoiserie',
    copy: 'Butter-laminated layers, glossy finishes, and elegant texture.',
    icon: 'fa-wheat-awn'
  }
};

const state = {
  cart: loadCart(),
  filter: 'All',
  query: '',
  sort: 'featured',
  toastTimer: null
};

const refs = {};

function qs(selector, root = document) {
  return root.querySelector(selector);
}

function qsa(selector, root = document) {
  return [...root.querySelectorAll(selector)];
}

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(state.cart));
}

function productBySlug(slug) {
  return PRODUCTS.find(product => product.slug === slug);
}

function priceNumber(value) {
  return Number.parseFloat(String(value).replace(/[^0-9.]/g, '')) || 0;
}

function productUrl(slug) {
  return `product.html?slug=${slug}`;
}

function cartCount() {
  return state.cart.reduce((sum, item) => sum + item.qty, 0);
}

function cartSubtotal() {
  return state.cart.reduce((sum, item) => sum + priceNumber(item.price) * item.qty, 0);
}

function isInCart(slug) {
  return state.cart.some(item => item.slug === slug);
}

function cartQuantity(slug) {
  const item = state.cart.find(entry => entry.slug === slug);
  return item ? item.qty : 0;
}

function addToCart(slug) {
  const product = productBySlug(slug);
  if (!product) return false;

  const existing = state.cart.find(item => item.slug === slug);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      slug: product.slug,
      name: product.name,
      category: product.section,
      price: product.price,
      image: product.image,
      qty: 1
    });
  }

  saveCart();
  renderCart();
  renderProducts();
  showToast(`${product.name} added to cart`);
  return true;
}

function updateQty(slug, delta) {
  const item = state.cart.find(entry => entry.slug === slug);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter(entry => entry.slug !== slug);
    showToast('Removed from cart');
  } else {
    showToast('Cart updated');
  }

  saveCart();
  renderCart();
  renderProducts();
}

function removeFromCart(slug) {
  const before = state.cart.length;
  state.cart = state.cart.filter(item => item.slug !== slug);
  if (state.cart.length !== before) {
    saveCart();
    renderCart();
    renderProducts();
    showToast('Removed from cart');
  }
}

function clearCart() {
  state.cart = [];
  saveCart();
  renderCart();
  renderProducts();
  showToast('Cart cleared');
}

function money(value) {
  return `$${value.toFixed(2)}`;
}

function showToast(message) {
  if (!refs.toast) return;

  refs.toast.textContent = message;
  refs.toast.hidden = false;
  refs.toast.classList.add('is-visible');

  window.clearTimeout(state.toastTimer);
  state.toastTimer = window.setTimeout(() => {
    refs.toast.classList.remove('is-visible');
    refs.toast.hidden = true;
  }, 1600);
}

function openDrawer() {
  refs.backdrop?.removeAttribute('hidden');
  refs.cartDrawer?.classList.add('open');
  refs.cartDrawer?.setAttribute('aria-hidden', 'false');
  refs.cartToggle?.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function openMenu() {
  refs.backdrop?.removeAttribute('hidden');
  refs.mobileMenu?.classList.add('open');
  refs.mobileMenu?.setAttribute('aria-hidden', 'false');
  refs.menuToggle?.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closePanels() {
  refs.cartDrawer?.classList.remove('open');
  refs.cartDrawer?.setAttribute('aria-hidden', 'true');
  refs.cartToggle?.setAttribute('aria-expanded', 'false');

  refs.mobileMenu?.classList.remove('open');
  refs.mobileMenu?.setAttribute('aria-hidden', 'true');
  refs.menuToggle?.setAttribute('aria-expanded', 'false');

  refs.backdrop?.setAttribute('hidden', '');
  document.body.style.overflow = '';
}

function sortProducts(items) {
  const sorted = [...items];

  switch (state.sort) {
    case 'price-asc':
      return sorted.sort((a, b) => priceNumber(a.price) - priceNumber(b.price));
    case 'price-desc':
      return sorted.sort((a, b) => priceNumber(b.price) - priceNumber(a.price));
    case 'name-asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'category':
      return sorted.sort((a, b) => {
        const diff = CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category);
        return diff !== 0 ? diff : a.name.localeCompare(b.name);
      });
    case 'featured':
    default:
      return sorted.sort((a, b) => {
        const aScore = (a.featured ? 1000 : 0) + (CATEGORY_ORDER.length - CATEGORY_ORDER.indexOf(a.category)) * 10;
        const bScore = (b.featured ? 1000 : 0) + (CATEGORY_ORDER.length - CATEGORY_ORDER.indexOf(b.category)) * 10;
        return bScore - aScore || a.name.localeCompare(b.name);
      });
  }
}

function getVisibleProducts() {
  const filtered = PRODUCTS.filter(product => {
    const matchesFilter = state.filter === 'All' || product.category === state.filter;
    const haystack = [product.name, product.short, product.section, product.badge, ...(product.tags || [])].join(' ').toLowerCase();
    const matchesQuery = !state.query || haystack.includes(state.query);
    return matchesFilter && matchesQuery;
  });

  return sortProducts(filtered);
}

function layoutClass(index, categoryIndex) {
  const slot = (index + categoryIndex) % 7;
  if (index === 0 && categoryIndex === 0) return 'product-card--feature';
  if (slot === 1) return 'product-card--wide';
  if (slot === 3) return 'product-card--tall';
  if (slot === 5) return 'product-card--compact';
  return '';
}

function renderProducts() {
  if (!refs.grid) return;

  const items = getVisibleProducts();

  if (refs.count) {
    refs.count.textContent = 'Curated menu';
  }

  const grouped = CATEGORY_ORDER
    .map(category => {
      const list = items.filter(item => item.category === category);
      return { category, list };
    })
    .filter(group => group.list.length > 0);

  if (!grouped.length) {
    refs.grid.innerHTML = `
      <div class="shop-empty">
        <h3>No bakes match that search.</h3>
        <p>Try a broader keyword or tap All to bring the full menu back.</p>
      </div>
    `;
    return;
  }

  let html = '';
  grouped.forEach((group, groupIndex) => {
    const meta = CATEGORY_META[group.category];
    html += `
      <article class="collection-banner">
        <div>
          <span class="collection-banner__eyebrow"><i class="fa-solid ${meta.icon}"></i> ${meta.title}</span>
          <h2>${meta.title}</h2>
        </div>
        <p>${meta.copy}</p>
      </article>
    `;

    group.list.forEach((product, index) => {
      const inCart = isInCart(product.slug);
      const layout = layoutClass(index, groupIndex);
      html += `
        <article class="product-card ${layout}" data-product-card data-product-url="${productUrl(product.slug)}" tabindex="0" role="link" aria-label="Open ${product.name}">
          <div class="product-card__image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <span class="product-card__badge">${product.badge}</span>
          </div>
          <div class="product-card__body">
            <h3>${product.name}</h3>
            <p class="product-card__copy">${product.short}</p>
            <div class="product-card__foot">
              <div class="product-card__price">
                <strong>${product.price}</strong>
                <span>${inCart ? `${cartQuantity(product.slug)} in cart` : 'Fresh weekly pickup'}</span>
              </div>
              <div class="product-card__actions">
                <a class="details-btn" href="${productUrl(product.slug)}">Details</a>
                <button class="add-btn ${inCart ? 'is-in-cart' : ''}" type="button" data-add-to-cart="${product.slug}">${inCart ? 'Add another' : 'Add to Cart'}</button>
              </div>
            </div>
          </div>
        </article>
      `;
    });
  });

  refs.grid.innerHTML = html;
}

function renderProductPage() {
  const root = qs('[data-product-root]');
  if (!root) return;

  const params = new URLSearchParams(location.search);
  const slug = params.get('slug') || state.currentProductSlug || PRODUCTS[0].slug;
  const product = productBySlug(slug) || PRODUCTS[0];
  state.currentProductSlug = product.slug;

  document.title = `${product.name} | The Knot Guilty French Bakery`;

  const related = PRODUCTS
    .filter(item => item.slug !== product.slug && item.category === product.category)
    .slice(0, 3);

  root.innerHTML = `
    <section class="product-hero">
      <div class="product-hero__media">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-hero__content">
        <p class="eyebrow">${product.category} · ${product.tax}</p>
        <h1>${product.name}</h1>
        <p class="lede">${product.short}</p>
        <div class="pill-row">
          ${(product.tags || []).map(tag => `<span class="pill">${tag}</span>`).join('')}
        </div>
        <div class="price-row">
          <strong>${product.price}</strong>
          <span>Pickup Thursday–Saturday</span>
        </div>
        <div class="option-grid">
          <div><i class="fa-regular fa-square"></i><span>Minimum 2 where noted</span></div>
          <div><i class="fa-regular fa-clock"></i><span>Fresh weekly batches</span></div>
          <div><i class="fa-solid fa-wheat-awn"></i><span>Organic ingredients</span></div>
        </div>
        <div class="action-row">
          <button class="btn btn-dark" type="button" data-add-to-cart="${product.slug}" data-product-toggle>${isInCart(product.slug) ? 'Remove from cart' : 'Add to Cart'}</button>
          <a class="btn btn-light btn-light--dark" href="products.html">Back to products</a>
        </div>
        <div class="product-state">${isInCart(product.slug) ? 'This item is currently in your cart.' : 'This item is ready to add to your cart.'}</div>
      </div>
    </section>

    <section class="detail-grid">
      <article class="detail-card">
        <h2>Notes</h2>
        <p>${product.short}</p>
      </article>
      <article class="detail-card">
        <h2>Best enjoyed</h2>
        <p>Fresh on the day of pickup. The sourdough loaves also freeze well and return beautifully after a quick reheat.</p>
      </article>
      <article class="detail-card">
        <h2>Serving</h2>
        <p>Keep it simple: butter, jam, good coffee, and a little time. The texture does the rest.</p>
      </article>
    </section>

    <section class="related-section">
      <div class="section-head">
        <h2>Related picks</h2>
        <span>Same family, same level of care</span>
      </div>
      <div class="related-grid">
        ${related.map(item => `
          <a class="related-card" href="${productUrl(item.slug)}">
            <img src="${item.image}" alt="${item.name}">
            <div>
              <h3>${item.name}</h3>
              <p>${item.price}</p>
            </div>
          </a>
        `).join('')}
      </div>
    </section>
  `;
}

function renderCart() {
  if (refs.cartCount) refs.cartCount.textContent = String(cartCount());
  if (!refs.cartBody || !refs.cartTotal) return;

  if (!state.cart.length) {
    refs.cartBody.innerHTML = `
      <div class="cart-empty">
        <p class="eyebrow">Nothing in here yet</p>
        <h3>Start with a loaf or a pastry box.</h3>
        <p>Build a basket from the shop, then come back here to adjust quantities.</p>
      </div>
    `;
    refs.cartTotal.textContent = money(0);
    return;
  }

  refs.cartBody.innerHTML = `
    <div class="cart-overview">
      <div class="cart-overview__count">
        <span>${cartCount()}</span>
        <p>Items in your cart</p>
      </div>
      <div class="cart-overview__note">
        <strong>Soft pickup flow</strong>
        <span>Review quantities below and then head to checkout when ready.</span>
      </div>
    </div>
    <div class="cart-items">
      ${state.cart.map(item => `
        <article class="cart-item">
          <div class="cart-item__image">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
          </div>
          <div class="cart-item__body">
            <div class="cart-item__top">
              <div>
                <h4>${item.name}</h4>
                <div class="cart-item__meta">${item.category}</div>
              </div>
              <strong>${item.price}</strong>
            </div>
            <div class="qty-row">
              <div class="qty-stepper" aria-label="Quantity controls for ${item.name}">
                <button type="button" data-qty="down" data-slug="${item.slug}" aria-label="Decrease quantity">-</button>
                <span>${item.qty}</span>
                <button type="button" data-qty="up" data-slug="${item.slug}" aria-label="Increase quantity">+</button>
              </div>
              <button type="button" class="remove-btn" data-remove="${item.slug}">Remove</button>
            </div>
          </div>
        </article>
      `).join('')}
    </div>
  `;

  refs.cartTotal.textContent = money(cartSubtotal());
}

function syncFromStorage() {
  state.cart = loadCart();
  renderCart();
  renderProducts();
  renderProductPage();
}

function bindEvents() {
  refs.cartToggle?.addEventListener('click', () => openDrawer());
  refs.menuToggle?.addEventListener('click', () => openMenu());

  qsa('[data-close-cart]').forEach(btn => btn.addEventListener('click', () => closePanels()));
  qsa('[data-close-menu]').forEach(btn => btn.addEventListener('click', () => closePanels()));
  qsa('[data-mobile-link]').forEach(link => link.addEventListener('click', () => closePanels()));
  refs.backdrop?.addEventListener('click', () => closePanels());

  document.addEventListener('click', event => {
    const addButton = event.target.closest('[data-add-to-cart]');
    if (addButton) {
      addToCart(addButton.dataset.addToCart);
      return;
    }

    const removeButton = event.target.closest('[data-remove]');
    if (removeButton) {
      removeFromCart(removeButton.dataset.remove);
      return;
    }

    const qtyButton = event.target.closest('[data-qty]');
    if (qtyButton) {
      const delta = qtyButton.dataset.qty === 'up' ? 1 : -1;
      updateQty(qtyButton.dataset.slug, delta);
      return;
    }

    const card = event.target.closest('[data-product-card]');
    if (card && !event.target.closest('a,button')) {
      location.href = card.dataset.productUrl || 'products.html';
      return;
    }

    const filterButton = event.target.closest('[data-filter]');
    if (filterButton) {
      state.filter = filterButton.dataset.filter || 'All';
      qsa('[data-filter]').forEach(btn => btn.classList.toggle('is-active', btn.dataset.filter === state.filter));
      renderProducts();
    }
  });

  document.addEventListener('keydown', event => {
    const card = event.target.closest?.('[data-product-card]');
    if (!card) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      location.href = card.dataset.productUrl || 'products.html';
    }
  });

  refs.search?.addEventListener('input', event => {
    state.query = event.target.value.trim().toLowerCase();
    renderProducts();
  });

  refs.sort?.addEventListener('change', event => {
    state.sort = event.target.value;
    renderProducts();
  });

  refs.clearCart?.addEventListener('click', clearCart);

  refs.checkout?.addEventListener('click', () => {
    if (!state.cart.length) {
      showToast('Your cart is empty');
      return;
    }
    showToast('Checkout is ready');
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closePanels();
  });

  window.addEventListener('storage', syncFromStorage);
}

function init() {
  refs.grid = qs('[data-products-grid]');
  refs.count = qs('[data-count]');
  refs.search = qs('[data-search]');
  refs.sort = qs('[data-sort]');
  refs.toast = qs('[data-toast]');
  refs.cartCount = qs('[data-cart-count]');
  refs.cartBody = qs('[data-cart-body]');
  refs.cartTotal = qs('[data-cart-total]');
  refs.cartDrawer = qs('#cart-drawer');
  refs.cartToggle = qs('#cart-toggle');
  refs.menuToggle = qs('#menu-toggle');
  refs.mobileMenu = qs('#mobile-menu');
  refs.backdrop = qs('#backdrop');
  refs.checkout = qs('[data-checkout]');
  refs.clearCart = qs('[data-clear-cart]');

  renderCart();
  renderProducts();
  renderProductPage();
  bindEvents();
}

document.addEventListener('DOMContentLoaded', init);
