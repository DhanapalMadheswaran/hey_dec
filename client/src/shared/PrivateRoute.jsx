import React from "react";
import { Route, Redirect } from "react-router-dom";
import AuthService from "../services/AuthServices";
import Constants from "./constants";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { location, path, exact, computedMatch } = rest;
  const authService = new AuthService();

  const nonAuthenticatedPaths = [
    Constants.routes.admin.url,
    Constants.routes.logIn.url,
    Constants.routes.register.url,
    Constants.routes.home.url,
    Constants.routes.forgotPassword.url,
    Constants.routes.resetPassword.url,
    Constants.routes.signUp.url,
    Constants.routes.venuselection.url,
    Constants.routes.homePage.url,
    Constants.routes.listingPage.url,
    Constants.routes.cartPage.url,
    Constants.routes.cartDetailsPage.url,
    Constants.routes.checkout.url,
    Constants.routes.eventVendorprofile.url,
    Constants.routes.vendorOrders.url,
    Constants.routes.userOrders.url,
    Constants.routes.userProfile.url,
    Constants.routes.eventVendorAddSlots.url,
    Constants.routes.userLogin.url,
  ];
  const avaliablePaths = Object.values(Constants.routes).map((o) => o.url);
  //console.log(path);
  return (
    <Route
      location={location}
      exact={exact}
      path={path}
      computedMatch={computedMatch}
      render={(props) =>
        authService.isAuthenticated() === true ||
        nonAuthenticatedPaths.includes(path) ? (
          <Component
            history={props.history}
            location={props.location}
            match={props.match}
            staticContext={props.staticContext}
          />
        ) : avaliablePaths.includes(path) ? (
          <Redirect
            to={{
              pathname: Constants.routes.logIn.url,
            }}
          />
        ) : (
          <Redirect
            to={{
              pathname: Constants.routes.logIn.url,
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
