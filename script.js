const PRODUCTS = [
  {
    "slug": "country-sourdough",
    "name": "Organic Country Sourdough",
    "category": "Bread",
    "price": "$12.00",
    "short": "Deep crust, open crumb, naturally fermented.",
    "long": "A daily bread with a crisp shell and a tender, airy center. Built on organic flour and a slow fermentation for clean flavor and a long finish.",
    "image": "https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?auto=format&fit=crop&w=1400&q=80",
    "featured": true,
    "tax": "No HST",
    "tags": [
      "Organic",
      "House Bread",
      "Best Seller"
    ]
  },
  {
    "slug": "grand-white-sourdough",
    "name": "Organic Grand White Sourdough",
    "category": "Bread",
    "price": "$12.00",
    "short": "Soft interior, elegant crust, balanced flavor.",
    "long": "A lighter sourdough loaf with a refined crumb and a clean, versatile taste. Excellent for breakfast, sandwiches, and toast.",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1400&q=80",
    "featured": false,
    "tax": "No HST",
    "tags": [
      "Classic",
      "Versatile"
    ]
  },
  {
    "slug": "whole-wheat",
    "name": "Organic Whole Wheat Sourdough",
    "category": "Bread",
    "price": "$12.00",
    "short": "Nutty, earthy, wholesome.",
    "long": "Made with organic whole wheat for a deeper flavor profile and a satisfying slice that works across the week.",
    "image": "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=1400&q=80",
    "featured": false,
    "tax": "No HST",
    "tags": [
      "Whole Grain",
      "Organic"
    ]
  },
  {
    "slug": "cheddar-sourdough",
    "name": "Organic Cheddar Sourdough",
    "category": "Bread",
    "price": "$14.00",
    "short": "Sharp cheddar folded into a golden loaf.",
    "long": "A savory loaf with pockets of aged cheddar and a toasted crust that makes it feel indulgent without losing balance.",
    "image": "https://images.unsplash.com/photo-1549931319-7bfbf5f9f0f9?auto=format&fit=crop&w=1400&q=80",
    "featured": true,
    "tax": "No HST",
    "tags": [
      "Savory",
      "Cheese"
    ]
  },
  {
    "slug": "italian-sourdough",
    "name": "Organic Italian Sourdough Bread",
    "category": "Bread",
    "price": "$15.00",
    "short": "Fresh basil pesto, sun-dried tomato, organic red fife.",
    "long": "Their most aromatic loaf: herbaceous, rich, and full of character. Ideal for a sharper, more fragrant bread moment.",
    "image": "https://images.unsplash.com/photo-1509440159596-3b9a3f8f4b1a?auto=format&fit=crop&w=1400&q=80",
    "featured": false,
    "tax": "No HST",
    "tags": [
      "Herby",
      "Seasonal"
    ]
  },
  {
    "slug": "pizza-dough",
    "name": "Organic Fresh Sourdough Pizza Dough",
    "category": "Bread",
    "price": "$11.00",
    "short": "Ready-to-bake dough for a crisp base.",
    "long": "A flexible, live sourdough dough made for a light, chewy pizza crust at home.",
    "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1400&q=80",
    "featured": false,
    "tax": "No HST",
    "tags": [
      "Home Bake"
    ]
  },
  {
    "slug": "cinnamon-rolls",
    "name": "Classic Sourdough Cinnamon Rolls",
    "category": "Pastries",
    "price": "$5.00",
    "short": "Soft swirls with warm cinnamon notes.",
    "long": "An old-school favorite with a sourdough twist. Expect a tender interior and a lightly caramelized top.",
    "image": "https://images.unsplash.com/photo-1542826438-0b1d5f0e4d8f?auto=format&fit=crop&w=1400&q=80",
    "featured": true,
    "tax": "+ HST",
    "tags": [
      "Minimum 2",
      "Sweet"
    ]
  },
  {
    "slug": "double-chocolate-muffins",
    "name": "Double Chocolate Proteinated Sourdough Muffins",
    "category": "Pastries",
    "price": "$27.00",
    "short": "Box of 6. Dark, rich, substantial.",
    "long": "A small-batch box built for serious chocolate lovers with a protein-forward finish and a moist crumb.",
    "image": "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?auto=format&fit=crop&w=1400&q=80",
    "featured": false,
    "tax": "No HST",
    "tags": [
      "Box of 6",
      "Chocolate"
    ]
  },
  {
    "slug": "butter-croissant",
    "name": "Artisan Butter Croissants",
    "category": "Viennoiserie",
    "price": "$5.00",
    "short": "Classic French layers, crisp and airy.",
    "long": "Laminated by hand for a clean shatter and a soft, buttery center. Their signature everyday pastry.",
    "image": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1400&q=80",
    "featured": true,
    "tax": "No HST",
    "tags": [
      "Minimum 2",
      "Classic"
    ]
  },
  {
    "slug": "chocolate-croissant",
    "name": "Premium Chocolate Croissants",
    "category": "Viennoiserie",
    "price": "$5.50",
    "short": "Deep cocoa center, glossy finish.",
    "long": "A richer take on the French classic with a soft chocolate baton and crisp laminated exterior.",
    "image": "https://images.unsplash.com/photo-1590080875515-2d4f7f4d97fd?auto=format&fit=crop&w=1400&q=80",
    "featured": true,
    "tax": "+ HST",
    "tags": [
      "Minimum 2",
      "Chocolate"
    ]
  },
  {
    "slug": "ham-cheese-croissant",
    "name": "Ham and Cheese Croissants",
    "category": "Viennoiserie",
    "price": "$8.00",
    "short": "Savory, buttery, melty.",
    "long": "A breakfast croissant with a clean savory profile and a warm, satisfying center.",
    "image": "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&w=1400&q=80",
    "featured": false,
    "tax": "No HST",
    "tags": [
      "Savory"
    ]
  },
  {
    "slug": "pesto-olive-danish",
    "name": "Pesto Sun-Dried Tomato Olive Croissant Danish",
    "category": "Viennoiserie",
    "price": "$9.00",
    "short": "Bright, briny, layered.",
    "long": "A more contemporary pastry with Mediterranean notes and a structured, elegant look.",
    "image": "https://images.unsplash.com/photo-1509440159596-7b5b3b5b8bc1?auto=format&fit=crop&w=1400&q=80",
    "featured": false,
    "tax": "No HST",
    "tags": [
      "Herby",
      "Savory"
    ]
  },
  {
    "slug": "wildberry-danish",
    "name": "Wildberry Fruit Danish",
    "category": "Viennoiserie",
    "price": "$8.00",
    "short": "A softer, fruit-forward pastry.",
    "long": "Berry brightness meets buttery pastry in a clean, seasonal finish.",
    "image": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1400&q=80",
    "featured": false,
    "tax": "+ HST",
    "tags": [
      "Minimum 2",
      "Seasonal"
    ]
  },
  {
    "slug": "almond-croissant",
    "name": "Double-Baked Almond Croissants",
    "category": "Viennoiserie",
    "price": "$8.00",
    "short": "Rich almond cream, toasted edges.",
    "long": "Their luxe bakery staple with a deep almond flavor and a dense, satisfying finish.",
    "image": "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1400&q=80",
    "featured": true,
    "tax": "+ HST",
    "tags": [
      "Minimum 2",
      "Best Seller"
    ]
  },
  {
    "slug": "chocolate-almond-croissant",
    "name": "Double-Baked Chocolate Almond Croissant",
    "category": "Viennoiserie",
    "price": "$8.50",
    "short": "A richer almond croissant with cocoa depth.",
    "long": "The most decadent of the viennoiserie range: layered, glossy, and deeply flavored.",
    "image": "https://images.unsplash.com/photo-1528975604071-b64ff8d8b6a0?auto=format&fit=crop&w=1400&q=80",
    "featured": false,
    "tax": "+ HST",
    "tags": [
      "Minimum 2",
      "Premium"
    ]
  },
  {
    "slug": "apple-chausson",
    "name": "Organic Apple Chausson",
    "category": "Specials",
    "price": "$7.00",
    "short": "A crisp, seasonal apple turnover.",
    "long": "A lightly glazed fruit pastry with a golden shell and soft apple center. Minimum of 2.",
    "image": "https://images.unsplash.com/photo-1509440159596-5b6bfe3f0f0c?auto=format&fit=crop&w=1400&q=80",
    "featured": true,
    "tax": "+ HST",
    "tags": [
      "Minimum 2",
      "August Special"
    ]
  },
  {
    "slug": "vanilla-knot",
    "name": "Vanilla Knot Croissants",
    "category": "Specials",
    "price": "$7.00",
    "short": "Sweet knot pastry with a vanilla finish.",
    "long": "A delicate, polished pastry with a fragrant vanilla note and a clean glazed shine.",
    "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=80",
    "featured": false,
    "tax": "+ HST",
    "tags": [
      "Minimum 2",
      "August Special"
    ]
  },
  {
    "slug": "elegant-cocoa-chocolatine",
    "name": "Organic Elegant Cocoa Chocolatine",
    "category": "Specials",
    "price": "$7.50",
    "short": "Sharp lines, deep cocoa, elegant finish.",
    "long": "A refined chocolate pastry with a more dramatic profile and a bakery-window look.",
    "image": "https://images.unsplash.com/photo-1546213290-0e5f9c7d7c01?auto=format&fit=crop&w=1400&q=80",
    "featured": false,
    "tax": "+ HST",
    "tags": [
      "Minimum 2",
      "August Special"
    ]
  },
  {
    "slug": "rosemary-sourdough",
    "name": "Organic Rosemary Sourdough Bread",
    "category": "Specials",
    "price": "$14.00",
    "short": "Herb-scented loaf with a crisp crust.",
    "long": "Perfumed with rosemary and built on their slow-fermented sourdough base.",
    "image": "https://images.unsplash.com/photo-1542282811-943ef1a977c3?auto=format&fit=crop&w=1400&q=80",
    "featured": false,
    "tax": "No HST",
    "tags": [
      "New",
      "Herby"
    ]
  },
  {
    "slug": "olive-sourdough",
    "name": "Organic Olive Sourdough Bread",
    "category": "Specials",
    "price": "$14.00",
    "short": "Briny olives folded through a rustic loaf.",
    "long": "A loaf with a Mediterranean lean and a savory, more grown-up flavor profile.",
    "image": "https://images.unsplash.com/photo-1531386450450-969f935bd522?auto=format&fit=crop&w=1400&q=80",
    "featured": false,
    "tax": "No HST",
    "tags": [
      "New",
      "Savory"
    ]
  }
];;

