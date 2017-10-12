import React from 'react';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

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

    displayInfo(event) {
      var trID = "hidden" + (event.target.id);
      var buttonID = event.target.id;

      var x = document.getElementById(trID);
      var y = document.getElementById(buttonID);

      if (x.style.display === "none") {
        x.style.display='table-row'; 
        y.className='arrowButton pull-right fa-lg fa fa-chevron-circle-down';
      } 
      
      else {
          x.style.display = "none";
          y.className='arrowButton pull-right fa-lg fa fa-chevron-circle-left';          
      }
    }

    render() {
      return(
        <div>
          <table className="bookTable">
            <thead>
              <tr className="bookTitleRow">
                <td  colSpan="2">
                  <p><b>{this.props.title}</b> <br/> (by {this.props.creator})</p>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href={this.props.link}>
                    <img alt="Book Thumbnail" src={this.props.image} />
                  </a>
                </td>
                <td>
                  <p>
                    <b>Description: </b>{this.props.description}
                    <hr />
                    <b>Location:</b> {this.props.state} &nbsp;
                    <b>Date:</b> {this.props.date} &nbsp;
                    <button id={this.props.itemNum} className="arrowButton pull-right fa-lg fa fa-chevron-circle-left" onClick={this.displayInfo} aria-hidden="true"></button>
                  </p>
                </td>
              </tr>
              <tr id={"hidden" + this.props.itemNum} colSpan="2" style={{display: 'none'}}>
                <td colSpan="2">
                  <hr />
                  <p><b>Publisher:</b> {this.props.publisher}</p>
                  <p><b>Collection:</b> {this.props.collection}</p>
                  <p><b>Rights:</b> {this.props.rights}</p>
                  <p><b>Language:</b> {this.props.language}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }

export default Books;