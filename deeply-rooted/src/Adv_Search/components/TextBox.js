import React from 'react';
import ReactDOM from 'react-dom';
import ApiWrapper from '../../Services/components/ApiWrapper.js';
import Books from '../../Display/components/DisplayBook.js';
import '../styles/Display.css';

//Displays the textbox for the appropriate search selected in the dropdown box
class TextBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    //Stores the user input value
    handleChange(event) { 
      var name = event.target.name;
      this.setState({[name]: event.target.value});
    }
    
    //Stores the user drop down value and submits the search
    handleDrop(event) { 
      //Get the user input and search type from the dropdown box
      var searchType = event.target.name;
      var userInput = event.target.value;  

      //If the user select the default value do nothing
      if (userInput === "ALL")
      {
        return
      }

      //Create formData with default values
      var formData = {
        subject: "",
        rights: "",
        title: "",
        format: "",
        collection: "",
        state: "",
        university: "",
        language: "",
        creator: "",
        date: "",
        page_size: "30",
        page: "1"
      };

      //Depending on the searchType set that appropriate object (language, date, format, state) under formData to the userinput
      formData[searchType] = userInput;

      //Make the api call request
      var results = ApiWrapper.makeCall({subject: formData.subject, 
        rights: formData.rights, 
        title: formData.title, 
        format: formData.format, 
        collection: formData.collection, 
        state: formData.state, 
        university: formData.university,
        language: formData.language, 
        creator: formData.creator,
        date: formData.date, 
        page_size: formData.page_size,
        page: formData.page,
      });
      
      //Send results to BookDisplay to be rendered on to the screen
      ReactDOM.render(<Books view="componentView" results={results} pageSize= "30"/>, document.getElementById('root'));
      event.preventDefault();
    }
  
    //Handls the submission of text input
    handleSubmit(event) { 
      //Get the user input and search type from the dropdown box
      var searchType = event.target.name;
      var userInput = this.state[searchType];

      //Create formData with default values
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

      //Depending on the searchType set that appropriate object (subject, title, rights, creator, etc.) under formData to the userinput
      formData[searchType] = userInput;

      //Send results to BookDisplay to be rendered on to the screen
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

      //Send results to BookDisplay to be rendered on to the screen
      ReactDOM.render(<Books view="componentView" results={results} pageSize= "30"/>, document.getElementById('root')); 
      event.preventDefault();
    }

    render() {
      var selection = this.props.selection; //Based on the selection value passed in from Form.js return the appropriate text box/ dropdown box

      if(selection === "Subject")
      {
        return (
          <div className="inLine">
            <form>
              <input className="textBox" aria-label="Subject Search Box" type="text"  name="subject" placeholder="Insert Subject Here" value={this.state.name} onChange={this.handleChange}/> 
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
          <input className="textBox" aria-label="Title Search Box" type="text" name="title" placeholder="Insert Title Here" value={this.state.name} onChange={this.handleChange}/>
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
          <input className="textBox" aria-label="Rights Search Box" type="text" name="rights" placeholder="Insert Rights Here" value={this.state.name} onChange={this.handleChange}/>
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
        var formatlist=[];
        var formatFacets=result.facets["sourceResource.format"].terms;
   
      //adds items from "format" facets to the drop down box if it's not already there 
      for(var i=0; i<formatFacets.length; i++){
        if(formatlist.indexOf(result)<0)
        formatlist[i]=formatFacets[i].term;
      }
      formatlist.sort();
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
          <input className="textBox" aria-label="Collection Search Box" type="text" name="collection" placeholder="Insert Collection Here" value={this.state.name} onChange={this.handleChange}/>
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
        
     
        //places all states from states facets in the statelist list if it's not already there 
        for(i = 0; i<stateFacets.length; i++){
          if(stateList.indexOf(result)<0)
          stateList[i] = stateFacets[i].term;
        }
        stateList.sort();

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

      else if(selection === "University")
      {
        //pulls all states from api calls 
        var universityList = [];
        result = ApiWrapper.getUniversityFacet();
        var universityFacets=result.facets["admin.contributingInstitution"].terms;
        
     
        //places all states from states facets in the statelist list if it's not already there 
        for(i = 0; i<universityFacets.length; i++){
          if(universityList.indexOf(result)<0)
          universityList[i] = universityFacets[i].term;
        }
        universityList.sort();

        //returns list of states composed of states from statelist
        return (
          <div className="inLine">
            <form>
              <label>
                <select name="university" className="dropDown" onChange={this.handleDrop} defaultValue="ALL">
                  <option value="ALL">--Select a University--</option>
                  {
                    universityList.map(function(university){
                      return <option key={university} value={university}>{university}</option>;
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
              <input className="textBox" aria-label="Creator Search Box" type="text" name="creator" placeholder="Insert Author Here" value={this.state.name} onChange={this.handleChange}/>
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
        
        //adds all dates to the datelist list if it's not already there 
        for(i = 0; i<dateFacets.length; i++){
          //takes only the year from the date rather than month and day too
          year = dateFacets[i].time[0] + dateFacets[i].time[1] + dateFacets[i].time[2] + dateFacets[i].time[3];
          if(datelist.indexOf(year)<0)
            datelist[i] = year;
        }
        
        //organizes the dates in dropdown box in ascending order 
        datelist.sort();

        //returns dates composed of dates from datelist 
        return (
          <div className="inLine">
            <form>
            <label>
                <select name="date" className="dropDown" onChange={this.handleDrop} defaultValue="ALL">
                  <option value="ALL">--Select a Date--</option>
                  {
                    datelist.map(function(dates){
                      return <option key={dates} value={dates}>{dates}</option>;
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
        
        //adds all dates to languagelist list if it's not already there 
        for(i = 0; i < languageFacets.length; i++){
          if(languagelist.indexOf(result)<0)
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
