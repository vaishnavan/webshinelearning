/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

class Banner extends Component {
  render () {
    return (
      <div className='banner_main'>
        <Carousel>
          <Carousel.Item>
            <img className='d-block w-100' src='videos/banner1.jpg' alt='First slide' />
            <Carousel.Caption>
              <h3>Learn from mistake</h3>
              <p>“The beautiful thing about learning is that nobody can take it away from you.” </p>
            </Carousel.Caption>
          </Carousel.Item>
          {/* <Carousel.Item>
            <img
              className='d-block w-100'
              src='videos/banner2.png'
              alt='Second slide'
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='videos/banner3.jpg'
              alt='Third slide'
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item> */}
        </Carousel>
      </div>
    );
  }
}

export default Banner;
