import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Toast } from 'native-base';
import auth from '@react-native-firebase/auth'

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: null,
			password: null,
			error: false
		};
	}

	updateEmail = (email) => {
		this.setState({email: email})
	}

	updatePassword = (password) => {
		this.setState({password: password})
	}

	signin = () => {
		auth()
			.signInWithEmailAndPassword(this.state.email, this.state.password)
			.catch(error => {
				this.setState({password: null, error: true})
			})
	}

	render() {
		return (
			<View style={{ flex: 1, margin: 16 }}>
				<Form>
					<Item floatingLabel error={ this.state.error }>
						<Label>Email</Label>
						<Input value={this.state.email} onChangeText={ e => this.updateEmail(e) }/>
					</Item>
					<Item floatingLabel error={ this.state.error }>
						<Label>Password</Label>
						<Input secureTextEntry={true} value={this.state.password} onChangeText={ e => this.updatePassword(e) } />
					</Item>
				</Form>
				<Button block style={{ marginTop: 64 }} onPress={() => this.signin()}>
					<Text>Sign In</Text>
				</Button>
			</View>
		);
	}
}

export default SignIn;
