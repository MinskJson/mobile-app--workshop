import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Home } from "./home/Home";
import { Details } from "./details/Details";
import { Form } from "./form/Form";
import { Effects } from "./effects/Effects";
import { Recursion } from "./recursion/Recursion";
import { Timer } from "./timer/Timer";

//@ts-ignore
const FormAtnd = lazy(() => import(/* webpackChunkName: "form-antd" */ "./form-antd/FormAntd"));
const FormAntdSuspence = () => {
  return <Suspense fallback={<div>Loading...</div>}>
    <FormAtnd />
  </Suspense>
}

const MoreAtnd = lazy(() => import(/* webpackChunkName: "more-antd" */ "./more-antd/MoreAntd"));
const MoreAntdSuspence = () => {
  return <Suspense fallback={<div>Loading...</div>}>
    <MoreAtnd />
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
        <Route path={`${match.path}/more-antd`} exact component={MoreAntdSuspence} />
        <Route path={`${match.path}/effects`} exact component={Effects} />
        <Route path={`${match.path}/recursion`} exact component={Recursion} />
        <Route path={`${match.path}/timer`} exact component={Timer} />

        <Route path={`${match.path}/details/:userId`} component={Details} />
        <Redirect path="/" to={`${match.path}/home`} />
      </Switch>
  );
}

export {
  PrivateRouter
};
