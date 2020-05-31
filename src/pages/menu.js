import React from "react";

import "../pageStyles/menu.css";
import burrito from "../images/burrito.jpg";

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
  }
  render() {
    return (
      <div className="Page">
        <div>
          <h2>Menu</h2>
        </div>
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
              <img src={item.img} />
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
        line1: "Chicken Thigh & Leg",
        line2: "Choice of 2 Small Sides",
        line3: "Salsa & Tortillas",
        img: burrito,
      },
      {
        item: "1/4 White Meal",
        line1: "Chicken Breast & Wing",
        line2: "Choice of 2 Small Sides",
        line3: "Salsa & Tortillas",
        img: burrito,
      },
      {
        item: "1/2 Chicken Meal",
        line1: "Chicken Breast, Wing, Thigh, & Leg",
        line2: "Choice of 2 Small Sides",
        line3: "Salsa & Tortillas",
        img: burrito,
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
        img: burrito,
      },
      {
        item: "Family Pak",
        line1: "2 Chickens",
        line2: "Choice of 3 Large Sides",
        line3: "Salsa & Tortillas",
        img: burrito,
      },
      {
        item: "Jumbo Pak",
        line1: "3 Chickens",
        line2: "Choice of 3 X-Large Sides",
        line3: "Salsa & Tortillas",
        img: burrito,
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
        img: burrito,
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
        img: burrito,
      },
      {
        item: "Juan's Big Bowl",
        line1: "Shredded Chicken, Rice, Beans",
        line2: "Cheese, Green Onions",
        line3: "Salsa & Tortillas",
        img: burrito,
      },
    ],
  },
  { name: "Sides", items: [] },
  { name: "Party Paks", items: [] },
];
