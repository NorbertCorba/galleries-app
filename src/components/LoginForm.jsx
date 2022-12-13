import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LoginForm({ handleOnLogin, newUser, setNewUser }) {
    return (
        <div>
            <form onSubmit={handleOnLogin}>
                <div className="form-group">
                    <label>Email address:</label>
                    <input
                        required
                        value={newUser.email}
                        onChange={({ target }) => setNewUser({ ...newUser, email: target.value })}
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        required
                        type="password"
                        value={newUser.password}
                        onChange={({ target }) => setNewUser({ ...newUser, password: target.value })
                        } className="form-control"
                        placeholder="Enter password"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}
