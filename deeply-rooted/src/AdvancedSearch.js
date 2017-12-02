import React from 'react';
import ReactDOM from 'react-dom';
import './Display.css';
import ApiWrapper from './ApiWrapper.js';
import Books from './DisplayBook.js';


class Modal extends React.Component {
    render() {
        if (this.props.isOpen === false)
        return null

        let modalStyle = {
        position: 'absolute',
        textAlign: 'left',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '9999',
        background: '#fff',
        height: 'auto',
        margin: '0px auto 0px auto',
        borderRadius: '10px',
        background: 'radial-gradient(rgb(203, 196, 180), rgb(203, 196, 180), #DDBC6F)',
        }

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

    close(e) {
        e.preventDefault()
        if (this.props.onClose) {
            this.props.onClose()
        }
    }
}

class Advanced extends React.Component {
    constructor(props) {
    super(props)
    this.state = { value: '', isModalOpen: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleDrop = this.handleChange.bind(this);
    this.handleAdvancedSearch =this.handleAdvancedSearch.bind(this);
    }

    /*Handles opening and closing of modal*/
    openModal() {
        this.setState({ isModalOpen: true })
    }

    closeModal() {
        this.setState({ isModalOpen: false })
    }

    handleChange(event) { //Stores the user input value
        var name = event.target.name;
        this.state[name] = event.target.value;
    }

    handleDrop(event) {
        var name = event.target.name;
        this.state[name] = event.target.value;
    }

    /*Handles api call for advanced search*/
    handleAdvancedSearch(event) { 
        this.closeModal();

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
        
    render(){
        return(
            <div className="inLine">
                <button className="advancedButton" onClick={() => this.openModal()}>Advanced Search</button>
                <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                    <h1 className="headerModal"><b>Advanced Search</b></h1>
                    <table className='tableModal'> 
                        <tbody>
                            <tr><td>&nbsp;</td></tr>
                            <tr className="tableRowModal">
                                <td><b><p>Subject:</p></b></td>
                                <td><input className="textBoxModal" type="text"  name="subject" value={this.state.name} onChange={this.handleChange}/></td>
                            </tr>
                            <tr className="tableRowModal">
                                <td><b><p>Title:</p></b></td>
                                <td><input className="textBoxModal" type="text"  name="title" value={this.state.name} onChange={this.handleChange}/></td>
                            </tr>
                            <tr className="tableRowModal">
                                <td><b><p>Language:</p></b></td>
                                <td>    
                                    <select className="dropDownModal" name="language" onChange={this.handleDrop} defaultValue="ALL">
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
                                <td><input className="textBoxModal" type="text"  name="rights" value={this.state.name} onChange={this.handleChange}/></td>
                            </tr>
                            <tr className="tableRowModal">
                                <td><b><p>Format:</p></b></td>
                                <td>  
                                    <select name="format" className="dropDownModal" onChange={this.handleDrop} defaultValue="ALL">
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
                                <td><input className="textBoxModal" type="text"  name="collection" value={this.state.name} onChange={this.handleChange}/></td>
                            </tr>
                            <tr className="tableRowModal">
                                <td><b><p>Location:</p></b></td>
                                <td>                   
                                    <select name="state" className="dropDownModal" onChange={this.handleDrop} defaultValue="ALL">
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
                                <td><b><p>Author:</p></b></td>
                                <td><input className="textBoxModal" type="text"  name="author" value={this.state.name} onChange={this.handleChange}/></td>
                            </tr>
                            <tr className="tableRowModal">
                                <td><b><p>Date:</p></b></td>
                                <td>
                                    <select name="date" className="dropDownModal" onChange={this.handleDrop} defaultValue="ALL">
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