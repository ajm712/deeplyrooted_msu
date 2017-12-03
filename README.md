# Deeply Rooted Web Application

Welcome to the Deeply Rooted Web Application repo

### Team Members
* [Will Lee](https://github.com/henryjr1)
* [Joseph Sumner](https://github.com/jjs451)
* [Will Nobles](https://github.com/willtnobles)
* [Kyra Johnson](https://github.com/kvj18)
* [Brandon Stone](https://github.com/brandonstone)
* [David Coley](https://github.com/DavidColey)
* [Dalton Webb](https://github.com/dcw293)
* [Michael Johnston](https://github.com/MichaelJohnston92)
* [Jack Brand](https://github.com/jwb623)

## Table of Contents

- [Introduction](#introduction)
- [Setup and Use Instructions](#setup-and-use-instructions)
- [Class Descriptions](#class-descriptions)

## Introduction

The Deeply Rooted Web Application will allow users to efficiently search through books in the Deeply Rooted database and will display information about each book a user chooses. The application will be using the DPLA API and the React JavaScript Library.

## Setup and Use Instructions

1. Download node.js (using 64 bit Windows in this case, get the .zip)

2. Extract the download to C:\deeplyrooted

3. At this point your folder should look like this
	* Deeplyrooted
		* etc
		* node_module
		* node.exe
		* and so on

4. Add C:\deeplyrooted to your system PATH

5. Clone the repo in C:\deeplyrooted

6. Run ```npm install -g create-react-app``` and ```create-react-app deeplyrooted_msu``` while in C:\deeplyrooted (this will take a while)
	* This will create some source files and overwrite any checked out source files.  Pull from the repo to make sure the src folder is up to date

7. You’ll now have a folder “C:\deeplyrooted\deeply-rooted”

8. To start the server for local testing, navigate to “C:\deeplyrooted\deeply-rooted” and run “npm start”

9. Make sure .gitignore exists and has npm_modules in the file.  Node should have done this for you

10. Also run these commands inside C:\deeplyrooted\deeply-rooted: 
	```npm install jquery```
	```npm install --save react react-dom```
	```npm install --save react-bootstrap```
	```npm install --save react-bootstrap-table```
	```npm install --save font-awesome```
	```npm install --save grid-gallery```
	```npm install --save jquery```
	```npm install --save react-burger-menu```
	```npm install --save react-popper```

## Class Descriptions 

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
