import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Button, ButtonToolbar} from 'react-bootstrap';
import Books from '../../Display/components/DisplayBook.js';
import ApiWrapper from '../../Services/components/ApiWrapper.js';

class RandomButton{
    static random_select({page_size = 10} = {}) {
        var results = ApiWrapper.makeCall({page_size: page_size, page: "1"});        
        var maxNum = Math.floor(results.count/ page_size);        
        var randomPage = Math.floor(Math.random() * maxNum + 1);
        
        results = ApiWrapper.makeCall({page_size: page_size, page: randomPage.toString()});     

        return results;
    }
}

export default RandomButton;