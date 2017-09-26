import React, { Component } from 'react';
import './App.css';
//import '../node_modules/font-awesome/css/font-awesome.min.css'; 

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
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", "https://api.dp.la/v2/items?sourceResource.description=%22deeply+rooted%22&api_key=0b3063a6c3dd32e76c4dbe2b0ec064f9", false); // false for synchronous request
      xmlHttp.send( null );
      var allBooks = eval("(" + xmlHttp.responseText + ")");
      
      var formattedBook = [];      
      var bookObject = {}
      var metaData;
      var data;

      for (var i = 0; i < 10; i++)
      {
        metaData = allBooks.docs[i];
        data = metaData.sourceResource;
        bookObject = {};
        bookObject.itemNum = i+1;
        bookObject.id = metaData.id;
        bookObject.title = data.title[0];
        bookObject.creator = data.creator[0];
        bookObject.collection = data.collection.title; 
        bookObject.date = data.date.displayDate;
        bookObject.description = data.description[0];
        bookObject.language = data.language[0].name;
        bookObject.publisher = data.publisher[0];
        bookObject.rights = data.rights[0];
        bookObject.state = data.stateLocatedIn[0].name;
        formattedBook[i] = bookObject;
      }

      console.log(formattedBook);

      
      return formattedBook.map((b) => {
        return (<BookDisplay
                 key={b.id}
                 itemNum={b.itemNum}
                 title={b.title}
                 creator={b.creator}
                 collection={b.collection} 
                 date={b.date}
                 description={b.description}
                 language={b.language}
                 publisher={b.publisher}
                 rights={b.rights}
                 state={b.state}  />);
      });
  
    }
  }
  
  class BookDisplay extends React.Component {
    render() {
      return(
        <div>
      <h3>Book Number {this.props.itemNum}</h3>
      <p><b>Title:</b> {this.props.title}</p>
      <p><b>Author:</b> {this.props.creator}</p>
      <p><b>Collection:</b> {this.props.collection}</p>
      <p><b>Date:</b> {this.props.date}</p>
      <p><b>Description:</b> {this.props.description}</p>
      <p><b>Language:</b> {this.props.language}</p>
      <p><b>Publisher:</b> {this.props.publisher}</p>
      <p><b>Rights:</b> {this.props.rights}</p>
      <p><b>State:</b> {this.props.state}</p>
      <hr className="hrColor" />
    </div>
      );
    }
  }

export default Books;