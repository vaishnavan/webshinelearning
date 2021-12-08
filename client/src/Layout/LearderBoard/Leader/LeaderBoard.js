/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../Footer/Footer';
import Navbar from '../../NavbarLayout/Navbar/Navbar';
import './leader.css';

class LeaderBoard extends Component {
  constructor (props) {
    super(props);

    this.state = {
      leaderData: [
        { name: 'Venkadesan', batch: 'Weekdays', points: 95 },
        { name: 'Shabariraj', batch: 'Weekdays', points: 110 },
        { name: 'MadhuKannan', batch: 'Weekdays', points: 90 },
        { name: 'Yoganandhini', batch: 'Weekend', points: 65 },
        { name: 'Abhishek', batch: 'Weekdays', points: 90 },
        { name: 'Jayalakshmi', batch: 'Weekdays', points: 80 },
        { name: 'Priyanka', batch: 'Weekend', points: 70 },
        { name: 'Gowtham', batch: 'Weekend', points: 70 },
        { name: 'jagadhesh', batch: 'Weekend', points: 50 },
        { name: 'Arthi', batch: 'Weekend', points: 50 },
        { name: 'Thoufiq', batch: 'Weekend', points: 0 },
        { name: 'Karthi', batch: 'Weekend', points: 0 },
        { name: 'Deepak', batch: 'Weekend', points: 0 },
      ],
    };
  }

  render () {
    const { leaderData } = this.state;
    return (
      <div>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Webshine | Leaderboard</title>
        </Helmet>
        <Navbar />
        <div className='leaderBoard_main'>
          <div className='leaderBoard_banner'>
            <img src='videos/winner.jpg' width='100%' alt='winner' />
          </div>
          <div className='after_banner container'>
            <div className='header_head'>
              <h2>WebshineLearning LeaderBoard</h2>
              <hr />
            </div>
            <div className='leaderBoard_winner'>
              <div className='second_place'>
                <div className='inside_prize'>
                  <h2>Venkadesan</h2>
                  <h3 className='second_one'>2</h3>
                </div>
              </div>
              <div className='first_place'>
                <div className='inside_prize'>
                  <h2>Shabariraj</h2>
                  <h3 className='first_one'>1</h3>
                </div>
              </div>
              <div className='third_place'>
                <div className='inside_prize'>
                  <h2>MadhuKannan</h2>
                  <h3 className='third_one'>3</h3>
                </div>
              </div>
            </div>
          </div>
          {/* till leaderboard */}

          {/* leader table */}
          <div className='leaderTable container'>
            <table className='table'>
              <thead>
                <tr style={{ background: '#336278' }}>
                  <th scope='col'>S.No</th>
                  <th scope='col'>Name</th>
                  <th scope='col'>Batch</th>
                  <th scope='col'>Points</th>
                </tr>
              </thead>
              <tbody>
                {leaderData.map((data, i) => (
                    <tr key={i}>
                      <th scope='row'>{i + 1}</th>
                      <td>{data.name}</td>
                      <td>{data.batch}</td>
                      <td>{data.points}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {/* leader table */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default LeaderBoard;
