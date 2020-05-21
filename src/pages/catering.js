import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../pageStyles/catering.css";

import plate from "../images/plate.jpg";
import staff from "../images/125.jpg";
import cateringHero from "../images/catering_hero.jpg";

class Catering extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <div className="CateringContainer">
        <div className="CateringHero">
          <h2>FULL SERVICE CATERING</h2>
        </div>
        <div className="CateringHeader">
          <h2>LET US SERVE AT YOUR GATHERING</h2>
          <p>
            Order Full-Service Catering at Juan Pollo! We will deliver and serve
            your party goers the family-style meals we are famous for! Whether
            it's a corporate event, wedding, or birthday party, our team is
            committed to providing your guests with the perfect dining
            experence!
          </p>
          <Link>LEARN MORE</Link>
        </div>
        <div className="CateringPhotos">
          <img src={plate}></img>
          <img src={staff}></img>
        </div>
        <div className="CateringPackagesHeader">
          <div>
            <h2>FULL-SERVICE PACKAGES</h2>
            <p>Minimum 300 people</p>
          </div>
          <div>
            <Link>ORDER NOW</Link>
          </div>
        </div>
        <div className="CateringPackages"></div>
        <div className="HowItWorks">
          <h2>HOW IT WORKS</h2>
          <div className="HowSteps">
            <div className="How">
              <h5>1</h5>
              <h4>WE LEARN YOUR PREFERENCES</h4>
              <p>
                Give us a call with details about your event. We'll work with
                you to customize the perfect meal option for you guests.
              </p>
            </div>
            <div className="How">
              <h5>2</h5>
              <h4>WE COOK AND SERVE</h4>
              <p>
                Our team will deliver and serve your delicious meals. We'll
                provide all necessary trays and utensils for everyone at your
                gathering.
              </p>
            </div>
            <div className="How">
              <h5>3</h5>
              <h4>YOUR PARTY LEAVES HAPPY!</h4>
              <p>Sit back and enjoy the party!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Catering;
