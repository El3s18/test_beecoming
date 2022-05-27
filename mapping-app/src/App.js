import './App.css';
import React, {Component } from "react";
import {InfoWindow, Marker, Map, GoogleApiWrapper} from "google-maps-react";


  const mapStyles = {
    width: '100%',
    height: '100%',
  };

export class MapContainer extends Component {


  constructor(props) {
    super(props);

    this.state = {
      stores: [{latitude: 51.51274988644904, longitude: -0.13731172219810206}, //name: "London", Population : "8.9 millions d'habitants", 
              {latitude: 52.49898971973035, longitude: 13.36977118333575}, //name : "Berlin"
              {latitude: 38.71548368601098, longitude: -9.149219235573176}, //name: "Lisbonne"
              {latitude: 50.09748090951437, longitude: 14.438150354294466}, //name: "Prague" 
              {latitude: 37.98621547074517, longitude: 23.719108468423588}, //name: "Athènes"
              {latitude: 59.33202128607726, longitude: 18.058263881496405}], // name: "Stockholm"
    }
  }

  handleToggleOpen = () => {

    this.setState({
        isOpen: true
          });
}

  handleToggleClose = () => {
    this.setState({
        isOpen: false
    });
}

  displayMarkers = () => {
    return this.state.stores.map((stores, index) => {
      return <Marker key={index} id={index} position={{
       lat:stores.latitude,
       lng:stores.longitude
     }}
    onClick={() => this.handleToggleOpen()} />
    })
  }

  render() {
    return (
        <Map
          google={this.props.google}
          zoom={3}
          style={mapStyles}
          initialCenter={{lat: 48.86596948887874, lng: 2.3271222812193857}}
        >
          {this.displayMarkers()}
          
        </Map>
        
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmnunBoTO254mrADQUVkg9x8YuJxICzyw'
})(MapContainer);


//export default MapContainer;
