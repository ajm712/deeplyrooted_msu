import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { slide as Menu } from 'react-burger-menu';
import {Button} from 'react-bootstrap';
import About from '../../About_Page/components/About.js';
import Home from '../../Home_Page/components/Home.js';
import ApiWrapper from '../../Services/components/ApiWrapper.js';
import Books from '../../Display/components/DisplayBook.js';
import Advanced from '../../Adv_Search/components/AdvancedSearch.js';
import TextBox from '../../Adv_Search/components/TextBox.js';
import Form from '../../Adv_Search/components/Form.js';
import RandomSelection from '../../Services/components/RandomSelection.js';
import '../styles/Hamburger.css';
import Questions from '../../Faq_Page/components/Questions.js';


//Creates and handles selections made on the hamburger menu
class Hamburger extends Component {
    constructor(props) {
        super(props)
        this.state = { isMenuOpen: false };
        this.about = this.about.bind(this);
        this.home = this.home.bind(this);
        this.adv_search = this.adv_search.bind(this);
        this.rand_book = this.rand_book.bind(this);
        this.questions = this.questions.bind(this);
    }

        /*Get lists for format, state, date, and language dropdown boxes*/
        getLists(){
            //Calls several facets from the api
            var resultFormat =ApiWrapper.getFormatFacet();
            var resultDate = ApiWrapper.getDateBeforeFacet();
            var resultLocation = ApiWrapper.getLocationFacet();
            var resultLanguage =ApiWrapper.getLanguageFacet();
            var resultUniversity =ApiWrapper.getUniversityFacet();

            //Parses through each facet api call
            var formatFacets=resultFormat.facets["sourceResource.format"].terms;
            var dateFacets=resultDate.facets["sourceResource.date.begin"].entries;
            var stateFacets=resultLocation.facets["sourceResource.spatial.state"].terms;
            var languageFacets=resultLanguage.facets["sourceResource.language.name"].terms; 
            var universityFacets=resultUniversity.facets["admin.contributingInstitution"].terms; 

            //Declares several empty lists for facet storage
            var formatlist=[];
            var datelist=[];
            var stateList = [];
            var languagelist=[];
            var universitylist=[];
            var year = [];
            var i = 0;

            //adds items from "format" facets to the drop down box if it's not already there 
            for(i=0; i<formatFacets.length; i++){
                if(formatlist.indexOf(resultFormat)<0)
                    formatlist[i]=formatFacets[i].term;
            }
      
            //places all states from states facets in the statelist list if it's not already there 
            for(i = 0; i<stateFacets.length; i++){
                if(stateList.indexOf(resultLocation)<0)
                    stateList[i] = stateFacets[i].term;
            }
                        
            //adds all dates to the datelist list if it's not already there 
            for(i = 0; i<dateFacets.length; i++){
                //takes only the year from the date rather than month and day too
                year = dateFacets[i].time[0] + dateFacets[i].time[1] + dateFacets[i].time[2] + dateFacets[i].time[3];
                if(datelist.indexOf(year)<0)
                    datelist[i] = year;
            }
                        
            //adds all dates to languagelist list if it's not already there 
            for(i = 0; i < languageFacets.length; i++){
                if(languagelist.indexOf(resultLanguage)<0)
                    languagelist[i]=languageFacets[i].term;
            }     
            
            //adds all dates to universitylist list if it's not already there 
            for(i = 0; i < universityFacets.length; i++){
                if(universitylist.indexOf(resultUniversity)<0)
                universitylist[i]=universityFacets[i].term;
            }
      
            //organizes the lists in dropdown box in ascending order 
            formatlist.sort();
            datelist.sort(); 
            stateList.sort();
            languagelist.sort();
            universitylist.sort();

            //returns all lists
            return {
                getFormats: formatlist,
                getStates: stateList, 
                getDates: datelist, 
                getLanguages: languagelist, 
                getUniversities: universitylist,
            }
        }

    //Closes the hamburger menu
    closeMenu() {
        this.setState({ isMenuOpen: false })
    }

    //Renders appropriate components to the screen for the about page
    about() {
        this.closeMenu();
        ReactDOM.render(<About />, document.getElementById('root'));
        ReactDOM.unmountComponentAtNode(document.getElementById('text-box'));
        ReactDOM.unmountComponentAtNode(document.getElementById('dropbox'));
        ReactDOM.unmountComponentAtNode(document.getElementById('adv_search'));
    }

    //Renders appropriate components to the screen for the home page
    home() {
        this.closeMenu();
        ReactDOM.render(<Home />, document.getElementById('root'));
        ReactDOM.unmountComponentAtNode(document.getElementById('text-box'));
        ReactDOM.unmountComponentAtNode(document.getElementById('dropbox'));
        ReactDOM.unmountComponentAtNode(document.getElementById('adv_search'));  
    }

    //Renders appropriate components to the screen for the advanced search page
    adv_search() {
        this.closeMenu();
        var results = ApiWrapper.makeCall({language:"english", page_size: "30", page: "1"});
        var getLists = this.getLists();
        ReactDOM.render(<Form />, document.getElementById('dropbox'));
        ReactDOM.render(<TextBox Lists={getLists} selection="Subject"/>, document.getElementById('text-box'));
        ReactDOM.render(<Books Lists={getLists} view="componentView" results={results} pageSize= "30"/>, document.getElementById('root'));
        ReactDOM.render(<Advanced Lists={getLists} />, document.getElementById('adv_search'));
    }

    rand_book() {
        this.closeMenu();
        var results = RandomSelection.random_select({page_size: 30});
        ReactDOM.render(<Books view="componentView" results={results} pageSize= "30"/>, document.getElementById('root'));
        ReactDOM.unmountComponentAtNode(document.getElementById('text-box'));
        ReactDOM.unmountComponentAtNode(document.getElementById('dropbox'));
        ReactDOM.unmountComponentAtNode(document.getElementById('adv_search')); 
    }

    questions() {
        this.closeMenu();
        ReactDOM.render(<Questions />, document.getElementById('root'));
        ReactDOM.unmountComponentAtNode(document.getElementById('text-box'));
        ReactDOM.unmountComponentAtNode(document.getElementById('dropbox'));
        ReactDOM.unmountComponentAtNode(document.getElementById('adv_search'));
    }

    //Creates the burger menu and selection buttons
    render () {
        return (
            <div className="Hamburger">
                <Menu id="hamburger-menu" isOpen={ this.state.isMenuOpen }>
                    <Button className="btn_burger" onClick={this.home}>Home</Button>
                    <Button className="btn_burger" onClick={this.rand_book}>Random Selection</Button>
                    <Button className="btn_burger" onClick={this.adv_search}>Advanced Search</Button>
                    <Button className="btn_burger" onClick={this.about}>About</Button>
                    <Button className="btn_burger" onClick={this.questions}>FAQs</Button>
                </Menu>
            </div>
        );
    }
}

export default Hamburger;
