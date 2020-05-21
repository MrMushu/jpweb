import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../pageStyles/catering.css";

import plate from "../images/plate.jpg";
import staff from "../images/125.jpg";
import cateringHero from "../images/catering_hero.jpg";

class Catering extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      package: 1,
    };
  }

  togglePackage = (i) => {
    this.setState({ package: i });
  };

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
        <div className="CateringPackages">
          <div className="PackageHeader">
            <button>STANDARD</button>
            <button>INDIVIDUALLY BOXED</button>
            <button>CUSTOMIZE</button>
          </div>
          <div className="Package">
            <div className="PackageDescription">
              <h4>Starting $12 / Person</h4>
              <p>
                Our standard package comes with all the flavors you know and
                love from Juan Pollo!
              </p>
              <p>
                Chicken - Rice - Beans <br />
                Potato Salad - Green Salad
                <br />
                Salsa - Tortillas
              </p>
            </div>
            <img src={cateringHero}></img>
          </div>
        </div>
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
        <div className="RequestForm">
          <h2>REQUEST FORM</h2>
          <p>
            Fill in the form below to the best of your ability and we will reach
            out to you about moving forward! You can also give us a call
            directly to our corporate office at (999) 999-9999
          </p>
          <div className="RequestRow">
            <input type="text" name="email" value="Name / Organization *" />
            <input type="text" name="email" value="Phone Number *" />
          </div>
          <div className="RequestRow">
            <input type="text" name="email" value="Email *" />
            <input type="text" name="email" value="Catering Date *" />
          </div>
          <div className="RequestRow">
            <input type="text" name="email" value="Event Location *" />
            <input type="text" name="email" value="Event Type" />
          </div>
          <div className="RequestRow">
            <input type="text" name="email" value="Approximate # of Guests" />
            <input
              type="text"
              name="email"
              value="Estimated Budget per Person"
            />
          </div>
          <input
            type="text"
            name="email"
            value="Additional Comments / Questions ..."
          />

          <Link>SUBMIT</Link>
          <h6>
            By clicking "Submit", I accept and agree to your Terms of Use and
            acknowledge that I have received and reviewed your Privacy Policy.
            <br />
            Note: Fields with an asterisk (*) are required.
          </h6>
        </div>
        <div className="CateringFAQ">
          <h2>CATERING FAQ</h2>
        </div>
      </div>
    );
  }
}

export default Catering;
