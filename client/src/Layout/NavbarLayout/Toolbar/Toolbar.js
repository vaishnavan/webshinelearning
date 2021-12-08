/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Toolbar.css';
// import { auth } from '../../../firebase';

class Toolbar extends Component {
  render () {
    return (
      <>
        <header className='toolbar_headerMain'>
          <nav className='toolbar_headerNav'>
            <div className='toolbar_divide'>
              <div className='toolbar__toggle-button'>
                <Icon name='bars' size='large' onClick={this.props.drawerClickHandler} />
              </div>
              <div className='toolbar_navLogo'>
                <h2>
                  <Link to='/'>
                    Web<sub>s</sub>hine .
                  </Link>
                </h2>
              </div>
            </div>
            <div className='toolbar_split' />
            <div className='toolbar_navItems'>
              <ul>
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
                  <Link to='/journey'>Journey</Link>
                </li>
                <li>
                  <Link to='/contact'>Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default Toolbar;
