import React from 'react';
import {connect} from 'react-redux';
import { Button, Modal, Table, Form, FormGroup, FormControl, ControlLabel, Col , Checkbox, DropdownButton, MenuItem} from 'react-bootstrap';
import {getProjects, addNewProject} from '../actions/ProjectActions.js';
import {getUsers} from '../actions/UsersActions.js';

export class Header extends React.Component{
	
	
	
	render(){
		if(this.props.ProjectsReducer.project.name === null){
			return "";
		}
		return(
				<h2>{this.props.ProjectsReducer.project.name }</h2>
		)
	}
}
const mapStateToProps = state => state

export default connect( mapStateToProps)(Header)
