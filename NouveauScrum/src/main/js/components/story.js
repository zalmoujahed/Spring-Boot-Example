import React from 'react';
import {connect} from 'react-redux';
import { Button, Modal, Form, FormGroup, FormControl, ControlLabel, Col , Table, DropdownButton, MenuItem} from 'react-bootstrap';
import {getStories, addNewStory, setStory} from '../actions/StoryActions.js';



export class Story extends React.Component{
	
	constructor(props, context) {
	    super(props, context);

	    this.handleHide = this.handleHide.bind(this);
	    this.handleChange = this.handleChange.bind(this);
	    this.createStory = this.createStory.bind(this);
	    this.selectStory = this.selectStory.bind(this);
	    this.state = {
	      show: false,
	      storyName:'',
	      description:''
	    };
	  }
	
	componentWillMount(){
		 this.props.getStories(this.props.ProjectsReducer.project.id);
		
	}

	
	handleHide() {
	    this.setState({ show: false });
	   
	  }
	 handleChange(e) {
		    this.setState({ [e.target.name]: e.target.value });
		  }
	 
	 createStory(){
		 this.props.addNewStory(this.state.storyName, this.state.description, this.props.ProjectsReducer.project.id);
		 this.props.getStories(this.props.ProjectsReducer.project.id);
		 this.handleHide();
	 }
	 
	 selectStory(story){
		 this.props.setStory(story);
	 }
	
	render(){
		
		const { modalOpen } = this.state;
		const {getUsers} = this.props;
		
		
		return(
				<div>
		<div >
		
			<br/>
					
			<ControlLabel>Current Stories </ControlLabel>
			<Table striped bordered condensed hover>
			  <thead>
			    <tr>
			      <th>Story Name</th>
			      <th>Description</th>
			      <th/>
			    </tr>
			  </thead>
			  
			  <tbody>
			  {this.props.StoryReducer.stories && this.props.StoryReducer.stories.map((story) => {
		    		return (<tr key={story.id}>
				      <td>{story.name}</td>
				      <td>{story.description}</td>
				      <td><Button onClick={() => this.selectStory(story)}>Select this Story </Button></td>
				    </tr>)
		      })}
			  
			  </tbody>
			</Table>
			
			<br/>
			<br/>
			
			<Button onClick ={()=>this.setState({show:true})}>Create Story</Button>
		

		</div>
		
		<br/><br/>
		{this.props.StoryReducer.story.name != null && 
			<div> <ControlLabel>Current Tasks for {this.props.StoryReducer.story.name} </ControlLabel><br/>
			
			<Table striped bordered condensed hover>
			  <thead>
			    <tr>
			      <th>Task Name</th>
			      <th>Description</th>
			      <th/>
			    </tr>
			  </thead>
			  
			  <tbody>
			  		<tr>	
				      <td></td>
				      <td></td>
				      <td></td>
				    </tr>			  
			  </tbody>
			</Table>
				<Button onClick ={()=>this.setState({show:true})}>Create New Task</Button> </div>}
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
            Create Project
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
		        <Form >
		        <FormGroup controlId="formName">
			    <Col componentClass={ControlLabel} sm={2}>
			      Story Name
			    </Col>
			    <Col sm={5}>
			      <FormControl type="storyName" placeholder="Story Name" name='storyName' value={this.state.storyName} onChange={this.handleChange}/>
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
			      <FormControl type="description" placeholder="Story Description" name='description' value={this.state.discription} onChange={this.handleChange}/>
			    </Col>
			  </FormGroup> 
			 
				</Form> 		
        </Modal.Body>
        <Modal.Footer>
	      <Button onClick={this.createStory}>Create</Button>
          <Button onClick={this.handleHide}>Close</Button>
        </Modal.Footer>
      </Modal>
		
		</div>
		</div>)
		
	}
}

	
const mapDispatchToProps = {
   getStories, addNewStory, setStory,
}
	
const mapStateToProps = state => state

export default connect( mapStateToProps, mapDispatchToProps)(Story)