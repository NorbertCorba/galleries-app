import React from "react";

export default function RegisterForm({
  handleOnRegister,
  newUser,
  setNewUser,
}) {

  return (
    <div>
      <form onSubmit={handleOnRegister}>
        <label>First Name:</label>
        <input
          required
          type="text"
          value={newUser.first_name}
          onChange={({ target }) => setNewUser({ ...newUser, first_name: target.value })}
        />
        <br />
        <label>Last Name:</label>
        <input
          required
          type="text"
          value={newUser.last_name}
          onChange={({ target }) => setNewUser({ ...newUser, last_name: target.value })}
        />
        <br />
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
        <label>Confirm Password:</label>
        <input
          required
          type="password"
          value={newUser.password_confirmation}
          onChange={({ target }) =>
            setNewUser({ ...newUser, password_confirmation: target.value })
          }
        />
        <br />
        <label>I accept terms and conditions</label>
        <input
          required
          type="checkbox"
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}