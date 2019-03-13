import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Home } from "./home/Home";
import { Details } from "./details/Details";
import { Form } from "./form/Form";

//@ts-ignore
const FormAtnd = lazy(() => import("./form-antd/FormAntd"));
const FormAntdSuspence = () => {
  return <Suspense fallback={<div>Loading...</div>}>
    <FormAtnd />
  </Suspense>
}


type PrivateRouterProps = {
  match: {
    path: string,
  }
}

const PrivateRouter = ({match}: PrivateRouterProps) => {
  return (
      <Switch>
        <Route path={`${match.path}/home`} exact component={Home} />
        <Route path={`${match.path}/form-antd`} exact component={FormAntdSuspence} />
        <Route path={`${match.path}/form`} exact component={Form} />

        <Route path={`${match.path}/details/:userId`} component={Details} />
        <Redirect path="/" to={`${match.path}/home`} />
      </Switch>
  );
}

export {
  PrivateRouter
};
