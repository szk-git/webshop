import React, { Component } from 'react';

import './Home.css'

import { Container, Button } from 'react-bootstrap';
import Alert from 'react-s-alert';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

class Home extends React.Component {
    warningAlert(e) {
        Alert.warning('Test message', {
          position: 'top-right',
          effect: 'slide',
          offset: 50
        });
    }

    render() {
        return (
          <Container>
              <Alert stack={{limit: 3}} />
              <Button onClick={this.warningAlert}>Click</Button>
          </Container>
        )
    }
}

export default Home;
