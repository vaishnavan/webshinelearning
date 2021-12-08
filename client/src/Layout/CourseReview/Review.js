/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
import React, { Component } from 'react';
import { Rating } from 'semantic-ui-react';
import { toast } from 'react-toastify';
import Axios from 'axios';
import './review.css';

class Review extends Component {
  constructor (props) {
    super(props);

    this.state = {
      review: [],
      visible: 3,
      username: '',
      title: '',
      expshare: '',
      rating: 0,
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  clear = () => {
    this.setState({
      username: '',
      title: '',
      expshare: '',
      rating: 0,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (
      this.state.username === '' ||
      this.state.title === '' ||
      this.state.expshare === '' ||
      this.state.rating === 0
    ) {
      toast('All fields are required');
    } else if (this.state.rating > 5) {
      toast('Rating should be within Five');
    } else {
      const reviewData = {
        username: this.state.username,
        title: this.state.title,
        expshare: this.state.expshare,
        rating: this.state.rating,
      };
      Axios.post('https://webshinejourney.herokuapp.com/reviewpost', reviewData)
        .then(res => {
          toast.success('Thank you for your Review');
        })
        .catch(err => {
          alert(err.message);
        });
    }
  };

  componentDidMount () {
    Axios.get('https://webshinejourney.herokuapp.com/allreview').then(res => {
      this.setState({
        review: res.data,
      });
    });
  }

  showMore = () => {
    this.setState({
      visible: this.state.visible + 3,
    });
  };

  render () {
    const { review, visible } = this.state;
    const reviewCount = review.length;

    return (
      <div className='reviews_main'>
        <div className='learners_review'>
          <h2>Our Learner's Reviews</h2>
        </div>
        <div className='total_reviews'>
          <h3>{reviewCount} Learner Reviews</h3>
        </div>
        <div className='review_main_content'>
          {review
            .reverse()
            .slice(0, visible)
            .map((data, i) => (
                <div key={i} className='review_main_content'>
                  <div data-aos='fade-up'>
                    <div className='reviews_content'>
                      <div className='leaner_profile'>
                        <span>
                          <img src='https://i.stack.imgur.com/l60Hf.png' alt='profile' />
                          <Rating icon='star' defaultRating={data.rating} maxRating={5} /> -{' '}
                          {data.username}
                        </span>
                      </div>
                      <div className='leaner_comment'>
                        <h3>{data.title}</h3>
                        <p>{data.expshare}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          <button type="button" onClick={this.showMore}>More Reviews</button>
        </div>
        <form autoComplete='off'>
          <div className='mb-3'>
            <h3 style={{ textAlign: 'center' }}>Review Submission</h3>
            <label htmlFor='exampleFormControlInput1' className='form-label'>
              UserName
            </label>
            <input
              type='text'
              className='form-control'
              id='exampleFormControlInput1'
              placeholder='Enter your username'
              name='username'
              onChange={this.handleChange}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='exampleFormControlInput1' className='form-label'>
              Title
            </label>
            <input
              type='text'
              className='form-control'
              id='exampleFormControlInput1'
              placeholder='Enter your Title'
              name='title'
              onChange={this.handleChange}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='exampleFormControlTextarea1' className='form-label'>
              Course Review
            </label>
            <textarea
              className='form-control'
              id='exampleFormControlTextarea1'
              rows='5'
              placeholder='You can share your course experience here'
              name='expshare'
              onChange={this.handleChange}
             />
          </div>
          <div className='mb-3'>
            <label htmlFor='exampleFormControlInput1' className='form-label'>
              Rating out of 5
            </label>
            <input
              type='number'
              className='form-control'
              id='exampleFormControlInput1'
              placeholder='Rating limit 1 to 5'
              name='rating'
              onChange={this.handleChange}
            />
          </div>
          <button type='submit' onClick={this.handleSubmit} className='btn btn-primary'>
            Share
          </button>
        </form>
      </div>
    );
  }
}

export default Review;
