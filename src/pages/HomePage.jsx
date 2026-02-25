import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../services/api";

function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        api.get("/movies")
            .then((res) => {
                setMovies(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <>
            <h1>Lista Film</h1>

            {movies.length === 0 ? (
                <p>Caricamento...</p>
            ) : (
                <ul>
                    {movies.map((movie) => (
                        <li key={movie.id}>
                            {movie.title}{" "}
                            <Link to={`/movies/${movie.id}`}>
                                Vai al dettaglio
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default HomePage;