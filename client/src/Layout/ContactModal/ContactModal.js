/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './ContactModal.css';

class ContactModal extends Component {
  render () {
    return (
      <div>
        <button
          type='button'
          className='btn'
          data-backdrop='false'
          data-bs-toggle='modal'
          data-bs-target='#staticBackdrop'
        >
          Quote
        </button>
        <div
          className='modal fade'
          id='staticBackdrop'
          data-backdrop='false'
          data-bs-backdrop='static'
          data-bs-keyboard='false'
          tabIndex='-1'
          aria-labelledby='staticBackdropLabel'
          aria-hidden='true'
        >
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                 />
              </div>
              <div className='modal-body'>
                <img
                  src='https://dcmep4q5dgnih.cloudfront.net/wp-content/uploads/2019/07/20201223/bill-gates.jpg'
                  width='100%'
                  alt='quote'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactModal;
