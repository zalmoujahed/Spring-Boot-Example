export default function reducer (state = {
		user: {email: null},
		users: [],
		fetching: false, 
		fetched: false, 
		error: false,
}, action){
	
	switch (action.type){
	
		case "FETCHING_USERS":{
			return state
		}
		case "FETCHED_USERS":{
			return{ ...state, 
				fetching: false, 
				fetched: false, 
				error: false, 
				users: action.payload}
		}
		case "LOGIN":{
			return{ ...state, 
				fetching: false, 
				fetched: false, 
				error: false, 
				user: action.payload}
		}
	}
	
	return state
}