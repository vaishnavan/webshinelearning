/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/sort-comp */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class Clock extends Component {
  constructor (props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  // componentWillMount() {
  //   this.getTimeUntil(this.props.deadline);
  // }
  componentDidMount () {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  leading0 (num) {
    return num < 10 ? `0${  num}` : num;
  }

  getTimeUntil (deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({ days, hours, minutes, seconds });
    }
  }

  render () {
    return (
      <div className='Clock_main'>
        <div className='Clock-content days'>
          {this.leading0(this.state.days)} <br />
          <br />
          <label>Days</label>
        </div>
        <div className='Clock-content hours'>
          {this.leading0(this.state.hours)} <br />
          <br />
          <label>Hours</label>
        </div>
        <div className='Clock-content minutes'>
          {this.leading0(this.state.minutes)} <br />
          <br />
          <label>Minutes</label>
        </div>
        <div className='Clock-content seconds'>
          {this.leading0(this.state.seconds)} <br />
          <br />
          <label>Seconds</label>
        </div>
      </div>
    );
  }
}
export default Clock;
