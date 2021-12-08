/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { ContactBanner, Footer, Navbar } from '../../Layout';

class Contact extends Component {
  render () {
    return (
      <div>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Webshine | Contact</title>
        </Helmet>
        <Navbar />
        <ContactBanner />
        <Footer />
      </div>
    );
  }
}

export default Contact;
