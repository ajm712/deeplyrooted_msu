# Deeply Rooted Web Application

Welcome to the Deeply Rooted Web Application repository

## Team Members
* [Will Lee](https://github.com/henryjr1)
* [Joseph Sumner](https://github.com/jjs451)
* [Will Nobles](https://github.com/willtnobles)
* [Kyra Johnson](https://github.com/kvj18)
* [Brandon Stone](https://github.com/brandonstone)
* [David Coley](https://github.com/DavidColey)
* [Dalton Webb](https://github.com/dcw293)
* [Michael Johnston](https://github.com/MichaelJohnston92)
* [Jack Brand](https://github.com/jwb623)
* [Savannah Goodin](https://github.com/slg427)
* [Damon Stamps](https://github.com/DStampsJr)
* [Teri Jackson](https://github.com/teriannaj)
* [Austin Markham](https://github.com/ajm712)

## Table of Contents

- [Introduction](#introduction)
- [What is ReactJS](#what-is-reactjs)
- [Setup and Use Instructions](#setup-and-use-instructions)
- [Accomplished Objectives](#accomplished-objectives)
- [Future Objectives](#future-objectives)
- [Potential Deployment](#potential-deployment)
- [Search Engine Optimization](#search-engine-optimization)
- [File and Class Descriptions](#file-and-class-descriptions)

## Introduction

The Deeply Rooted Web Application will allow users to efficiently search through books in the Deeply Rooted database and will display information about each book a user chooses. The application will be using the DPLA API and the React JavaScript Library.

## What is ReactJS

ReactJS natively renders

## Setup and Use Instructions

1. Download [node.js](https://nodejs.org/en/) in this case download the LTS version (Windows)

2. Follow the installation wizard and add nodejs to the ```C:\Program Files\nodejs``` directory

3. Create a folder in the C drive called ```DeeplyRooted``` on your machine

4. Navigate to the DeeplyRooted folder created earlier and clone the deeplyrooted_msu repository

5. At this point you should have to following file structure: ```C:\DeeplyRooted\deeply-rooted```

6. Open the command prompt or terminal and navigate to the deeply-rooted folder and type in the command ```npm install``` then press Enter
      - Make sure .gitignore exists and has npm_modules in the file

7. To start the server for local testing again navigate to to the deeply-rooted folder  and type in the command ```npm start``` then press Enter

      - After a few minutes your default browser should open and load the website. If this does not happen open a browser of your choice and go to the following url: ```http://localhost:3000/```

## Accomplished Objectives
 - Stuff
 - Stuff
 
## Future Objectives
 - Stuff
 - Stuff
 
## Potential Deployment
 - Stuff
 
## Search Engine Optimization
 - Stuff

## File and Class Descriptions 

- ### src/About_Page/components/About.js
     - Renders Code for the About page of the website.
     - Classes:
          - About - Returns the paragraph for About Page.   
- ### src/Adv_Search/components/AdvancedSearch.js
     - Renders Code for the Filtered Search button.
     - Classes:
          - Modal - Handles the opening, closing, positioning, sizing, and general stylings of the pop up modal.
	   - Advanced - Handles the creation of every text box/ drop down box on to the modal. Also handles the submission of the user input into the modal.
- ### src/Adv_Search/components/Form.js
     - Renders Code for the drop down box on the advanced search page.
     - Classes:
          - Form - Returns selection options for the drop down box (Subject, Title, Rights, etc). Once a selection is made this class calls the Textbox class in Textbox.js to render an appropriate textbox or drop down box for user input.  .
- ### src/Adv_Search/components/TextBox.js
     - Renders Code for the text boxes or drop down boxes that are adjacent to the (Subject, Title, etc.) drop boxes on the advanced search page.
     - Classes:
          - TextBox - Based on what the user selects (Subject, Title, etc.) this displays the appropriate accompaning text box or drop down box. It also handles user submission after a selection is made.
	        - Example - If the user selects Subject then it will be accompanied with a text box, but if the user selects State the it will be accompanied with a list of states in drop down box.
- ### src/Display/components/DisplayBook.js
     - Renders Code for two different ways to display books (component view or table view)
     - Classes:
          - Books - Handles several required features for displaying books. Allows the user to dynamically change the amount of books that is displayed on the screen at one time. Renders the pagination at the bottom of the page and handles user request to change pages. Calculates the total amount of pages for pagination by taking into account the total number of books and books per page. Toggles the display between component view and table view. Lastly, parses through the JSON returned from the api and sorts the data into readable formats.  
	   - BookDisplay - Takes the book data for the Books class and renders it on to the screen in a component format. The component view allows users to click on a book image to view a popover with more information about the book. This class not only populates the popover with data, but also auto rotates the orientation of the popover depending on window size and books per page. 
	    - TableDisplay - Takes the book data for the Books class and renders it on to the screen in a table format.
	     - NoResult - If there is no book data returned from the api then a default text is rendered on to the screen.	     
- ### src/Footer/components/Footer.js
     - Renders Code for the footer at the bottom of the website.
     - Classes:
          - Footer - Returns the text and stylings for footer.  
- ### src/Header/components/Hamburger.js
     - Renders Code for the hamburger menu at the top left of the website.
     - Classes:
          - Hamburger - Handles the opening and closing of the menu; in addition, it handles all of the button selections. 
	   - Example - When the user selects the about button the menu closes then renders the about class on to the screen and removes any other classes that were previously rendered.
	    - When a user selects the Advanced_Search button it first calls all data for the dropdown boxes on the advanced search page so that the data only has to be called once. ***This may slow down the Advanced Search page load times due to internet connection speeds and api connection speed***
- ### src/Header/components/Header.js
     - Renders Code for the header at the top of the website.
     - Classes:
          - Header - Returns the text and stylings for header. 
- ### src/Header/components/NavBar.js
     - Renders Code that handles the alignment of both the hamburger and searchbar.
     - Classes:
          - NavBar - Returns the hamburger menu, which is aligned left and searchbar, which is aligned right. 
- ### src/Header/components/SearchBar.js
     - Renders Code for the search bar at the top of the website.
     - Classes:
          - SearchBar - Renders a search bar on to the website and handles searches from the user input.
- ### src/Home_Page/components/Home.js
     - Renders Code for the Home page of the website.
     - Classes:
          - Home - Returns the paragraph and image for Home Page. 
- ### src/Services/components/ApiWrapper.js
     - Handles all api calls to the DPLA api used throughout the website
     - Classes:
          - ApiWrapper - Takes several parameters from the user and requests that particular information from the api and if there is no input for that field then it defaults to an empty string.
	   - Example - If the user selects the state Alaska then ApiWrapper requests all deeply rooted books from Alaska and returns taht data. The other fields that did not contain user input defaults to "" and is not passed in the api request. 
	   - There are several classes getLocation, getLanguage, getFormat, getDate, and getUniversity that is used for drop down boxes on the website. These functions return all possible terms for a particualr field up to 2000 items
	    - Example - getLocation calls for all possible states that contain deeply rooted material and returns this list.
- ### src/Services/components/RandomSelection.js
     - Displays a random selection of books to the screen.
     - Classes:
          - RandomButton - Calls all books in the deeply rooted api and selects a random page from out of that selection then returns those results. 
- ### src/Services/components/registerServiceWorker.js
     - This file was generated with the default reactJS folder structure. It is supposed to store local cache to help with loading times during subsequent visits to the site.
- ### src/Images/
     - This folder contains several images used throughout the website.
- ### src/index.js 
     - Renders the default classes onto the screen when the application is first loaded
     - In this case we render the Header, NavBar, Home, and Footer classes.
- ### public/index.html
     - ***Only HTML document on the website***
     - Creates several ids that are required for the other classes into the document to be rendered onto the screen.
     - Example - The TextBox class is rendered on to the text-box id and Form class is rendered on to the drop-box id
     - Also adds bootstrap themes to all other classes rendered to an id 
