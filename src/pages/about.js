import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../pageStyles/about.css";
import spit from "../images/spit_cutout.png";
import house from "../images/chicken_house.jpg";
import cook from "../images/cook.png";
import chicken from "../icons/chicken.png";
import meal from "../images/meal.png";

const About = () => (
  <div className="PageContainer">
    <div className="AboutHeader">
      <h2>
        Welcome to Juan Pollo.
        <br />
        Where food brings families together.
      </h2>

      <img src={spit}></img>
    </div>
    <div className="RotisserieContainer">
      <div className="RotisserieText">
        <h2>The Rotisserie Tradition</h2>
        <p>
          Good food brings family together. That’s why we spent 35 years
          perfecting the art of rotisserie chicken - so your family can gather
          around perfectly slow-cooked chicken and freshly prepared sides for a
          simple, hearty meal with timeless flavor. Whether you’re sitting at
          the dinner table or planning your family’s next big fiesta, we serve
          all of your life’s big and small moments with the best tasting
          chicken.
        </p>
        <Link>READ MORE ></Link>
      </div>
      <div className="RotisseriePhoto">
        <img src={house}></img>
      </div>
    </div>
    <div className="BeginningsPhotos">
      <img src={cook} />
    </div>
    <div className="OurBeginnings">
      <img src={chicken} />
      <h2>
        Our Beginnings <br />- 1984 -
      </h2>

      <p>
        In 1984, Albert Okura opened the first Juan Pollo with a mission to
        create the best tasting chicken. Now, over 35 years later, we bring
        families together with perfectly slow-cooked chicken and freshly
        prepared sides.
      </p>
      <Link>MORE HISTORY ></Link>
    </div>
    <div className="FeedingFamilies">
      <div className="FeedingFamiliesText">
        <h2>Feeding Families</h2>
        <p>
          In 1984, Albert Okura opened the first Juan Pollo with a mission to
          create the best tasting chicken. Now, over 35 years later, we bring
          families together with perfectly slow-cooked chicken and freshly
          prepared sides.
        </p>
        <Link>READ MORE ></Link>
      </div>

      <img src={meal} />
    </div>
  </div>
);

export default About;
