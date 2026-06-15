// script.js
function renderHomepage() {
    const main = document.getElementById('homeMain');
    if (!main) return;
    let html = '';
    const categories = ['naat', 'hamd', 'manqabat', 'salam'];
    categories.forEach(cat => {
        const items = allNaats.filter(n => n.category === cat);
        if (items.length === 0) return;
        html += `
            <div class="category-section">
                <div class="category-header">
                    <h2>${categoryNames[cat]}</h2>
                    <a href="naats.html?cat=${cat}" class="view-all">سب دیکھیں →</a>
                </div>
                <div class="horizontal-scroll">
        `;
        items.slice(0, 3).forEach(item => {
            html += `
                <a href="lyrics.html?id=${item.id}" class="naat-card">
                    <h3>${item.title}</h3>
                    <p>${item.preview}</p>
                </a>
            `;
        });
        html += `</div></div>`;
    });
    main.innerHTML = html;
}

function renderNaatsPage() {
    const main = document.getElementById('naatsMain');
    if (!main) return;
    const urlParams = new URLSearchParams(window.location.search);
    const filterCat = urlParams.get('cat');
    let items = allNaats;
    if (filterCat && categoryNames[filterCat]) {
        items = allNaats.filter(n => n.category === filterCat);
    }
    // Group by category if no filter
    if (filterCat) {
        let html = `<div class="category-section"><div class="category-header"><h2>${categoryNames[filterCat]}</h2></div><div class="naat-list">`;
        items.forEach(item => {
            html += `<a href="lyrics.html?id=${item.id}" class="naat-card"><h3>${item.title}</h3><p>${item.preview}</p></a>`;
        });
        html += `</div></div>`;
        main.innerHTML = html;
    } else {
        // Show all categories
        let html = '';
        const cats = ['naat','hamd','manqabat','salam'];
        cats.forEach(cat => {
            const catItems = allNaats.filter(n => n.category === cat);
            if (catItems.length === 0) return;
            html += `<div class="category-section"><div class="category-header"><h2>${categoryNames[cat]}</h2></div><div class="naat-list">`;
            catItems.forEach(item => {
                html += `<a href="lyrics.html?id=${item.id}" class="naat-card"><h3>${item.title}</h3><p>${item.preview}</p></a>`;
            });
            html += `</div></div>`;
        });
        main.innerHTML = html;
    }
    attachSearch();
}

function attachSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    searchInput.addEventListener('input', function(e) {
        const term = e.target.value.trim().toLowerCase();
        const cards = document.querySelectorAll('.naat-card');
        cards.forEach(card => {
            const title = card.querySelector('h3')?.innerText.toLowerCase() || '';
            const preview = card.querySelector('p')?.innerText.toLowerCase() || '';
            card.style.display = (term === '' || title.includes(term) || preview.includes(term)) ? 'block' : 'none';
        });
    });
}

// Page load ke hisaab se function call karo
if (document.getElementById('homeMain')) {
    renderHomepage();
    attachSearch();
}
if (document.getElementById('naatsMain')) {
    renderNaatsPage();
}