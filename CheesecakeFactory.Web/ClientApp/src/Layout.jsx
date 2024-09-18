import { Link } from "react-router-dom";

function Layout({ children }) {
    return <>
        <header>
            <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-dark bg-dark border-bottom box-shadow mb-3">
                <div className="container-fluid">
                    <a className="navbar-brand">Cheesecake Ordering</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                        <ul className="navbar-nav flex-grow-1">
                            <li className="nav-item">
                                <Link to='/' className="nav-link text-light">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/orders' className="nav-link text-light">Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/vieworders' className="nav-link text-light">View Orders</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <div className="container">
            <main role="main" className="pb-3">
                {children}
            </main>
        </div>
    </>
}

export default Layout;