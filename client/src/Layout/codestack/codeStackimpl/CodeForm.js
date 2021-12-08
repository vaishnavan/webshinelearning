/* eslint-disable no-multi-str */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { toast } from 'react-toastify';
import Axios from 'axios';

class CodeForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      codeTopic: '',
      codeType: '',
      codeContent: '',
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
      codeContent: e.target.getContent(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (
      this.state.codeTopic === '' ||
      this.state.codeType === '' ||
      this.state.codeContent === ''
    ) {
      toast('All fields are required');
    } else if (this.state.codeContent.length < 100) {
      toast('Code should be more than 100 words');
    } else {
      const codeData = {
        codeTopic: this.state.codeTopic,
        codeType: this.state.codeType,
        codeContent: this.state.codeContent,
      };
      Axios.post('https://webshinejourney.herokuapp.com/codePost', codeData).then(res => {
        toast.success('Thank you for sharing your Code');
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
            Click here to add your Code
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
                  Code Stack
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
                      Code Topic
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      onChange={this.handleChange}
                      name='codeTopic'
                    />
                    {/* <div  className='form-text'>
                      We'll never share your email with anyone else.
                    </div> */}
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='exampleInputEmail1' className='form-label'>
                      Code Language
                    </label>
                    <select
                      className='form-select'
                      aria-label='Default select example'
                      onChange={this.handleChange}
                      name='codeType'
                    >
                      <option selected>Select Language</option>
                      <option value='HTML'>HTML</option>
                      <option value='CSS'>CSS</option>
                      <option value='JavaScript'>JavaScript</option>
                      <option value='ReactJs'>ReactJs</option>
                      <option value='NodeJs'>NodeJs</option>
                    </select>
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Submit your code here</label>
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

export default CodeForm;
