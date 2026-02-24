import { useParams } from "react-router-dom";

function MovieShowPage() {
    const { id } = useParams();

    return (
        <>
            <h1>Dettaglio Film {id}</h1>
            <p>Qui andranno i dettagli del film e le recensioni.</p>
        </>
    );
}

export default MovieShowPage;