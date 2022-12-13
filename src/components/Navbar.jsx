import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {

    const { logout } = useAuth();
    const handleLogout = async () => {
        await logout();

    };
    const { user } = useAuth();

    return (
        <div>
            <h2>GALLERIES APP</h2>
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark">

                <ul className="navbar-nav">
                    {user ? (
                        <>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">All Galleries</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/my-galleries">My Galleries</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/create">Create New Gallery</Link>
                            </li>
                            <div>
                                <h4 className="">Wellcome, {user && user.first_name + ' ' + user.last_name}</h4>
                            </div>
                            <button className="btn btn-primary" onClick={handleLogout}>Logout</button>

                        </>
                    ) : (
                        <>
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">All Galleries</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/login" className="nav-link">Login</Link>
                            </li>
                            <li className="nav-item active">

                                <Link to="/register" className="nav-link">Register</Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </div>
    );
}
