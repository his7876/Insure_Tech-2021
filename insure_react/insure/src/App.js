import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListPage from "./pages/ListPage";
import AxiosTest from "./pages/AxiosTest";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/test" exact>
          <ListPage></ListPage>
        </Route>
        <Route path="/header" exact>
          <Header title = "hello router"></Header>
        </Route>
        <Route path="/axios" exact>
         <AxiosTest></AxiosTest>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;