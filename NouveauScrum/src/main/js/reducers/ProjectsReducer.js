export default function reducer (state = {
		project: {name: null},
		projects: [],
		fetching: false, 
		fetched: false, 
		error: false,
}, action){
	
	switch (action.type){
	
		case "FETCHING_PROJECTS":{
			return state
		}
		case "FETCHED_PROJECTS":{
			return{ ...state, 
				fetching: false, 
				fetched: false, 
				error: false, 
				projects: action.payload}
		}
		case "SET_PROJECT":{
			return{ ...state, 
				project: action.payload}
		}
		
	}
	
	return state
}