const GALLERY_IMAGES = [
  [
    "Dough at work",
    "https://images.unsplash.com/photo-1549931319-ecb9782cfb39?auto=format&fit=crop&w=1200&q=80"
  ],
  [
    "Morning croissants",
    "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80"
  ],
  [
    "Flour and butter",
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80"
  ],
  [
    "Fresh loaves",
    "https://images.unsplash.com/photo-1509440159596-5f3b6f11cde3?auto=format&fit=crop&w=1200&q=80"
  ],
  [
    "Layering",
    "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79f3?auto=format&fit=crop&w=1200&q=80"
  ],
  [
    "Golden crumb",
    "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80"
  ],
  [
    "Butter sheets",
    "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1200&q=80"
  ],
  [
    "Serving tray",
    "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80"
  ]
];;

const CART_KEY = 'knot-guilty-shared-cart';

const money = value => {
  if (typeof value === 'number') return `$${value.toFixed(2)}`;
  const parsed = Number.parseFloat(String(value).replace(/[^0-9.]/g, '')) || 0;
  return `$${parsed.toFixed(2)}`;
};

const state = {
  cart: loadCart(),
  productsFilter: 'All',
  productsQuery: '',
  currentProductSlug: null
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
  return PRODUCTS.find(item => item.slug === slug);
}

