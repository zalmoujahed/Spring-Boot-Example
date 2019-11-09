import React from 'react';
import {connect} from 'react-redux';
import { Button, Modal, Form, FormGroup, FormControl, ControlLabel, Col , Checkbox, DropdownButton, MenuItem} from 'react-bootstrap';
import {getProjects, addNewProject} from '../actions/ProjectActions.js';
import {getUsers} from '../actions/UsersActions.js';


export class Task extends React.Component{
	
	constructor(props, context) {
	    super(props, context);

	    this.handleHide = this.handleHide.bind(this);
	    this.handelChange = this.handleChange.bind(this);
	    this.renderRedirect = this.renderRedirect.bind(this);

	    this.state = {
	      show: false,
	      taskName:'',
	      description:'',
	      redirect:false
	    };
	  }
	
	componentWillMount(){
		 this.props.getProjects();
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
	
	render(){
		
		const { modalOpen } = this.state;
		const {getUsers} = this.props;
		
		
		return(
				<div>
		<div >
		
			<br/>
			<Form >
			
			<Button onClick ={()=>this.setState({show:true})}>Create Task</Button>
			<br/>
			<br/>
			<FormGroup>
			
			<ControlLabel>Current Tasks </ControlLabel>

			</FormGroup>
			
		   </Form>

		</div>
		<div>
		<Modal
        show={this.state.show}
        onHide={this.handleHide}
        container={this}
        aria-labelledby="contained-modal-title"
        bsSize='large'
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">
            Create Task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
		        <Form >
		        <FormGroup controlId="formName">
			    <Col componentClass={ControlLabel} sm={2}>
			      Task Name
			    </Col>
			    <Col sm={5}>
			      <FormControl type="taskName" placeholder="Task Name" name='taskName' value={this.state.taskName} onChange={this.handleChange}/>
			    </Col>
			  </FormGroup>
			  <br/>
			  <br/>
			  <br/>
			  <FormGroup controlId="formDescrption">
			    <Col componentClass={ControlLabel} sm={2}>
			      Description
			    </Col>
			    <Col sm={5}>
			      <FormControl type="description" placeholder="Project Description" name='description' value={this.state.discription} onChange={this.handleChange}/>
			    </Col>
			  </FormGroup> 
			 
				</Form> 		
        </Modal.Body>
        <Modal.Footer>
	      <Button onClick={this.register}>Create</Button>
          <Button onClick={this.handleHide}>Close</Button>
        </Modal.Footer>
      </Modal>
      {this.renderRedirect()}
		
		</div>
		</div>)
		
	}
}

	
const mapDispatchToProps = {
  getProjects, addNewProject, getUsers,
}
	
const mapStateToProps = state => state

export default connect( mapStateToProps, mapDispatchToProps)(Project)