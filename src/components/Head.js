import React, { Component } from 'react';
import { Body, Container, Content, Footer, Header } from 'native-base';

class Head extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<Header>
				<Body>
					<Text>
						Entry
  					</Text>
				</Body>
			</Header>
		);
	}
}

export default Header;