function isInCart(slug) {
  return state.cart.some(item => item.slug === slug);
}

function cartCount() {
  return state.cart.reduce((sum, item) => sum + item.qty, 0);
}

function cartSubtotal() {
  return state.cart.reduce((sum, item) => {
    const value = Number.parseFloat(String(item.price).replace(/[^0-9.]/g, '')) || 0;
    return sum + (value * item.qty);
  }, 0);
}

function showMessage(text) {
  if (!refs.modalMessage) return;
  refs.modalMessage.textContent = text;
  refs.modalMessage.hidden = false;
  clearTimeout(showMessage.timer);
  showMessage.timer = setTimeout(() => {
    if (refs.modalMessage) refs.modalMessage.hidden = true;
  }, 2200);
}

function setBodyLocked(locked) {
  document.body.classList.toggle('is-layer-open', locked);
}

function openLayer(layer) {
  closeLayers(false);
  if (!refs.backdrop) return;

  refs.backdrop.hidden = false;

  if (layer === 'cart') {
    refs.cartDrawer?.classList.add('open');
    refs.cartDrawer?.setAttribute('aria-hidden', 'false');
    refs.cartToggle?.setAttribute('aria-expanded', 'true');
  }

  if (layer === 'menu') {
    refs.mobileMenu?.classList.add('open');
    refs.mobileMenu?.setAttribute('aria-hidden', 'false');
    refs.menuToggle?.setAttribute('aria-expanded', 'true');
  }

  setBodyLocked(true);
}

