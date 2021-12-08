/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './JobLink.css';

class JobLink extends Component {
  render () {
    return (
      <div className='job_link_main container mt-5 mb-5'>
        <div className='job_link_head'>
          <h2>Job Mania</h2>
          <hr />
        </div>
        <div className='job_link_content'>
          <h3>
            If you work just for money, you'll never make it, but if you love what you're doing and
            you always put the customer first, success will be yours." "When writing the story of
            your life, don't let anyone else hold the pen." "A professional is someone who can do
            his best work when he doesn't feel like it
          </h3>
          <ul>
            <li>“Choose a job you love, and you will never have to work a day in your life."</li>
            <li>
              “It's not what you achieve, it's what you overcome. That's what defines your career."
            </li>
            <li>“Find out what you like doing best and get someone to pay you for doing it."</li>
            <li>
              "I've missed more than 9,000 shots in my career. I've lost almost 300 games. 26 times,
              I've been trusted to take the game winning shot and missed. I've failed over and over
              and over again in my life. And that is why I succeed."
            </li>
          </ul>
        </div>
        <div className='job_link_refer'>
          <Link to='/jobportal'>Job Portal</Link>
        </div>
      </div>
    );
  }
}

export default JobLink;
