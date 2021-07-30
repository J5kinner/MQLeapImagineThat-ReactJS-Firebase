/*!


*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import CareerWheel from  "views/examples/CareerWheel.js";
import FindAWord from "views/examples/FindAWord.js";
import FutureMeTree from "views/examples/FutureMeTree.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/career-wheel-page" exact render={props => <CareerWheel {...props} />} />
       <Route
        path="/career-wheel-page"
        exact
        render={props => <CareerWheel {...props} />}
      />
       <Route
        path="/FutureMeTree-page"
        exact
        render={props => <FutureMeTree {...props} />}
      />
       <Route
        path="/Findaword-page"
        exact
        render={props => <FindAWord {...props} />}
      />
      <Redirect to="/career-wheel-page" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
