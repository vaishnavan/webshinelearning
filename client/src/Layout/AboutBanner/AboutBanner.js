/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './AboutBanner.css';

class AboutBanner extends Component {
  render () {
    return (
      <div>
        <div className='banner_head'>
          <h3>About Us</h3>
        </div>
        <div data-aos='fade-up' className='banner_content'>
          <div className='banner_contentshow'>
            <p>
              Webshine is an online learning platform for all the new learners who are keen to learn
              the web technologies. And have lots of real time project work guidance. Our target to
              provide project based knowledge to the students and training them in a right way to
              achieve their goal and make use of it.
            </p>
          </div>
        </div>
        <div className='banner_services'>
          <div className='service_heading'>
            <h2>Our Services</h2>
          </div>
          <div data-aos='fade-up' className='services_specMain'>
            <div className='services_spec'>
              <div className='services_specImage'>
                <img src='videos/learning.png' alt='no' />
              </div>
              <div className='services_specDetail'>
                <p>Online Learning</p>
              </div>
            </div>

            <div data-aos='fade-up' className='services_spec'>
              <div className='services_specImage'>
                <img src='videos/web.jpg' alt='no' />
              </div>
              <div className='services_specDetail'>
                <p>Web Development</p>
              </div>
            </div>

            <div className='services_spec'>
              <div data-aos='fade-up' className='services_specImage'>
                <img src='videos/full-stack.png' alt='no' />
              </div>
              <div className='services_specDetail'>
                <p>MERN Stack Development</p>
              </div>
            </div>

            <div data-aos='fade-up' className='services_spec'>
              <div className='services_specImage'>
                <img src='videos/reactnative.png' alt='no' />
              </div>
              <div className='services_specDetail'>
                <p>ReactNative Android & IOS </p>
              </div>
            </div>

            <div data-aos='fade-up' className='services_spec'>
              <div className='services_specImage'>
                <img src='videos/carrer.png' alt='no' />
              </div>
              <div className='services_specDetail'>
                <p>Carrer Guidance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutBanner;
