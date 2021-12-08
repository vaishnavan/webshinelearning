/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DiscussionEmbed } from 'disqus-react';
import { Helmet } from 'react-helmet';
import Count1 from '../../SkillCountDown/Count1';
import './challengeContent.css';

class ChallengeContent extends Component {
  render () {
    return (
      <div className='challengeContent_main'>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Webshine | Code Challenge</title>
        </Helmet>
        <div data-aos='fade-up' className='challengeContent_welcome'>
          <Count1 />
          <h3>Join with us to chase your dream job.</h3>
          <p>
            In 100DaysOfCode challenge, you will find a way of learning things in quick and planned
            ways.
          </p>
          <h2>Current Challenge in Web Development</h2>
        </div>
        <div data-aos='fade-up' className='content_rules'>
          <h3>Two Main Rules</h3>
          <ol>
            <li>Code minimum an hour every day for the next 100 days.</li>
            <li>Share your experience and difficulties in Challenge forum</li>
          </ol>
          <hr />
        </div>
        <div data-aos='fade-up' className='content_public'>
          <h3>Publicly commit to the challenge:</h3>
          <p>If you made the decision to commit to the challenge,join our instagram page</p>
          <Link
            target='_blank'
            to={{
              pathname: 'https://www.instagram.com/webshine100daysofcode/',
            }}
          >
            Connect to Instagram
          </Link>
        </div>
        <div data-aos='fade-up' className='challengeForum_disqus'>
          <DiscussionEmbed
            shortname='100daysofcode'
            config={{
              url: 'https://webshinelearning.web.app/challenge',
              identifier: 0,
              title: '100daysofcode',
              language: 'en',
            }}
          />
        </div>
      </div>
    );
  }
}

export default ChallengeContent;
