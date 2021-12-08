/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { DiscussionEmbed } from 'disqus-react';
import { Helmet } from 'react-helmet';
import { Navbar, Footer } from '../../Layout';
import './forum.css';
import GithubBtn from '../../Layout/GithubSearch/GithubButton/GithubBtn';

class Forum extends Component {
  render () {
    return (
      <div>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Webshine | Forum</title>
        </Helmet>
        <Navbar />
        <div className='forum_main'>
          <h2>Learning Forum</h2>
          <hr />
          {/* <div className="codetack_btn">
            <CodeStackBtn />
          </div> */}
          {/* Github */}
          <GithubBtn />
          <p>
            To discus your doubt about course and other project related you can share here, person
            who know solution will reply use this platform.
          </p>
          <br />
          <DiscussionEmbed
            shortname='webshine'
            config={{
              url: 'https://webshinelearning.web.app/forum',
              identifier: 0,
              title: 'webshine',
              language: 'en',
            }}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Forum;
