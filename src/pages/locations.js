import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

import "../pageStyles/about.css";
import "../pageStyles/locations.css";

import emblem from "../icons/emblem.png";
import pin from "../icons/pin.png";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

class Locations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: true,
      activeMarker: {},
      selectedPlace: {
        hours: [],
      },
      location: {
        lat: 34.108787,
        lng: -117.312842,
      },
    };
  }
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  searchLocation = (code) => {
    var self = this;
    axios
      .get(
        "https://maps.googleapis.com/maps/api/geocode/json?address=91710&key=AIzaSyAha7YujaLA7Xm_xO_tUzXj9Lb-yCWhcIk"
      )
      .then((res) => {
        var data = res.data;
        console.log(data);
        var location = data.results[0].geometry.location;
        console.log(location);
        self.setState({ location: location });
      });
    console.log(this.findNearby(this.state.location, stores[0].position));
  };

  findNearby = (mk1, mk2) => {
    var R = 3958.8; // Radius of the Earth in miles
    var rlat1 = mk1.lat * (Math.PI / 180); // Convert degrees to radians
    var rlat2 = mk2.lat * (Math.PI / 180); // Convert degrees to radians
    var difflat = rlat2 - rlat1; // Radian difference (latitudes)
    var difflon = mk2.lng - mk1.lng * (Math.PI / 180); // Radian difference (longitudes)

    var d =
      2 *
      R *
      Math.asin(
        Math.sqrt(
          Math.sin(difflat / 2) * Math.sin(difflat / 2) +
            Math.cos(rlat1) *
              Math.cos(rlat2) *
              Math.sin(difflon / 2) *
              Math.sin(difflon / 2)
        )
      );
    return d;
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div style={{ height: "100%" }}>
        <div>
          <h2>Locations</h2>
          <p></p>
        </div>
        <div className="MapContainer">
          {this.state.showingInfoWindow ? (
            <div className="StoreList">
              <div className="Search">
                <input
                  type="text"
                  name="name"
                  placeholder="City, State or ZIP Code"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <Link onClick={this.searchLocation}>Search</Link>
              </div>
              <h4>{this.state.selectedPlace.address}</h4>
              <div>
                <h5>DIRECTIONS</h5>
                <h5>Phone</h5>
                <h5>Hours:</h5>
                {Object.keys(this.state.selectedPlace.hours).map(
                  (value, label) => (
                    <h5>
                      {value}: {this.state.selectedPlace.hours[value]}
                    </h5>
                  )
                )}
              </div>
            </div>
          ) : null}
          <div style={{ height: "500px", overflow: "hidden" }}>
            <Map
              google={this.props.google}
              zoom={13}
              style={mapStyles}
              initialCenter={this.state.location}
              center={this.state.location}
            >
              {stores.map((store, i) => (
                <Marker
                  key={i}
                  style={{ width: "50px", height: "50px" }}
                  title={"The marker`s title will appear as a tooltip."}
                  address={store.address}
                  phone={store.phone}
                  hours={store.hours}
                  position={store.position}
                  onClick={this.onMarkerClick}
                />
              ))}
              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
              >
                <div>
                  <h2>{this.state.selectedPlace.address}</h2>
                  <h2>Phone: {this.state.selectedPlace.phone}</h2>
                  <a>Directions</a>
                </div>
              </InfoWindow>
            </Map>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAha7YujaLA7Xm_xO_tUzXj9Lb-yCWhcIk",
})(Locations);

const mapStyles = {
  width: "60%",
  height: "500px",
};

