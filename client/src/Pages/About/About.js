/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Navbar, Footer, AboutBanner } from '../../Layout';

class About extends Component {
  render () {
    return (
      <div>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Webshine | About</title>
        </Helmet>
        <Navbar />
        <AboutBanner />
        <Footer />
      </div>
    );
  }
}

export default About;
