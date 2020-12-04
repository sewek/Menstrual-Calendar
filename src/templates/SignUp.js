import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Form>
					<Item floatingLabel>
						<Label>Email</Label>
						<Input />
					</Item>
					<Item floatingLabel>
						<Label>Password</Label>
						<Input />
					</Item>
					<Item floatingLabel last>
						<Label>Confirm Password</Label>
						<Input />
					</Item>
				</Form>
			</View>
		);
	}
}

export default SignUp;
