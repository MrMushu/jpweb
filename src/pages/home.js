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
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="Hero">
        <div className="HeroHeader">
          <Carousel />
        </div>
        
        <div className="OurFood">
          <div className="OurFoodHeader">
            <div className="Line" />
            <h1>OUR FOOD</h1>
            <div className="Line" />
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

            <div
              className="DescriptionSection"
              onClick={() => this.redirect("3")}
            >
              <img src={white}></img>
              <h2>PARTY PAKS</h2>
            </div>
          </div>

          <Link to="/menu">VIEW MENU</Link>
        </div>
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
        <Footer />
      </div>
    );
  }
}

export default Home;
