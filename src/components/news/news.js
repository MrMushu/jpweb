
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
    window.addEventListener('resize', this.updateDimensions);
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);

  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }
  }

  render() {
    return (
      <div
        className="Container"
      > 
       <div className="ContainerLeft">
         <h3>Meal Donations</h3>
       </div>
       <div className="ContainerRight">
     
       </div>
       
      </div>
    );
  }
}
export default News;
