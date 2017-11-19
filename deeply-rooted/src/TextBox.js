import React from 'react';
import ReactDOM from 'react-dom';
import './Display.css';
import ApiWrapper from './ApiWrapper.js';
import Books from './DisplayBook.js';

class TextBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) { //Stores the user input value
      var name = event.target.name;
      this.setState({[name]: event.target.value});
    }
    
    handleDrop(event) {
        var searchType = event.target.name;
        var userInput = event.target.value; //selection is equal to the current value of the dropdown box  

        if (userInput === "ALL")
        {
          return
        }

        console.log("Type" + searchType);
        console.log("Value" + userInput);


        var formData = {
          subject: "",
          rights: "",
          title: "",
          format: "",
          collection: "",
          state: "",
          language: "",
          creator: "",
          date: "",
          page_size: "30",
          page: "1"
        };

        formData[searchType] = userInput;

        var results = ApiWrapper.makeCall({subject: formData.subject, 
          rights: formData.rights, 
          title: formData.title, 
          format: formData.format, 
          collection: formData.collection, 
          state: formData.state, 
          language: formData.language, 
          creator: formData.creator,
          date: formData.date, 
          page_size: formData.page_size,
          page: formData.page,
         });
        
        console.log(results);
        ReactDOM.render(<Books view="componentView" results={results}/>, document.getElementById('root'));
        
    }
  
    handleSubmit(event) { 
      var searchType = event.target.name;
      var userInput = this.state[searchType];
      var formData = {
        subject: "",
        rights: "",
        title: "",
        format: "",
        collection: "",
        state: "",
        language: "",
        creator: "",
        date: "",
        page_size: "30",
        page: "1"
      };

      formData[searchType] = userInput;
      console.log(formData);
      console.log('search type:'+ searchType);
      console.log('userInput:'+userInput);

      var results = ApiWrapper.makeCall({subject: formData.subject, 
                                         rights: formData.rights, 
                                         title: formData.title, 
                                         format: formData.format, 
                                         collection: formData.collection, 
                                         state: formData.state, 
                                         language: formData.language, 
                                         creator: formData.creator,
                                         date: formData.date, 
                                         page_size: formData.page_size,
                                         page: formData.page,
                                        });

      console.log(results); 
      ReactDOM.render(<Books view="componentView" results={results}/>, document.getElementById('root')); 
      event.preventDefault();
    }

    handleAdvancedSearch(event) { 
      var searchParameters = ["subject", "rights", "title", "format", "collection", "state", "language", "creator", "date"];
      var searchType;
      var userInput;
      var formData = {
        subject: "",
        rights: "",
        title: "",
        format: "",
        collection: "",
        state: "",
        language: "",
        creator: "",
        date: "",
        page_size: "30",
        page: "1"
      };

      for (var i = 0; i < searchParameters.length; i++)
      {
        searchType = searchParameters[i]
        userInput = this.state[searchType]; 
        
        if (userInput !== "")
          formData[searchType] = userInput;
      }
      

      var results = ApiWrapper.makeCall({subject: formData.subject, 
                                         rights: formData.rights, 
                                         title: formData.title, 
                                         format: formData.format, 
                                         collection: formData.collection, 
                                         state: formData.state, 
                                         language: formData.language, 
                                         creator: formData.creator,
                                         date: formData.date, 
                                         page_size: formData.page_size,
                                         page: formData.page,
                                        });

      console.log(results); 
      ReactDOM.render(<Books view="componentView" results={results}/>, document.getElementById('root')); 
      event.preventDefault();
    }


    render() {
      var selection = this.props.selection; //Based on the selection value passed in from Form.js return the appropriate text box

      if(selection === "Subject")
      {
        return (
          <div className="inLine">
            <form>
              <input className="textBox" type="text"  name="subject" placeholder="Insert Subject Here" value={this.state.name} onChange={this.handleChange}/> 
              <input className="submitButton" type="submit" name="subject" value="Submit" onClick={this.handleSubmit}/>
            </form>
          </div>
        );
      }

      else if(selection === "Title")
      {
        return (
          <div className="inLine">
          <form>
          <input className="textBox" type="text" name="title" placeholder="Insert Title Here" value={this.state.name} onChange={this.handleChange}/>
          <input className="submitButton" type="submit" name="title" value="Submit" onClick={this.handleSubmit}/>
          </form>
          </div>
        );
      }

      else if(selection === "Rights")
      {
        return (
          <div className="inLine">
          <form>
          <input className="textBox" type="text" name="rights" placeholder="Insert Rights Here" value={this.state.name} onChange={this.handleChange}/>
          <input className="submitButton" type="submit" name="rights" value="Submit" onClick={this.handleSubmit}/>
          </form>
          </div>
        );
      }

      //if user selects format, it displays dropbox input
      else if(selection === "Format")
      {
        //pulls all format types from api 
        var result =ApiWrapper.getFormatFacet();
        console.log(result);
        var formatlist=[];
        var formatFacets=result.facets["sourceResource.format"].terms;
   
      //adds items from "format" facets to the drop down box
      for(var i=0; i<formatFacets.length; i++){
        formatlist[i]=formatFacets[i].term;
      }
      formatlist.sort();
      console.log(formatlist)
        //returns a list of formats composed of items in formatlist
        return (
          <div className="inLine">
          <form>
          <label>
                <select name="format" className="dropDown" onChange={this.handleDrop} defaultValue="ALL">
                  <option value="ALL">--Select a Format--</option>
                  {
                    formatlist.map(function(formats){
                      return <option key={formats} value={formats}>{formats}</option>;
                    })
                  }
                </select>
              </label>
          </form>
          </div>
        );
      }

      else if(selection === "Collection")
      {
        return (
          <div className="inLine">
          <form>
          <input className="textBox" type="text" name="collection" placeholder="Insert Collection Here" value={this.state.name} onChange={this.handleChange}/>
          <input className="submitButton" type="submit" name="collection" value="Submit" onClick={this.handleSubmit}/>
          </form>
          </div>
        );
      }

      //if user selects state, dropbox input is displayed 
      else if(selection === "State")
      {
        //pulls all states from api calls 
        var stateList = [];
        result = ApiWrapper.getLocationFacet();
        var stateFacets=result.facets["sourceResource.spatial.state"].terms;
        
     
        //places all states from states facets in the statelist list 
        for(i = 0; i<stateFacets.length; i++){
          stateList[i] = stateFacets[i].term;
        }
        stateList.sort();
        console.log(stateList);

        //returns list of states composed of states from statelist
        return (
          <div className="inLine">
            <form>
              <label>
                <select name="state" className="dropDownState" onChange={this.handleDrop} defaultValue="ALL">
                  <option value="ALL">--Select a Location--</option>
                  {
                    stateList.map(function(states){
                      return <option key={states} value={states}>{states}</option>;
                    })
                  }
                </select>
              </label>
            </form>
          </div>
        );
      }

      else if(selection === "Creator")
      {
        return (
          <div className="inLine">
            <form>
                <input className="textBox" type="text" name="creator" placeholder="Insert Author Here" value={this.state.name} onChange={this.handleChange}/>
                <input className="submitButton" type="submit" name="creator" value="Submit" onClick={this.handleSubmit}/>
            </form>
          </div>
        );
      }

      //if user selects state, dropdown input is displayed
      else if(selection === "Date")
      {

        //pulls all dates from api calls 
        var datelist=[];
        var year;
        result = ApiWrapper.getDateBeforeFacet();
        var dateFacets=result.facets["sourceResource.date.begin"].entries;
        
        //adds all dates to the datelist list
        for(i = 0; i<dateFacets.length; i++){
          //takes only the year from the date rather than month and day too
          year = dateFacets[i].time[0] + dateFacets[i].time[1] + dateFacets[i].time[2] + dateFacets[i].time[3];
          datelist[i] = year;
        }
        
        //organizes the dates in dropdown box in ascending order 
        datelist.sort();
        console.log(datelist);

        //returns dates composed of dates from datelist 
        return (
          <div className="inLine">
            <form>
            <label>
                <select name="date" className="dropDown" onChange={this.handleDrop} defaultValue="ALL">
                  <option value="ALL">--Select a Date--</option>
                  {
                    datelist.map(function(dates){
                      return <option value={dates}>{dates}</option>;
                    })
                  }
                </select>
              </label>
            </form>
          </div>
        );
      }

      //if user selects language, dropdown input is displayed 
      else if(selection === "Language")
      {
      
      //returns all languages from api calls 
      var languagelist=[];
      result =ApiWrapper.getLanguageFacet();
      var languageFacets=result.facets["sourceResource.language.name"].terms;      
        
        //adds all dates to languagelist list 
        for(i = 0; i < languageFacets.length; i++){
          languagelist[i]=languageFacets[i].term;
        }
          
        //returns all languages composed of languages from  languagelist 
        return (
          <div className="inLine">
           <form>
             <label>
                <select className="dropDown" name="language" onChange={this.handleDrop} defaultValue="ALL">
                  <option value="ALL">--Select a Language--</option>
                {       
  
                  languagelist.map(function(languages){
                   return <option key={languages} value={languages}>{languages}</option>;
                  })

                }
                
                </select>
              </label>
            </form>
          </div>
        );
      }

      else
      {
        return (
          <div className="inLine">
            <form>
              <input className="textBox" type="text"  name="subject" value={this.state.name} onChange={this.handleChange}/>
              <input className="submitButton" type="submit" name="subject" value="Submit" onClick={this.handleSubmit}/>
            </form>
          </div>
        );
      }
    }
  }
    
  export default TextBox;
