import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../pageStyles/contact.css";

import hero from '../images/contact_hero.jpg';


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="Page">
        <div className="ContactHero">
          <img src={hero}/>
        </div>
        <div className="Banner">
          <h2>How can we help?</h2>
          <h3>Please fill out the form below and we'll get to you in no time!</h3>
          <h4>Or call our Corporate Office anytime Monday-Friday, 9 AM to 5 PM, at  (909) 885-6324. </h4>
        </div>
        <div className="ContactForm">
          <div className="LineHeader">
            <div className="Line" />
            <h2>Contact Form</h2>
            <div className="Line" />
          </div>

          <p>
           
          </p>

          <div className="ContactRow">
            <input
              type="text"
              name="first"
              placeholder="First Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="last"
              placeholder="Last Name"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </div>
          <div className="ContactRow">
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
          <div className="ContactRow">
            <input
              type="text"
              name="date"
              placeholder="Vist Date"
              value={this.state.location}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="time"
              placeholder="Visit Time"
              value={this.state.type}
              onChange={this.handleChange}
            />
          </div>
          <div className="ContactRow">
            <input
              type="text"
              name="location"
              placeholder="Visit Location"
              value={this.state.guests}
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
           
          </h6>
        </div>
        <div className="Suggestion">
          <h3>MAKE A SUGGESTION</h3>
        </div>
      </div>
    );
  }
}

export default Contact;
