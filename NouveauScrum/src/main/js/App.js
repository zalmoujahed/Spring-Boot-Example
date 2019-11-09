import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Home from './components/homepage.js';
import Login from './components/login.js';
import Sandbox from './components/sandbox.js';
import Project from './components/project.js';
import Header from './components/header.js';
import NavBar from './components/navBar.js';
import Backlog from './components/backlog.js';
import Sprint from './components/sprint.js';

export default class App extends React.Component {

	render() {
		return (
			<Router>
			<div>
				<Route exact path='/' component={Login}/>
				<Header/>
				<br/>
				<NavBar/>
	
				<Switch>
					<Route path='/home' component={Project}/>
					<Route path='/sandbox' component={Sandbox}/>
					<Route path='/backlog' component={Backlog}/>
					<Route path='/sprints' component={Sprint}/>
				</Switch>
			</div>
			</Router>

		)
	}
}