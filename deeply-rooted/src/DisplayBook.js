import React, { Component } from 'react';
import './App.css';
import ApiWrapper from './ApiWrapper.js';
import Form from './Form.js';
import ReactDOM from 'react-dom';

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
      xmlHttp.open( "GET", this.props.url, false); // false for synchronous request
      xmlHttp.send( null );
      var allBooks = eval("(" + xmlHttp.responseText + ")");
      
      var formattedBook = [];      
      var bookObject = {}
      var metaData;
      var data;

    setTimeout(function(){
      for (var i = 0; i < 10; i++)
      {
        console.log(allBooks.length);
        if(allBooks.length === undefined)
        {
            alert("Your search returned no results");
            ReactDOM.render(<Form />, document.getElementById('root'));     
            break;       
        }

        else
        {
        metaData = allBooks.docs[i];
        data = metaData.sourceResource;
        bookObject = {itemNum: i,
                      id: i,
                      title: "N/a",
                      creator: "N/a",
                      collection: "N/a",
                      date: "N/a",
                      description: "N/a",
                      language: "N/a",
                      publisher: "N/a",
                      rights: "N/a",
                      state: "N/a"
                      };

        bookObject.itemNum = i+1;
        if(bookObject.itemNum !== undefined)
          bookObject.id = metaData.id;
        
        if(data.title !== undefined)
          bookObject.title = data.title;

        if(data.creator !== undefined)
          bookObject.creator = data.creator;

        if(data.collection.title !== undefined)
          bookObject.collection = data.collection.title; 

        if(data.date.displayDate !== undefined)
          bookObject.date = data.date.displayDate;

        if(data.description !== undefined)
          bookObject.description = data.description[0];

        if(data.language !== undefined)
          bookObject.language = data.language[0].name;

        if(data.publisher !== undefined)
          bookObject.publisher = data.publisher[0];

        if(data.rights !== undefined)
          bookObject.rights = data.rights;

        if(data.stateLocatedIn !== undefined)
          bookObject.state = data.stateLocatedIn[0].name;

        formattedBook[i] = bookObject;
      }

      console.log(formattedBook);
      console.log(metaData);
      console.log(data);

      
      ReactDOM.render(formattedBook.map((b) => {
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
      }), document.getElementById('root'));
    }
    }, 1000);  
  
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
      {/*<p><b>Rights:</b> {this.props.rights}</p>*/}
      <p><b>State:</b> {this.props.state}</p>
      <hr className="hrColor" />
    </div>
      );
    }
  }

export default Books;