import React, { Component } from 'react';
import './ChallengeBanner.css';

// eslint-disable-next-line react/prefer-stateless-function
class Banner extends Component {
  render () {
    return (
      <div>
        <div data-aos='zoom-in-up' className='challengeBanner_main'>
          <div className='challengeBanner_image'>
            <h3>100DaysOfCode</h3>
            <h4>Challenge</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
