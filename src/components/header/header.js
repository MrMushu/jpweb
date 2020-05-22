import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import "./Header.css";
import Logo from "../../images/red_jp_logo.png";
import Menu from "../../icons/menu.png";
import Close from "../../icons/close.png";

import Features from "../../pages/features";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasScrolled: false,
      menu: false,
      width: window.innerWidth,
    };
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }
  };

  toggleMenu = () => {
    var toggle = !this.state.menu;
    this.setState({ menu: toggle });
  };

  render() {
    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
      >
        {this.state.width > 650 ? (
          <div className="HeaderGroup">
            <div>
              <Link to="/">
                <img src={Logo}></img>
              </Link>
            </div>

            <Link to="/features">{this.state.width}</Link>
            <Link to="/catering">Catering</Link>
            <Link to="/help">E-Club</Link>
            <Link to="/help">Contact</Link>
            <Link to="/locations">
              <button>Locations</button>
            </Link>
          </div>
        ) : (
          <div className={this.state.menu ? "Dropdown" : "Header"}>
            <div className="HeaderGroup">
              <div>
                <Link to="/">
                  <img src={Logo}></img>
                </Link>
              </div>
              <p>{this.state.width}</p>
              <div className="Menu">
                <button onClick={this.toggleMenu}>
                  {this.state.menu ? (
                    <img src={Close}></img>
                  ) : (
                    <img src={Menu}></img>
                  )}
                </button>
              </div>
            </div>
            {this.state.menu ? (
              <div className="DropdownMenu">
                <Link to="/" onClick={this.toggleMenu}>
                  HOME
                </Link>
                <Link to="/menu" onClick={this.toggleMenu}>
                  MENU
                </Link>
                <Link to="/catering" onClick={this.toggleMenu}>
                  CATERING
                </Link>
                <Link to="/eclub" onClick={this.toggleMenu}>
                  E-CLUB
                </Link>
                <Link to="/contact" onClick={this.toggleMenu}>
                  CONTACT
                </Link>
                <Link to="/locations" onClick={this.toggleMenu}>
                  LOCATIONS
                </Link>
              </div>
            ) : null}
          </div>
        )}
      </div>
    );
  }
}
export default Header;
