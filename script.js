document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const movieCards = document.querySelectorAll('.movie-card');
    const seriesCards = document.querySelectorAll('.series-card');
    const boxOfficeCards = document.querySelectorAll('.box-office-card');

    searchBar.addEventListener('input', function() {
        const searchTerm = searchBar.value.toLowerCase();

        // Filtre les films
        movieCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            card.style.display = title.includes(searchTerm) ? 'block' : 'none';
        });

        // Filtre les séries
        seriesCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            card.style.display = title.includes(searchTerm) ? 'block' : 'none';
        });

        // Filtre les films du box office
        boxOfficeCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            card.style.display = title.includes(searchTerm) ? 'block' : 'none';
        });
    });
});
