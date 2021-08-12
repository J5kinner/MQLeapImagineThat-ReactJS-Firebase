/*!


*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import CareerWheelPage from  "views/examples/CareerWheelPage.js";
import WordSearchPage from "views/examples/WordSearchPage.js";
import FutureMeTreePage from "views/examples/FutureMeTreePage.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/CareerWheelPage" exact render={props => <CareerWheelPage {...props} />} />
       <Route
        path="/CareerWheelPage"
        exact
        render={props => <CareerWheelPage {...props} />}
      />
       <Route
        path="/FutureMeTreePage"
        exact
        render={props => <FutureMeTreePage {...props} />}
      />
       <Route
        path="/WordSearchPage"
        exact
        render={props => <WordSearchPage {...props} />}
      />
      <Redirect to="/CareerWheelPage" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
