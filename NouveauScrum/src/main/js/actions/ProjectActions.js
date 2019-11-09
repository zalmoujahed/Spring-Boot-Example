import axios from 'axios';

export function getProjects (userId){
	return (dispatch) => {
		
		dispatch({
			type: 'FETCHING_PROJECTS'
		});
		
	     axios.get('/getAllProjects/'+ userId)
	      .then(function (response) {
	        dispatch({
        			type: 'FETCHED_PROJECTS',
        			payload: response.data
        		})
	      })
	      .catch(function (error) {
	        dispatch({
	        	type: 'FETCH_REJECTED', 
	        	payload: error
	        })
	      });
	  }
}

export function setProject (proj){
	return (dispatch) => {
		
		dispatch({
			type: 'SET_PROJECT',
			payload: proj
			
		});
		
	  }
}


export function addNewProject(name, desc, userID){
return (dispatch) => {
		
		dispatch({
			type: 'FETCHING_PROJECTS'
		});
		
	     axios.get('/addNewProj/' + name + '/' + desc + '/' + userID )
	      .then(function (response) {
	        dispatch({
        			type: 'FETCHED_PROJECTS',
        			payload: response.data
        		})
	      })
	      .catch(function (error) {
	        dispatch({
	        	type: 'FETCH_REJECTED', 
	        	payload: error
	        })
	      });
	  }
}