/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './githubbtn.css';

class GithubBtn extends Component {
  render () {
    return (
      <div>
        <div className='github_button'>
          <Link to='/githubUser'>View Your Github</Link>
        </div>
      </div>
    );
  }
}

export default GithubBtn;
