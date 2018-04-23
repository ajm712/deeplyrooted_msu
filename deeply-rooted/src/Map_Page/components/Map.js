import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Map.css';
import {Map, TileLayer, Marker, Popup, PropTypes as MapPropTypes,  } from 'react-leaflet';
import PropTypes from 'prop-types'
import Books from '../../Display/components/DisplayBook.js';
import ApiWrapper from '../../Services/components/ApiWrapper.js';
import Advanced from '../../Adv_Search/components/AdvancedSearch.js';
import TextBox from '../../Adv_Search/components/TextBox.js';
import Form from '../../Adv_Search/components/Form.js';

class CustomComponent extends React.Component {
  constructor(props) {
    super(props)
    this.data = require('./states.json');
    this.api = ApiWrapper.getstateFacet().facets["sourceResource.spatial.state"].terms
}

//Function for opening State page
state_search(event) {
  var x = event.target.name
  var results = ApiWrapper.makeCall({state: x, page_size: "30", page: "1"});
  ReactDOM.render(<Books view="componentView" results={results} pageSize= "30"/>, document.getElementById('root'));
}

  //Set starting position of map
  state = {
    lat: 37.090240,
    lng: -95.712891,
    zoom: 4,
  }



  render() {
    const MyPopupMarker = ({ children, position, state }) => (
      
      <Marker position={position}>
        <Popup>
          <span>
          {children}
          <div className = "spacing" ><a className = "pointer" name={state} onClick= {this.state_search}><br></br>More information </a></div>
          </span>
        </Popup>
      </Marker>
    )
    MyPopupMarker.propTypes = {
      children: MapPropTypes.children,
      position: MapPropTypes.latlng,
    }
    
    //Creates markers
    const MyMarkersList = ({ markers }) => {
      const items = markers.map(({ key, ...props }) => (
        <MyPopupMarker key={key} {...props} />
      ))
      return <div style={{ display: 'none' }}>{items}</div>
    }
    MyMarkersList.propTypes = {
      markers: PropTypes.array.isRequired,
    }

    //centers starting map
    const center = [this.state.lat, this.state.lng]
    const location = this.data
    var i;

    //create array of states in database
    var markers = [];
    for (i = 0; i < this.api.length; i++) {
      for (var j = 0; j < location.states.length; j++) {
        if (this.api[i].term === location.states[j].name) {
          location.states[j].count = this.api[i].count
        }
      }
    }
    
    //loops all states onto markers
    for (i = 0; i < location.states.length; i++) {
      markers.push(
        { key: location.states[i].name,state: location.states[i].name , position: [location.states[i].latitude, location.states[i].longitude], children: 'There are ' + location.states[i].count + ' books in ' + location.states[i].name + " ",  bubblingMouseEvents: true } 
)
    }
    return (
      <div className="div">
        <Map id="mapid" center={center} zoom={this.state.zoom}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MyMarkersList markers={markers}/>
        </Map>
        <div className="panel">
          <div className="panel-heading">Map Information</div>
          <div className="panel-body">
          <ul className="info">
            <li className="bullets">States with a marker are the states with books in our database</li>
            <li className="bullets">Click on the marker to see the total amount of books in the state</li>
            <li className="bullets">To see more information about the books in a state, click on "more information" in the marker</li>
          </ul>
          </div>
        </div>
      </div>
    )
  }
}
  export default CustomComponent