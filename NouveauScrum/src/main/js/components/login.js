import React from 'react';
import {connect} from 'react-redux';
import { Button, Modal, Form, FormGroup, FormControl, ControlLabel, Col , Checkbox} from 'react-bootstrap';
import {getUsers, registerUser, loginUser} from '../actions/UsersActions.js';
import { Redirect } from 'react-router-dom';

export class Login extends React.Component{
	
	constructor(props, context) {
	    super(props, context);

	    this.handleHide = this.handleHide.bind(this);
	    this.handleChange = this.handleChange.bind(this);
	    this.register = this.register.bind(this);
	    this.login = this.login.bind(this);
	    this.renderRedirect = this.renderRedirect.bind(this);

	    this.state = {
	      show: false,
	      firstName: '',
	      lastName: '',
	      email: '',
	      password: '',
	      emailR: '',
	      passwordR: '', 
	      redirect: false
	    
	    };
	  }
	
	componentWillMount(){
		
		 this.props.getUsers();
		
	}
	renderRedirect(){
		if (this.state.redirect) {
		      return <Redirect to='/home' />
		    }
	}
	
	handleHide() {
	    this.setState({ show: false });
	   
	  }
	 handleChange(e) {
		    this.setState({ [e.target.name]: e.target.value });
		  }
	 register(){
		 
		 const {firstName, lastName, emailR, passwordR } = this.state;
		 if(firstName === '' || lastName === '' || emailR === '' || passwordR === ''){
			 alert('Must fill all fields before proceding with this action.');
		 }
		 else{
			 this.props.registerUser(firstName, lastName, emailR, passwordR);			 
		 }
		 
		 
	 }
	 login(){
		 const index = this.props.UsersReducer.users.findIndex(e => e.email === this.state.email);
		 
		 if (index === -1){
			 alert('No user with email' + this.state.email + '. Register, then try again.');
		 }
		 
		 else{
			 if(this.props.UsersReducer.users[index].password === this.state.password){
				 alert('logged in');
				 this.props.loginUser(this.props.UsersReducer.users[index]);
				 this.setState({redirect: true});

			 }
			 else{
				 alert('Incorrect Password');
			 }
		 }
	 }
	
	render(){
		
		//const { modalOpen, firstName, lastName, email, password } = this.state;
		const {getUsers} = this.props;
		
		return(
		<div >
			<br/>
			<Form >
			  
			<FormGroup controlId="formHorizontalEmail">
			    <Col componentClass={ControlLabel} sm={2}>
			      Email
			    </Col>
			    <Col sm={10}>
			      <FormControl type="email" placeholder="Email" name='email' value={this.state.email} onChange={this.handleChange}/>
			    </Col>
			  </FormGroup>
	
			  <FormGroup controlId="formHorizontalPassword">
			    <Col componentClass={ControlLabel} sm={2}>
			      Password
			    </Col>
			    <Col sm={10}>
			      <FormControl type="password" placeholder="Password" name='password' value={this.state.password} onChange={this.handleChange} />
			    </Col>
			  </FormGroup>
	
			  <FormGroup>
			    <Col smOffset={2} sm={10}>
			      <Button  onClick={this.login}>Sign in</Button>
			      
			      <Button 			          
			              onClick={() => this.setState({ show: true })}> Register </Button>
			    </Col>
			  </FormGroup>
			 
			</Form> 
			
			
			<Modal
	          show={this.state.show}
	          onHide={this.handleHide}
	          container={this}
			  bsSize='large'
	          aria-labelledby="contained-modal-title"
	        >
	          <Modal.Header closeButton>
	            <Modal.Title id="contained-modal-title">
	              Contained Modal
	            </Modal.Title>
	          </Modal.Header>
	          <Modal.Body>
			        <Form >
			        
			        <FormGroup controlId="formFirstName">
				    <Col componentClass={ControlLabel} sm={2}>
				      First Name
				    </Col>
				    <Col sm={10}>
				      <FormControl type="firstName" placeholder="First Name" name='firstName' value={this.state.firstName} onChange={this.handleChange}/>
				    </Col>
				  </FormGroup>
				  
				  <FormGroup controlId="formLastName">
				    <Col componentClass={ControlLabel} sm={2}>
				      Last Name
				    </Col>
				    <Col sm={10}>
				      <FormControl type="lastName" placeholder="Last Name" name='lastName' value={this.state.lastName} onChange={this.handleChange}/>
				    </Col>
				  </FormGroup> 
					  <FormGroup controlId="formEmail">
					    <Col componentClass={ControlLabel} sm={2}>
					      Email
					    </Col>
					    <Col sm={10}>
					      <FormControl type="email" placeholder="Email" name='emailR' value={this.state.emailR} onChange={this.handleChange}/>
					    </Col>
					  </FormGroup>
			
					  <FormGroup controlId="formPassword">
					    <Col componentClass={ControlLabel} sm={2}>
					      Password
					    </Col>
					    <Col sm={10}>
					      <FormControl type="password" placeholder="Password" name='passwordR' value={this.state.passwordR} onChange={this.handleChange}/>
					    </Col>
					  </FormGroup>
					 
			
					  <FormGroup>
					    <Col smOffset={2} sm={10}>
					      <Button onClick={this.register}>Register</Button>
					      
					    </Col>
					  </FormGroup>
					 
					</Form> 
					
	          </Modal.Body>
	          <Modal.Footer>
	            <Button onClick={this.handleHide}>Close</Button>
	          </Modal.Footer>
	        </Modal>
	        {this.renderRedirect()}
		</div>)
	}
}

	
const mapDispatchToProps = {
  getUsers, registerUser, loginUser,
}
	
const mapStateToProps = state => state


export default connect( mapStateToProps, mapDispatchToProps)(Login)



