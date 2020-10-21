import React, { Component } from 'react';

import { Link, Redirect } from 'react-router-dom'
import { Container, Form, Button } from 'react-bootstrap';

class LoginForm extends Component{
  constructor(props) {
      super(props);
      this.state = {
          email: '',
          password: ''
      };
  }

  handleInputChange = (e) =>{
    const inputName = e.target.name;
    const inputValue = e.target.value;
    this.setState({
      [inputName]:inputValue
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    console.log("SUBMIT")
  }

    render(){
        return(
          <>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </>
        );
    }
}

export default LoginForm;
