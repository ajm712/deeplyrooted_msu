import React from 'react';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import {Popover, ButtonToolbar, OverlayTrigger, Button} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class Table extends React.Component {
  render() {
    return (
      <BootstrapTable data={ products }>
        <TableHeaderColumn dataField='id' isKey>Book ID</TableHeaderColumn>
        <TableHeaderColumn dataField='stateLocatedIn'>state</TableHeaderColumn>
        <TableHeaderColumn dataField='title'>Book Title</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

var React = require('react');
var ReactDOM = require('react-dom');
var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

var products = [{
      id: 1,
      name: "Product1",
      price: 120
  }, {
      id: 2,
      name: "Product2",
      price: 80
  }...];

ReactDOM.render(
  <BootstrapTable data={products} striped hover>
      <TableHeaderColumn isKey dataField='id'>Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
      <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
  </BootstrapTable>,
  document.getElementById('basic')
);