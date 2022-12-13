import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { authService } from "../services/AuthService";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
    const [newUser, setNewUser] = useState({ first_name: '', last_name: '', email: '', password: '', password_confirmation: '' });
    console.log(newUser)
    const history = useHistory();

    const handleOnRegister = async (e) => {
        e.preventDefault();
        if (newUser.password !== newUser.password_confirmation) {
            alert('password not matching')
        }
        const response = await authService.register(newUser);
        if (response) {
            alert('Registration successful.');
            history.push("/galleries");
        }
    };

    return (
        <RegisterForm
            handleOnRegister={handleOnRegister}
            newUser={newUser}
            setNewUser={setNewUser}
        />
    )

}