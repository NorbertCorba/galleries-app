import React from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Navbar() {
    const history = useHistory();
    const { logout } = useAuth();
    const handleLogout = async () => {
        await logout();

    };

    const { user } = useAuth();

    return (
        <div>
            <h2>GALLERIES APP</h2>
            <ul>
                {user ? (
                    <>
                        <button onClick={handleLogout}>Logout</button>
                        <h1>Wellcome, {user && user.first_name + ' ' + user.last_name}</h1>

                        <li>
                            <Link to="/">All Galleries</Link>
                        </li>

                        <li>
                            <Link to="/my-galleries">My Galleries</Link>
                        </li>
                        <li>
                            <Link to="/create">Create New Gallery</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/">All Galleries</Link>
                        </li>

                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </ul>
        </div>
    );
}