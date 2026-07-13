// ===== Товары (данные) =====
const products = [
    { title: "Цемент М500 (50 кг)", price: 450, img: "https://images.unsplash.com/photo-1581094288338-23c3a11783d1?w=400" },
    { title: "Кирпич красный", price: 18, img: "https://images.unsplash.com/photo-1590725140246-27d0a28b7d5f?w=400" },
    { title: "Арматура А500С (12мм)", price: 55, img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400" },
    { title: "Доска обрезная 50x150", price: 850, img: "https://images.unsplash.com/photo-1520637736862-4d197d17c55a?w=400" },
    { title: "Гипсокартон 12.5мм", price: 380, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400" },
    { title: "Утеплитель 100мм", price: 1200, img: "https://images.unsplash.com/photo-1609839836610-2b5f1b1b6fbf?w=400" },
    { title: "Профлист С8", price: 420, img: "https://images.unsplash.com/photo-1565636192335-b1d78c0a4e7b?w=400" },
    { title: "Песок строительный (1т)", price: 900, img: "https://images.unsplash.com/photo-1581094288338-23c3c11783d1?w=400" },
    { title: "Щебень фракция 20-40", price: 1400, img: "https://images.unsplash.com/photo-1590725140246-27d0a28b7d5f?w=400" },
    { title: "Сухая смесь М-150", price: 180, img: "https://images.unsplash.com/photo-1581094288338-23c3c11783d1?w=400" }
];

// ===== Рендер карточек товаров =====
const grid = document.getElementById('productsGrid');
if (grid) {
    grid.innerHTML = products.map((p, i) => `
        <div class="product-card">
            <img src="${p.img}" alt="${p.title}" class="product-card__img" onerror="this.src='https://via.placeholder.com/400x200?text=Товар'">
            <div class="product-card__body">
                <h3 class="product-card__title">${p.title}</h3>
                <div class="product-card__price">${p.price.toLocaleString('ru-RU')} ₽</div>
                <button class="btn btn--primary" data-product="${p.title}">Оставить заявку</button>
            </div>
        </div>
    `).join('');
}

// ===== Модальное окно =====
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const modalProduct = document.getElementById('modalProduct');

// Открытие по кнопке "Получить консультацию"
document.querySelectorAll('[data-modal="consult"]').forEach(btn => {
    btn.addEventListener('click', () => {
        modal.classList.add('active');
        if (modalProduct) modalProduct.textContent = '';
    });
});

// Открытие по кнопке "Оставить заявку" на товаре
document.querySelectorAll('[data-product]').forEach(btn => {
    btn.addEventListener('click', () => {
        modal.classList.add('active');
        if (modalProduct) modalProduct.textContent = 'Товар: ' + btn.dataset.product;
    });
});

// Закрытие
modalClose?.addEventListener('click', () => modal.classList.remove('active'));
modal?.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') modal?.classList.remove('active');
});

// ===== Отправка форм =====
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(form));
        console.log('Заявка:', data);
        alert(`Спасибо, ${data.name}! Мы свяжемся с вами по номеру ${data.phone}`);
        form.reset();
        modal?.classList.remove('active');
        // Здесь можно отправить данные на сервер через fetch()
    });
});

// ===== Маска телефона =====
document.querySelectorAll('input[type="tel"]').forEach(input => {
    input.addEventListener('input', (e) => {
        let v = e.target.value.replace(/\D/g, '');
        if (v.startsWith('8')) v = '7' + v.slice(1);
        if (!v.startsWith('7')) v = '7' + v;
        v = v.slice(0, 11);
        let formatted = '+7';
        if (v.length > 1) formatted += ' (' + v.slice(1, 4);
        if (v.length >= 5) formatted += ') ' + v.slice(4, 7);
        if (v.length >= 8) formatted += '-' + v.slice(7, 9);
        if (v.length >= 10) formatted += '-' + v.slice(9, 11);
        e.target.value = formatted;
    });
});