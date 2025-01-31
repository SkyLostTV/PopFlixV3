import React, { useState } from "react";

const films = [
  { id: 1, title: "Film 1", description: "Description du Film 1", videoUrl: "https://doodstream.com/e/XXXXXX" },
  { id: 2, title: "Film 2", description: "Description du Film 2", videoUrl: "https://doodstream.com/e/YYYYYY" },
  { id: 3, title: "Film 3", description: "Description du Film 3", videoUrl: "https://doodstream.com/e/ZZZZZZ" },
];

function App() {
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFilms = films.filter(film =>
    film.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>PopFlix 🎬</h1>
      <input
        type="text"
        placeholder="Rechercher un film..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "5px", marginBottom: "10px", width: "100%" }}
      />
      <div style={{ display: "flex" }}>
        <ul style={{ listStyle: "none", padding: 0, width: "200px" }}>
          {filteredFilms.map((film) => (
            <li
              key={film.id}
              style={{ cursor: "pointer", padding: "10px", borderBottom: "1px solid #ccc" }}
              onClick={() => setSelectedFilm(film)}
            >
              {film.title}
            </li>
          ))}
        </ul>
        <div style={{ marginLeft: "20px", flex: 1 }}>
          {selectedFilm ? (
            <div>
              <h2>{selectedFilm.title}</h2>
              <p>{selectedFilm.description}</p>
              <iframe
                src={selectedFilm.videoUrl}
                width="600"
                height="350"
                allowFullScreen
                title={selectedFilm.title}
              ></iframe>
            </div>
          ) : (
            <p>📌 Sélectionne un film pour voir les détails</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
