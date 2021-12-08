/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Footer,
  LearnNavBar,
  HtmlLearn,
  JsLearn,
  CssLearn,
  ReactLearn,
} from '../../Layout';
import './learning.css';

class Learning extends Component {
  render () {
    return (
      <div>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Webshine | Learning Hub</title>
        </Helmet>
        <Navbar />
        <div className='learningPath_main'>
          <LearnNavBar />
          <h2>Learning Hub</h2>
          <div className='sticky'>
            <Link to='overallQuiz'>
              <img
                style={{ borderRadius: '50%' }}
                width='60'
                height='60'
                src='https://st2.depositphotos.com/1915171/11486/v/950/depositphotos_114869922-stock-illustration-quiz-sign-icon.jpg'
                alt='quiz'
              />
            </Link>
          </div>
          <hr />
          <HtmlLearn />
          <hr />
          <CssLearn />
          <hr />
          <JsLearn />
          <hr />
          <ReactLearn />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Learning;
