const EDITORIAL_EDITS = [
  {
    key: 'bread',
    eyebrow: 'Bread room',
    title: 'Bread Edit',
    copy: 'A quiet premium line-up built around crust, crumb, and long fermentation.',
    image: 'images/b1.jpg',
    pills: ['Country Sourdough', 'Whole Wheat', 'Olive Loaf'],
    link: 'products.html',
    product: 'country-sourdough'
  },
  {
    key: 'viennoiserie',
    eyebrow: 'Butter layers',
    title: 'Viennoiserie Edit',
    copy: 'Laminated pastries with a sharper editorial look.',
    image: 'images/b2.jpg',
    pills: ['Croissants', 'Danishes', 'Almond'],
    link: 'products.html',
    product: 'almond-croissant'
  },
  {
    key: 'seasonal',
    eyebrow: 'Small batch',
    title: 'Seasonal Counter',
    copy: 'Limited-time specials and bakery-window favorites.',
    image: 'images/b3.webp',
    pills: ['Apple Chausson', 'Rosemary Sourdough', 'Weekly Drop'],
    link: 'products.html',
    product: 'apple-chausson'
  },
  {
    key: 'gift',
    eyebrow: 'For sharing',
    title: 'Gift Box Edit',
    copy: 'A neat set of pastries that still feels considered and beautiful.',
    image: 'images/b4.webp',
    pills: ['Brunch box', 'Weekend gift', 'Crowd-pleaser'],
    link: 'products.html',
    product: 'chocolate-croissant'
  }
];

const FEATURED_PRODUCTS = [
  {
    slug: 'grand-white-sourdough',
    name: 'Organic Grand White Sourdough',
    category: 'Bread',
    price: '$12.00',
    short: 'Soft interior, elegant crust, balanced flavor.',
    image: 'images/c1.jpg'
  },
  {
    slug: 'almond-croissant',
    name: 'Double-Baked Almond Croissants',
    category: 'Viennoiserie',
    price: '$8.00',
    short: 'Rich almond cream, toasted edges, and a polished finish.',
    image: 'images/c2.jpg'
  },
  {
    slug: 'apple-chausson',
    name: 'Organic Apple Chausson',
    category: 'Seasonal',
    price: '$7.00',
    short: 'A crisp, seasonal apple turnover with a glazed finish.',
    image: 'images/c3.webp'
  },
  {
    slug: 'country-sourdough',
    name: 'Organic Country Sourdough',
    category: 'Bread',
    price: '$11.00',
    short: 'Deep crust, open crumb, and a clean, classic finish.',
    image: 'images/c4.webp'
  },
  {
    slug: 'chocolate-croissant',
    name: 'Premium Chocolate Croissants',
    category: 'Viennoiserie',
    price: '$5.50',
    short: 'Deep cocoa center and a crisp, glossy shell.',
    image: 'images/c5.jpg'
  },
  {
    slug: 'rosemary-sourdough',
    name: 'Organic Rosemary Sourdough Bread',
    category: 'Seasonal',
    price: '$14.00',
    short: 'Herb-scented loaf with a crisp crust.',
    image: 'images/c6.jpg'
  },
  {
    slug: 'olive-sourdough',
    name: 'Organic Olive Sourdough Bread',
    category: 'Seasonal',
    price: '$14.00',
    short: 'Briny olives folded through a rustic loaf.',
    image: 'images/c7.webp'
  },
  {
    slug: 'brioche-loaf',
    name: 'Butter Brioche Loaf',
    category: 'Bread',
    price: '$10.00',
    short: 'Soft, golden, and rich enough to feel like dessert.',
    image: 'c8.jpg'
  }
];

const REVIEWS = [
  {
    name: 'Ava Thompson',
    meta: 'Toronto · Croissant regular',
    review: 'The almond croissant felt like a boutique pastry experience. Clean flavors, no clutter, and that butter finish is unforgettable.'
  },
  {
    name: 'Daniel Mensah',
    meta: 'Etobicoke · Weekend pickup',
    review: 'The layout feels calm and expensive, and the bread is the same way. I came for one loaf and left with three.'
  },
  {
    name: 'Mia Laurent',
    meta: 'Mississauga · First order',
    review: 'Everything tasted intentional. The product pages are easy to read, but the homepage is what made me actually order.'
  },
  {
    name: 'Noah Patel',
    meta: 'Toronto · Bakery fan',
    review: 'The sourdough is the star here. Proper crust, airy crumb, and the kind of texture that makes you slow down.'
  },
  {
    name: 'Chloe Kim',
    meta: 'Bloor West · Repeat customer',
    review: 'I love that the menu feels edited rather than crowded. It makes the shop look premium instead of busy.'
  },
  {
    name: 'Josephine N.',
    meta: 'North York · Gift buyer',
    review: 'I ordered a mixed box for a friend and it arrived looking like a design object. Beautiful and delicious.'
  },
  {
    name: 'Elijah Brown',
    meta: 'Scarborough · Early pickup',
    review: 'The new review strip is easy to swipe through, and the page now feels much closer to a real bakery brand.'
  }
];