function closeLayers(restoreScroll = true) {
  if (refs.backdrop) refs.backdrop.hidden = true;

  refs.cartDrawer?.classList.remove('open');
  refs.cartDrawer?.setAttribute('aria-hidden', 'true');
  refs.cartToggle?.setAttribute('aria-expanded', 'false');

  refs.mobileMenu?.classList.remove('open');
  refs.mobileMenu?.setAttribute('aria-hidden', 'true');
  refs.menuToggle?.setAttribute('aria-expanded', 'false');

  if (restoreScroll) setBodyLocked(false);
}

function renderHeaderState() {
  if (refs.cartCount) refs.cartCount.textContent = String(cartCount());
}

function renderCart() {
  renderHeaderState();

  if (!refs.cartBody || !refs.cartTotal) return;

  const total = cartSubtotal();

  if (state.cart.length === 0) {
    refs.cartBody.innerHTML = `
      <div class="cart-empty">
        <p class="eyebrow">Nothing in here yet</p>
        <h3>Start with a loaf or a pastry box.</h3>
        <p>Build a cart from the menu, then come back here to adjust quantities and review the total.</p>
        <a class="btn btn-dark" href="products.html">Open full menu</a>
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
            <img src="${item.image}" alt="${item.name}">
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
                <button type="button" data-qty="down" data-slug="${item.slug}" aria-label="Decrease quantity">−</button>
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

  refs.cartTotal.textContent = money(total);
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
      category: product.category,
      price: product.price,
      image: product.image,
      qty: 1
    });
  }

  saveCart();
  renderCart();
  return true;
}

function removeFromCart(slug) {
  const before = state.cart.length;
  state.cart = state.cart.filter(item => item.slug !== slug);
  if (state.cart.length !== before) {
    saveCart();
    renderCart();
    return true;
  }
  return false;
}

function toggleCartItem(slug) {
  if (isInCart(slug)) {
    removeFromCart(slug);
    return false;
  }
  addToCart(slug);
  return true;
}

function updateQty(slug, delta) {
  const item = state.cart.find(entry => entry.slug === slug);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter(entry => entry.slug !== slug);
  }

  saveCart();
  renderCart();
  refreshCartDependentViews();
}

function clearCart() {
  state.cart = [];
  saveCart();
  renderCart();
  refreshCartDependentViews();
  showMessage('Cart cleared');
}

function refreshCartDependentViews() {
  renderProductsPage();
  renderProductPage();
}

function renderGalleryPage() {
  const grid = qs('[data-gallery-grid]');
  if (!grid) return;

  grid.innerHTML = GALLERY_IMAGES.map((item, idx) => `
    <figure class="gallery-item ${idx % 6 === 0 ? 'span-2' : idx % 7 === 0 ? 'span-wide' : ''}">
      <img src="${item[1]}" alt="${item[0]}" loading="lazy">
      <figcaption>${item[0]}</figcaption>
    </figure>
  `).join('');
}

function renderAdminPage() {
  const table = qs('[data-admin-table]');
  if (!table) return;

  table.innerHTML = PRODUCTS.map(p => `
    <tr>
      <td>
        <div class="admin-product">
          <img src="${p.image}" alt="${p.name}">
          <div>
            <strong>${p.name}</strong>
            <span>${p.category}</span>
          </div>
        </div>
      </td>
      <td>${p.price}</td>
      <td>${p.tax}</td>
      <td>${(p.tags || []).slice(0, 2).join(' · ')}</td>
    </tr>
  `).join('');
}

function renderProductsPage() {
  const grid = qs('[data-products-grid]');
  if (!grid) return;

  const tabs = qsa('[data-filter]');
  const search = qs('[data-search]');
  const count = qs('[data-count]');

  const filtered = PRODUCTS.filter(product => {
    const matchesCategory = state.productsFilter === 'All'
      || product.category === state.productsFilter
      || (state.productsFilter === 'Specials' && (product.tags || []).some(tag => /special/i.test(tag)));
    const haystack = [product.name, product.category, product.short, product.long, ...(product.tags || [])].join(' ').toLowerCase();
    const matchesQuery = !state.productsQuery || haystack.includes(state.productsQuery);
    return matchesCategory && matchesQuery;
  });

  if (count) {
    const suffix = filtered.length === 1 ? 'item' : 'items';
    count.textContent = `${filtered.length} curated ${suffix}`;
  }

  if (search && search.value !== state.productsQuery) {
    search.value = state.productsQuery;
  }

  tabs.forEach(btn => btn.classList.toggle('is-active', btn.dataset.filter === state.productsFilter));

  grid.innerHTML = filtered.map((product) => {
    const inCart = isInCart(product.slug);
    const toggleLabel = inCart ? 'Remove from cart' : 'Add to cart';
    return `
      <article class="product-card">
        <a class="product-card__image" href="product.html?slug=${product.slug}" aria-label="Open ${product.name}">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
        </a>
        <div class="product-card__body">
          <div class="meta-row">
            <span>${product.category}</span>
            <span>${product.tax}</span>
          </div>
          <h3>${product.name}</h3>
          <p>${product.short}</p>
          <div class="product-card__foot">
            <strong>${product.price}</strong>
            <span>${inCart ? 'In cart' : 'Ready to add'}</span>
          </div>
          <div class="product-card__actions">
            <button class="btn btn-dark" type="button" data-toggle-cart="${product.slug}">${toggleLabel}</button>
            <a class="btn btn-light btn-light--dark" href="product.html?slug=${product.slug}">View page</a>
          </div>
        </div>
      </article>
    `;
  }).join('');

  if (!filtered.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <h3>No products match that search.</h3>
        <p>Try a broader keyword or switch back to All.</p>
      </div>
    `;
  }
}

