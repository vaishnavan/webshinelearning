/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Clock from './Clock';
import './count.css';

class Count extends Component {
  constructor (props) {
    super(props);
    this.state = { deadline: 'Nov, 8, 2021' };
  }

  render () {
    return (
      <div className='count'>
        {/* <div className="count-title">Countdown Timer</div>
        <div className="count-date">{this.state.deadline}</div> */}
        <Clock deadline={this.state.deadline} />
        <div className='count_content'>
          <h3>MERN stack 2nd Batch going to start from NOV month grab your seats</h3>
        </div>
      </div>
    );
  }
}
export default Count;
