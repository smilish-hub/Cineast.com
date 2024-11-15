function filterFilms() {
    const category = document.getElementById('category').value;
    const films = document.querySelectorAll('.movie-card');

    films.forEach(film => {
        if (category === 'all' || film.classList.contains(category)) {
            film.style.display = 'block';
        } else {
            film.style.display = 'none';
        }
    });
}

function searchFilms() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const films = document.querySelectorAll('.movie-card');
    let hasResults = false;

    films.forEach(film => {
        const title = film.querySelector('h3').textContent.toLowerCase();
        if (title.startsWith(searchInput)) {
            film.style.display = 'block';
            hasResults = true;
        } else {
            film.style.display = 'none';
        }
    });

    // Afficher ou masquer le message d'absence de résultats
    const noResultMessage = document.getElementById('no-result-message');
    if (hasResults) {
        noResultMessage.style.display = 'none'; // Cache le message si des résultats sont trouvés
    } else {
        noResultMessage.style.display = 'block'; // Affiche le message si aucun résultat
    }
}



