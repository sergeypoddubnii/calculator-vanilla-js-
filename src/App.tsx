import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Covid from "./pages/Covid";
import Weather from "./pages/Weather";
import routes from "./routes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path={routes.COVID} component={Covid} />
          <Route path={routes.WEATHER} component={Weather} />
          <Redirect to={routes.COVID} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
