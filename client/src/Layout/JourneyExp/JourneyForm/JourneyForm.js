/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-dupe-keys */
/* eslint-disable no-multi-str */
import React, { Component } from 'react';
// import { db } from '../../../firebase';
import { Editor } from '@tinymce/tinymce-react';
import { toast } from 'react-toastify';
import Axios from 'axios';
import { Helmet } from 'react-helmet';
import Navbar from '../../NavbarLayout/Navbar/Navbar';
import Footer from '../../Footer/Footer';
import './Journeyform.css';

class JourneyForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      username: '',
      journeyTitle: '',
      experience: '',
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleEditorChange = e => {
    this.setState({
      experience: e.target.getContent(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (
      this.state.username === '' ||
      this.state.journeyTitle === '' ||
      this.state.experience === ''
    ) {
      toast('All fields are required');
    } else if (this.state.experience.length < 100) {
      toast('Journey should be more than 100 words');
    } else {
      const journeyData = {
        username: this.state.username,
        journeyTitle: this.state.journeyTitle,
        experience: this.state.experience,
      };
      Axios.post('https://learning-code-1axn.vercel.app/', journeyData).then(res => {
        toast.success('Thank you for sharing your experience');
        this.props.history.push('/journey');
      });
    }
  };

  render () {
    return (
      <div>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Webshine | Journey Form</title>
        </Helmet>
        <Navbar />
        <div className='journeyform_main'>
          <h2>My Journey</h2>
          <form autoComplete='off'>
            <div className='mb-3'>
              <label className='form-label'>
                Name<sup>*</sup>
              </label>
              <input
                type='text'
                onChange={this.handleChange}
                name='username'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>
                Journey Title<sup>*</sup>
              </label>
              <input
                type='text'
                className='form-control'
                onChange={this.handleChange}
                name='journeyTitle'
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>
                Your Interest Experience in life journey<sup>*</sup>
              </label>
              <Editor
                init={{
                  height: 500,
                  menubar: false,
                  selector: 'textarea', // change this value according to your HTML
                  plugins: 'media',
                  menubar: 'insert',
                  toolbar: 'media',
                  media_dimensions: false,
                  plugins: [
                    'advlist autolink lists link image',
                    'charmap print preview anchor help',
                    'searchreplace visualblocks code',
                    'insertdatetime media table paste wordcount',
                  ],
                  toolbar:
                    'undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help',
                }}
                onChange={this.handleEditorChange}
              />
            </div>
            <button type='submit' onClick={this.handleSubmit} className='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default JourneyForm;
