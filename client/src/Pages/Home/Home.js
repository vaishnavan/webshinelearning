/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import {
  Welcome,
  Navbar,
  Banner,
  Course,
  Review,
  AddDb,
  AdModal,
  Footer,
  LearningCard,
  JobLink,
} from '../../Layout';

class Home extends Component {
  render () {
    return (
      <div>
        <Helmet>
          <meta charSet='utf-8' />
          <title>WebshineLearning | Development | WebDesign</title>
        </Helmet>
        <Navbar />
        <AdModal />
        <Banner />
        <Welcome />
        <LearningCard />
        <Course />
        <AddDb />
        <JobLink />
        <Review />
        <Footer />
      </div>
    );
  }
}

export default Home;
