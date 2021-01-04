import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Covid from "./pages/Covid";
import routes from "./routes";

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path={routes.COVID} component={Covid} />
          <Redirect to={routes.COVID} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
