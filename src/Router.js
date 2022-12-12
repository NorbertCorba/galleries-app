import { Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import AppLogin from "./pages/AppLogin";
import AppRegister from "./pages/AppRegister";
import useAuth from "./hooks/useAuth"
import AppGalleries from "./pages/AppGalleries";
import AppSingleGallery from "./pages/AppSingleGallery";
import AddGallery from "./pages/AddGallery";

const AuthRoute = ({ children, ...rest }) => {
  const { user } = useAuth();

  return <Route {...rest}>{user ? children : <Redirect to="/" />}</Route>;
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
      <AuthRoute path="/galleries/:id">
        <AppSingleGallery />
      </AuthRoute>
      <AuthRoute path="/create">
        <AddGallery />
      </AuthRoute>
      <Route path='/' exact>
        <Redirect to='/galleries'></Redirect>
      </Route>
      <Route path='/galleries' exact>
        <AppGalleries />
      </Route>
    </Switch>
  );
}
