let currentPage = 1;
const itemsPerPage = 4;
let currentSearchTerm = '';

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const catParam = params.get('cat');
  if (catParam) {
    currentSearchTerm = catParam;
    const input = document.getElementById('search-input');
    if (input) input.value = catParam;
  }

  renderProductsList();
  setupEvents();
});

function getFilteredProducts() {
  if (!currentSearchTerm || currentSearchTerm.trim() === '') {
    return PRODUCTS_DATA;
  }
  const term = currentSearchTerm.toLowerCase().trim();
  return PRODUCTS_DATA.filter(p => 
    p.name.toLowerCase().includes(term) ||
    p.category.toLowerCase().includes(term) ||
    p.shortDesc.toLowerCase().includes(term)
  );
}

function renderProductsList() {
  const container = document.getElementById('products-container');
  if (!container) return;

  const filtered = getFilteredProducts();
  const startIndex = (currentPage - 1) * itemsPerPage;
  const pageItems = filtered.slice(startIndex, startIndex + itemsPerPage);

  if (pageItems.length === 0) {
    container.innerHTML = `
      <div class="text-center py-5 my-3 bg-white rounded-4 border p-4 w-100" style="grid-column: 1 / -1;">
        <div style="font-size: 3rem;">🔍</div>
        <h4 class="fw-bold mt-3 text-dark">No se encontraron productos</h4>
        <p class="text-muted">Intenta con otro término de búsqueda.</p>
        <button type="button" id="reset-filter-btn" class="btn btn-royal-blue px-4 mt-2">
          Ver todos los productos
        </button>
      </div>
    `;

    const resetBtn = document.getElementById('reset-filter-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        currentSearchTerm = '';
        currentPage = 1;
        const input = document.getElementById('search-input');
        if (input) input.value = '';
        renderProductsList();
      });
    }
    return;
  }

  container.innerHTML = pageItems.map(product => {
    const imgSrc = product.imageRelative || `../${product.image}`;

    return `
      <div class="product-clean-card">
        <a href="detalle.html?id=${product.id}" class="card-img-top-box text-decoration-none">
          <img src="${imgSrc}" alt="${product.name}" loading="lazy" class="product-thumb-img">
        </a>
        <div class="product-card-body p-3">
          <h6 class="product-title-text fw-bold mb-1">
            <a href="detalle.html?id=${product.id}" class="text-dark text-decoration-none hover-blue">
              ${product.name}
            </a>
          </h6>
          <div class="product-price-val fw-bold text-dark mb-1">
            $${product.price.toFixed(2)}
          </div>
          <div class="product-stars-box">
            ${renderStarsHtml(product.rating)}
          </div>
        </div>
      </div>
    `;
  }).join('');

  updatePaginationButtons();
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
  return `<div class="d-inline-flex align-items-center gap-1">${stars}</div>`;
}

function updatePaginationButtons() {
  document.querySelectorAll('.pagination-btn-square').forEach(btn => {
    const pageNum = parseInt(btn.getAttribute('data-page'), 10);
    if (pageNum === currentPage) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function setupEvents() {
  const form = document.getElementById('search-form');
  const input = document.getElementById('search-input');
  const clearBtn = document.getElementById('clear-btn');
  const paginationBtns = document.querySelectorAll('.pagination-btn-square');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (input) {
        currentSearchTerm = input.value.trim();
        currentPage = 1;
        renderProductsList();
      }
    });
  }

  paginationBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetPage = parseInt(e.currentTarget.getAttribute('data-page'), 10);
      if (targetPage && targetPage !== currentPage) {
        currentPage = targetPage;
        renderProductsList();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });
}
