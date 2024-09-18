import { Link } from "react-router-dom";

function Home() {
    return <>
        <div className="container" style={{ styleTop: '80px' }}>
            <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh', backgroundColor: 'rgb(238,238,238)' }}>
                <div className="text-center">
                    <h1 className="display-4">Welcome to the Cheesecake Factory!</h1>
                    <p className="lead">
                        <Link to='/orders'>
                            <button className="btn btn-dark btn-large">Click here to order your custom cheesecake</button>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </>

}

export default Home;
