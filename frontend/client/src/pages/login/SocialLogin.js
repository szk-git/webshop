import React, { Component } from 'react';

import { Link, Redirect } from 'react-router-dom'
import { Container, Image } from 'react-bootstrap';

import { GITHUB_AUTH_URL, ACCESS_TOKEN } from '../../constants/index';

import githubLogo from '../../img/github-logo.png';

class SocialLogin extends Component{

    render(){
        return(
          <>
              <a href={GITHUB_AUTH_URL}>
                <Image src={githubLogo} rounded alt="GitHub"/>
                Log in with Github
              </a>
          </>
        );
    }
}

export default SocialLogin;
