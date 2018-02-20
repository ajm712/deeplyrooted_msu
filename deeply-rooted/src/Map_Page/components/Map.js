import React, { Component } from 'react';
import '../styles/Map.css';
import {Map, TileLayer, Marker, Popup, Rectangle } from 'react-leaflet';

class MyMap extends Component {
    constructor () {
      super()
      this.state = {
        lat: 32.3546679,
        lng: -89.39852830000001,
        zoom: 13
      }
    }
  
    render () {
      const position = [this.state.lat, this.state.lng]
      return (
          <Map id="mapid" center={position} zoom={this.state.zoom}>
          Hello World
            <TileLayer
              url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                <span>WE LOVE SWEET TEA</span>
              </Popup>
            </Marker>
          </Map>
       
        )
    }
  }
  
  export default MyMap