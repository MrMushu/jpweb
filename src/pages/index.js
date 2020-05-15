import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../components/header/header";
import Footer from '../components/footer/footer';
import Home from "./home";

import Features from "./features";

const IndexPage = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/features" component={Features} />
        <Route path="/" component={Home} />
    
      </Switch>
     
    </div>
   
  </Router>
  
);

export default IndexPage;
