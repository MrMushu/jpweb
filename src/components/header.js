import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import "./Header.css";
import Logo from "../images/aspect.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasScrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }
  };

  render() {
    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
      >
        <div className="HeaderGroup">
          <div>
            <Link to="/">
              <img src={Logo}></img>
            </Link>
          </div>
          <Link to="/features">Features</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/help">Help</Link>
          <Link to="/try">
            <button>Try Free!</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Header;
