import React from 'react';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import {Popover, ButtonToolbar, OverlayTrigger, Button} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

var ReactDOM = require('react-dom');
var ReactBsTable  = require('react-bootstrap-table');

class Table extends React.Component {




  
  render() {
    return (
      <BootstrapTable data={ products }>
        <TableHeaderColumn dataField='id' isKey>Book ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>state</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Book Title</TableHeaderColumn>
      </BootstrapTable>
    );
  }

}
export default Table;