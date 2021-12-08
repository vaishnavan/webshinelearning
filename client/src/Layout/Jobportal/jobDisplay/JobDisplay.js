/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import axios from 'axios';
import React, { Component } from 'react';
import htmlParser from 'react-html-parser';
import moment from 'moment';
import { Helmet } from 'react-helmet';
import Footer from '../../Footer/Footer';
import Navbar from '../../NavbarLayout/Navbar/Navbar';
import JobForm from '../jobForm/JobForm';
import './jobdisplay.css';

class JobDisplay extends Component {
  constructor (props) {
    super(props);

    this.state = {
      jobArr: [],
      visible: 200,
      show: false,
    };
  }

  componentDidMount () {
    axios.get('https://webshinejourney.herokuapp.com/jobGet').then(res => {
      this.setState({
        jobArr: res.data,
      });
    });
  }

  showMore = i => {
    const { show } = this.state;
    this.setState({
      show: {
        ...show,
        [i]: !show[i],
      },
    });
  };

  render () {
    const { jobArr, show, visible } = this.state;
    return (
      <div>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Webshine | Jobs</title>
        </Helmet>
        <Navbar />
        <JobForm />
        <div className='container job_display_main mt-5 '>
          <div className='job_display_heading mb-5'>
            <h2>Find your Dream Job</h2>
          </div>
          {jobArr.map((jobFind, i) => (
              <div data-aos='zoom-in' key={jobFind._id} className='job_display_card'>
                <div className='job_display_left'>
                  <div className='job_display_jobtitle'>
                    <h2>{jobFind.jobName}</h2>
                    <h3>{jobFind.companyName}</h3>
                    <p>{jobFind.experience}</p>
                    <p>{jobFind.salary}</p>
                    <div className='job_display_jobDesc'>
                      <p />
                      {show[i] ? (
                        <div>
                          <p>
                            {htmlParser(jobFind.jobDesc)}{' '}
                            <span
                              style={{ color: '#0000FF', cursor: 'pointer' }}
                              onClick={() => this.showMore(i)}
                            >
                              readless
                            </span>
                          </p>
                        </div>
                      ) : (
                        <div>
                          <p>
                            {htmlParser(jobFind.jobDesc.slice(0, visible))}..{' '}
                            <span
                              style={{ color: '#0000FF', cursor: 'pointer' }}
                              onClick={() => this.showMore(i)}
                            >
                              readmore
                            </span>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className='job_display_right'>
                  <div className='job_post_date'>
                    <span>{moment(jobFind.createdAt).format('L')}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default JobDisplay;
