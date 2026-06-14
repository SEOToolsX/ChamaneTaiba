// Search Functionality
const searchInput = document.querySelector('.search-box input');
const naatCards = document.querySelectorAll('.naat-card');

if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        
        naatCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const preview = card.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || preview.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Save to Favorites (Local Storage)
function toggleFavorite(naatId) {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    if (favorites.includes(naatId)) {
        favorites = favorites.filter(id => id !== naatId);
    } else {
        favorites.push(naatId);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoriteUI(naatId);
}

// Load favorites on favorites page
function loadFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const favoritesContainer = document.querySelector('.favorites-list');
    
    if (favoritesContainer) {
        // Show only favorited naats logic here
    }
}