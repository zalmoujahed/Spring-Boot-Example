import React from 'react';
import {connect} from 'react-redux';
import { Button, Modal,Col , Checkbox, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {getUsers} from '../actions/UsersActions.js';
import Story from './story.js';

export class Sandbox extends React.Component{
	
		
	render(){
		
		
		return(
		<div >
	      <Story/>
		</div>)
		
	}
}

const mapStateToProps = state => state

export default connect( mapStateToProps)(Sandbox)
