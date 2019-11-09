export default function reducer (state = {
		story: {name: null},
		stories: [],
		fetching: false, 
		fetched: false, 
		error: false,
}, action){
	
	switch (action.type){
	
		case "FETCHING_STORIES":{
			return state
		}
		case "FETCHED_STORIES":{
			return{ ...state, 
				fetching: false, 
				fetched: false, 
				error: false, 
				stories: action.payload}
		}
		case "SET_STORY":{
			return{ ...state, 
				story: action.payload}
		}
		
	}
	
	return state
}