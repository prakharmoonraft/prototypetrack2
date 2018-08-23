import React, { Component } from 'react';
import {Container} from 'reactstrap';
import './App.css';

class App extends Component {

	render() {
		return (
			<div className="">
				<Container fluid="true">
					{this.props.children}
				</Container>
			</div>
		);
	}
}

export default App;