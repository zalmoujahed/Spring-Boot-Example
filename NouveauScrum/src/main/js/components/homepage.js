import React from 'react';
import Sandbox from './sandbox.js';

export default class Home extends React.Component{
	
	constructor(props, context) {
	    super(props, context);

	    this.state = {
	      show: false
	    };
	  }
	

	
	render(){
		return(
		<Sandbox />)
		
	}
}