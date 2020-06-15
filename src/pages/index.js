import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Home from "./home";

import Features from "./features";
import Menu from "./menu";
import About from "./about";
import Catering from "./catering";
import Locations from "./locations";
import Contact from './contact'
import Terms from './terms'
import Privacy from './privacy'

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Router>
        <div style={{ height: "100%" }}>
          <Header />
          <Switch>
            <Route path="/menu" component={Menu} />
            <Route path="/about-us" component={About} />
            <Route path="/catering" component={Catering} />
            <Route path="/locations" component={Locations} />
            <Route path="/contact" component={Contact}/>
            <Route path="/terms" component={Terms}/>
            <Route path="/privacy" component={Privacy}/>
            <Route path="/" component={Home} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default IndexPage;
