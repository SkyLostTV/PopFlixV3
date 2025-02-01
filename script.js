document.addEventListener('DOMContentLoaded', function() {
    const filmList = document.querySelectorAll('#film-list a');
    const filmInfo = document.getElementById('film-info');
    const videoPlayer = document.getElementById('video');

    // Les informations sur les films (en pratique, tu peux les récupérer depuis une base de données)
    const films = {
        1: {
            title: 'Film 1',
            description: 'Description du Film 1',
            videoUrl: 'https://doodstream.com/e/xxxxx1'
        },
        2: {
            title: 'Film 2',
            description: 'Description du Film 2',
            videoUrl: 'https://doodstream.com/e/xxxxx2'
        },
        3: {
            title: 'Film 3',
            description: 'Description du Film 3',
            videoUrl: 'https://doodstream.com/e/xxxxx3'
        }
    };

    // Quand un film est sélectionné
    filmList.forEach(function(film) {
        film.addEventListener('click', function(event) {
            event.preventDefault(); // Empêche le rechargement de la page

            const filmId = film.getAttribute('data-id'); // Récupère l'ID du film
            const currentFilm = films[filmId]; // Récupère les informations du film

            // Affiche les détails du film
            filmInfo.innerHTML = `
                <h3>${currentFilm.title}</h3>
                <p>${currentFilm.description}</p>
            `;

            // Change l'URL du lecteur vidéo
            videoPlayer.src = currentFilm.videoUrl;
        });
    });
});
