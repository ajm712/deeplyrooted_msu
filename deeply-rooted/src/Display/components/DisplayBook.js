import React from 'react';
import {Popover, OverlayTrigger, Pagination} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import ApiWrapper from '../../Services/components/ApiWrapper.js';
import defaultImage from '../../Images/unknown-image.png';
import '../styles/Display.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';


var $ = require('jquery');
var ReactDOM = require('react-dom');

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {pageSize: this.props.pageSize};
    this.displayToggle = this.displayToggle.bind(this);
    this.changePage = this.changePage.bind(this);  
    this.changePageSize = this.changePageSize.bind(this);
  }
  changePageSize(event) {
    var currentPage = this.props.results.call.page;
    this.setState({
      pageSize: event.target.value
    }, (currentPage) => {
      this.changePage(currentPage);;
    })

  }

  //Calculates the max number of pages per result
  calculatePages() {
    var totalBooks = this.props.results.count; 
    var booksPerPage = this.state.pageSize;
    var totalPages = Math.ceil(totalBooks/ booksPerPage);
    return totalPages;
  }

  //Calls the next page of results and renders it to the screen
  changePage(event) {
    var page = event;
    var searchData = this.props.results.call;
    var results = ApiWrapper.makeCall({
      subject: searchData.subject, 
      rights: searchData.rights, 
      title: searchData.title, 
      format: searchData.format, 
      collection: searchData.collection, 
      university: searchData.university,
      state: searchData.state, 
      language: searchData.language, 
      creator: searchData.creator,
      other: searchData.other,
      date: searchData.date, 
      page_size: this.state.pageSize,
      page: page,
     });
     console.log(this.state.pageSize, results);
     ReactDOM.render(<Books view={this.props.view} results={results} pageSize={this.state.pageSize}/>, document.getElementById('root'));     
    }

    render() {
      //Get a list of books and display the results to the screen
      var api = this._getBooks(this.props.view);
      return(
        <div className="inline">
          <span className="inline">
            <button autoFocus id="component" name="componentView" disabled={this.props.view === "componentView"} className="toggleButtonLeft fa fa-th-large" onClick={this.displayToggle}>  Image View</button>
            <button autoFocus id="table" name="tableView" disabled={this.props.view === "tableView"} className="toggleButtonRight fa fa-table" onClick={this.displayToggle}>  Table View</button>
            <div className="inLine">
        <form>
          <label>
            <select className="dropDown" onChange={this.changePageSize} defaultValue="30">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
              <option value="60">60</option>
              <option value="70">70</option>
              <option value="80">80</option>
              <option value="90">90</option>
              <option value = "100">100</option>
            </select>
          </label>
        </form>
      </div>
          </span>  
          <div>
            {api}
          </div>
          <div>
            <Pagination
              prev
              next
              first
              last
              ellipsis
              boundaryLinks
              bsSize="large"
              items={this.calculatePages()}
              maxButtons={5}
              activePage={Number(this.props.results.call.page)}
              onSelect={this.changePage}
            />
          </div>
        </div>
      );
    }

    //Switches the display 
    displayToggle(event) {
      var buttonName = event.target.name;
      var results = this.props.results;
      if (buttonName === "componentView")
      {
        ReactDOM.render(<Books view="componentView" results={results} pageSize= "30"/>, document.getElementById('root'));
      }
  
      else
      {
        ReactDOM.render(<Books view="tableView" results={results} pageSize= "30"/>, document.getElementById('root'));      
      }
    }

    //Displays Book to the screen
    _getBooks(viewType) {
      //checks to see if there are any results 
      if(this.props.results.count === 0){
        return (<NoResult />);
      }

      var allBooks = this.props.results.docs;
      var formattedBook = [];      
      var bookObject = {}
      var metaData;
      var data;
      //For each book in results parse throught the data to find relevent information
      for (var i = 0; i < allBooks.length; i++)
      {
        //Sets a default value for each book element
        bookObject = {
          itemNum: 0,
          id: "Unavailable",
          image: defaultImage,
          title: "Unavailable",
          creator: "Unavailable",
          collection: "Unavailable",
          date: "Unavailable",
          description: "Unavailable",
          language: "Unavailable",
          publisher: "Unavailable",
          format: "Unavailable",
          rights: "Unavailable",
          state:  "Unavailable",
        };

        //Assigns a numbered value to each book
        bookObject.itemNum = i+1;        
        
        //Parses throught the metaData
        metaData = allBooks[i];        
        if (metaData.hasOwnProperty('sourceResource'))
          data = metaData.sourceResource;

        //Searches for the unique id of the book
        if (metaData.hasOwnProperty('id'))
          bookObject.id = metaData.id;
        
        //Searches for the thumbnail image of the book
        if (metaData.hasOwnProperty('object'))
          bookObject.image = metaData.object;
        
        //Searches for the URL link of the book
        if (metaData.hasOwnProperty('isShownAt'))
          bookObject.link = metaData.isShownAt;

        //Searches for the title of the book
        if (data.hasOwnProperty('title'))
        {
          bookObject.title = data.title[0];
          //If the entire title is not stored at index 0 then use the entire title object
          if(bookObject.title.length === 1)
            bookObject.title = data.title;
        }

        //Searches for the creator of the book
        if (data.hasOwnProperty('creator'))
        {
          bookObject.creator = data.creator[0];
          //If the entire name is not stored at index 0 then use the entire creator object
          if(bookObject.creator.length === 1)
            bookObject.creator = data.creator;
        }

        //Searches for the collection name of the book
        if (data.hasOwnProperty('collection') && data.collection.hasOwnProperty('title'))
          bookObject.collection = data.collection.title; 

        //Searches for the data of the book
        if (data.hasOwnProperty('date') && data.date.hasOwnProperty('displayDate'))
          bookObject.date = data.date.displayDate;

        //Searches for the description of the book
        if (data.hasOwnProperty('description'))
        {
          bookObject.description = data.description[0];
          //If the entire name is not stored at index 0 then use the entire creator object
          if(bookObject.description.length === 1)
            bookObject.description = data.description;
        }

        //Searches for the langauge of the book
        if (data.hasOwnProperty('language') && data.language[0].hasOwnProperty('name'))
          bookObject.language = data.language[0].name;

        //Searches for the publisher of the book
        if (data.hasOwnProperty('publisher'))
        {
          bookObject.publisher = data.publisher[0];
          //If the entire rights is not stored at index 0 then use the entire rights object
          if(bookObject.publisher.length === 1)
            bookObject.publisher = data.publisher;
        }

        //Searches for the rights of the book
        if (data.hasOwnProperty('rights'))
        {
          bookObject.rights = data.rights[0];
          //If the entire rights is not stored at index 0 then use the entire rights object
          if(bookObject.rights.length === 1)
            bookObject.rights = data.rights;
        }

        //Searches for the format of the book
        if (data.hasOwnProperty('format'))
        {
          bookObject.format = data.format[0];
          //If the entire rights is not stored at index 0 then use the entire rights object
          if(bookObject.format.length === 1)
            bookObject.format = data.format;
        }

        //Searches for the state location of the book
        if (data.hasOwnProperty('stateLocatedIn') && data.stateLocatedIn[0].hasOwnProperty('name'))
          bookObject.state = data.stateLocatedIn[0].name;
        
        //Searches a second field for the location of the book in case the previous if statement fails
        else if (!data.hasOwnProperty('stateLocatedIn') && data.hasOwnProperty('spatial'))
          bookObject.state = data.spatial[0].state;

        //Stores all result into an array
        formattedBook[i] = bookObject;
      }
      
      //Send each element in formattedBooks to the BookDisplay Class
      if (viewType === "componentView")
      {
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
                   state={b.state}
                   format={b.format}
                   totalResults={allBooks.length}  />
                   );         
        });
      }

      else
      {
        return (<TableDisplay tableInfo ={formattedBook}  />);         
      }
    }
  }
  
  //display search results in component form
  class BookDisplay extends React.Component {
    //Assigns a default image if the books image is unavailable
    backupImage(event) {
      event.target.src = defaultImage;
    }

    render() { 
      //Creates the popover for the books
      const popoverFocus= (
        <Popover id="popover-trigger-focus" title={this.props.title}>
          <p><b>Author: </b>{this.props.creator}</p>
          <p><b>Description: </b>{this.props.description}</p>
          <p><b>Publisher:</b> {this.props.publisher}</p>
          <p><b>Rights:</b> {this.props.rights}</p>
          <p><b>Collection:</b> {this.props.collection}</p>
          <p><b>Date:</b> {this.props.date}</p>
          <p><b>Language:</b> {this.props.language}</p>
          <p><b>Location:</b> {this.props.state}</p>
          <p><b>Format:</b> {this.props.format}</p>
          <b><a className="pull-right" href={this.props.link} rel="noopener noreferrer" target="_blank">More Info</a></b>
        </Popover>
      );
      
      //Switches the popover from displaying below the object to above the object
      var AutoRotate = function(itemNumber, totalItems){
        var orientation = "bottom"; //Sets the default popover orientation        
        var windowHorizontal = $(window).width(); //Finds the size of the current window
        var booksPerRow = Math.floor(windowHorizontal/ 230); //Calculates how many books can be display per row (Window Size/ Amount of Pixel Each Book Takes Up)
        var rotatePoint = totalItems/2; //Default rotatation point is set to the half way book point

        if (booksPerRow >= 7) 
          //If I can display 7 or more books per row then make the rotation point the book at the start of the 3rd row
          rotatePoint = (2*booksPerRow);

        else if (booksPerRow >= 2 && booksPerRow <=6) 
          //If I can display between 6 and 2 books per row then make the rotation point the book at the start of the 4th row
          rotatePoint = (3*booksPerRow);

        else
          //If I can only display one book a row then make the rotation point the 10th book
          rotatePoint = (10*booksPerRow); 

        if (itemNumber > rotatePoint)
          //If the item number is past the rotation point switch the popover orientation
          orientation = "top"; 

        return orientation;         
      }


      return(
        <div className="componentBoxBackground">
            <OverlayTrigger id="abc" trigger='click' rootClose placement={AutoRotate(this.props.itemNum, this.props.totalResults)} overlay={popoverFocus}>
              <img className="bookImage" alt={this.props.title} src={this.props.image} onError={this.backupImage} />
            </OverlayTrigger>
        </div>
        );
    }
  }

  //display search results in table form
  class TableDisplay extends React.Component {
    constructor(props) {
      super(props);
  
      this.options = {
        defaultSortName: 'id',  // default sort column name
        defaultSortOrder: 'asc',  // default sort order
      };
    }

    //Formats link to source for use within table
    colFormatter = (cell, row) => {
      return (
        <a href={cell} rel="noopener noreferrer" target="_blank">View</a>
      )
    }

    render() {
      //creates array of search results for use as the data within the table
      var products = this.props.tableInfo;
      products = [];
      for (var i = 0; i < this.props.tableInfo.length; i++)
      {
        products[i] = {
                        id: this.props.tableInfo[i].itemNum,
                        title: this.props.tableInfo[i].title,
                        creator: this.props.tableInfo[i].creator,
                        collection: this.props.tableInfo[i].collection,
                        date: this.props.tableInfo[i].date,
                        description: this.props.tableInfo[i].description,
                        language: this.props.tableInfo[i].language,
                        publisher: this.props.tableInfo[i].publisher,
                        rights: this.props.tableInfo[i].rights,
                        state: this.props.tableInfo[i].state,
                        link: this.props.tableInfo[i].link 
                    
        }
      }      
      
      return(
        /*creates table using "react-bootstrap-table" libraries,
          includes built in dataSort function that numerically and 
          alphabetically sorts columns of table*/
        <div className="tablesize" role="table">
         <BootstrapTable data = {products} //sets data to product array 
            striped hover condensed //highlights rows as moused over
            scrollTop={ 'Top' } //sets scroll bar to start at top by default
            options={this.options}> 
         <TableHeaderColumn width='100px' dataField='link' dataFormat={ this.colFormatter }>Source</TableHeaderColumn>      
         <TableHeaderColumn width='100px' isKey dataField='id' dataSort>#</TableHeaderColumn>
         <TableHeaderColumn width='200px' dataField='title' dataSort>Book Title</TableHeaderColumn>
         <TableHeaderColumn width='200px' dataField='creator' dataSort>Creator</TableHeaderColumn> 
         <TableHeaderColumn width='100px' dataField='date' dataSort>Date</TableHeaderColumn>
         <TableHeaderColumn width='200px' dataField='publisher' dataSort>Publisher</TableHeaderColumn>
         <TableHeaderColumn width='100px' dataField='language' dataSort>Language</TableHeaderColumn>
         <TableHeaderColumn width='100px' dataField='state' dataSort>State</TableHeaderColumn>         
         </BootstrapTable>
        </div>
      );
    }
  }

  //calls the NoResults class to notify user that no results were found 
  class NoResult extends React.Component {
    render() {
      return (
        <div>
         <p className="NoResults"> No Results Found </p>
        </div>
      );
    }
  }

export default Books;

/*Other possible table rows for futrue development

<TableHeaderColumn width='200' dataField='description' dataSort>Description</TableHeaderColumn>
<TableHeaderColumn width='200px' dataField='rights' dataSort>Rights</TableHeaderColumn>
<TableHeaderColumn width='200' dataField='collection' dataSort>Collection</TableHeaderColumn>

*/