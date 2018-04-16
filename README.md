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
- [Setup and Use Instructions](#setup-and-use-instructions)
- [File and Class Descriptions](#file-and-class-descriptions)

## Introduction

The Deeply Rooted Web Application will allow users to efficiently search through books in the Deeply Rooted database and will display information about each book a user chooses. The application will be using the DPLA API and the React JavaScript Library.

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

## File and Class Descriptions 

- About.js - Information for the About page
- AdvancedSearch.js -  Creates the advanced search modal
- ApiWrapper.js	- Pulls data from the DPLA API and returns them as a json object
- DisplayBook.js - Displays books and its corresponding information based on api call results
- Footer.js	- Footer at the bottom of each page
- Form.js - Class that renders a dropdown box of the categories
- Hamburger.js - Hamburger sidebar on each page
- Header.js	- Header for each page
- Home.js - The home page of the application
- indext.js - Renders the default classes onto the screen when the application is first loaded
- NavBar.js - Navigation bar at the top of the screen of each page
- SearchBar.js - Search Bar is the class that renders the search bar in each page
- TextBox.js - Text Box allows the user to change what category they are searching for

	*files inside of C:\deeplyrooted\deeply-rooted\src*
