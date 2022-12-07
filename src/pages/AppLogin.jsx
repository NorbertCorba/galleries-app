import React from "react";
import { useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import LoginForm from "../components/LoginForm";

export default function AppLogin(){

    const [newUser, setNewUser] = useState({ email: '', password: '' });
    const { login } = useAuth();

    const history = useHistory();
    const handleSubmitForm = async (e) => {
        e.preventDefault();
        await login(newUser);
        alert('You are logged in successful');
        history.push('/');
      };

    return <LoginForm
        handleOnLogin={handleSubmitForm}
        newUser={newUser}
        setNewUser={setNewUser} />;
}