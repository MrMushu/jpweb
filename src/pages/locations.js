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
      showingInfoWindow:false,
      storeDetails: false,
      activeMarker: {},
      selectedPlace: [{
      }],
      location: {
        lat: 34.108787,
        lng: -117.312842,
      },
      showNearby: false
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });

    console.log('zip: ', this.state.zip)
  };

  onMarkerClick = (props, marker, e) =>
    {this.setState({
      selectedPlace: [props],
      activeMarker: marker,
      showingInfoWindow: true,
      storeDetails:true,
      showNearby: true
    });
   

}
  onNearbyClick = (props, store) =>{
    console.log('STORE: ',props)
    this.setState({
      selectedPlace:[],
      storeDetails: true,
      showNearby: true
    })

      this.setState({
        selectedPlace: [props],
        location: props.position
      })
    
  }


  searchLocation = (code) => {
    var self = this;
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.zip}&key=AIzaSyAha7YujaLA7Xm_xO_tUzXj9Lb-yCWhcIk`
      )
      .then((res) => {
        var data = res.data;
        console.log(data);

        if (data.status === "OK") {
          var location = data.results[0].geometry.location;
          self.setState({ location: location});
          this.findNearby(this.state.location)
        } else {
          alert("ZERO RESULTS FOUND")
        }
       
      })
     
   
  };

  findDistance = (mk1, mk2) => {
    var radlat1 = Math.PI * mk1.lat/180;
		var radlat2 = Math.PI * mk2.lat/180;
		var theta = mk1.lng - mk2.lng;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
    dist = dist * 1.609344 
    
  
    return dist
  }

  findNearby = (location) => { 
    var selectedPlaces = []
    for (var i=0; i<stores.length; i++){
      var distance = this.findDistance(location, stores[i].position)
      if ( distance < 20 ) {
        var store = stores[i]
        store.distance = distance.toFixed(2)
        selectedPlaces.push(store)
      }
    }
    console.log("SELECTED: ", selectedPlaces)
    var sortedPlaces = selectedPlaces.sort((a,b) => Number(a.distance) > Number(b.distance) ? 1 : -1)

    this.setState({ selectedPlace: sortedPlaces})
    this.setState({showNearby: true, storeDetails:false})
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
          {!this.state.showNearby ? (
            <div className="StoreList">
           
              <div className="Search">
                <input
                  type="text"
                  name="zip"
                  placeholder="City, State or ZIP Code"
                  value={this.state.zip}
                  onChange={this.handleChange}
                />
                <Link onClick={this.searchLocation}>Search</Link>
              </div>
              <div className="SearchDirections">
                <img src={emblem}></img>
                <p>
                  Use the search bar above to find nearby Juan Pollo locations.
                </p>
              </div>
            
            </div>
          ) : 
          <div className="StoreList">
           
          <div className="Search">
            <input
              type="text"
              name="zip"
              placeholder="City, State or ZIP Code"
              value={this.state.zip}
              onChange={this.handleChange}
            />
            <Link onClick={this.searchLocation}>Search</Link>
          </div>
          {this.state.storeDetails? (
            <div> 
          
              {this.state.selectedPlace.map((store) => (
                <div className='StoreInfo'>
                  <h4>{store.address}</h4>
                  <div className="StoreLinks">
                    <h5>Directions</h5>
                    <h5>Phone: {store.phone}</h5>
                  </div>
                  <div>
                  
                    {Object.keys(store.hours).map(
                      (value, label) => (
                        <h5>
                          {value}: {store.hours[value]}
                        </h5>
                      )
                    )}
                  </div>
                </div>
              ))}        
            </div>
          ):<div> 
              <h6>Nearby</h6>
              {this.state.selectedPlace.map((store) => (
                <div className='StoreInfo' onClick={() => this.onNearbyClick(store)}>
                  <h4>{store.address}</h4>
                  <h6>Distance: {store.distance} mi.</h6>
                  <div>
                
                    
                  </div>
                </div>
              ))}        
            </div>}
        </div>}
          <div style={{ height: "500px", overflow: "hidden" }}>
            <Map
              google={this.props.google}
              zoom={13}
              style={mapStyles}
              initialCenter={this.state.location}
              center={this.state.location}
            >
              {stores.map((selectedStore, i) => (
                <Marker
                  key={i}
                  style={{ width: "50px", height: "50px" }}
                  title={"The marker`s title will appear as a tooltip."}
                  address={selectedStore.address}
                  phone={selectedStore.phone}
                  hours={selectedStore.hours}
                  position={selectedStore.position}
                  onClick={this.onMarkerClick}
                />
              ))}
              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
              >
                <div>
                  <h2>{this.state.selectedPlace[0].address}</h2>
                  <h2>Phone: {this.state.selectedPlace[0].phone}</h2>
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
    address: "1258 W 5th St.",
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
    address: "1014 E Highland Ave",
    city: "San Bernardino, CA 92404",
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
