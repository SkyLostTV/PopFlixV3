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
