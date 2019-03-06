import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Auth } from "./auth/Auth";

type PublicRouterProps = {
  match: {
    path: string,
  }
}

const PublicRouter = ({match}: PublicRouterProps) => {
  return (
    <Switch>
      <Route path={`${match.path}/auth`} component={Auth} />
      <Redirect path="/" to={`${match.path}/auth`} />
    </Switch>
  );
}

export {
  PublicRouter
};
