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
      <GuestRoute path="/login" >
        <AppLogin />
      </GuestRoute>
      <GuestRoute path="/register" >
        <AppRegister />
      </GuestRoute>
      <Route  path="/galleries/:id">
        <AppSingleGallery />
      </Route>
      <AuthRoute path="/create" exact>
        <AddGallery />
      </AuthRoute>
      <Route exact path='/' >
        <Redirect to='/galleries'></Redirect>
      </Route>
      <Route exact path='/galleries'>
        <AppGalleries />
      </Route>
    </Switch>
  );
}
