import React from "react";
import "../carousel/Carousel.css";
import grab from "../../images/Header.jpg";
import hot from "../../images/hot_sauce.jpg";

class Carousel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hasScrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }
  };

  render() {
    return (
      <div className="CarouselContainer">
        <img src={hot}></img>
      </div>
    );
  }
}
export default Carousel;
