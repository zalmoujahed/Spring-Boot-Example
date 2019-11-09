import axios from 'axios';

export function getStories (projectId){
	return (dispatch) => {
		
		dispatch({
			type: 'FETCHING_STORIES'
		});
		
	     axios.get('/getAllStories/'+ projectId)
	      .then(function (response) {
	        dispatch({
        			type: 'FETCHED_STORIES',
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

export function setStory (story){
	return (dispatch) => {
		
		dispatch({
			type: 'SET_STORY',
			payload: story
			
		});
		
	  }
}


export function addNewStory(name, desc, projectId){
return (dispatch) => {
		
		dispatch({
			type: 'FETCHING_STORIES'
		});
		
	     axios.get('/addNewStory/' + name + '/' + desc + '/' + projectId )
	      .then(function (response) {
	        dispatch({
        			type: 'FETCHED_STORIES',
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