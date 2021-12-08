/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './batch.css';

class Batch extends Component {
  render () {
    return (
      <div data-aos='fade-up' className='batchcontent_main container'>
        <div className='batch_heading'>
          <h2>Current Batch Stars</h2>
          <hr />
        </div>
        <div className='batch_starcontent'>
          <p>
            whether your achievement is small or big hardwork is always appreciated in our platform.
          </p>
        </div>
        <div className='leader_button'>
          <Link to='/leaderboard'>Leader Board</Link>
        </div>
      </div>
    );
  }
}

export default Batch;
