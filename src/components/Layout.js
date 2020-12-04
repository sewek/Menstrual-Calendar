import { Container, Content, Footer, Header } from 'native-base';
import React, { Component } from 'react';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Container>
                <Header>

                </Header>
                <Content>
                    {this.props.children}
                </Content>
                <Footer>

                </Footer>
            </Container>
        );
    }
}

export default Layout;
