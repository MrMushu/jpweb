import React from "react";
import "../carousel/Carousel.css";
import grab from "../../images/Header.jpg";

class Carousel extends React.Component {
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
      <div className="Container">
        <img src={grab}></img>
      </div>
    );
  }
}
export default Carousel;
