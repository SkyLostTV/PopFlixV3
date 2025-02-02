document.addEventListener('DOMContentLoaded', () => {
    // Données des films
    const films = [
        {
            id: 1,
            title: 'Valana 2',
            description: 'Un film d\'aventure épique où Valana affronte de terribles créatures pour sauver son royaume.',
            videoUrl: 'https://doodstream.com/e/xxxxx1',
            image: 'valana2.jpg'
        },
        {
            id: 2,
            title: 'Babygirl',
            description: 'Une comédie romantique émouvante qui suit l\'histoire d\'une jeune femme et de son amour interdit.',
            videoUrl: 'https://doodstream.com/e/xxxxx2',
            image: 'babygirl.jpg'
        },
        {
            id: 3,
            title: 'Avatar 2',
            description: 'Les habitants de Pandora affrontent de nouveaux défis dans cet époustouflant film de science-fiction.',
            videoUrl: 'https://doodstream.com/e/xxxxx3',
            image: 'avatar2.jpg'
        }
        // Ajoute d'autres films ici...
    ];

    // Sélectionner l'élément pour afficher les films
    const movieListElement = document.getElementById('movie-list');

    // Fonction pour afficher les films
    function displayMovies() {
        films.forEach(film => {
            const filmCard = document.createElement('div');
            filmCard.classList.add('movie-card');
            filmCard.setAttribute('data-id', film.id);

            filmCard.innerHTML = `
                <img src="${film.image}" alt="${film.title}">
                <h3>${film.title}</h3>
            `;

            // Ajouter un événement pour chaque film
            filmCard.addEventListener('click', () => {
                showFilmDetails(film);
            });

            // Ajouter la carte du film à la liste
            movieListElement.appendChild(filmCard);
        });
    }

    // Fonction pour afficher les détails du film
    function showFilmDetails(film) {
        const movieDetailsSection = document.getElementById('movie-details');
        const videoFrame = document.getElementById('video');
        const movieTitle = document.getElementById('movie-title');
        const movieDescription = document.getElementById('movie-description');

        movieTitle.textContent = film.title;
        movieDescription.textContent = film.description;
        videoFrame.src = film.videoUrl;

        movieDetailsSection.style.display = 'block';
        document.querySelector('.movies').style.display = 'none';
    }

    // Revenir à la section des films
    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', () => {
        document.getElementById('movie-details').style.display = 'none';
        document.querySelector('.movies').style.display = 'block';
        document.getElementById('video').src = ''; // Arrêter la vidéo lorsque l'on retourne à la liste des films
    });

    // Appeler la fonction pour afficher les films au chargement de la page
    displayMovies();
});
