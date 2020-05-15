import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import "./Header.css";
import Logo from "../../images/red_jp_logo.png";
import Menu from "../../icons/menu.png"

import Features from "../../pages/features";



class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasScrolled: false,
    };
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);

  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }
  }

  render() {
    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
      > {this.state.width >640 ? (
        <div className="HeaderGroup">
          <div>
            <Link to="/">
              <img src={Logo}></img>
            </Link>
          </div>
         
  
          <Link to="/features">{this.state.width}</Link>
          <Link to="/pricing">Catering</Link>
          <Link to="/help">E-Club</Link>
          <Link to="/help">Contact</Link>
          <Link to="/try">
          
            <button>Locations</button>
          </Link>
        </div>):(
          <div className="HeaderGroup">
            <div>
              <Link to="/">
                 <img src={Logo}></img>
              </Link>
             
          </div>
         
          <div className="Menu">
            <img src={Menu}></img></div>
       
        </div>
        )}
      </div>
    );
  }
}
export default Header;
