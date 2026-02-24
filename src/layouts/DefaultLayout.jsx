import { Link, Outlet } from "react-router-dom";

function DefaultLayout() {
    return (
        <>
            <header className="bg-dark text-white p-3">
                <div className="container d-flex justify-content-between">
                    <h4>Movie App</h4>
                    <Link to="/" className="btn btn-light">
                        Home
                    </Link>
                </div>
            </header>

            <main className="container my-4">
                <Outlet />
            </main>
        </>
    );
}

export default DefaultLayout;