const stores = [
  {
    name: "San Bernardino",
    address: "1258 W 5th St",
    city: "San Bernardino, CA 92411",
    phone: "(909) 885-5598",
    hours: {
      Monday: "9am-9pm",
      Tuesday: "9am-9pm",
      Wednesday: "9am-9pm",
      Thursday: "9am-9pm",
      Friday: "9am-9pm",
      Saturday: "9am-9pm",
      Sunday: "9am-9pm",
    },
    position: {
      lat: 34.108787,
      lng: -117.312842,
    },
  },
  {
    name: "Highland",
    address: "1014 E Highland Ave, San Bernardino, CA 92404",
    phone: "(909) 881-4191",
    hours: {
      Monday: "10am-9pm",
      Tuesday: "10am-9pm",
      Wednesday: "10am-9pm",
      Thursday: "10am-9pm",
      Friday: "10am-9pm",
      Saturday: "10am-9pm",
      Sunday: "10am-9pm",
    },
    position: {
      lat: 34.13612,
      lng: -117.26489,
    },
  },
  {
    name: "Colton",
    address: "1220 E. Washington St. Colton, CA 92324",
    phone: "(909) 433-0600",
    hours: {
      Monday: "9am-9pm",
      Tuesday: "9am-9pm",
      Wednesday: "9am-9pm",
      Thursday: "9am-9pm",
      Friday: "9am-9pm",
      Saturday: "9am-9pm",
      Sunday: "9am-9pm",
    },
    position: {
      lat: 34.045891,
      lng: -117.306279,
    },
  },
  {
    name: "Moreno Valley",
    address: "12615 Perris Blvd, Moreno Valley, CA 92553",
    phone: "(951) 601-0988",
    hours: {
      Monday: "10am-9pm",
      Tuesday: "10am-9pm",
      Wednesday: "10am-9pm",
      Thursday: "10am-9pm",
      Friday: "10am-9pm",
      Saturday: "10am-9pm",
      Sunday: "10am-9pm",
    },
    position: {
      lat: 33.9379,
      lng: -117.226891,
    },
  },
  {
    name: "Perris",
    address: "1675 N Perris Blvd A9, Perris, CA 92571",
    phone: "(951) 443-1717",
    hours: {
      Monday: "10am-9pm",
      Tuesday: "10am-9pm",
      Wednesday: "10am-9pm",
      Thursday: "10am-9pm",
      Friday: "10am-9pm",
      Saturday: "10am-9pm",
      Sunday: "10am-9pm",
    },
    position: {
      lat: 33.801964,
      lng: -117.224345,
    },
  },
  {
    name: "Beaumont",
    address: "550 Beaumont Ave, Beaumont, CA 92223",
    phone: "(951) 769-8570",
    hours: {
      Monday: "10am-8pm",
      Tuesday: "10am-8pm",
      Wednesday: "10am-8pm",
      Thursday: "10am-8pm",
      Friday: "10am-9pm",
      Saturday: "10am-9pm",
      Sunday: "10am-8pm",
    },
    position: {
      lat: 33.928456,
      lng: -116.976836,
    },
  },
  {
    name: "Riverside",
    address: "6055 Magnolia Ave, Riverside, CA 92506",
    phone: "(951) 683-3513",
    hours: {
      Monday: "9am-9pm",
      Tuesday: "9am-9pm",
      Wednesday: "9am-9pm",
      Thursday: "9am-9pm",
      Friday: "9am-9pm",
      Saturday: "9am-9pm",
      Sunday: "9am-9pm",
    },
    position: {
      lat: 33.960592,
      lng: -117.393214,
    },
  },
  {
    name: "Jurupa Valley",
    address: "8022 Limonite Ave #101, Jurupa Valley, CA 92509",
    phone: "(951) 685-8663",
    hours: {
      Monday: "10am-9pm",
      Tuesday: "10am-9pm",
      Wednesday: "10am-9pm",
      Thursday: "10am-9pm",
      Friday: "10am-9pm",
      Saturday: "10am-9pm",
      Sunday: "10am-9pm",
    },
    position: {
      lat: 33.976184,
      lng: -117.459386,
    },
  },
  {
    name: "Bloomington",
    address: "19059 Valley Blvd, Bloomington, CA 92316",
    phone: "(909) 562-0171",
    hours: {
      Monday: "10am-8pm",
      Tuesday: "10am-8pm",
      Wednesday: "10am-8pm",
      Thursday: "10am-8pm",
      Friday: "10am-8pm",
      Saturday: "10am-8pm",
      Sunday: "10am-8pm",
    },
    position: {
      lat: 33.976184,
      lng: -117.459386,
    },
  },
  {
    name: "Fontana",
    address: "9141 Citrus Ave, Fontana, CA 92335",
    phone: "(909) 427-8960",
    hours: {
      Monday: "10am-8pm",
      Tuesday: "10am-8pm",
      Wednesday: "10am-8pm",
      Thursday: "10am-8pm",
      Friday: "10am-8pm",
      Saturday: "10am-8pm",
      Sunday: "10am-8pm",
    },
    position: {
      lat: 34.087785,
      lng: -117.453202,
    },
  },
  {
    name: "Corona",
    address: "1277 W 6th St, Corona, CA 92882",
    phone: "(951) 738-8905",
    hours: {
      Monday: "10am-8pm",
      Tuesday: "10am-8pm",
      Wednesday: "10am-8pm",
      Thursday: "10am-8pm",
      Friday: "10am-8pm",
      Saturday: "10am-8pm",
      Sunday: "10am-8pm",
    },
    position: {
      lat: 33.8784,
      lng: -117.588562,
    },
  },
  {
    name: "Ontario",
    address: "3045 S Archibald Ave, Ontario, CA 91761",
    phone: "(909) 923-0366",
    hours: {
      Monday: "10am-9pm",
      Tuesday: "10am-9pm",
      Wednesday: "10am-9pm",
      Thursday: "10am-9pm",
      Friday: "10am-9pm",
      Saturday: "10am-9pm",
      Sunday: "10am-9pm",
    },
    position: {
      lat: 34.018032,
      lng: -117.591731,
    },
  },
  {
    name: "Upland",
    address: "156 W Foothill Blvd, Upland, CA 91786",
    phone: "(909) 931-9057",
    hours: {
      Monday: "9am-9pm",
      Tuesday: "9am-9pm",
      Wednesday: "9am-9pm",
      Thursday: "9am-9pm",
      Friday: "9am-9pm",
      Saturday: "9am-9pm",
      Sunday: "9am-9pm",
    },
    position: {
      lat: 34.10618,
      lng: -117.653713,
    },
  },
  {
    name: "Ontario",
    address: "615 S Euclid Ave, Ontario, CA 91762",
    phone: "(909) 988-1700",
    hours: {
      Monday: "9:30am-9pm",
      Tuesday: "9:30am-9pm",
      Wednesday: "9:30am-9pm",
      Thursday: "9:30am-9pm",
      Friday: "9:30am-9pm",
      Saturday: "9:30am-9pm",
      Sunday: "9:30am-9pm",
    },
    position: {
      lat: 34.057359,
      lng: -117.650487,
    },
  },
  {
    name: "Chino",
    address: "5460 Philadelphia St, Chino, CA 91710",
    phone: "(909) 627-7930",
    hours: {
      Monday: "10am-8pm",
      Tuesday: "10am-8pm",
      Wednesday: "10am-8pm",
      Thursday: "10am-8pm",
      Friday: "10am-8pm",
      Saturday: "10am-8pm",
      Sunday: "10am-8pm",
    },
    position: {
      lat: 34.034277,
      lng: -117.685931,
    },
  },
  {
    name: "Pomona",
    address: "2233 N Garey Ave, Pomona, CA 91767",
    phone: "(909) 392-9794",
    hours: {
      Monday: "10am-8pm",
      Tuesday: "10am-8pm",
      Wednesday: "10am-8pm",
      Thursday: "10am-8pm",
      Friday: "10am-8pm",
      Saturday: "10am-8pm",
      Sunday: "10am-8pm",
    },
    position: {
      lat: 34.089206,
      lng: -117.751164,
    },
  },
  {
    name: "Pomona",
    address: "300 S Garey Ave, Pomona, CA 91766",
    phone: "(909) 469-4779",
    hours: {
      Monday: "10am-8pm",
      Tuesday: "10am-8pm",
      Wednesday: "10am-8pm",
      Thursday: "10am-8pm",
      Friday: "10am-8pm",
      Saturday: "10am-8pm",
      Sunday: "10am-8pm",
    },
    position: {
      lat: 34.056789,
      lng: -117.749884,
    },
  },
  {
    name: "Covina",
    address: "849 W Covina Blvd, Covina, CA 91722",
    phone: "(626) 858-0669",
    hours: {
      Monday: "10am-8pm",
      Tuesday: "10am-8pm",
      Wednesday: "10am-8pm",
      Thursday: "10am-8pm",
      Friday: "10am-8pm",
      Saturday: "10am-8pm",
      Sunday: "10am-8pm",
    },
    position: {
      lat: 34.099743,
      lng: -117.906561,
    },
  },
];
