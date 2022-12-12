import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LoginForm({ handleOnLogin, newUser, setNewUser }) {
    return (
        <div>

            <form onSubmit={handleOnLogin}>
                <div class="form-group">
                    <label>Email address:</label>
                    <input 
                    required
                        value={newUser.email}
                        onChange={({ target }) => setNewUser({ ...newUser, email: target.value })}
                        type="email"
                        class="form-control"
                        placeholder="Enter email"
                    />
                </div>
                <div class="form-group">
                    <label>Password:</label>
                    <input 
                    required
                        type="password"
                        value={newUser.password}
                        onChange={({ target }) => setNewUser({ ...newUser, password: target.value })
                        } class="form-control"
                        placeholder="Enter password"
                        />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}
