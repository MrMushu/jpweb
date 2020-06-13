import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "../../src/pageStyles/home.css";

import Carousel from "../components/carousel/carousel";
import Footer from "../components/footer/footer";

import tacos from "../images/tacos.png";
import burrito from "../images/burrito.png";
import white from "../images/quarter_white.png";
import mini from "../images/mini.jpg";
import brush from "../images/brush.png";
import doctors from "../images/doctors.jpg";
import accent from "../images/accent.png";
import half_chicken from "../images/half_chicken.jpg";
import News from "../components/news/news";
import rice from "../images/rice.jpg";

import faces from "../images/lifestyle_faces.jpg";
import food from "../images/lifestyle_food.jpg";

import iphone from "../images/iphone.png";
import catering_closeup from "../images/catering_closeup.jpg";
class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      zip: "",
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

  redirect = (index) => {
    this.props.history.push(`/menu?selected=${index}`);
  };

  findLocation = () => {
    this.props.history.push({
      pathname: `/locations`,

      search: `?area=${this.state.zip}`,
    });
  };
  componentDidMount() {}

  render() {
    return (
      <div className="Hero">
        <div className="HeroHeader">
          <Carousel />
        </div>
        <div className="OurFood">
          <div className="OurFoodHeader">
            <h1>OUR FOOD</h1>
          </div>

          <div className="OurFoodCategories">
            <div
              className="DescriptionSection"
              onClick={() => this.redirect("0")}
            >
              <img src={white}></img>
              <h2>MEALS</h2>
            </div>
            <div
              className="DescriptionSection"
              onClick={() => this.redirect("1")}
            >
              <img src={mini}></img>
              <h2>FAMILY MEALS</h2>
            </div>
            <div
              className="DescriptionSection"
              onClick={() => this.redirect("2")}
            >
              <img src={tacos}></img>
              <h2>Entrees</h2>
            </div>
          </div>

          <Link to="/menu">VIEW MENU</Link>
        </div>

        <div className="Catering">
          <img src={catering_closeup} />
          <div className="CateringDescription">
            <h2>YOUR GO-TO FOR ALL THINGS CATERING</h2>
            <h3>
              WHETHER IT's YOUR BIRTHDAY PARTY, WORK EVENT, OR WEDDING, WE'VE
              GOT YOU COVERED!
            </h3>
            <Link to="/menu">VIEW CATERING</Link>
          </div>
        </div>

        <div className="Background">
          <p></p>
        </div>
        <div className="Stories">
          <div className="StoryBlock">
            <img src={faces} />
            <div className="StoryD">
              <h3>MEAL DONATIONS</h3>
              <h4>
                JUAN POLLO IS A PROUD SUPPORTER OF OUR FRONT-LINE MEDICAL
                WORKERS!
              </h4>
              <Link>OUR ACTIONS</Link>
            </div>
          </div>
          <div className="StoryBlock">
            <img src={food} />
            <div className="StoryD">
              <h3>FRESH MADE DAILY</h3>
              <h4>OUR FOOD IS PREPARED DAILY FROM SCRATCH.SideChoices</h4>
              <Link>OUR FOOD PROCESS</Link>
            </div>
          </div>
        </div>
        <div className="Location">
          <h1>FIND A LOCATION</h1>
          <div className="EclubForm">
            <input
              type="text"
              name="zip"
              value={this.state.zip}
              onChange={this.handleChange}
              placeholder="Zip Code *"
            />
            <Link onClick={this.findLocation}>FIND STORE</Link>
          </div>
        </div>

        <div className="Redeem">
          <div className="RedeemInfo">
            <h2>Text & Redeem</h2>
            <h2>For Your $17.49 Two CHicken Special!</h2>
            <h3>No Sign Ups. No Surveys. No Hassle</h3>
            <p>
              Standard text messages and data charges apply. Receive up to 4
              messages a month. To opt out, text "STOP" to 28748.
            </p>
          </div>

          <div className="Iphone">
            <img src={iphone} />
            <h3>
              Text POLLO <br />
              to 28748
            </h3>
          </div>
        </div>
        <div className="Triangle" />
        <div className="Eclub">
          <h1>JOIN THE ROAST</h1>
          <div className="EclubForm">
            <input
              type="text"
              name="email"
              value={this.state.email}
              placeholder="E-mail"
            />
            <Link to="/eclub">SIGN UP</Link>
            <img src={brush}></img>
          </div>
        </div>

        <div className="WhatsHappening">
          <h1>WHAT'S HAPPENING</h1>
          <div className="WhatsHappeningNews">
            <News pic={doctors} />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;
