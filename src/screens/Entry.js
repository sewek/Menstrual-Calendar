import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Container, Content, Footer, FooterTab, Form, H3, Item, Label, Text } from 'native-base'
import Layout from '../components/Layout';
import Head from '../components/Head';
import SignIn from '../templates/SignIn';
import SignUp from '../templates/SignUp';


class Entry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screen: 0
        };
    }

    changeScreen = (component) => {
        this.setState({ screen: component })
    }

    render() {
        return (
            <Container>
                <Head />
                <Content>
                    {(this.state.screen) ? <SignUp /> : <SignIn />}
                </Content>
                <Footer>
                    <FooterTab>
                        <Button onPress={() => this.changeScreen(0)}>
                            <Text style={{}}>
                                LOGIN
                            </Text>
                        </Button>
                        <Button onPress={() => this.changeScreen(1)}>
                            <Text style={{}}>
                                REGISTER
                            </Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

export default Entry;
