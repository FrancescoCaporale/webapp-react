import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/api";

function MovieShowPage() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        api.get(`/movies/${id}`)
            .then((res) => {
                setMovie(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [id]);


    return (
        <>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>

            <h3>Recensioni</h3>

            {movie.reviews && movie.reviews.length > 0 ? (
                <ul>
                    {movie.reviews.map((review) => (
                        <li key={review.id}>
                            <strong>{review.name}</strong> - voto: {review.vote}
                            <p>{review.text}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Nessuna recensione</p>
            )}
        </>
    );
}


export default MovieShowPage;