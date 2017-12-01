import React, { Component } from 'react';
import ApiWrapper from './ApiWrapper';
import './Display.css';


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
        borderRadius: '10px'
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
                <div style={backdropStyle} onClick={e => this.close(e)}/>}
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

class Advanced extends Component {
    constructor(props) {
    super(props)
    this.state = { isModalOpen: false }
    }
    
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
    
    openModal() {
        this.setState({ isModalOpen: true })
    }

    closeModal() {
        this.setState({ isModalOpen: false })
    }
    
    render(){
        return(
            <div>
                <div>
                    <button onClick={() => this.openModal()}>Advanced Search</button>
                    <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                        <div>
                            <table className='tableModal'> 
                                <tr>
                                    <td><b>Subject:</b></td>
                                    <td><input className="textBoxModal" type="text"  name="subject" value={this.state.name} onChange={this.handleChange}/></td>
                                </tr>
                                <tr>
                                    <td><b>Title:</b></td>
                                    <td><input className="textBoxModal" type="text"  name="title" value={this.state.name} onChange={this.handleChange}/></td>
                                </tr>
                                <tr>
                                    <td><b>Language:</b></td>
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
                                <tr>
                                    <td><b>Rights:</b></td>
                                    <td><input className="textBoxModal" type="text"  name="rights" value={this.state.name} onChange={this.handleChange}/></td>
                                </tr>
                                <tr>
                                    <td><b>Format:</b></td>
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
                                <tr>
                                    <td><b>Collection:</b></td>
                                    <td><input className="textBoxModal" type="text"  name="collection" value={this.state.name} onChange={this.handleChange}/></td>
                                </tr>
                                <tr>
                                    <td><b>Location:</b></td>
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
                                <tr>
                                    <td><b>Author:</b></td>
                                    <td><input className="textBoxModal" type="text"  name="author" value={this.state.name} onChange={this.handleChange}/></td>
                                </tr>
                                <tr>
                                    <td><b>Date:</b></td>
                                    <td>
                                        <select name="date" className="dropDownModal" onChange={this.handleDrop} defaultValue="ALL">
                                            <option value="ALL">--Select a Date--</option>
                                            {
                                                this.getDates().map(function(dates){
                                                    return <option value={dates}>{dates}</option>;
                                                })
                                            }
                                        </select>
                                    </td>
                                </tr>
                            </table>
                            <br />
                            <center>
                                <input className='submitModal' type="submit" name="subject" value="Submit" onClick={this.handleSubmit}/>
                                <button className='closeModal' onClick={() => this.closeModal()}>Close</button>
                            </center>
                        </div> 
                    </Modal>
                </div>            
            </div>
        );
    }
}

export default Advanced;