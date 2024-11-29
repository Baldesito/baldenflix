import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import SingoloFilm from "./SingoloFilm"; // Assicurati di importare il componente con il nome corretto

// funzione per visualizzare i film
function GoditiFilm3() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=10ea4b14&s=Stranger-Things`
        );
        const data = await response.json();
        const limiteFilm = data.Search.slice(0, 6);
        setMovies(limiteFilm); // `Search` contiene l'elenco dei film
      } catch (error) {
        console.error("Errore nel recupero dei dati dei film:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
      {movies.map((movie) => (
        <SingoloFilm
          key={movie.imdbID}
          title={movie.Title}
          img={movie.Poster}
        />
      ))}
    </Row>
  );
}

export default GoditiFilm3;
