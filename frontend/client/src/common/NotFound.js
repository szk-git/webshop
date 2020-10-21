import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './NotFound.css';

class NotFound extends Component {
    render() {
        return (
          <>
          <Container>
          <div className="page-not-found">
              <h1 className="title">
                  404
              </h1>
              <div className="desc">
                  The Page you're looking for was not found.
              </div>
              <Link to="/"><button className="go-back-btn btn btn-primary" type="button">Go Back</button></Link>
          </div>
          </Container>
          </>
        );
    }
}

export default NotFound;
