import React from "react";

export default function LoginForm({ handleOnLogin, newUser, setNewUser }) {
    return (
        <div>
            <form onSubmit={handleOnLogin}>
                <label>Email:</label>
                <input
                    required
                    type="email"
                    value={newUser.email}
                    onChange={({ target }) => setNewUser({ ...newUser, email: target.value })}
                />
                <br />
                <label>Password:</label>
                <input
                    required
                    type="password"
                    value={newUser.password}
                    onChange={({ target }) =>
                        setNewUser({ ...newUser, password: target.value })
                    }
                />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}