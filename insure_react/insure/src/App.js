import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListPage from "./pages/ListPage";
import AxiosTest from "./pages/AxiosTest";
import NewsPage from "./pages/NewsPage";
import ApiExample from "./pages/ApiExample";
import HospitalListPage from "./pages/HospitalListPage";
import HospitalDetail from "./pages/HospitalDetail";
import CipherTest from "./pages/CipherTest";
import Carinfo from "./pages/Carinfo";
import InsurePage from "./pages/InsurePage";
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
        <Route path="/news" exact>
         <NewsPage></NewsPage>
        </Route>
        <Route path="/api" exact>
         <ApiExample></ApiExample>
        </Route>
        <Route path="/hospital" exact>
         <HospitalListPage></HospitalListPage>
        </Route>
        <Route path="/hospitalDetail" exact>
         <HospitalDetail></HospitalDetail>
        </Route>
        <Route path="/key" exact>
         <CipherTest></CipherTest>
        </Route>
        <Route path="/car" exact>
         <Carinfo></Carinfo>
        </Route>
        <Route path="/insure" exact>
         <InsurePage></InsurePage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;