function renderProductPage() {
  const root = qs('[data-product-root]');
  if (!root) return;

  const params = new URLSearchParams(location.search);
  const slug = params.get('slug') || state.currentProductSlug || PRODUCTS[0].slug;
  const product = productBySlug(slug) || PRODUCTS[0];
  state.currentProductSlug = product.slug;

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
        <p class="lede">${product.long}</p>
        <div class="pill-row">
          ${(product.tags || []).map(tag => `<span class="pill">${tag}</span>`).join('')}
        </div>
        <div class="price-row">
          <strong>${product.price}</strong>
          <span>Pick up Thursday–Saturday</span>
        </div>
        <div class="option-grid">
          <div><i class="fa-regular fa-square"></i><span>Minimum 2 where noted</span></div>
          <div><i class="fa-regular fa-clock"></i><span>Fresh weekly batches</span></div>
          <div><i class="fa-solid fa-wheat-awn"></i><span>Organic ingredients</span></div>
        </div>
        <div class="action-row">
          <button class="btn btn-dark" type="button" data-toggle-cart="${product.slug}" data-product-toggle>${isInCart(product.slug) ? 'Remove from cart' : 'Add to cart'}</button>
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
          <a class="related-card" href="product.html?slug=${item.slug}">
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

function renderPageYear() {
  const year = qs('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
}

function syncFromStorage() {
  state.cart = loadCart();
  renderCart();
  refreshCartDependentViews();
}

function bindPageControls() {
  refs.cartToggle?.addEventListener('click', () => openLayer('cart'));
  refs.menuToggle?.addEventListener('click', () => openLayer('menu'));

  qsa('[data-close-cart]').forEach(btn => btn.addEventListener('click', () => closeLayers()));
  qsa('[data-close-menu]').forEach(btn => btn.addEventListener('click', () => closeLayers()));
  qsa('[data-mobile-link]').forEach(link => link.addEventListener('click', () => closeLayers()));

  refs.backdrop?.addEventListener('click', () => closeLayers());

  document.addEventListener('click', event => {
    const toggleButton = event.target.closest('[data-toggle-cart]');
    if (toggleButton) {
      const slug = toggleButton.dataset.toggleCart;
      const nowInCart = toggleCartItem(slug);
      renderCart();
      refreshCartDependentViews();
      showMessage(nowInCart ? 'Added to cart' : 'Removed from cart');
      return;
    }

    const qtyButton = event.target.closest('[data-qty]');
    if (qtyButton) {
      const delta = qtyButton.dataset.qty === 'up' ? 1 : -1;
      updateQty(qtyButton.dataset.slug, delta);
      return;
    }

    const removeButton = event.target.closest('[data-remove]');
    if (removeButton) {
      removeFromCart(removeButton.dataset.remove);
      renderCart();
      refreshCartDependentViews();
      showMessage('Removed from cart');
      return;
    }

    const filterButton = event.target.closest('[data-filter]');
    if (filterButton) {
      state.productsFilter = filterButton.dataset.filter || 'All';
      renderProductsPage();
      return;
    }
  });

  const search = qs('[data-search]');
  search?.addEventListener('input', event => {
    state.productsQuery = event.target.value.trim().toLowerCase();
    renderProductsPage();
  });

  refs.clearCart?.addEventListener('click', clearCart);

  refs.checkout?.addEventListener('click', () => {
    if (state.cart.length === 0) {
      showMessage('Your cart is empty');
      return;
    }
    showMessage('Checkout is ready');
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeLayers();
  });

  window.addEventListener('storage', syncFromStorage);
}

function init() {
  refs.cartCount = qs('[data-cart-count]');
  refs.cartBody = qs('[data-cart-body]');
  refs.cartTotal = qs('[data-cart-total]');
  refs.cartDrawer = qs('#cart-drawer');
  refs.cartToggle = qs('#cart-toggle');
  refs.menuToggle = qs('#menu-toggle');
  refs.mobileMenu = qs('#mobile-menu');
  refs.backdrop = qs('#backdrop');
  refs.modalMessage = qs('#modal-message');
  refs.checkout = qs('[data-checkout]');
  refs.clearCart = qs('[data-clear-cart]');

  renderPageYear();
  renderProductsPage();
  renderProductPage();
  renderGalleryPage();
  renderAdminPage();
  renderCart();
  bindPageControls();
  refreshCartDependentViews();
}

document.addEventListener('DOMContentLoaded', init);
