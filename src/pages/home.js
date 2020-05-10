import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import "../../src/pageStyles/home.css";
import tablet from "../images/tablet.png";
import clover from "../images/clover-logo.png";
import screen from "../icons/screen.png";
import utensils from "../icons/utensils.png";
import clock from "../icons/clock.png";
import check from "../icons/check.png";

const Home = () => (
  <div>
    <div className="Hero">
      <div className="HeroHeader">
        <div className="HeroGroup">
          <h1> Kitchen Display </h1>
          <p>Display ticket orders straight to your screen or android tablet</p>
          <a to="/page-2/"> Watch the video </a>
          <div style={{ paddingTop: 30, paddingLeft: 10 }}>
            <img src={clover} style={{ height: 25, width: 115 }}></img>
          </div>
        </div>
        <div className="Tablet">
          <img src={tablet}></img>
        </div>
      </div>
      <div className="WhiteWave">
        <svg
          width="0%"
          height="0"
          viewBox="0 0 100% 230"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="white">
            <animate
              fill="freeze"
              attributeName="d"
              dur="30s"
              values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;

              M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;
          
              M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
           
              M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;"
            />
          </path>
        </svg>
      </div>

      <div className="Waves">
        <svg
          width="100%"
          height="720"
          viewBox="40 0 1460 720"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2367.51 124.186L2367.53 124.193L2367.56 124.196L2749.11 163.15L2749.11 1059.08L-1754.39 1059.08L-1754.39 467.087C-1729.33 460.71 -1687.25 455.914 -1632.46 452.411C-1577.41 448.891 -1509.55 446.679 -1433.29 445.472C-1280.76 443.058 -1094.64 444.667 -910.146 447.886C-697.541 451.595 -487.075 457.441 -332.666 461.731C-219.099 464.885 -135.855 467.198 -104.388 467.198C-67.2925 467.198 -10.8216 472.472 57.6255 479.069C61.1572 479.41 64.7208 479.754 68.3151 480.101C134.369 486.476 210.824 493.855 291.327 498.861C461.083 509.415 648.907 509.422 795.251 467.179C868.103 446.149 930.012 402.437 994.072 350.375C1010.68 336.877 1027.43 322.817 1044.56 308.444C1093.51 267.368 1145.51 223.731 1205.92 183.301C1368.97 74.1853 1593.28 -11.5374 1983.76 40.1915C1983.77 40.1924 1983.78 40.1932 1983.78 40.1942L2367.51 124.186Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="Description">
        <h1>Skip the printer.</h1>
        <p>All the practical insights at the touch of your fingertips.</p>
        <div className="DescriptionGroup">
          <div className="DescriptionSection">
            <img src={clock}></img>
            <h4>Reliable</h4>
            <p>Our app automatically displays orders on your kitchen tablet.</p>
          </div>
          <div className="DescriptionSection">
            <img src={screen}></img>
            <h4>Seamless</h4>
            <p>Integrates wirelessly with existing tablet or android device.</p>
          </div>
          <div className="DescriptionSection">
            <img src={utensils}></img>
            <h4>Easy</h4>
            <p>It's that easy!</p>
          </div>
        </div>
        <p>Learn More</p>
      </div>

      <div className="How">
        <h1>How it works.</h1>
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

      <div className="Customize">
        <h1>Features</h1>
        <p>Personalize everything from colors, to font-sizes</p>
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
      </div>

      <div className="Description">
        <h1>Stay Informed</h1>
        <p>Get detailed analytics updates about your store's performance. </p>
      </div>
      <div className="Description">
        <h1>Get Connected</h1>
        <p>Watch a video demo ## play ding when order</p>
      </div>
    </div>
  </div>
);

export default Home;
