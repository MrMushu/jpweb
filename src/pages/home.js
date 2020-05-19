import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../../src/pageStyles/home.css";

import Carousel from "../components/carousel/carousel";
import Footer from "../components/footer/footer";

import tablet from "../images/tablet.png";
import clover from "../images/clover-logo.png";
import screen from "../icons/screen.png";
import utensils from "../icons/utensils.png";
import clock from "../icons/clock.png";
import check from "../icons/check.png";
import tacos from "../images/tacos.png";
import burrito from "../images/burrito.png";
import white from "../images/quarter_white.png";
import mini from "../images/mini.jpg";
import brush from "../images/brush.png";
import doctors from "../images/doctors.jpg";
import accent from "../images/accent.png";

import News from "../components/news/news";

const Home = () => (
  <div>
    <div className="Hero">
      <div className="HeroHeader">
        <Carousel />
      </div>

      <div className="OurFood">
        <div className="OurFoodHeader">
          <img
            style={{ transform: [{ rotateX: "180deg" }] }}
            src={accent}
          ></img>
          <h1>OUR FOOD</h1>
          <img src={accent}></img>
        </div>

        <div className="OurFoodCategories">
          <div className="DescriptionSection">
            <img src={burrito}></img>
            <h2>ENTREES</h2>
          </div>
          <div className="DescriptionSection">
            <img src={tacos}></img>
            <h2>MEALS</h2>
          </div>
          <div className="DescriptionSection">
            <img src={white}></img>
            <h2>SIDES</h2>
          </div>
        </div>

        <Link to="/menu">VIEW MENU</Link>
      </div>
      <div className="Eclub">
        <h1>JOIN THE ROAST</h1>
        <div className="EclubForm">
          <input type="text" name="email" value="email *" />
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
          <input type="text" name="email" value="Zip Code *" />
          <Link to="/locations">FIND STORE</Link>
        </div>
      </div>
      <Footer />
    </div>
  </div>
);

export default Home;
