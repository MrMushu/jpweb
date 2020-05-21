import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import React from "react";
import "./Footer.css";
import facebook from "../../icons/facebook.png";
import instagram from "../../icons/instagram.png";

class Footer extends React.Component {
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

  render() {
    return (
      <div className="FooterContainer">
        <div className="About">
          <h3>Company</h3>
          <Link
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
            to="/about-us"
          >
            About Us
          </Link>
          <Link to="/values">Our Values</Link>
        </div>

        <div>
          <h3>Follow Us</h3>
          <div className="Social">
            <div className="Icon">
              <img src={facebook} />
            </div>
            <div className="Icon">
              <img src={instagram} />
            </div>
          </div>
        </div>

        <div className="Contact">
          <h3>Contact Us</h3>
          <h5>info@juanpollo.com</h5>
          <h5>(909) 885-6324</h5>
        </div>

        <div className="Disclaimer">
          <h6>2020 Juan Pollo</h6>
          <Link to="/terms">Terms of Use</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/accessibility">Accessibility</Link>
        </div>
      </div>
    );
  }
}
export default Footer;
