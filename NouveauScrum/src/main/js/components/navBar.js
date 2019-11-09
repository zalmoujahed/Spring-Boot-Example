import React from 'react';
import {connect} from 'react-redux';
import { Button, Modal,Col , Checkbox, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {getUsers} from '../actions/UsersActions.js';
import Project from './project.js';
import { Redirect } from 'react-router-dom';

export class NavBar extends React.Component{
	
	constructor(props, context) {
	    super(props, context);
	    this.Link = this.Link.bind(this);
	    //this.trigger = this.trigger.bind(this);
	    
	    this.state = {
	      show: false,
	      redirect:false,
	      link:'/'
	    };
	  }
	
	
	renderRedirect(){
		if (this.state.redirect) {
		      return <Redirect to={this.state.link} />
		    }
	}
	
	
	Link(link) {

		this.setState({link, redirect: true});
		
	  }

	
	render(){
		
		if(this.props.ProjectsReducer.project.name === null){
			return (
				<br/>
			)
		}
		
		return(
		<div >
	      <Nav bsStyle="tabs" activeKey="1" >
	        <NavItem onClick={()=> this.Link('/home')}>
	          Projects
	        </NavItem>
	        <NavItem onClick={()=> this.Link('/sandbox')} >
	          Sandbox
	        </NavItem>
		        <NavItem onClick={()=> this.Link('/backlog')} >
		          Backlog
		        </NavItem>
		          <NavItem onClick={()=> this.Link('/sprints')} >
		          Sprints
		        </NavItem>
	        <NavDropdown eventKey="5" title="Menu" id="nav-dropdown">
	          <MenuItem eventKey="home">Action</MenuItem>
	          <MenuItem divider />
	          <MenuItem eventKey="exit">Separated link</MenuItem>
	        </NavDropdown>
	      </Nav>			
	      {this.renderRedirect()}
	      
		</div>)
		
	}
}

const mapStateToProps = state => state

export default connect( mapStateToProps)(NavBar)
