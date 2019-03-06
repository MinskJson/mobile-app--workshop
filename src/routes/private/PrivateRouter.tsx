import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Home } from "./home/Home";
import { Details } from "./details/Details";

type PrivateRouterProps = {
  match: {
    path: string,
  }
}

const PrivateRouter = ({match}: PrivateRouterProps) => {
  return (
      <Switch>
        <Route path={`${match.path}/home`} exact component={Home} />
        <Route path={`${match.path}/details/:userId`} component={Details} />
        <Redirect path="/" to={`${match.path}/home`} />
      </Switch>
  );
}

export {
  PrivateRouter
};
