import React from 'react';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import {Popover, ButtonToolbar, OverlayTrigger, Button} from 'react-bootstrap'

class Books extends React.Component {
    render() {
      const api = this._getAPI();
      return(
        <div>
          <div>
            {api}
          </div>
        </div>
      );
    }
  
    _getAPI() {
      var allBooks = this.props.results;
      var formattedBook = [];      
      var bookObject = {}
      var metaData;
      var data;

      for (var i = 0; i < allBooks.length; i++)
      {
        bookObject = {
          itemNum: 0,
          id: "Unknown",
          title: "Unknown",
          creator: "Unknown",
          collection: "Unknown",
          date: "Unknown",
          description: "Unknown",
          language: "Unknown",
          publisher: "Unknown",
          rights: "Unknown",
          state:  "Unknown",
        };
        metaData = allBooks[i];
        
        if (metaData.hasOwnProperty('sourceResource'))
          data = metaData.sourceResource;

        bookObject.itemNum = i+1;

        if (metaData.hasOwnProperty('id'))
          bookObject.id = metaData.id;
        
        if (metaData.hasOwnProperty('object'))
          bookObject.image = metaData.object;
        
        if (metaData.hasOwnProperty('isShownAt'))
          bookObject.link = metaData.isShownAt;

        if (data.hasOwnProperty('title'))
          bookObject.title = data.title[0];

        if (data.hasOwnProperty('creator'))
          bookObject.creator = data.creator[0];

        if (data.hasOwnProperty('collection') && data.collection.hasOwnProperty('title'))
          bookObject.collection = data.collection.title; 

        if (data.hasOwnProperty('date') && data.date.hasOwnProperty('displayDate'))
          bookObject.date = data.date.displayDate;

        if (data.hasOwnProperty('description'))
          bookObject.description = data.description[0];

        if (data.hasOwnProperty('language') && data.language[0].hasOwnProperty('name'))
          bookObject.language = data.language[0].name;

        if (data.hasOwnProperty('publisher'))
        bookObject.publisher = data.publisher[0];

        if (data.hasOwnProperty('rights'))
        bookObject.rights = data.rights[0];

        if (data.hasOwnProperty('stateLocatedIn') && data.stateLocatedIn[0].hasOwnProperty('name'))
          bookObject.state = data.stateLocatedIn[0].name;

        formattedBook[i] = bookObject;
      }

      //TODO: Search trhough formattedBook and delete any entries that have major unknow categories
      
      return formattedBook.map((b) => {
        return (<BookDisplay
                 key={b.id}
                 image={b.image}
                 link={b.link}
                 itemNum={b.itemNum}
                 title={b.title}
                 creator={b.creator}
                 collection={b.collection} 
                 date={b.date}
                 description={b.description}
                 language={b.language}
                 publisher={b.publisher}
                 rights={b.rights}
                 state={b.state}  />
                 );         
        });
      }
  }
  
  class BookDisplay extends React.Component {
    AutoRotate(event){
      //TODO: IMplement popover flip
      var window = document.documentElement.getBoundingClientRect();
      var elementPosition = event.clientY;
      if (window.bottom - elementPosition < 300)
      {
        setTimeout(function(){    
        var c = document.getElementById("abc");
        console.log(c);
      }, 2);    
      }
      /*   
      console.log("X Value: " + event.clientX);
      console.log("Window Y: " + windowSize.bottom);
      console.log("Y Value: " + event.clientY);
      */
    }
    

    render() { 
      const popoverHoverFocusBottom= (
        <Popover id="popover-trigger-hover-focus" title={this.props.title}>
          <p><b>Author: </b>{this.props.creator}</p>
          <p><b>Description: </b>{this.props.description}</p>
          <p><b>Location:</b> {this.props.state}</p>
          <p><b>Date:</b> {this.props.date}</p>
          <p><b>Publisher:</b> {this.props.publisher}</p>
          <p><b>Collection:</b> {this.props.collection}</p>
          <p><b>Rights:</b> {this.props.rights}</p>
          <p><b>Language:</b> {this.props.language}</p>
        </Popover>
      );

      return(
        <div className="bookTable2">
          <a href={this.props.link}>
            <OverlayTrigger id="abc" trigger={['hover', 'focus']} placement="bottom" overlay={popoverHoverFocusBottom}>
              <img className="bookDiv" alt="Book Thumbnail" src={this.props.image} onMouseOver={this.AutoRotate}/>
              </OverlayTrigger>
          </a>
        </div>
        );
    }
  }

export default Books;