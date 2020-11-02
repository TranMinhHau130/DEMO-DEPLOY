import "./App.css";
import Home from "./pages/Home";
import SignIn from "./pages/Login";
import MovieDetail from "./pages/Movie_Detail";
import Header from "./components/Header";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Fragment } from "react";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/sign-in" exact>
            <SignIn />
          </Route>
          <Route path="/movie-detail/:movieCode" exact>
            <MovieDetail />
          </Route>
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
