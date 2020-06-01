import React from "react";

import "../pageStyles/menu.css";

import quarter_white from "../images/quarter_white.png";
import half_chicken from "../images/half_chicken.jpg";
import quarter_dark from "../images/quarter_dark.jpg";
import mini from "../images/mini.jpg";
import family from "../images/family.jpg";
import jumbo from "../images/jumbo.jpg";

import tacos from "../images/tacos.png";
import burrito from "../images/burrito.jpg";
import salad from "../images/salad.jpg";
import bowl from "../images/bowl.jpg";

import rice from "../images/rice.jpg";
import beans from "../images/beans.jpg";
import potato from "../images/potato.jpg";
import green from "../images/green.jpg";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: 0,
    };
  }

  setCategory = (category) => {
    this.setState({
      selectedCategory: category,
    });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    const queryString = require("query-string");
    var parsed = queryString.parse(this.props.location.search);
    if ("selected" in parsed) {
      this.setState({
        selectedCategory: Number(parsed.selected),
      });
    }
  }

  render() {
    return (
      <div className="Page">
        <div className="MenuHeader">
          <div className="Line" />
          <h2>Menu</h2>
          <div className="Line" />
        </div>
        <p>Select category below</p>
        <div className="MenuCategories">
          {lineItems.map((category, i) => (
            <div
              className={
                this.state.selectedCategory === i
                  ? "CategorySelected"
                  : "Category"
              }
            >
              <h2 onClick={() => this.setCategory(i)}>{category.name}</h2>
            </div>
          ))}
        </div>
        <div className="ItemsContainer">
          {lineItems[this.state.selectedCategory].items.map((item) => (
            <div className="Items">
              <div className="ItemImage">
                <img src={item.img} />
              </div>

              <div className="ItemDescription">
                <h3>{item.item}</h3>
                <p>
                  {item.line1}
                  <br /> {item.line2} <br /> {item.line3}
                </p>
              </div>
            </div>
          ))}
        </div>
        <h4>Sides</h4>
        <div className="Sides">
          <div className="Side">
            <img src={rice} />
            <h6>Rice</h6>
          </div>
          <div className="Side">
            <img src={beans} />
            <h6>Beans</h6>
          </div>
          <div className="Side">
            <img src={potato} />
            <h6>Potato</h6>
          </div>
          <div className="Side">
            <img src={green} />
            <h6>Green</h6>
          </div>
        </div>
        <div className="SalsaTortillas">
          <div className="Salsa">
            <h4>Salsa</h4>
            <div className="ST">
              <div>
                <h6>Hot</h6>
              </div>
              <div>
                <h6>Mild</h6>
              </div>
            </div>
          </div>
          <div className="Tortillas">
            <h4>Tortillas</h4>
            <div className="ST">
              <div>
                <h6>Flour</h6>
              </div>
              <div>
                <h6>Corn</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="Links">
          <h6>Nutrition Facts</h6>
          <h6>PDF Menu </h6>
        </div>
      </div>
    );
  }
}

export default Menu;

var lineItems = [
  {
    name: "Meals",
    items: [
      {
        item: "1/4 Dark Meal",
        price: "$6.15",
        line1: "Chicken Thigh & Leg",
        line2: "Choice of 2 Small Sides",
        line3: "Salsa & Tortillas",
        img: quarter_dark,
      },
      {
        item: "1/4 White Meal",
        line1: "Chicken Breast & Wing",
        line2: "Choice of 2 Small Sides",
        line3: "Salsa & Tortillas",
        img: quarter_white,
      },
      {
        item: "1/2 Chicken Meal",
        line1: "Chicken Breast, Wing, Thigh, & Leg",
        line2: "Choice of 2 Small Sides",
        line3: "Salsa & Tortillas",
        img: half_chicken,
      },
    ],
  },
  {
    name: "Meal Paks",
    items: [
      {
        item: "Mini Pak",
        line1: "1 Chicken",
        line2: "Choice of 3 Medium Sides",
        line3: "Salsa & Tortillas",
        img: mini,
      },
      {
        item: "Family Pak",
        line1: "2 Chickens",
        line2: "Choice of 3 Large Sides",
        line3: "Salsa & Tortillas",
        img: family,
      },
      {
        item: "Jumbo Pak",
        line1: "3 Chickens",
        line2: "Choice of 3 X-Large Sides",
        line3: "Salsa & Tortillas",
        img: jumbo,
      },
    ],
  },
  {
    name: "Entrees",
    items: [
      {
        item: "Two Tacos",
        line1: "Two Hard Shell Chicken Tacos",
        line2: "Lettuce, Cheese, Tomato",
        line3: "Salsa",
        img: tacos,
      },
      {
        item: "Big Burrito",
        line1: "Large Chicken Burrito",
        line2: "Rice, Beans, Lettuce, Cheese ",
        line3: "Salsa & Dressing",
        img: burrito,
      },
      {
        item: "Chicken Salad",
        line1: "Chicken Breast, ",
        line2: "Lettuce, Cheese, Tomato, Carrots ",
        line3: "Salsa & Dressing",
        img: salad,
      },
      {
        item: "Juan's Big Bowl",
        line1: "Shredded Chicken, Rice, Beans",
        line2: "Cheese, Green Onions",
        line3: "Salsa & Tortillas",
        img: bowl,
      },
    ],
  },

  { name: "Party Paks", items: [] },
];
var sides = {
  name: "Sides",
  items: [
    {
      item: "Rice",
      img: rice,
    },
    {
      item: "Beans",
      img: beans,
    },
    {
      item: "Potato Salad",
      img: potato,
    },
    {
      item: "Green Salad",
      img: green,
    },
  ],
};
