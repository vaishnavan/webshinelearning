/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import ContactModal from '../ContactModal/ContactModal';
import './weshine.css';

class Welcome extends Component {
  render () {
    return (
      <div>
        <div className='welcome_main'>
          <div className='welcome_content'>
            <h1 style={{ fontFamily: 'cursive' }}>
              Welcome to Web<sub>s</sub>hine .{' '}
            </h1>
            <p>
              Webshine is an online learning platform for all the new learners who are keen to learn
              the web technologies.Learn web development at your own place. Each aspect of creating
              websites and applications a unique set of skills.Webshine offers a 4 months program to
              bring you up to speed on modern front-end, back-end and full-stack web development
              practices skills.
            </p>
            <div className='welcome_button'>
              <ContactModal />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
