document.addEventListener('DOMContentLoaded', () => {
    // Données des films
    const films = [
        {
            id: 1,
            title: 'Star Wars : Episode V -L'Empire contre-attaque',
            description: 'Malgré la destruction de l’Étoile Noire, l'Empire maintient son emprise sur la galaxie, et poursuit sans relâche sa lutte contre l'Alliance rebelle. Basés sur la planète glacée de Hoth, les rebelles essuient un assaut des troupes impériales. Parvenus à s'échapper, la princesse Leia, Han Solo, Chewbacca et C-3P0 se dirigent vers Bespin, la cité des nuages gouvernée par Lando Calrissian, ancien compagnon de Han. Suivant les instructions d'Obi-Wan Kenobi, Luke Skywalker se rend quant à lui vers le système de Dagobah, planète marécageuse où il doit recevoir l'enseignement du dernier maître Jedi, Yoda. Apprenant l'arrestation de ses compagnons par les stormtroopers de Dark Vador après la trahison de Lando, Luke décide d'interrompre son entraînement pour porter secours à ses amis et affronter le sombre seigneur Sith...
            videoUrl: 'https://maxfinishseveral.com/e/qvfyiu3rse6y',
            image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/qDvctAykmNWAmi9G2GrVrwWx3pr.jpg'
        },
        {
            id: 2,
            title: 'Star Wars : Episode VI - Le Retour du Jedi',
            description: 'L'Empire galactique est plus puissant que jamais : la construction de la nouvelle arme, l’Étoile de la Mort, menace l'univers tout entier... Arrêté après la trahison de Lando Calrissian, Han Solo est remis à l'ignoble contrebandier Jabba Le Hutt par le chasseur de primes Boba Fett. Après l'échec d'une première tentative d'évasion menée par la princesse Leia, également arrêtée par Jabba, Luke Skywalker et Lando parviennent à libérer leurs amis. Han, Leia, Chewbacca, C-3PO et Luke, devenu un Jedi, s'envolent dès lors pour une mission d'extrême importance sur la lune forestière d'Endor, afin de détruire le générateur du bouclier de l’Étoile de la Mort et permettre une attaque des pilotes de l'Alliance rebelle. Conscient d'être un danger pour ses compagnons, Luke préfère se rendre aux mains de Dark Vador, son père et ancien Jedi passé du côté obscur de la Force.',
            videoUrl: 'https://maxfinishseveral.com/e/nlizha2jjj8h',
            image: 'https://m.media-amazon.com/images/I/71rqhrHjkxL._AC_UF1000,1000_QL80_.jpg'
        },
        {
            id: 3,
            title: 'Star Wars : Episode I - La Menace fantôme',
            description: 'Il y a bien longtemps, dans une galaxie très lointaine... La République connaît de nombreux tourments : la corruption fait vaciller ses bases, le Sénat s'embourbe dans des discussions politiques sans fin et de nombreux pouvoirs dissidents commencent à émerger, annonçant la chute d'un système autrefois paisible. Puissante et intouchable, la Fédération du Commerce impose par la force la taxation des routes commerciales. Refusant de céder, la pacifique planète Naboo, dirigée par la jeune Reine Amidala, subit un blocus militaire de la Fédération. Dépêchés par le Sénat pour régler cette affaire, les chevaliers Jedi Qui-Gon Jinn et Obi-Wan Kenobi découvrent qu'une véritable offensive de la Fédération est imminente. Libérant la Reine et ses proches, ils quittent la planète mais doivent se poser sur Tatooine pour réparer leur vaisseau...',
            videoUrl: 'https://fsvid.lol/embed-ujqiz7uzhf27.html',
            image: ''
        },
            {
            id: 4,
            title: '',
            description: '',
            videoUrl: '',
            image: ''
        }
    
        
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
