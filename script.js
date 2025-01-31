console.log("Statut Admin :", localStorage.getItem("isAdmin"));

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
const ADMIN_PASSWORD = "1234"; // Change ici si besoin

function loginAdmin() {
    let password = document.getElementById("adminPassword").value;

    if (password === ADMIN_PASSWORD) {
        alert("Connexion réussie !");
        localStorage.setItem("isAdmin", "true");
        checkAdminStatus(); // Met à jour l'interface immédiatement
    } else {
        alert("Mot de passe incorrect !");
    }
}

function checkAdminStatus() {
    let isAdmin = localStorage.getItem("isAdmin") === "true";

    console.log("Admin connecté ?", isAdmin); // Vérification dans la console

    if (isAdmin) {
        document.getElementById("add-film").style.display = "block";
        document.getElementById("admin-login").style.display = "none";
    } else {
        document.getElementById("add-film").style.display = "none";
        document.getElementById("admin-login").style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", checkAdminStatus);

});

function addFilm() {
    if (localStorage.getItem("isAdmin") !== "true") {
        alert("Accès refusé : Vous devez être connecté en admin !");
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
    addFilmToList(film);

    let films = JSON.parse(localStorage.getItem("films")) || [];
    films.push(film);
    localStorage.setItem("films", JSON.stringify(films));

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
