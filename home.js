const EDITORIAL_EDITS = [
  {
    key: 'bread',
    eyebrow: 'Bread board',
    title: 'The Bread Edit',
    copy: 'Long-fermented loaves with deep crusts, open crumb, and a clean, satisfying finish.',
    image: 'images/b1.jpg',
    pills: ['Country Sourdough', 'Whole Grain', 'Daily Bake'],
    link: '#fresh-from-oven',
    product: 'country-sourdough'
  },
  {
    key: 'viennoiserie',
    eyebrow: 'Butter layers',
    title: 'Viennoiserie Edit',
    copy: 'Flaky pastry layers with a polished finish and a soft, buttery center.',
    image: 'images/b2.jpg',
    pills: ['Croissants', 'Danishes', 'Morning Treats'],
    link: '#fresh-from-oven',
    product: 'butter-croissant'
  },
  {
    key: 'seasonal',
    eyebrow: 'Seasonal table',
    title: 'The Weekly Special',
    copy: 'A rotating favorite built around the best ingredients of the season.',
    image: 'images/b3.webp',
    pills: ['Apple Chausson', 'Weekend Drop', 'Limited Batch'],
    link: '#our-story',
    product: 'apple-chausson'
  },
  {
    key: 'gift',
    eyebrow: 'For sharing',
    title: 'Gift Box Edit',
    copy: 'An elegant selection for brunch tables, thank-yous, and slow Sunday mornings.',
    image: 'images/b4.webp',
    pills: ['Brunch Box', 'Weekend Gift', 'Crowd-Pleaser'],
    link: 'products.html',
    product: 'chocolate-croissant'
  }
];

const FEATURED_PRODUCTS = [
  {
    slug: 'butter-croissant',
    name: 'Artisan Butter Croissants',
    category: 'Viennoiserie',
    price: '$5.00',
    short: 'Classic French layers, crisp on the outside and soft within.',
    image: 'images/p18.webp'
  },
  {
    slug: 'italian-sourdough',
    name: 'Organic Italian Sourdough Bread',
    category: 'Bread',
    price: '$15.00',
    short: 'Herb-forward, aromatic, and perfect for a generous table.',
    image: 'images/p13.jpg'
  },
  {
    slug: 'apple-chausson',
    name: 'Organic Apple Chausson',
    category: 'Seasonal',
    price: '$7.00',
    short: 'A crisp fruit pastry with a warm, seasonal finish.',
    image: 'images/p1.jpg'
  }
];

const REVIEWS = [
  {
    name: 'Ava Thompson',
    meta: 'Toronto · Croissant regular',
    review: 'The croissants are beautifully laminated and taste as good as they look. It feels like a proper bakery visit every time.'
  },
  {
    name: 'Daniel Mensah',
    meta: 'Etobicoke · Weekend pickup',
    review: 'The breads are consistent, warm, and full of character. I always leave with something extra for the next day.'
  },
  {
    name: 'Mia Laurent',
    meta: 'Mississauga · First order',
    review: 'The menu feels curated rather than crowded, and that makes the whole experience feel premium and calm.'
  },
  {
    name: 'Noah Patel',
    meta: 'Toronto · Bakery fan',
    review: 'The sourdough is the star here. The crust, the crumb, and the flavor all feel carefully tuned.'
  },
  {
    name: 'Chloe Kim',
    meta: 'Bloor West · Repeat customer',
    review: 'Everything feels thoughtful, from the pickup flow to the pastry selection. It is easy to trust the menu.'
  },
  {
    name: 'Grace Brown',
    meta: 'Toronto · Weekend brunch',
    review: 'The seasonal specials keep me coming back. Each visit feels fresh, but still very familiar.'
  }
];

const RECENT_IMAGES = [
  {
    title: 'Morning trays',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1400&q=80'
  },
  {
    title: 'Fresh loaves',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?auto=format&fit=crop&w=1400&q=80'
  },
  {
    title: 'Seasonal pastry',
    image: 'https://images.unsplash.com/photo-1509440159596-5b6bfe3f0f0c?auto=format&fit=crop&w=1400&q=80'
  },
  {
    title: 'Bread room',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1400&q=80'
  }
];

