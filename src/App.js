import React from "react";
import Navbar from './Component/Navbar';
import Slide from './Component/Slide';
import Actualite from "./Component/Actualite";
import Dossier from "./Component/Apropos";
import Footer from "./Component/Footer";
import Publication  from "./Component/Publication";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Service from "./Component/Service";
import Apropos from "./Component/Apropos";

function App() {
  return (
    <div>
      <Slide />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Actualite/>
          </Route>
          <Route path="/apropos">
            <Apropos/>
          </Route>
          <Route path="/publications">
            <Publication />
          </Route>
          <Route path="/services">
            <Service />
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
