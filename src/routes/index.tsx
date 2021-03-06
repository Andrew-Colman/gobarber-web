import React from "react";
import { Switch } from "react-router-dom";

import Dashboard from "pages/Dashboard";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import ForgotPassword from "pages/ForgotPassword";
import ResetPassword from "pages/ResetPassword";
import RequestPasswordResetSuccess from "pages/RequestPasswordResetSuccess";

import Route from "./CustomRoute";
import {
  SIGN_IN_PAGE_PATH,
  SIGN_UP_PAGE_PATH,
  DASHBOARD_PAGE_PATH,
  RESET_PASSWORD_PATH,
  FORGOT_PASSWORD_PATH,
  REQUEST_PASSWORD_REQUEST_SUCCESS,
} from "../constants/routesPaths";

const Router: React.FC = () => (
  <Switch>
    <Route
      path={DASHBOARD_PAGE_PATH}
      exact
      component={Dashboard}
      isPrivate
    />

    <Route
      path={SIGN_IN_PAGE_PATH}
      component={SignIn}
    />

    <Route
      path={SIGN_UP_PAGE_PATH}
      component={SignUp}
    />

    <Route
      path={FORGOT_PASSWORD_PATH}
      component={ForgotPassword}
    />

    <Route
      path={RESET_PASSWORD_PATH}
      component={ResetPassword}
    />

    <Route
      path={REQUEST_PASSWORD_REQUEST_SUCCESS}
      component={RequestPasswordResetSuccess}
    />
  </Switch>
);

export default Router;
