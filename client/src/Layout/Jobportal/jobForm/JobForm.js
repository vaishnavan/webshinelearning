/* eslint-disable no-multi-str */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { toast } from 'react-toastify';
import Axios from 'axios';

class JobForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      jobName: '',
      companyName: '',
      experience: '',
      salary: '',
      location: '',
      jobDesc: '',
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
      jobDesc: e.target.getContent(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (
      this.state.jobName === '' ||
      this.state.companyName === '' ||
      this.state.experience === '' ||
      this.state.salary === '' ||
      this.state.location === '' ||
      this.state.jobDesc === ''
    ) {
      toast('All fields are required');
    } else if (this.state.jobDesc.length < 40) {
      toast('Code should be more than 100 words');
    } else {
      const jobData = {
        jobName: this.state.jobName,
        companyName: this.state.companyName,
        experience: this.state.experience,
        salary: this.state.salary,
        location: this.state.location,
        jobDesc: this.state.jobDesc,
      };
      Axios.post('https://learning-code-1axn.vercel.app/jobPost', jobData).then(res => {
        toast.success('Thank you for Adding Job Oppertunity');
      });
    }
  };

  render () {
    return (
      <div>
        <div style={{ textAlign: 'center' }}>
          <button
            type='button'
            className='btn btn-primary'
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
            style={{ margin: '10px', background: '#336278' }}
          >
            Add Jobs
          </button>
        </div>

        <div
          className='modal fade'
          id='exampleModal'
          tabIndex='-1'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div className='modal-dialog modal-dialog-centered'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>
                  Job Mania
                </h5>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                 />
              </div>
              <div className='modal-body'>
                <form>
                  <div className='mb-3'>
                    <label htmlFor='exampleInputEmail1' className='form-label'>
                      Job Title
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      onChange={this.handleChange}
                      name='jobName'
                    />
                    {/* <div  className='form-text'>
                      We'll never share your email with anyone else.
                    </div> */}
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='exampleInputEmail1' className='form-label'>
                      Company Name
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      onChange={this.handleChange}
                      name='companyName'
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='exampleInputEmail1' className='form-label'>
                      Job Experience
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      onChange={this.handleChange}
                      name='experience'
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='exampleInputEmail1' className='form-label'>
                      Salary Package
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      onChange={this.handleChange}
                      name='salary'
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='exampleInputEmail1' className='form-label'>
                      Location
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      onChange={this.handleChange}
                      name='location'
                    />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Job Description</label>
                    <Editor
                      init={{
                        height: 500,
                        menubar: false,
                        selector: 'textarea', // change this value according to your HTML
                        // plugins: 'media',
                        // menubar: 'insert',
                        // toolbar: 'media',
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JobForm;
