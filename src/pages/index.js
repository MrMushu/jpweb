import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Home from "./home";

import Features from "./features";
import About from "./about";
import Catering from "./catering";

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
        <div>
          <Header />
          <Switch>
            <Route path="/features" component={Features} />
            <Route path="/about-us" component={About} />
            <Route path="/catering" component={Catering} />
            <Route path="/" component={Home} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default IndexPage;
