import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import "../../src/pageStyles/home.css";

import Carousel from "../components/carousel/carousel";

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

const Home = () => (
  <div>
    <div className="Hero">
      <div className="HeroHeader">
        <Carousel />
      </div>

      <div className="OurFood">
        <h1>OUR FOOD</h1>
        <p>
          Steeped in tradition. Filled with freshness. Our menu is the
          intersection of our Sinaloan roots and our SoCal hometown.
        </p>
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
        <button>VIEW MENU</button>
      </div>

      <div className="Description">
        <h1>JOIN THE ROAST</h1>
        <div className="DescriptionGroup">
          <div className="DescriptionSection"></div>
        </div>
      </div>

      <div className="Description">
        <h1>WHAT'S HAPPENING</h1>
        <div className="DescriptionGroup">
          <div className="DescriptionSection"></div>
        </div>
      </div>

      <div className="Description">
        <h1>FIND A LOCATION</h1>
        <div className="DescriptionGroup">
          <div className="DescriptionSection"></div>
        </div>
      </div>

      <div className="Description">
        <h1>CATERING</h1>
        <div className="DescriptionGroup">
          <div className="DescriptionSection"></div>
        </div>
      </div>

      <div className="How">
        <h1>WHATS HAPPENING</h1>
        <p>Designed for usability.</p>

        <div className="HowSection">
          <div className="HowDescription">
            <img src={tablet}></img>
          </div>
          <div className="HowDescription">
            <h4>Orders are automatically displayed</h4>
            <p>on your kitchen tablet when an order is placed.</p>
          </div>
        </div>
        <div className="HowSection">
          <div className="HowDescription">
            <h4 style={{ textAlign: "end" }}>Double-tap</h4>
            <p style={{ textAlign: "end" }}>
              the order when it's finished to remove the ticket.
            </p>
          </div>
          <div className="HowDescription">
            <img src={tablet}></img>
          </div>
        </div>

        <h4>It's that easy!</h4>
      </div>
      <div className="HeroHeader">
        <div className="HeroGroup">
          <h1> Kitchen Display </h1>
          <p>Display ticket orders straight to your screen or android tablet</p>
          <a to="/page-2/"> Watch the video </a>
          <div style={{ paddingTop: 30, paddingLeft: 10 }}>
            <img src={clover} style={{ height: 25, width: 115 }}></img>
          </div>
        </div>
      </div>
      <div className="Customize">
        <h1>Why aspect?</h1>
        <p>Personalize everything from colors, to font-sizes</p>
        <div className="CustomizeSection">
          <div>
            <img src={check}></img>
          </div>
          <div className="CustomizeGroup">
            <h4>Ease of Use</h4>
            <p>Customize everything from font-size to order-type colors</p>
          </div>
        </div>
        <div className="CustomizeSection">
          <div>
            <img src={check}></img>
          </div>
          <div className="CustomizeGroup">
            <h4>Beautiful Design</h4>
            <p>Customize everything from font-size to order-type colors</p>
          </div>
        </div>
        <div className="CustomizeSection">
          <div>
            <img src={check}></img>
          </div>
          <div className="CustomizeGroup">
            <h4>Fully Customizable</h4>
            <p>Customize everything from font-size to order-type colors</p>
          </div>
        </div>
        <div className="CustomizeSection">
          <div>
            <img src={check}></img>
          </div>

          <div className="CustomizeGroup">
            <h4>Analytics Dashboard</h4>
            <p>Get detailed analytics about your store's performance.</p>
          </div>
        </div>
        <div className="CustomizeSection">
          <div>
            <img src={check}></img>
          </div>

          <div className="CustomizeGroup">
            <h4>Setup Email Updates</h4>
            <p>Get automatic email updates about your store.</p>
          </div>
        </div>
        <div className="CustomizeSection">
          <div>
            <img src={check}></img>
          </div>

          <div className="CustomizeGroup">
            <h4>Integrate with Bump Bars</h4>
            <p>Get automatic email updates about your store.</p>
          </div>
        </div>
      </div>

      <div className="Description">
        <p>Watch a video demo ## play ding when order</p>
      </div>
    </div>
  </div>
);

export default Home;
