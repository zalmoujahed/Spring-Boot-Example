import axios from 'axios';

export function getUsers (){
	return (dispatch) => {
		
		dispatch({
			type: 'FETCHING_USERS'
		});
		
	     axios.get('/getAllUsers')
	      .then(function (response) {
	        dispatch({
        			type: 'FETCHED_USERS',
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
export function loginUser(user){
	return (dispatch) => {

		dispatch({
			type: 'LOGIN',
			payload: user
		});

		
	}
}

export function registerUser(first, last, email, pass){
return (dispatch) => {
		
		dispatch({
			type: 'FETCHING_USERS'
		});
		
	     axios.get('/addNewUser/' + first + '/' + last + '/' + email + '/' + pass )
	      .then(function (response) {
	        dispatch({
        			type: 'FETCHED_USERS',
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