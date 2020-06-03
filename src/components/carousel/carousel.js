import React from "react";
import "../carousel/Carousel.css";
import grab from "../../images/Header.jpg";
import hero from '../../images/hero.jpg';
import catering from '../../images/catering_award.jpg'
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
        <img src={hero}></img>
        <div className='Under'>
          <div className="Circle"/>
          <div className="Circle"/>
          <div className="Circle"/>
          <div className="Circle"/>
        </div>
      </div>
    );
  }
}
export default Carousel;
