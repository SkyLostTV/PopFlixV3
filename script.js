document.addEventListener('DOMContentLoaded', () => {
    // Données des films
    const films = {
        1: {
            title: 'Valana 2',
            description: 'Un film d\'aventure épique où Valana affronte de terribles créatures pour sauver son royaume.',
            videoUrl: 'https://doodstream.com/e/xxxxx1'
        },
        2: {
            title: 'Babygirl',
            description: 'Une comédie romantique émouvante qui suit l\'histoire d\'une jeune femme et de son amour interdit.',
            videoUrl: 'https://doodstream.com/e/xxxxx2'
        },
        3: {
            title: 'Avatar 2',
            description: 'Les habitants de Pandora affrontent de nouveaux défis dans cet époustouflant film de science-fiction.',
            videoUrl: 'https://doodstream.com/e/xxxxx3'
        }
        // Ajoute d'autres films ici...
    };

    // Sélectionner tous les films et leur ajouter un événement de clic
    const movieCards = document.querySelectorAll('.movie-card');
    const movieDetailsSection = document.getElementById('movie-details');
    const backButton = document.getElementById('back-button');
    const videoFrame = document.getElementById('video');
    const movieTitle = document.getElementById('movie-title');
    const movieDescription = document.getElementById('movie-description');

    movieCards.forEach(card => {
        card.addEventListener('click', () => {
            const movieId = card.getAttribute('data-id');
            const movie = films[movieId];

            // Mettre à jour les informations du film sélectionné
            movieTitle.textContent = movie.title;
            movieDescription.textContent = movie.description;
            videoFrame.src = movie.videoUrl;

            // Afficher la section de détails du film
            movieDetailsSection.style.display = 'block';

            // Cacher la section des films
            document.querySelector('.movies').style.display = 'none';
        });
    });

    // Revenir à la section des films
    backButton.addEventListener('click', () => {
        movieDetailsSection.style.display = 'none';
        document.querySelector('.movies').style.display = 'block';
        videoFrame.src = ''; // Arrêter la vidéo lorsque l'on retourne à la liste des films
    });
});
