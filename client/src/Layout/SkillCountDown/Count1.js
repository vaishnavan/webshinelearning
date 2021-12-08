/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Clock from './Clock';
import './count.css';

class Count1 extends Component {
  constructor (props) {
    super(props);
    this.state = { deadline: 'July, 05, 2021' };
  }

  render () {
    return (
      <div className='count1'>
        {/* <div className="count-title">Countdown Timer</div>
        <div className="count-date">{this.state.deadline}</div> */}
        <Clock deadline={this.state.deadline} />
      </div>
    );
  }
}
export default Count1;
