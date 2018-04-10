import React from 'react';
import '../styles/Map.css';
import {Map, TileLayer, Marker, Popup, PropTypes as MapPropTypes,  } from 'react-leaflet';
import PropTypes from 'prop-types'
import ApiWrapper from '../../Services/components/ApiWrapper.js';


const MyPopupMarker = ({ children, position }) => (
  <Marker position={position}>
    <Popup>
      <span>{children}</span>
    </Popup>
  </Marker>
)
MyPopupMarker.propTypes = {
  children: MapPropTypes.children,
  position: MapPropTypes.latlng,
}

const MyMarkersList = ({ markers }) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} />
  ))
  return <div style={{ display: 'none' }}>{items}</div>
}
MyMarkersList.propTypes = {
  markers: PropTypes.array.isRequired,
}

class CustomComponent extends React.Component {
  constructor(props) {
    super(props)
    this.data = require('./states.json');
    this.api = ApiWrapper.getstateFacet().facets["sourceResource.spatial.state"].terms
}
  state = {
    lat: 37.090240,
    lng: -95.712891,
    zoom: 4,
  }

  render() {
    const center = [this.state.lat, this.state.lng]
    const location = this.data
    var i;
    var markers = [];
    for (i = 0; i < this.api.length; i++) {
      for (var j = 0; j < location.states.length; j++) {
        if (this.api[i].term === location.states[j].name) {
          location.states[j].count = this.api[i].count
        }
      }
    }
    for (i = 0; i < location.states.length; i++) {
      markers.push(
        { key: location.states[i].name, position: [location.states[i].latitude, location.states[i].longitude], children: 'There are ' + location.states[i].count + ' books in ' + location.states[i].name   } 
      )
    }
    return (
      <Map id="mapid" center={center} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MyMarkersList markers={markers} />
      </Map>
    )
  }
}
  export default CustomComponent