/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import firebase from 'firebase'
import Loader from 'react-loader-spinner';
import reacthtml from 'react-html-parser';
import Axios from 'axios';
import './JourneyMain.css';

// const ref = firebase
//   .firestore()
//   .collection('JourneyFinal')
//   .orderBy('username', 'desc')

export class JourneyMain extends Component {
  constructor (props) {
    super(props);

    this.state = {
      expData: [],
      search: '',
      show: false,
      read: false,
      dataShow: false,
    };
  }

  componentDidMount () {
    Axios.get('https://webshinejourney.herokuapp.com/alljourney').then(res => {
      this.setState({
        expData: res.data,
        dataShow: true,
      });
    });

    this.setState({
      dataShow: false,
    });
  }

  handleSearch = e => {
    this.setState({
      search: e.target.value,
      show: true,
    });
  };

  handleData = i => {
    const { read } = this.state;
    this.setState({
      read: {
        ...read,
        [i]: !read[i],
      },
    });
  };

  render () {
    const { expData, search, show, read, dataShow } = this.state;
    const filterSearch = expData.filter(searchData =>
      searchData.username.toLowerCase().includes(search.toLowerCase()),
    );
    // const experienceData = expData.map((data, i) => reacthtml(data.experience))
    // // console.log(experienceData)
    return (
      <div>
        <div className='journey_main'>
          <div className='journey_head'>
            <h2>Journey to success and Totally {expData.length} Life Journey stories</h2>
            <Link to='/journeyform'>Click here to Add your Journey Here</Link>
          </div>
          <div className='experience_data'>
            <div className='journeyUser_search'>
              <input type='text' onChange={this.handleSearch} placeholder='Search By Name' />
            </div>
            {dataShow ? (
              <>
                {filterSearch.length !== 0 ? (
                  <div>
                    {filterSearch.reverse().map((exp, i) => (
                      <div data-aos='zoom-in' key={i} className='journey_content'>
                        <h3>
                          <img
                            src='https://icons-for-free.com/iconfiles/png/512/person+profile+user+icon-1320184018411209468.png'
                            alt='no'
                          />
                          {exp.username}
                        </h3>
                        <h3 style={{ textAlign: 'center' }}>{exp.journeyTitle}</h3>
                        <div className='journey_blog'>
                          {read[i] ? (
                            <p>
                              {reacthtml(exp.experience)}
                              <span style={{ display: 'none' }} onClick={() => this.handleData(i)}>
                                ReadLess
                              </span>
                            </p>
                          ) : (
                            <p>
                              {reacthtml(exp.experience.length) < 400 ? (
                                <div>{reacthtml(exp.experience)}</div>
                              ) : (
                                <div>
                                  {reacthtml(exp.experience.slice(0, 1000))}...{' '}
                                  <span onClick={() => this.handleData(i)}>ReadMore</span>
                                </div>
                              )}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <h3 className={show ? 'usershow' : 'usernone'}>User not Found, Try again.</h3>
                )}
              </>
            ) : (
              <>
                <div className='stack-loader'>
                  <Loader type='Grid' color='#336278' height={50} width={50} timeout={3000} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default JourneyMain;
