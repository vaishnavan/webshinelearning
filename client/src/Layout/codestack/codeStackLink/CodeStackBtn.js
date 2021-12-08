/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './codeBtn.css';

class CodeStackBtn extends Component {
  render () {
    return (
      <div className='CodeStackBtn_design'>
        <Link to='/codestack'>CodeStack</Link>
      </div>
    );
  }
}

export default CodeStackBtn;
