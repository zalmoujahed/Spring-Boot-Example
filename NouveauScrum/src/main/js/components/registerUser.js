import React from 'react';
import {connect} from 'react-redux';
import { Button, Modal, Form, FormGroup, FormControl, ControlLabel, Col , Checkbox} from 'react-bootstrap';
import {getUsers} from '../actions/UsersActions.js';


export class RegisterModal extends React.Component{
	
	constructor(props, context) {
	    super(props, context);

	    this.handleHide = this.handleHide.bind(this);

	    this.state = {
	      show: false
	    };
	  }
	
	
	
	handleHide() {
	    this.setState({ show: false });
	   
	  }
	
	render(){
		
		const { modalOpen } = this.state;
		const { show } = this.props;
		
		return(
		<div >
			
			
			<Modal
	          show={this.props.show}
	          onHide={this.handleHide}
	          container={this}
	          aria-labelledby="contained-modal-title"
	        >
	          <Modal.Header closeButton>
	            <Modal.Title id="contained-modal-title">
	              Register New User
	            </Modal.Title>
	          </Modal.Header>
	          
	          <Modal.Body>
			        
	          <Form >
			        
			        <FormGroup controlId="formFirstName">
				    <Col componentClass={ControlLabel} >
				      First Name
				    </Col>
				    <Col sm={5}>
				      <FormControl type="firstName" placeholder="First Name" />
				    </Col>
				  </FormGroup>
				  
				  <FormGroup controlId="formLastName">
				    <Col componentClass={ControlLabel} >
				      Last Name
				    </Col>
				    <Col >
				      <FormControl type="lastName" placeholder="Last Name" />
				    </Col>
				  </FormGroup> 
					  <FormGroup controlId="formEmail">
					    <Col componentClass={ControlLabel} >
					      Email
					    </Col>
					    <Col >
					      <FormControl type="email" placeholder="Email" />
					    </Col>
					  </FormGroup>
			
					  <FormGroup controlId="formPassword">
					    <Col componentClass={ControlLabel} >
					      Password
					    </Col>
					    <Col >
					      <FormControl type="password" placeholder="Password" />
					    </Col>
					  </FormGroup>
					  
					  
			
					  <FormGroup>
					    <Col smOffset={2} sm={10}>
					      <Button type="submit">Register</Button>
					      
					    </Col>
					  </FormGroup>
					 
					</Form> 
					
	          </Modal.Body>
	          <Modal.Footer>
	            <Button onClick={this.handleHide}>Close</Button>
	          </Modal.Footer>
	        </Modal>
			
		</div>)
	}
}

	

const mapDispatchToProps = {
  getUsers,
}
	
const mapStateToProps = state => state

export default connect( mapStateToProps, mapDispatchToProps)(RegisterModal)



