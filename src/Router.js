import { Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import AppLogin from "./pages/AppLogin";
import AppRegister from "./pages/AppRegister";
import useAuth from "./hooks/useAuth"
import AppGalleries from "./pages/AppGalleries";

const AuthRoute = ({ children, ...rest }) => {
  const { user } = useAuth();

  return <Route {...rest}>{user ? children : <Redirect to="/login" />}</Route>;
};

const GuestRoute = ({ children, ...rest }) => {
  const { user } = useAuth();

  return <Route {...rest}>{user ? <Redirect to="/" /> : children}</Route>;
};

export default function Router() {
  return (
    <Switch>
      <GuestRoute exact path="/login">
        <AppLogin />
      </GuestRoute>
      <GuestRoute path="/register">
        <AppRegister />
      </GuestRoute>
      <AuthRoute exact path="/">
        <AppGalleries />
      </AuthRoute>
    </Switch>
  );
}
