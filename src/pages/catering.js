import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../pageStyles/catering.css";

import plate from "../images/plate.jpg";
import staff from "../images/125.jpg";
import cateringHero from "../images/catering_hero.jpg";
import brush from "../images/grey-brush.png";

class Catering extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      package: 1,
    };
  }
  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };
  togglePackage = (i) => {
    this.setState({ package: i });
  };

  renderPackage = () => {
    if (this.state.package === 1) {
      return (
        <div className="Package">
          <div className="PackageDescription">
            <h4>Starting $12 / Person</h4>
            <p>
              Our standard package comes with all the flavors you know and love
              from Juan Pollo!
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
      );
    }
  };

  componentDidMount() {}
  render() {
    return (
      <div className="CateringContainer">
        <div className="CateringHero">
          <h2>FULL SERVICE CATERING</h2>
        </div>
        <div className="CateringHeader">
          <div className="LineHeader">
            <div className="Line" />
            <h2>LET US SERVE AT YOUR GATHERING</h2>
            <div className="Line" />
          </div>

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
          <div className="Order">
            <h2>FULL-SERVICE PACKAGES</h2>
            <p>Minimum 300 people</p>
          </div>
          <div className="Order">
            <Link>ORDER NOW</Link>
          </div>
          <div className="Brush">
            <img src={brush} />
          </div>
        </div>
        <div className="CateringPackages">
          <div className="PackageHeader">
            <div
              className={
                this.state.package === 1
                  ? "PackageCategory"
                  : "PackageCategoryOff"
              }
            >
              <button onClick={() => this.togglePackage(1)}>STANDARD</button>
            </div>
            <div
              className={
                this.state.package === 2
                  ? "PackageCategory"
                  : "PackageCategoryOff"
              }
            >
              <button onClick={() => this.togglePackage(2)}>
                INDIVIDUALLY BOXED
              </button>
            </div>
            <div
              className={
                this.state.package === 3
                  ? "PackageCategory"
                  : "PackageCategoryOff"
              }
            >
              <button onClick={() => this.togglePackage(3)}>CUSTOMIZE</button>
            </div>
          </div>

          {this.renderPackage()}
        </div>
        <div className="HowItWorks">
          <div className="LineHeader">
            <div className="Line" />
            <h2>HOW IT WORKS</h2>
            <div className="Line" />
          </div>

          <div className="HowSteps">
            <div className="How">
              <div className="HowNumber">
                <h5>1</h5>
              </div>
              <div className="StepHeader">
                <h4>WE LEARN YOUR PREFERENCES</h4>
              </div>
              <div className="StepDescription">
                <p>
                  Give us a call with details about your event. We'll work with
                  you to customize the perfect meal option for you guests.
                </p>
              </div>
            </div>
            <div className="How">
              <div className="HowNumber">
                <h5>2</h5>
              </div>
              <div className="StepHeader">
                <h4>WE COOK AND SERVE</h4>
              </div>
              <div className="StepDescription">
                <p>
                  Our team will deliver and serve your delicious meals. We'll
                  provide all necessary trays and utensils for everyone at your
                  gathering.
                </p>
              </div>
            </div>
            <div className="How">
              <div className="HowNumber">
                <h5>3</h5>
              </div>
              <div className="StepHeader">
                <h4>YOUR PARTY LEAVES HAPPY!</h4>
              </div>
              <div className="StepDescription">
                <p>Sit back and enjoy the party!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="RequestForm">
          <div className="LineHeader">
            <div className="Line" />
            <h2>REQUEST FORM</h2>
            <div className="Line" />
          </div>

          <p>
            Fill in the form below to the best of your ability and we will reach
            out to you about moving forward! You can also give us a call
            directly to our corporate office at (999) 999-9999
          </p>

          <div className="RequestRow">
            <input
              type="text"
              name="name"
              placeholder="Name / Organization *"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number *"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </div>
          <div className="RequestRow">
            <input
              type="text"
              name="email"
              placeholder="Email *"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="date"
              placeholder="Catering Date *"
              value={this.state.date}
              onChange={this.handleChange}
            />
          </div>
          <div className="RequestRow">
            <input
              type="text"
              name="location"
              placeholder="Event Location *"
              value={this.state.location}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="type"
              placeholder="Event Type"
              value={this.state.type}
              onChange={this.handleChange}
            />
          </div>
          <div className="RequestRow">
            <input
              type="text"
              name="guests"
              placeholder="Approximaate # of Guests"
              value={this.state.guests}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="budget"
              placeholder="Estimated Budget Per Person"
              value={this.state.budget}
              onChange={this.handleChange}
            />
          </div>
          <input
            type="text"
            name="comments"
            placeholder="Additional Comments / Questions..."
            value={this.state.comments}
            onChange={this.handleChange}
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
