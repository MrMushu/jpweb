import React from "react";
import "./News.css";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasScrolled: false,
    };
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
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
      <div className="NewsContainer">
        <div className="ContainerLeft">
          <h3>MEAL DONATIONS</h3>
          <p>Juan Pollo is a proud supporter of our front line Workers!</p>
          <a>Read more here! ></a>
        </div>
        <div className="ContainerRight">
          <img src={this.props.pic} />
        </div>
      </div>
    );
  }
}
export default News;
