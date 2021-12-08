/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';
import Footer from '../Footer/Footer';
import Navbar from '../NavbarLayout/Navbar/Navbar';
import './courseView.css';

class CourseView extends Component {
  constructor (props) {
    super(props);

    this.state = {
      courseArr: [],
    };
  }

  componentDidMount () {
    axios.get('course.json').then(res => {
      this.setState({
        courseArr: res.data,
      });
    });
  }

  render () {
    const { courseArr } = this.state;
    return (
      <div>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Webshine | Courses</title>
        </Helmet>
        <Navbar />
        <div>
          <div className='courseView_webshine container'>
            <h2 style={{ fontSize: '20px' }}>Our Course to explore your skills</h2>
            <hr />
          </div>
          {courseArr.map((data, i) => (
            <div className='courseView_main container' key={i}>
              {data.courses.map((data1, i) => (
                <div key={i} className='courseView_card'>
                  <div className='courseView_img'>
                    <img src={data1.CourseImg} alt='no' />
                  </div>
                  <div className='courseView_contentMain'>
                    <div className='courseView_content'>
                      <h2>{data1.CourseHead}</h2>
                      <p>{data1.CourseContent}</p>
                      <h5>{data1.CourseDetail}</h5>
                      <p>{data1.coursebook}</p>
                      <button type='button'>
                        <a
                          target='_blank'
                          rel='noreferrer noopener'
                          href='https://rzp.io/l/fpgdNVeNjd'
                        >
                          <Icon name='rupee sign' />
                          {data1.CoursePrice}
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default CourseView;
