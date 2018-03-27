import React from 'react';
import ReactDOM from 'react-dom';
import ApiWrapper from '../../Services/components/ApiWrapper.js';
import Books from '../../Display/components/DisplayBook.js';
import '../styles/Display.css';


//Sets the Modal Styling for Advanced Search
class Modal extends React.Component {

    //Closes the modal if the user selects the backdrop
    close(e) {
        e.preventDefault()
        if (this.props.onClose) {
            this.props.onClose()
        }
    }

    render() {
        if (this.props.isOpen === false)
            return null

        //Sets the modal style
        let modalStyle = {
            position: 'absolute',
            textAlign: 'left',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '9999',
            height: 'auto',
            margin: '0px auto 0px auto',
            borderRadius: '10px',
            background: 'radial-gradient(rgb(203, 196, 180), rgb(203, 196, 180), #DDBC6F)',
        }

        //Sets the backgroud style
        let backdropStyle = {
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0px',
            left: '0px',
            zIndex: '9998',
            background: 'rgba(0, 0, 0, 0.3)'
        }

        return (
            <div>
                <div style={modalStyle}>{this.props.children}</div>
                <div style={backdropStyle} onClick={e => this.close(e)}/>
            </div>
        )
    }
}

//Generate the Modal for Advanced Search  
class Advanced extends React.Component {
    constructor(props) {
    super(props)
    this.state = { value: '', isModalOpen: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleDrop = this.handleChange.bind(this);
    this.handleAdvancedSearch =this.handleAdvancedSearch.bind(this);
    }

    /*Handles opening of modal*/
    openModal() {
        this.setState({ isModalOpen: true });
    }

    /*Handles closing of modal*/
    closeModal() {
        this.setState({ isModalOpen: false });
    }

    handleChange(event) { //Stores the user text box value
        var name = event.target.name;
        this.setState({ [name]: event.target.value });
    }

    handleDrop(event) { //Stores the user dropdown value
        var name = event.target.name;
        this.setState({ [name]: event.target.value });
    }

    /*Passes the data in advanced search form to the API then calls BookDisplay to render the results to the screen*/
    handleAdvancedSearch(event) { 
        this.closeModal();
        var searchParameters = ["subject", "rights", "title", "format", "collection", "state", "university", "language", "creator", "date"];
        var searchType;
        var userInput;
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
  
        for (var i = 0; i < searchParameters.length; i++)
        {
          searchType = searchParameters[i]
          userInput = this.state[searchType]; 
          this.setState({ [searchType]: '' });
          if (userInput !== "" && userInput !== undefined && userInput !== 'ALL')
            formData[searchType] = userInput;
        }
        console.log(formData);
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
  
        ReactDOM.render(<Books view="componentView" results={results}/>, document.getElementById('root')); 
        event.preventDefault();
    }
    

    /*Get lists for format, state, date, and language dropdown boxes*/
    getFormats(){
        var result =ApiWrapper.getFormatFacet();
        var formatlist=[];
        var formatFacets=result.facets["sourceResource.format"].terms;
   
        //adds items from "format" facets to the drop down box if it's not already there 
        for(var i=0; i<formatFacets.length; i++){
            if(formatlist.indexOf(result)<0)
                formatlist[i]=formatFacets[i].term;
        }

        //organizes the formats in dropdown box in ascending order 
        formatlist.sort();
        return formatlist;
    }
    
    getStates(){
        var stateList = [];
        var result = ApiWrapper.getLocationFacet();
        var stateFacets=result.facets["sourceResource.spatial.state"].terms;
        
        //places all states from states facets in the statelist list if it's not already there 
        for(var i = 0; i<stateFacets.length; i++){
            if(stateList.indexOf(result)<0)
                stateList[i] = stateFacets[i].term;
        }
                
        //organizes the states in dropdown box in ascending order 
        stateList.sort();
        return stateList;
    }
    
    getDates(){
        var datelist=[];
        var year;
        var result = ApiWrapper.getDateBeforeFacet();
        var dateFacets=result.facets["sourceResource.date.begin"].entries;
        
        //adds all dates to the datelist list if it's not already there 
        for(var i = 0; i<dateFacets.length; i++){
            //takes only the year from the date rather than month and day too
            year = dateFacets[i].time[0] + dateFacets[i].time[1] + dateFacets[i].time[2] + dateFacets[i].time[3];
            if(datelist.indexOf(year)<0)
                datelist[i] = year;
        }
        
        //organizes the dates in dropdown box in ascending order 
        datelist.sort();
        return datelist;
    }
    
    getLanguages(){
        var languagelist=[];
        var result =ApiWrapper.getLanguageFacet();
        var languageFacets=result.facets["sourceResource.language.name"].terms;      
        
        //adds all dates to languagelist list if it's not already there 
        for(var i = 0; i < languageFacets.length; i++){
            if(languagelist.indexOf(result)<0)
                languagelist[i]=languageFacets[i].term;
        }

        //organizes the languages in dropdown box in ascending order 
        languagelist.sort();
        return languagelist;
    }

    getUniversities(){
        var universitylist=[];
        var result =ApiWrapper.getUniversityFacet();
        var universityFacets=result.facets["admin.contributingInstitution"].terms;      
        
        //adds all dates to universitylist list if it's not already there 
        for(var i = 0; i < universityFacets.length; i++){
            if(universitylist.indexOf(result)<0)
            universitylist[i]=universityFacets[i].term;
        }

        //organizes the universities in dropdown box in ascending order 
        universitylist.sort();
        return universitylist;
    }
        
    render(){
        /*Renders the form in the modal*/
        return(
            <div className="inLine">
                <button className="advancedButton" onClick={() => this.openModal()}>Filtered Search</button>
                <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                    <h1 className="headerModal"><b>Filtered Search</b></h1>
                    <table className='tableModal'> 
                        <tbody>
                            <tr><td>&nbsp;</td></tr>
                            <tr className="tableRowModal">
                                <td><b><p>Subject:</p></b></td>
                                <td><input className="textBoxModal" type="text" aria-label="Subject Search Box"  name="subject" value={this.state.name} onBlur={this.handleChange}/></td>
                            </tr>
                            <tr className="tableRowModal">
                                <td><b><p>Title:</p></b></td>
                                <td><input className="textBoxModal" type="text" aria-label="Title Search Box"  name="title" value={this.state.name} onBlur={this.handleChange}/></td>
                            </tr>
                            <tr className="tableRowModal">
                                <td><b><p>Language:</p></b></td>
                                <td>    
                                    <select className="dropDownModal" name="language" aria-label="Language Drop Down" onBlur={this.handleDrop} defaultValue="ALL">
                                        <option value="ALL">--Select a Language--</option>
                                        {       
                                            this.getLanguages().map(function(languages){
                                                return <option key={languages} value={languages}>{languages}</option>;
                                            })
                                        }
                                    </select>   
                                </td>
                            </tr>
                            <tr className="tableRowModal">
                                <td><b><p>Rights:</p></b></td>
                                <td><input className="textBoxModal" type="text"  name="rights" aria-label="Rights Search Box" value={this.state.name} onBlur={this.handleChange}/></td>
                            </tr>
                            <tr className="tableRowModal">
                                <td><b><p>Format:</p></b></td>
                                <td>  
                                    <select name="format" className="dropDownModal" aria-label="Format Drop Down" onBlur={this.handleDrop} defaultValue="ALL">
                                        <option value="ALL">--Select a Format--</option>
                                        {
                                            this.getFormats().map(function(formats){
                                                return <option key={formats} value={formats}>{formats}</option>;
                                            })
                                        }
                                    </select>
                                </td>
                            </tr>
                            <tr className="tableRowModal">
                                <td><b><p>Collection:</p></b></td>
                                <td><input className="textBoxModal" type="text"  name="collection" aria-label="Collection Search Box" value={this.state.name} onBlur={this.handleChange}/></td>
                            </tr>
                            <tr className="tableRowModal">
                                <td><b><p>Location:</p></b></td>
                                <td>                   
                                    <select name="state" className="dropDownModal" aria-label="State Drop Down" onBlur={this.handleDrop} defaultValue="ALL">
                                        <option value="ALL">--Select a Location--</option>
                                        {
                                            this.getStates().map(function(states){
                                                return <option key={states} value={states}>{states}</option>;
                                            })
                                        }
                                    </select>
                                </td>
                            </tr>
                            <tr className="tableRowModal">
                                <td><b><p>University:</p></b></td>
                                <td>                   
                                    <select name="university" className="dropDownModal" aria-label="University Drop Down" onBlur={this.handleDrop} defaultValue="ALL">
                                        <option value="ALL">--Select a University--</option>
                                        {
                                            this.getUniversities().map(function(university){
                                                return <option key={university} value={university}>{university}</option>;
                                            })
                                        }
                                    </select>
                                </td>
                            </tr>
                            <tr className="tableRowModal">
                                <td><b><p>Author:</p></b></td>
                                <td><input className="textBoxModal" type="text"  name="author" aria-label="Author Search Box" value={this.state.name} onBlur={this.handleChange}/></td>
                            </tr>
                            <tr className="tableRowModal">
                                <td><b><p>Date:</p></b></td>
                                <td>
                                    <select name="date" className="dropDownModal" aria-label="Date Drop Down" onBlur={this.handleDrop} defaultValue="ALL">
                                        <option value="ALL">--Select a Date--</option>
                                        {
                                            this.getDates().map(function(dates){
                                                return <option key={dates} value={dates}>{dates}</option>;
                                            })
                                        }
                                    </select>
                                </td>
                            </tr>
                            <tr><td>&nbsp;</td></tr>
                        </tbody>
                    </table>
                    <div>
                        <button className='closeModal pull-right' onClick={() => this.closeModal()}>Close</button>
                        <input className='submitModal pull-right' type="submit" name="subject" value="Submit" onClick={this.handleAdvancedSearch}/>
                    </div>
                </Modal>
            </div>            
        );
    }
}

export default Advanced;