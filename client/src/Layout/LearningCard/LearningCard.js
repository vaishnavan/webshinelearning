/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import Batch from '../LearderBoard/BatchContent/Batch';
import Count from '../SkillCountDown/Count';
import './learning.css';

class LearningCard extends Component {
  constructor (props) {
    super(props);

    this.state = {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
    };
  }

  handleClick1 = () => {
    this.setState({
      show1: !this.state.show1,
    });
  };

  handleClick2 = () => {
    this.setState({
      show2: !this.state.show2,
    });
  };

  handleClick3 = () => {
    this.setState({
      show3: !this.state.show3,
    });
  };

  handleClick4 = () => {
    this.setState({
      show4: !this.state.show4,
    });
  };

  handleClick5 = () => {
    this.setState({
      show5: !this.state.show5,
    });
  };

  handleClick6 = () => {
    this.setState({
      show6: !this.state.show6,
    });
  };

  render () {
    const { show1, show2, show3, show4, show5, show6 } = this.state;
    return (
      <div>
        <div className='learningCard_main'>
          <div className='video_data'>
            <Count />
            {/* <h2>What is MERN Stack Development ?</h2> */}
            <video
              data-aos='fade-up'
              src='videos/MERN.mp4'
              width='100%'
              height='500'
              trim
              muted
              loop
              autoPlay
            />
          </div>
          <Batch />
          <div className='learningCard_Heading'>
            <h2>Our Bootcamp Courses</h2>
            <hr />
          </div>
          {/* learning card folder one */}
          <div data-aos='fade-up' className='learningCard_design'>
            <div className='learningCard_content'>
              <div className='skill_image'>
                <img src='videos/HTML.jpeg' alt='no' />
                <div className='skill_topic'>
                  <h3>HTML, CSS, JavaScript</h3>
                </div>
              </div>
              <div className='skill_conent'>
                <p>Basics of Web development - Zero to Hero Dynamic Web Designing.</p>
                <h5>24 Live Training classes | Project Based Training | Mentor Support</h5>
                <p>Book your course to Start Learning.</p>
                <p onClick={this.handleClick1} className='skill_price'>
                  <a
                    style={{ color: 'white' }}
                    target='_blank'
                    rel='noreferrer noopener'
                    href='https://rzp.io/l/fpgdNVeNjd'
                  >
                    <Icon name='rupee sign' />
                    999 only
                  </a>
                </p>
                <h3 className={show1 ? 'contactshow' : 'contacthide'}>Contact: +91 9047609410</h3>
              </div>
            </div>
            {/* second card */}
            <div data-aos='fade-up' className='learningCard_content'>
              <div className='skill_image'>
                <img src='videos/Reactjs.png' alt='no' />
                <div className='skill_topic'>
                  <h3>React.Js</h3>
                </div>
              </div>
              <div className='skill_conent'>
                <p>React.Js is Top Demand Web development library to get very good CTC package.</p>
                <h5>30 Live Training classes | Project Based Training | Mentor Support</h5>
                <p>Book your course to Start Learning.</p>
                <p onClick={this.handleClick2} className='skill_price'>
                  <a
                    style={{ color: 'white' }}
                    target='_blank'
                    rel='noreferrer noopener'
                    href='https://rzp.io/l/fpgdNVeNjd'
                  >
                    <Icon name='rupee sign' />
                    999 only
                  </a>
                </p>
                <h3 className={show2 ? 'contactshow' : 'contacthide'}>Contact: +91 9047609410</h3>
              </div>
            </div>
            {/* third card */}
            <div data-aos='fade-up' className='learningCard_content'>
              <div className='skill_image'>
                <img src='videos/nodejs.png' alt='no' />
                <div className='skill_topic'>
                  <h3>Node.Js and MongoDB</h3>
                </div>
              </div>
              <div className='skill_conent'>
                <p>
                  Handling Server-side and Database it will be Easily after learning this Course.
                </p>
                <h5>15 Live Training classes | Project Based Training | Mentor Support</h5>
                <p>Book your course to Start Learning.</p>
                <p onClick={this.handleClick3} className='skill_price'>
                  <a
                    style={{ color: 'white' }}
                    target='_blank'
                    rel='noreferrer noopener'
                    href='https://rzp.io/l/fpgdNVeNjd'
                  >
                    <Icon name='rupee sign' />
                    999 only
                  </a>
                </p>
                <h3 className={show3 ? 'contactshow' : 'contacthide'}>Contact: +91 9047609410</h3>
              </div>
            </div>
          </div>
          {/* ------ end ------- */}
          <div data-aos='fade-up' className='learningCard_design'>
            <div className='learningCard_content'>
              <div className='skill_image'>
                <img src='videos/java.jpg' alt='no' />
                <div className='skill_topic'>
                  <h3>Java Core</h3>
                </div>
              </div>
              <div className='skill_conent'>
                <p>
                  Evergreen Technology at very low cost grab it and Find Back-end Developer in you.
                </p>
                <h5>20 Live Training classes | Project Based Training | Mentor Support</h5>
                <p>Book your course to Start Learning.</p>
                <p onClick={this.handleClick4} className='skill_price'>
                  <a
                    style={{ color: 'white' }}
                    target='_blank'
                    rel='noreferrer noopener'
                    href='https://rzp.io/l/fpgdNVeNjd'
                  >
                    <Icon name='rupee sign' />
                    399 only
                  </a>
                </p>
                <h3 className={show4 ? 'contactshow' : 'contacthide'}>Contact: +91 9047609410</h3>
              </div>
            </div>
            {/* second card */}
            <div data-aos='fade-up' className='learningCard_content'>
              <div className='skill_image'>
                <img src='videos/graphql.jpg' alt='no' />
                <div className='skill_topic'>
                  <h3>GraphQL</h3>
                </div>
              </div>
              <div className='skill_conent'>
                <p>Demand Technology and Upcoming gaint for API development.</p>
                <h5>28 Live Training classes | Project Based Training | Mentor Support</h5>
                <p>Book your course to Start Learning.</p>
                <p onClick={this.handleClick5} className='skill_price'>
                  <a
                    style={{ color: 'white' }}
                    target='_blank'
                    rel='noreferrer noopener'
                    href='https://rzp.io/l/fpgdNVeNjd'
                  >
                    <Icon name='rupee sign' />
                    799 only
                  </a>
                </p>
                <h3 className={show5 ? 'contactshow' : 'contacthide'}>Contact: +91 9047609410</h3>
              </div>
            </div>
            {/* third card */}
            <div data-aos='fade-up' className='learningCard_content'>
              <div className='skill_image'>
                <img src='videos/python.png' alt='no' />
                <div className='skill_topic'>
                  <h3>Python Bootcamp</h3>
                </div>
              </div>
              <div className='skill_conent'>
                <p>Start your coding Journey with python to speedup your Programming skills.</p>
                <h5>28 Live Training classes | Project Based Training | Mentor Support</h5>
                <p>Book your course to Start Learning.</p>
                <p onClick={this.handleClick6} className='skill_price'>
                  <a
                    style={{ color: 'white' }}
                    target='_blank'
                    rel='noreferrer noopener'
                    href='https://rzp.io/l/fpgdNVeNjd'
                  >
                    <Icon name='rupee sign' />
                    499 only
                  </a>
                </p>
                <h3 className={show6 ? 'contactshow' : 'contacthide'}>Contact: +91 9047609410</h3>
              </div>
            </div>
          </div>
          {/* ------ end ------- */}
          <div className='courseButton_main'>
            <div className='moreCourse_btn container'>
              <Link to='/allcourses'>More Courses</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LearningCard;
