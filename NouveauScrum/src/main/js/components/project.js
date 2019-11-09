import React from 'react';
import {connect} from 'react-redux';
import { Button, Modal, Table, Form, FormGroup, FormControl, ControlLabel, Col , Checkbox, DropdownButton, MenuItem} from 'react-bootstrap';
import {getProjects, addNewProject, setProject} from '../actions/ProjectActions.js';
import {getUsers} from '../actions/UsersActions.js';


export class Project extends React.Component{
	
	constructor(props, context) {
	    super(props, context);

	    this.handleHide = this.handleHide.bind(this);
	    this.handleChange = this.handleChange.bind(this);
	    this.renderRedirect = this.renderRedirect.bind(this);
	    this.createProject = this.createProject.bind(this);
	    this.selectProject = this.selectProject.bind(this);

	    this.state = {
	      show: false,
	      projectName:'',
	      description:'',
	      manager:'',
	      team:'',
	      redirect:false
	    };
	  }
	
	componentWillMount(){

		this.props.getProjects(this.props.UsersReducer.user.id);
		 		
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
	
	 createProject(){
		 const{projectName, description} = this.state;
		 this.props.addNewProject(projectName, description, this.props.UsersReducer.user.id);
		 this.props.getProjects(this.props.UsersReducer.user.id);
		 this.handleHide();
	 }
	 
	 selectProject(proj){
		 this.props.setProject(proj);
	 }
	 
	render(){
		
		const { modalOpen, pManager} = this.state;
		
		return(
				<div>
		<div >
			<br/>
						<ControlLabel> Current Projects </ControlLabel>
			
			<Table striped bordered condensed hover>
			  <thead>
			    <tr>
			      <th>Project Name</th>
			      <th>Description</th>
			      <th/>
			    </tr>
			  </thead>
			  
			  <tbody>
			  {this.props.ProjectsReducer.projects && this.props.ProjectsReducer.projects.map((proj) => {
		    		return (<tr key={proj.id}>
				      <td>{proj.name}</td>
				      <td>{proj.description}</td>
				      <td><Button onClick={() => this.selectProject(proj)}>Select this project </Button></td>
				    </tr>)
		      })}
			  
			  </tbody>
			</Table>
			<br/>
			<br/>
			<Button onClick ={()=>this.setState({show:true})}>Create Project</Button>
			

	
		</div>
		<div>
		<Modal
        show={this.state.show}
        onHide={this.handleHide}
        container={this}
		bsSize='large'
        aria-labelledby="contained-modal-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">
            Create Project
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
		        <Form >
		        
		        <FormGroup controlId="formName">
			    <Col componentClass={ControlLabel} sm={2}>
			      Project Name
			    </Col>
			    <Col sm={5}>
			      <FormControl type="projectName" placeholder="Project Name" name='projectName' value={this.state.projectName} onChange={this.handleChange}/>
			    </Col>
			  </FormGroup>
			  <br/>
			  <br/>
			  <FormGroup controlId="formDescrption">
			    <Col componentClass={ControlLabel} sm={2}>
			      Description
			    </Col>
			    <Col sm={6}>
			      <FormControl type="description" placeholder="Project Description" name='description' value={this.state.discription} onChange={this.handleChange}/>
			    </Col>
			  </FormGroup> 
			  <br/>
			  <br/>
				 
		</Form> 
				
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleHide}>Close</Button>
          <Button onClick={()=>this.createProject()}>Create</Button>
        </Modal.Footer>
      </Modal>
      {this.renderRedirect()}
		
		</div>
		</div>)
		
	}
}

	
const mapDispatchToProps = {
  getProjects, addNewProject, getUsers, setProject,
}
	
const mapStateToProps = state => state

export default connect( mapStateToProps, mapDispatchToProps)(Project)