const RECENT_IMAGES = [
  {
    title: 'Morning loaf',
    image: 'images/d1.jpg'
  },
  {
    title: 'Butter layers',
    image: 'images/d2.jpg'
  },
  {
    title: 'Gold crumb',
    image: 'images/d3.wepb'
  },
  {
    title: 'Tray service',
    image: 'images/d4.jpg'
  }
];

const CART_KEY = 'knot-guilty-shared-cart';
const REVIEW_KEY = 'knot-guilty-home-reviews';

const money = value => (typeof value === 'number' ? `$${value.toFixed(2)}` : String(value));

const state = {
  cart: loadCart(),
  reviews: loadStoredReviews(),
  editorial: null,
  activeLayer: null
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
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(state.cart));
}

function loadStoredReviews() {
  try {
    const raw = localStorage.getItem(REVIEW_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return [...parsed, ...REVIEWS];
  } catch {
    return REVIEWS.slice();
  }
}

function saveStoredReviews(customReviews) {
  localStorage.setItem(REVIEW_KEY, JSON.stringify(customReviews));
}

function productBySlug(slug) {
  return FEATURED_PRODUCTS.find(item => item.slug === slug);
}

function itemCount() {
  return state.cart.reduce((sum, item) => sum + item.qty, 0);
}

function cartSubtotal() {
  return state.cart.reduce((sum, item) => {
    const price = parseFloat(String(item.price).replace(/[^0-9.]/g, '')) || 0;
    return sum + (price * item.qty);
  }, 0);
}

function showMessage(text) {
  const message = refs.modalMessage;
  if (!message) return;
  message.textContent = text;
  message.hidden = false;
  clearTimeout(showMessage.timer);
  showMessage.timer = setTimeout(() => {
    message.hidden = true;
  }, 2400);
}

function setBodyLocked(locked) {
  document.body.classList.toggle('is-layer-open', locked);
}

function openLayer(layer) {
  closeLayers(false);
  state.activeLayer = layer;

  if (refs.backdrop) {
    refs.backdrop.hidden = false;
  }

  if (layer === 'cart') {
    refs.cartDrawer?.classList.add('open');
    refs.cartDrawer?.setAttribute('aria-hidden', 'false');
    refs.cartToggle?.setAttribute('aria-expanded', 'true');
  }

  if (layer === 'editorial') {
    refs.editorialModal?.classList.add('open');
    refs.editorialModal?.setAttribute('aria-hidden', 'false');
  }

  if (layer === 'review') {
    refs.reviewModal?.classList.add('open');
    refs.reviewModal?.setAttribute('aria-hidden', 'false');
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

  refs.editorialModal?.classList.remove('open');
  refs.editorialModal?.setAttribute('aria-hidden', 'true');

  refs.reviewModal?.classList.remove('open');
  refs.reviewModal?.setAttribute('aria-hidden', 'true');

  refs.mobileMenu?.classList.remove('open');
  refs.mobileMenu?.setAttribute('aria-hidden', 'true');
  refs.menuToggle?.setAttribute('aria-expanded', 'false');

  state.activeLayer = null;
  if (restoreScroll) setBodyLocked(false);
}

function updateCartBadge() {
  if (refs.cartCount) refs.cartCount.textContent = String(itemCount());
}

function renderCart() {
  updateCartBadge();

  if (!refs.cartBody || !refs.cartTotal) return;

  const count = itemCount();
  const subtotal = cartSubtotal();

  if (state.cart.length === 0) {
    refs.cartBody.innerHTML = `
      <div class=\"cart-empty\">
        <p class=\"eyebrow\">Nothing in here yet</p>
        <h3>Start with a loaf or a pastry box.</h3>
        <p>Build a cart from the featured picks, then come back here to adjust quantities and review the total.</p>
        <a class=\"btn btn-dark\" href=\"products.html\">Open full menu</a>
      </div>
    `;
    refs.cartTotal.textContent = money(0);
    return;
  }

  refs.cartBody.innerHTML = `
    <div class=\"cart-overview\">
      <div class=\"cart-overview__count\">
        <span>${count}</span>
        <p>Items in your cart</p>
      </div>
      <div class=\"cart-overview__note\">
        <strong>Soft pickup flow</strong>
        <span>Review quantities below and then head to checkout when ready.</span>
      </div>
    </div>
    <div class=\"cart-items\">
      ${state.cart.map(item => `
        <article class=\"cart-item\">
          <div class=\"cart-item__image\">
            <img src=\"${item.image}\" alt=\"${item.name}\">
          </div>
          <div class=\"cart-item__body\">
            <div class=\"cart-item__top\">
              <div>
                <h4>${item.name}</h4>
                <div class=\"cart-item__meta\">${item.category}</div>
              </div>
              <strong>${item.price}</strong>
            </div>

            <div class=\"qty-row\">
              <div class=\"qty-stepper\" aria-label=\"Quantity controls for ${item.name}\">
                <button type=\"button\" data-qty=\"down\" data-slug=\"${item.slug}\" aria-label=\"Decrease quantity\">−</button>
                <span>${item.qty}</span>
                <button type=\"button\" data-qty=\"up\" data-slug=\"${item.slug}\" aria-label=\"Increase quantity\">+</button>
              </div>
              <button type=\"button\" class=\"remove-btn\" data-remove=\"${item.slug}\">Remove</button>
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

  refs.editorialGrid.innerHTML = EDITORIAL_EDITS.map((item) => `
    <button class=\"edit-card\" type=\"button\" data-edit-card=\"${item.key}\">
      <img src=\"${item.image}\" alt=\"${item.title}\">
      <div class=\"edit-card__content\">
        <p class=\"eyebrow\">${item.eyebrow}</p>
        <h3>${item.title}</h3>
        <p>${item.copy}</p>
        <span class=\"edit-card__cta\">Open edit <i class=\"fa-solid fa-arrow-right\"></i></span>
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
  if (pills) pills.innerHTML = item.pills.map(pill => `<span class=\"pill\">${pill}</span>`).join('');
  if (collection) collection.href = item.link;
  if (menu) menu.href = `product.html?slug=${item.product}`;

  openLayer('editorial');
}

function renderFeatured() {
  if (!refs.featuredGrid) return;

  refs.featuredGrid.innerHTML = FEATURED_PRODUCTS.map((item, index) => `
    <article class=\"featured-card ${index === 0 ? 'featured-card--lead' : ''}\">
      <a class=\"featured-card__image\" href=\"product.html?slug=${item.slug}\" aria-label=\"Open ${item.name}\">
        <img src=\"${item.image}\" alt=\"${item.name}\">
      </a>
      <div class=\"featured-card__body\">
        <div class=\"card-meta\">
          <span>${item.category}</span>
          <span>${item.price}</span>
        </div>
        <div>
          <h4>${item.name}</h4>
          <p>${item.short}</p>
        </div>
        <div class=\"card-actions\">
          <button class=\"btn btn-dark\" type=\"button\" data-add-to-cart=\"${item.slug}\">Add to cart</button>
          <a class=\"btn btn-light btn-light--dark\" href=\"product.html?slug=${item.slug}\">View page</a>
        </div>
      </div>
    </article>
  `).join('');
}

function renderReviews() {
  if (!refs.reviewTrack) return;

  refs.reviewTrack.innerHTML = state.reviews.map(review => `
    <article class=\"review-card\">
      <p class=\"review-card__quote\">${review.review}</p>
      <p class=\"review-card__name\">${review.name}</p>
      <p class=\"review-card__meta\">${review.meta || 'Customer note'}</p>
    </article>
  `).join('');

  syncReviewArrows();
}

function renderRecentImages() {
  if (!refs.imagesGrid) return;

  refs.imagesGrid.innerHTML = RECENT_IMAGES.map(item => `
    <article class=\"image-card\">
      <img src=\"${item.image}\" alt=\"${item.title}\">
      <div class=\"image-card__caption\">${item.title}</div>
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
    showMessage('Please complete all review fields');
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
  showMessage('Review published');
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
  refs.featuredGrid = qs('[data-featured-grid]');
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
}

document.addEventListener('DOMContentLoaded', init);
