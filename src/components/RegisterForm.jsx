import React from "react";

export default function RegisterForm({
  handleOnRegister,
  newUser,
  setNewUser,
}) {

  return (
    <div>
      <form onSubmit={handleOnRegister}>
        <div class="form-group">
          <label>First Name:</label>
          <input
            class="form-control"
            required
            type="text"
            value={newUser.first_name}
            onChange={({ target }) => setNewUser({ ...newUser, first_name: target.value })}
          />
        </div>
        <br />
        <div class="form-group">
          <label>Last Name:</label>
          <input
            class="form-control"
            required
            type="text"
            value={newUser.last_name}
            onChange={({ target }) => setNewUser({ ...newUser, last_name: target.value })}
          />
        </div>
        <br />
        <div class="form-group">
          <label>Email:</label>
          <input
            class="form-control"
            required
            type="email"
            value={newUser.email}
            onChange={({ target }) => setNewUser({ ...newUser, email: target.value })}
          />
        </div>
        <br />
        <div class="form-group">
          <label>Password:</label>
          <input
            class="form-control"
            required
            type="password"
            value={newUser.password}
            onChange={({ target }) =>
              setNewUser({ ...newUser, password: target.value })
            }
          />
        </div>
        <br />
        <div class="form-group">
          <label>Confirm Password:</label>
          <input
            class="form-control"
            required
            type="password"
            value={newUser.password_confirmation}
            onChange={({ target }) =>
              setNewUser({ ...newUser, password_confirmation: target.value })
            }
          />
        </div>
        <br />
        <label>I accept terms and conditions</label>
        <input
          required
          type="checkbox"
        />
        <br />
        <hr/>
        <button type="submit" class="btn btn-primary">Register</button>
      </form>
    </div>
  );
}