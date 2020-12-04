import React, { Component } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth'
import Entry from './screens/Entry';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ready: false,
			user: null
		};

	}

	componentDidMount() {
		auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ signedin: true })
			} else {
				this.setState({ signedin: false })
			}
			if (!this.state.ready)
				this.setState({ ready: true })
		})
	}

	render() {
		if (!this.state.ready)
			return (
				<View>
					<Text>Loading Screen</Text>
				</View>
			)

		if (this.state.user)
			return (
				<View>
					<Text> App </Text>
				</View>
			);
		else
			return (
				<Entry />
			)
	}
}

export default App;
