/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import LearnNavBar from '../LearningNav/LearnNavBar';
import Navbar from '../NavbarLayout/Navbar/Navbar';
import './challenge.css';
import Banner from './ChallengeBanner/Banner';
import ChallengeContent from './ChallengeContent/ChallengeContent';

class Challenge extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <div className='challenge_main'>
          <LearnNavBar />
          <Banner />
          <ChallengeContent />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Challenge;
