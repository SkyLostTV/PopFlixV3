const films = [
    { title: "Film 1", description: "Description du Film 1", videoUrl: "https://doodstream.com/e/XXXXXX" },
    { title: "Film 2", description: "Description du Film 2", videoUrl: "https://doodstream.com/e/YYYYYY" },
    { title: "Film 3", description: "Description du Film 3", videoUrl: "https://doodstream.com/e/ZZZZZZ" },
];

const filmList = document.getElementById("film-list");
const filmTitle = document.getElementById("film-title");
const filmDescription = document.getElementById("film-description");
const filmVideo = document.getElementById("film-video");

// Générer la liste des films
films.forEach((film, index) => {
    const li = document.createElement("li");
    li.textContent = film.title;
    li.addEventListener("click", () => {
        filmTitle.textContent = film.title;
        filmDescription.textContent = film.description;
        filmVideo.src = film.videoUrl;
    });
    filmList.appendChild(li);
});
function searchFilm() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let films = document.querySelectorAll("#film-list li");

    films.forEach(film => {
        if (film.textContent.toLowerCase().includes(input)) {
            film.style.display = "block";
        } else {
            film.style.display = "none";
        }
    });
}
// Charger les films depuis le stockage local
document.addEventListener("DOMContentLoaded", () => {
    let savedFilms = JSON.parse(localStorage.getItem("films")) || [];
    savedFilms.forEach(addFilmToList);
});
const ADMIN_PASSWORD = "Z0nteS@KiKiVeVeoasis1504"; // Change le mot de passe ici

function loginAdmin() {
    let password = document.getElementById("adminPassword").value;
    if (password === ADMIN_PASSWORD) {
        alert("Connexion réussie !");
        document.getElementById("admin-login").style.display = "none";
        document.getElementById("add-film").style.display = "block";
        localStorage.setItem("isAdmin", "true");
    } else {
        alert("Mot de passe incorrect !");
    }
}
function checkAdminStatus() {
    let isAdmin = localStorage.getItem("isAdmin") === "true";
    document.getElementById("add-film").style.display = isAdmin ? "block" : "none";
    document.getElementById("admin-login").style.display = isAdmin ? "none" : "block";
}

// Vérifie si l'admin est connecté au chargement de la page
document.addEventListener("DOMContentLoaded", checkAdminStatus);
// Vérifier si l'admin est déjà connecté
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("isAdmin") === "false") {
        document.getElementById("admin-login").style.display = "none";
        document.getElementById("add-film").style.display = "block";
    }
});

function addFilm() {
    // Vérifie si l'admin est connecté
    if (localStorage.getItem("isAdmin") !== "true") {
        alert("Vous devez être connecté en admin pour ajouter un film !");
        return;
    }

    let title = document.getElementById("filmTitle").value;
    let description = document.getElementById("filmDescription").value;
    let videoUrl = document.getElementById("filmUrl").value;

    if (!title || !description || !videoUrl) {
        alert("Merci de remplir tous les champs !");
        return;
    }

    let film = { title, description, videoUrl };

    // Ajouter à la liste affichée
    addFilmToList(film);

    // Sauvegarder dans le stockage local
    let films = JSON.parse(localStorage.getItem("films")) || [];
    films.push(film);
    localStorage.setItem("films", JSON.stringify(films));

    // Réinitialiser les champs
    document.getElementById("filmTitle").value = "";
    document.getElementById("filmDescription").value = "";
    document.getElementById("filmUrl").value = "";
}


function addFilmToList(film) {
    let filmList = document.getElementById("film-list");
    let li = document.createElement("li");
    li.textContent = film.title;
    li.style.cursor = "pointer";

    li.addEventListener("click", () => {
        document.getElementById("film-title").textContent = film.title;
        document.getElementById("film-description").textContent = film.description;
        document.getElementById("film-video").src = film.videoUrl;
    });

    filmList.appendChild(li);
}
