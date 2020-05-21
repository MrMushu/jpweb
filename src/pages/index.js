import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Home from "./home";

import Features from "./features";
import About from "./about";

const IndexPage = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/features" component={Features} />
        <Route path="/about-us" component={About} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default IndexPage;
