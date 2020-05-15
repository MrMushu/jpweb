import React from "react";

import "../../src/pageStyles/home.css";

import Carousel from "../components/carousel/carousel";
import Footer from '../components/footer/footer'

import tablet from "../images/tablet.png";
import clover from "../images/clover-logo.png";
import screen from "../icons/screen.png";
import utensils from "../icons/utensils.png";
import clock from "../icons/clock.png";
import check from "../icons/check.png";
import tacos from "../images/tacos.jpg";
import burrito from "../images/burrito.jpg";
import white from "../images/white.jpg";
import mini from "../images/mini.jpg";

import News from "../components/news/news"

const Home = () => (
  <div>
    <div className="Hero">
      <div className="HeroHeader">
        <Carousel />
      </div>

      <div className="OurFood">
        <h1>OUR FOOD</h1>
       
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
        <button  href="/menu">VIEW MENU</button>
      </div>
      <div className="Eclub">
        <h1>JOIN THE ROAST</h1>
        <div className="EclubForm">
          <input type="text" name="email" value="email *" />
          <button>Sign Up</button>
        </div>
      </div>

      <div className="WhatsHappening">
        <h1>WHAT'S HAPPENING</h1>
        <div className="WhatsHappeningNews">
          <News/>
        </div>
      </div>

      

   

      <div className="Location">
        <h1>FIND A LOCATION</h1>
        <div className="EclubForm">
        <input type="text" name="email" value="Zip Code *" />
        <button>FIND STORE</button>
        </div>
      </div>

      <div className="Description">
        <h1>CATERING</h1>
        <div className="DescriptionGroup">
          <div className="DescriptionSection"></div>
        </div>
      </div>

      <Footer/>
    </div>
  </div>
);

export default Home;
