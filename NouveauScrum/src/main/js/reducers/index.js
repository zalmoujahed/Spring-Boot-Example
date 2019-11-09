import { combineReducers } from 'redux';
import UsersReducer from './UsersReducer';
import ProjectsReducer from './ProjectsReducer';
import StoryReducer from './StoryReducer';

export default combineReducers({
	UsersReducer,
	ProjectsReducer,
	StoryReducer, 
})