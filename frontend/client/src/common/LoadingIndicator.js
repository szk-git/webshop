import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

import './LoadingIndicator.css';

export default function LoadingIndicator(props) {
    return (
      <>
      <div class="loadingIndicator">
        <div class="loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
        </div>
      </>
    );
}
