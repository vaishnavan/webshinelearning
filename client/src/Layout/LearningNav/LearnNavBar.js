/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './learnnav.css';
import CodeStackBtn from '../codestack/codeStackLink/CodeStackBtn';

class LearnNavBar extends Component {
  render () {
    return (
      <div>
        <div className='learning_navbar'>
          <div className='learning_navleft'>
            <Link to='/learning'>Learning Hub</Link>
          </div>
          <div className='learning_navright'>
            <Link to='/challenge'>Code Challenge</Link>
          </div>
        </div>
        <CodeStackBtn />
      </div>
    );
  }
}

export default LearnNavBar;
