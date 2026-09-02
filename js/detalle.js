document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id') || 'prod-001';

  const product = getProductById(productId) || PRODUCTS_DATA[0];

  if (product) {
    loadProductDetails(product);
  }

  setupDetailEvents(product);
});

function loadProductDetails(product) {
  const breadcrumb = document.getElementById('breadcrumb-title');
  if (breadcrumb) breadcrumb.textContent = product.name;

  const img = document.getElementById('detail-img');
  if (img) {
    img.src = product.imageRelative || `../${product.image}`;
    img.alt = product.name;
  }

  const title = document.getElementById('detail-title');
  if (title) title.textContent = product.name;

  const price = document.getElementById('detail-price');
  if (price) price.textContent = `$${product.price.toFixed(2)}`;

  const reviews = document.getElementById('detail-reviews');
  if (reviews) reviews.textContent = `(${product.reviewsCount})`;

  const starsContainer = document.getElementById('detail-stars');
  if (starsContainer) {
    starsContainer.innerHTML = renderStarsHtml(product.rating);
  }

  const shortDesc = document.getElementById('detail-short-desc');
  if (shortDesc) shortDesc.textContent = product.shortDesc;

  const fullDesc = document.getElementById('detail-full-desc');
  if (fullDesc) fullDesc.textContent = product.description;

  const qtyInput = document.getElementById('detail-qty-input');
  if (qtyInput && product.stock) {
    qtyInput.max = product.stock;
  }
}

function renderStarsHtml(rating = 5) {
  const rounded = Math.round(rating);
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= rounded) {
      stars += '<span class="star-gold">★</span>';
    } else {
      stars += '<span class="star-muted">★</span>';
    }
  }
  return stars;
}

function setupDetailEvents(product) {
  const minusBtn = document.getElementById('qty-minus-btn');
  const plusBtn = document.getElementById('qty-plus-btn');
  const qtyInput = document.getElementById('detail-qty-input');
  const addBtn = document.getElementById('add-to-cart-btn');
  const toast = document.getElementById('cart-toast');
  const closeToastBtn = document.getElementById('close-toast-btn');
  const maxStock = (product && product.stock) ? product.stock : 99;

  if (minusBtn && qtyInput) {
    minusBtn.addEventListener('click', () => {
      let current = parseInt(qtyInput.value, 10) || 1;
      if (current > 1) {
        qtyInput.value = current - 1;
      }
    });
  }

  if (plusBtn && qtyInput) {
    plusBtn.addEventListener('click', () => {
      let current = parseInt(qtyInput.value, 10) || 1;
      if (current < maxStock) {
        qtyInput.value = current + 1;
      }
    });
  }

  if (qtyInput) {
    qtyInput.addEventListener('change', () => {
      let val = parseInt(qtyInput.value, 10);
      if (isNaN(val) || val < 1) val = 1;
      if (val > maxStock) val = maxStock;
      qtyInput.value = val;
    });
  }

  if (addBtn && toast) {
    addBtn.addEventListener('click', () => {
      const qty = parseInt(qtyInput ? qtyInput.value : '1', 10) || 1;
      const msg = document.getElementById('toast-message');
      if (msg && product) {
        msg.textContent = `¡Se agregaron ${qty} unidad(es) de "${product.name}" al carrito!`;
      }
      toast.classList.remove('d-none');
      toast.classList.add('d-flex');

      setTimeout(() => {
        toast.classList.add('d-none');
        toast.classList.remove('d-flex');
      }, 4000);
    });
  }

  if (closeToastBtn && toast) {
    closeToastBtn.addEventListener('click', () => {
      toast.classList.add('d-none');
      toast.classList.remove('d-flex');
    });
  }
}
