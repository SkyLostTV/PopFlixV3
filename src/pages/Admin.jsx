import React, { useState } from "react";
import { Button, Input, Card, CardContent } from "@/components/ui";
import { useAuth } from "@/hooks/useAuth";

const moviesData = [
  { id: 1, title: "Inception", image: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg" },
  { id: 2, title: "Interstellar", image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" }
];

export default function Admin() {
  const { isAdmin } = useAuth();
  const [movies, setMovies] = useState(moviesData);
  const [newMovie, setNewMovie] = useState({ title: "", image: "" });

  const addMovie = () => {
    if (newMovie.title && newMovie.image) {
      setMovies([...movies, { id: movies.length + 1, ...newMovie }]);
      setNewMovie({ title: "", image: "" });
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Admin - Gestion des Films</h1>
      {isAdmin && (
        <div>
          <Input placeholder="Titre du film" value={newMovie.title} onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })} />
          <Input placeholder="URL de l'image" value={newMovie.image} onChange={(e) => setNewMovie({ ...newMovie, image: e.target.value })} />
          <Button onClick={addMovie}>Ajouter</Button>
        </div>
      )}
      <div className="grid grid-cols-2 gap-4 mt-4">
        {movies.map((movie) => (
          <Card key={movie.id}>
            <img src={movie.image} alt={movie.title} className="rounded-t-lg" />
            <CardContent>
              <h2 className="text-lg font-bold">{movie.title}</h2>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
