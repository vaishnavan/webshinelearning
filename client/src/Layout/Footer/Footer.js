/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import './footer.css';

class Footer extends Component {
  constructor (props) {
    super(props);

    this.state = {
      email: '',
    };
  }

  handleChange = e => {
    this.setState({
      email: e.target.value,
    });
  };

  render () {
    const { email } = this.state;
    return (
      <div>
        <div id='footer'>
          <div className='container'>
            <div className='row text-center text-xs-center text-sm-left text-md-left'>
              <div className='col-xs-12 col-sm-4 col-md-4 footer_subscribe' id='subscribe'>
                <h3 style={{ fontFamily: 'cursive' }}>
                  Web<sub>s</sub>hine .
                </h3>
                <p>
                  Webshine is an online learning platform for all the new learners who are keen to
                  learn the web technologies.Learn web development at your own place.Each aspect of
                  creating websites and applications a unique set of skills.
                </p>
                <div id='mc_embed_signup'>
                  <form
                    autoComplete='off'
                    action='https://gmail.us7.list-manage.com/subscribe/post?u=59c374dcbdf5364044e3b9f23&amp;id=29b7edf38e'
                    method='post'
                    id='mc-embedded-subscribe-form'
                    name='mc-embedded-subscribe-form'
                    className='validate'
                    target='_blank'
                    noValidate
                  >
                    <div id='mc_embed_signup_scroll'>
                      <h2>Subscribe</h2>
                      <div className='indicates-required'>
                        <span className='asterisk'>*</span> indicates required
                      </div>
                      <div className='mc-field-group'>
                        <label htmlFor='mce-EMAIL'>
                          Email Address <span className='asterisk'>*</span>
                        </label>
                        <input
                          type='email'
                          onChange={this.handleChange}
                          value={email}
                          name='EMAIL'
                          className='required email'
                          id='mce-EMAIL'
                        />
                      </div>
                      <div id='mce-responses' className='clear'>
                        <div
                          className='response'
                          id='mce-error-response'
                          style={{ display: 'none' }}
                        />
                        <div
                          className='response'
                          id='mce-success-response'
                          style={{ display: 'none' }}
                        />
                      </div>

                      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden='true'>
                        <input
                          type='text'
                          name='b_59c374dcbdf5364044e3b9f23_29b7edf38e'
                          tabIndex='-1'
                          value=''
                        />
                      </div>
                      <div className='clear'>
                        <input
                          type='submit'
                          value='Subscribe'
                          name='subscribe'
                          id='mc-embedded-subscribe'
                          className='button'
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className='col-xs-12 col-sm-4 col-md-4 link_main'>
                <h3>Quick links</h3>
                <ul className='list-unstyled quick-links'>
                  <li>
                    <Link to='/home'>Home</Link>
                  </li>
                  <li>
                    <Link to='/about'>About</Link>
                  </li>
                  <li>
                    <Link to='/learning'>Learning Hub</Link>
                  </li>
                  <li>
                    <Link to='/forum'>Forum</Link>
                  </li>
                  <li>
                    <Link to='/contact'>Contact</Link>
                  </li>
                </ul>
              </div>
              <div className='col-xs-12 col-sm-4 col-md-4 address_main'>
                <h3>Address</h3>
                <ul className='list-unstyled quick-links'>
                  <li>
                    <Icon name='map marker alternate' size='large' /> 63, Karuppanna Gounder Layout,{' '}
                    <br /> Peelamedu, <br /> Coimbatore-641004.
                  </li>
                  <li>
                    <Icon name='text telephone' size='large' /> +91 9047609410
                  </li>
                  <li>
                    <Icon name='text telephone' size='large' /> +91 7904021944
                  </li>
                  <li>
                    <Icon name='mail outline' size='large' /> webshine2020@gmail.com
                  </li>
                  <li>
                    <Icon name='mail outline' size='large' /> sakthi4645@gmail.com
                  </li>
                  <li />
                </ul>
              </div>

              <div className='col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5'>
                <ul className='list-unstyled list-inline social text-center'>
                  <li className='list-inline-item'>
                    <Link
                      target='_blank'
                      to={{
                        pathname: 'https://www.facebook.com/vaishnavan.m.7/',
                      }}
                    >
                      <i className='fa fa-facebook' />
                    </Link>
                  </li>
                  <li className='list-inline-item'>
                    <Link target='_blank' to={{ pathname: 'https://twitter.com/vaishnavan18' }}>
                      <i className='fa fa-twitter' />
                    </Link>
                  </li>
                  <li className='list-inline-item'>
                    <Link
                      target='_blank'
                      to={{
                        pathname: 'https://www.instagram.com/sakthi_ns_pulsar_5/',
                      }}
                    >
                      <i className='fa fa-instagram' />
                    </Link>
                  </li>
                  <li className='list-inline-item'>
                    <Link to='#'>
                      <i className='fa fa-google-plus' />
                    </Link>
                  </li>
                  <li className='list-inline-item'>
                    <Link to='#'>
                      <i className='fa fa-envelope' />
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <hr /> */}
            </div>

            <div className='row'>
              <div className='col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white'>
                <p>Webshine2020@ Read All Terms & conditions .</p>
                <p className='h6'>© All rights Reserved.</p>
              </div>
              {/* <hr /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
