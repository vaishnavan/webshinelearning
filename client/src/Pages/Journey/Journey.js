/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Navbar, Footer, JourneyMain } from '../../Layout';

class Journey extends Component {
  render () {
    return (
      <div>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Webshine | Journey</title>
        </Helmet>
        <Navbar />
        <JourneyMain />
        <Footer />
      </div>
    );
  }
}

export default Journey;