const CART_KEY = 'knot-guilty-shared-cart';
const REVIEW_KEY = 'knot-guilty-reviews';
const state = {
  cart: loadCart(),
  reviews: [...loadStoredReviews(), ...REVIEWS],
  editorial: null
};

const refs = {};

function qs(selector, scope = document) {
  return scope.querySelector(selector);
}

function qsa(selector, scope = document) {
  return Array.from(scope.querySelectorAll(selector));
}

function parsePrice(price) {
  return Number(String(price).replace(/[^0-9.]+/g, '')) || 0;
}

function money(value) {
  return `$${value.toFixed(2)}`;
}

function loadCart() {
  try {
    const parsed = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(state.cart));
  updateCartBadge();
}

function syncFromStorage() {
  state.cart = loadCart();
  renderCart();
}

function loadStoredReviews() {
  try {
    const parsed = JSON.parse(localStorage.getItem(REVIEW_KEY) || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveStoredReviews(reviews) {
  localStorage.setItem(REVIEW_KEY, JSON.stringify(reviews));
}

function itemCount() {
  return state.cart.reduce((sum, item) => sum + item.qty, 0);
}

function cartSubtotal() {
  return state.cart.reduce((sum, item) => sum + parsePrice(item.price) * item.qty, 0);
}

function updateCartBadge() {
  if (refs.cartCount) refs.cartCount.textContent = itemCount();
}

function productBySlug(slug) {
  return FEATURED_PRODUCTS.find(product => product.slug === slug) || null;
}

function openLayer(name) {
  document.body.classList.add('is-layer-open');

  if (name === 'menu') {
    refs.mobileMenu?.classList.add('open');
    refs.mobileMenu?.setAttribute('aria-hidden', 'false');
    refs.menuToggle?.setAttribute('aria-expanded', 'true');
    refs.backdrop.hidden = false;
    return;
  }

  if (name === 'cart') {
    syncFromStorage();
    refs.cartDrawer?.classList.add('open');
    refs.cartDrawer?.setAttribute('aria-hidden', 'false');
    refs.cartToggle?.setAttribute('aria-expanded', 'true');
    refs.backdrop.hidden = false;
    return;
  }

  if (name === 'editorial') {
    refs.editorialModal?.classList.add('open');
    refs.editorialModal?.setAttribute('aria-hidden', 'false');
    refs.backdrop.hidden = false;
    return;
  }

  if (name === 'review') {
    refs.reviewModal?.classList.add('open');
    refs.reviewModal?.setAttribute('aria-hidden', 'false');
    refs.backdrop.hidden = false;
  }
}

function closeLayers() {
  document.body.classList.remove('is-layer-open');
  refs.mobileMenu?.classList.remove('open');
  refs.mobileMenu?.setAttribute('aria-hidden', 'true');
  refs.menuToggle?.setAttribute('aria-expanded', 'false');

  refs.cartDrawer?.classList.remove('open');
  refs.cartDrawer?.setAttribute('aria-hidden', 'true');
  refs.cartToggle?.setAttribute('aria-expanded', 'false');

  refs.editorialModal?.classList.remove('open');
  refs.editorialModal?.setAttribute('aria-hidden', 'true');

  refs.reviewModal?.classList.remove('open');
  refs.reviewModal?.setAttribute('aria-hidden', 'true');

  if (refs.backdrop) refs.backdrop.hidden = true;
}

function showMessage(message) {
  if (!refs.modalMessage) return;
  refs.modalMessage.textContent = message;
  refs.modalMessage.hidden = false;
  refs.modalMessage.classList.add('is-visible');

  window.clearTimeout(showMessage.timer);
  showMessage.timer = window.setTimeout(() => {
    refs.modalMessage?.classList.remove('is-visible');
    if (refs.modalMessage) refs.modalMessage.hidden = true;
  }, 1800);
}

function renderCart() {
  updateCartBadge();

  if (!refs.cartBody || !refs.cartTotal) return;

  const subtotal = cartSubtotal();

  if (state.cart.length === 0) {
    refs.cartBody.innerHTML = `
      <div class="cart-empty">
        <p class="eyebrow">Your cart is empty</p>
        <h3>Choose a loaf or pastry to begin.</h3>
        <p>Browse the menu and add a few favorites when you are ready.</p>
        <a class="btn btn-dark" href="products.html">View the menu</a>
      </div>
    `;
    refs.cartTotal.textContent = money(0);
    return;
  }

  refs.cartBody.innerHTML = `
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

  refs.cartTotal.textContent = money(subtotal);
}

function addToCart(slug) {
  const product = productBySlug(slug);
  if (!product) return;

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
  showMessage(`${product.name} added to cart`);
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
}

function removeItem(slug) {
  state.cart = state.cart.filter(item => item.slug !== slug);
  saveCart();
  renderCart();
}

function clearCart() {
  state.cart = [];
  saveCart();
  renderCart();
  showMessage('Cart cleared');
}

function renderEditorialGrid() {
  if (!refs.editorialGrid) return;

  refs.editorialGrid.innerHTML = EDITORIAL_EDITS.map(item => `
    <button class="edit-card" type="button" data-edit-card="${item.key}">
      <img src="${item.image}" alt="${item.title}">
      <div class="edit-card__content">
        <p class="eyebrow">${item.eyebrow}</p>
        <h3>${item.title}</h3>
        <p>${item.copy}</p>
        <span class="edit-card__cta">View note <i class="fa-solid fa-arrow-right"></i></span>
      </div>
    </button>
  `).join('');
}

function openEditorial(key) {
  const item = EDITORIAL_EDITS.find(entry => entry.key === key);
  if (!item) return;

  state.editorial = item;
  const image = qs('[data-editorial-image]', refs.editorialModal);
  const eyebrow = qs('[data-editorial-eyebrow]', refs.editorialModal);
  const title = qs('[data-editorial-title]', refs.editorialModal);
  const copy = qs('[data-editorial-copy]', refs.editorialModal);
  const pills = qs('[data-editorial-pills]', refs.editorialModal);
  const collection = qs('[data-editorial-link]', refs.editorialModal);
  const menu = qs('[data-editorial-product]', refs.editorialModal);

  if (image) {
    image.src = item.image;
    image.alt = item.title;
  }
  if (eyebrow) eyebrow.textContent = item.eyebrow;
  if (title) title.textContent = item.title;
  if (copy) copy.textContent = item.copy;
  if (pills) pills.innerHTML = item.pills.map(pill => `<span class="pill">${pill}</span>`).join('');
  if (collection) collection.href = item.link;
  if (menu) menu.href = `product.html?slug=${item.product}`;

  openLayer('editorial');
}

function renderFeatured() {
  if (!refs.featuredGrid) return;

  refs.featuredGrid.innerHTML = FEATURED_PRODUCTS.map(item => `
    <a class="fresh-card" href="product.html?slug=${item.slug}" aria-label="View details for ${item.name}">
      <div class="fresh-card__image">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="fresh-card__body">
        <div class="card-meta">
          <span>${item.category}</span>
          <span>${item.price}</span>
        </div>
        <h3>${item.name}</h3>
        <p>${item.short}</p>
        <span class="fresh-card__cta">View Details</span>
      </div>
    </a>
  `).join('');
}

function renderReviews() {
  if (!refs.reviewTrack) return;

  refs.reviewTrack.innerHTML = state.reviews.map(review => `
    <article class="review-card">
      <p class="review-card__quote">${review.review}</p>
      <p class="review-card__name">${review.name}</p>
      <p class="review-card__meta">${review.meta || 'Customer note'}</p>
    </article>
  `).join('');

  syncReviewArrows();
}

function renderRecentImages() {
  if (!refs.imagesGrid) return;

  refs.imagesGrid.innerHTML = RECENT_IMAGES.map(item => `
    <article class="image-card">
      <img src="${item.image}" alt="${item.title}">
      <div class="image-card__caption">${item.title}</div>
    </article>
  `).join('');
}

function syncReviewArrows() {
  const track = refs.reviewTrack;
  if (!track) return;

  const maxScroll = track.scrollWidth - track.clientWidth - 2;
  const leftDisabled = track.scrollLeft <= 0;
  const rightDisabled = track.scrollLeft >= maxScroll;

  if (refs.prevReviews) refs.prevReviews.disabled = leftDisabled;
  if (refs.nextReviews) refs.nextReviews.disabled = rightDisabled;
}

function scrollReviews(direction) {
  const track = refs.reviewTrack;
  if (!track) return;

  const card = track.querySelector('.review-card');
  const width = (card?.getBoundingClientRect().width || 320) + 16;
  track.scrollBy({ left: direction * width * 1.06, behavior: 'smooth' });
}

function handleReviewFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const review = form.review.value.trim();

  if (!name || !email || !review) {
    showMessage('Please complete all note fields');
    return;
  }

  const customReview = {
    name,
    meta: email,
    review
  };

  const saved = JSON.parse(localStorage.getItem(REVIEW_KEY) || '[]');
  saved.unshift(customReview);
  saveStoredReviews(saved);

  state.reviews = [...saved, ...REVIEWS];
  renderReviews();
  form.reset();
  closeLayers();
  showMessage('Note published');
}

function bindEvents() {
  refs.cartToggle?.addEventListener('click', () => openLayer('cart'));
  refs.menuToggle?.addEventListener('click', () => openLayer('menu'));

  qsa('[data-close-cart]').forEach(btn => btn.addEventListener('click', () => closeLayers()));
  qsa('[data-close-modal]').forEach(btn => btn.addEventListener('click', () => closeLayers()));
  qsa('[data-close-menu]').forEach(btn => btn.addEventListener('click', () => closeLayers()));

  refs.backdrop?.addEventListener('click', () => closeLayers());

  qsa('[data-mobile-link]').forEach(link => {
    link.addEventListener('click', () => closeLayers());
  });

  document.addEventListener('click', event => {
    const addButton = event.target.closest('[data-add-to-cart]');
    if (addButton) {
      addToCart(addButton.dataset.addToCart);
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
      removeItem(removeButton.dataset.remove);
      return;
    }

    const editorialCard = event.target.closest('[data-edit-card]');
    if (editorialCard) {
      openEditorial(editorialCard.dataset.editCard);
    }
  });

  refs.clearCart?.addEventListener('click', clearCart);

  refs.checkout?.addEventListener('click', () => {
    if (state.cart.length === 0) {
      showMessage('Your cart is empty');
      return;
    }
    showMessage('Checkout is ready');
  });

  refs.openReview?.addEventListener('click', () => openLayer('review'));
  refs.reviewForm?.addEventListener('submit', handleReviewFormSubmit);

  refs.prevReviews?.addEventListener('click', () => scrollReviews(-1));
  refs.nextReviews?.addEventListener('click', () => scrollReviews(1));

  refs.reviewTrack?.addEventListener('scroll', syncReviewArrows);

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeLayers();
  });

  window.addEventListener('resize', syncReviewArrows);
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
  refs.editorialModal = qs('#editorial-modal');
  refs.reviewModal = qs('#review-modal');
  refs.modalMessage = qs('#modal-message');
  refs.editorialGrid = qs('[data-editorial-grid]');
  refs.featuredGrid = qs('[data-fresh-grid]');
  refs.reviewTrack = qs('[data-review-track]');
  refs.imagesGrid = qs('[data-images-grid]');
  refs.openReview = qs('#open-review');
  refs.reviewForm = qs('#review-form');
  refs.prevReviews = qs('#reviews-prev');
  refs.nextReviews = qs('#reviews-next');
  refs.clearCart = qs('[data-clear-cart]');
  refs.checkout = qs('[data-checkout]');

  const year = qs('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  renderEditorialGrid();
  renderFeatured();
  renderReviews();
  renderRecentImages();
  renderCart();
  bindEvents();
  syncReviewArrows();
  window.addEventListener('storage', syncFromStorage);
  window.addEventListener('pageshow', syncFromStorage);
}

document.addEventListener('DOMContentLoaded', init);
