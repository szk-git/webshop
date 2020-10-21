import React, { Component } from 'react';

import { Link, Redirect } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap';

import Alert from 'react-s-alert';

import SocialLogin from './SocialLogin';
import LoginForm from './LoginForm';

import { login } from '../../utils/API/auth/authAPI';

class Login extends Component{

    render(){
        return(
          <>
            <Container>
              <h1>Login to SpringSocial</h1>
              <SocialLogin/>
              OR
              <LoginForm/>
            </Container>
          </>
        );
    }
}

export default Login;
