import { Link } from "react-router-dom";

function HomePage() {
    return (
        <>
            <h1>Lista Film</h1>

            <div className="row">
                <div className="col-4">
                    <div className="card p-3">
                        <h5>Film 1</h5>
                        <Link to="/movies/1" className="btn btn-primary">
                            Dettaglio
                        </Link>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card p-3">
                        <h5>Film 2</h5>
                        <Link to="/movies/2" className="btn btn-primary">
                            Dettaglio
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;