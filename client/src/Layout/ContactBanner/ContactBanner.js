/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './contactbanner.css';

class ContactBanner extends Component {
  render () {
    return (
      <div>
        <div className='banner_head'>
          <h3>Contact Us</h3>
        </div>
        <div className='contact_main'>
          <iframe
            data-aos='zoom-in'
            id='JotFormIFrame-210573216286050'
            title='Form'
            onLoad='window.parent.scrollTo(0,0)'
            allowtransparency='true'
            allowFullScreen='true'
            allow='geolocation; microphone; camera'
            src='https://form.jotform.com/210573216286050'
            frameBorder='0'
            style={{ minWidth: '100%', height: '539px', border: 'none' }}
            scrolling='no'
          />
        </div>
        <div className='contact_details_main'>
          <div className='contact_info'>
            <h1>Getting in touch is easy!</h1>
            <div className='contact_infomain'>
              <div className='info_mobile'>
                <div className='contact_mobile'>
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ9ubyNlEdAtYxQf-QkR5OAPB93lrfzT8Yzw&usqp=CAU'
                    alt='no'
                  />
                </div>
                <div className='contact_mobileInfo'>
                  <h3>+91 9047609410</h3>
                  <h3>+91 7904021944</h3>
                </div>
              </div>
              <div className='info_mobile'>
                <div className='contact_mobile'>
                  <img
                    src='https://i.pinimg.com/originals/2b/b4/28/2bb428b7e4aa39078a119deccacae6f3.png'
                    alt='no'
                  />
                </div>
                <div className='contact_mobileInfo'>
                  <h3>webshine2020@gmail.com</h3>
                  <h3>sakthi4645@gmail.com</h3>
                </div>
              </div>
              <div className='info_mobile'>
                <div className='contact_mobile'>
                  <img
                    src='https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-location-icon-png-image_4277382.jpg'
                    alt='no'
                  />
                </div>
                <div className='contact_mobileInfo'>
                  <h3>
                    63, Karuppanna Gounder Layout, Peelamedu, <br />
                    Coimbatore-641004.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactBanner;
