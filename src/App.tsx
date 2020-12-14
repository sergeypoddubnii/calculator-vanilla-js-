import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import routes from "./routes";
import Calculator from "./pages/Calculator";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path={routes.CALCULATOR} component={Calculator} />
          <Redirect to={routes.CALCULATOR} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
