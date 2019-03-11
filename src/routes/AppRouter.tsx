import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { PrivateRouter } from "./private/PrivateRouter";
import { PublicRouter } from "./public/PublicRouter";

function PrivateRoute({ component: Component, ...rest }: {component: React.Component}) {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('user') ? (
          // @ts-ignore
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/public",
            }}
          />
        )
      }
    />
  );
}

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        //@ts-ignore
        <PrivateRoute path="/app" component={PrivateRouter} />
        <Route path="/public" component={PublicRouter} />
        <Redirect path="/" to="/app" /> 
      </Switch>
    </Router>
  );
}

export {
  AppRouter
};
