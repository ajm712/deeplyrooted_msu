import React from 'react';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import { Manager, Target, Popper, Arrow } from 'react-popper'
import Popover from 'react-bootstrap/lib/Popover.js'

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
    render() { 

      const popoverClick = (
        <Popover id="popover-trigger-click" title="Popover bottom">
          <strong>Holy guacamole!</strong> Check this info.
        </Popover>
      );
      
      const popoverHoverFocus = (
        <Popover id="popover-trigger-hover-focus" title="Popover bottom">
          <strong>Holy guacamole!</strong> Check this info.
        </Popover>
      );
      
      const popoverFocus = (
        <Popover id="popover-trigger-focus" title="Popover bottom">
          <strong>Holy guacamole!</strong> Check this info.
        </Popover>
      );
      
      const popoverClickRootClose = (
        <Popover id="popover-trigger-click-root-close" title="Popover bottom">
          <strong>Holy guacamole!</strong> Check this info.
        </Popover>
      );

      return(
        <div>
          <div className="bookTable2">
            <span>
            <a href={this.props.link}>
              <img className="bookDiv" alt="Book Thumbnail" src={this.props.image} onMouseOver={this.displayInfo}/>
            </a>
            </span>
          </div>
   
       <ButtonToolbar>
          <OverlayTrigger trigger="click" placement="bottom" overlay={popoverClick}>
            <Button>Click</Button>
          </OverlayTrigger>
          <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popoverHoverFocus}>
            <Button>Hover + Focus</Button>
          </OverlayTrigger>
          <OverlayTrigger trigger="focus" placement="bottom" overlay={popoverFocus}>
            <Button>Focus</Button>
          </OverlayTrigger>
          <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popoverClickRootClose}>
            <Button>Click w/rootClose</Button>
          </OverlayTrigger>
        </ButtonToolbar>
        </div>
        );
    }
  }

export default Books;