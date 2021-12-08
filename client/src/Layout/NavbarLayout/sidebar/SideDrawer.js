/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './SideDrawer.css';
// import { auth } from '../../../firebase';

const SideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <Icon name='cancel' size='large' className='side_navCancel' onClick={props.click} />
      <ul className='side_navItem'>
        <li className='side_navList'>
          <Link to='/home'>Home</Link>
        </li>
        <li className='side_navList'>
          <Link to='/about'>About</Link>
        </li>
        <li className='side_navList'>
          <Link to='/learning'>Learning Hub</Link>
        </li>
        <li className='side_navList'>
          <Link to='/forum'>Forum</Link>
        </li>
        <li className='side_navList'>
          <Link to='/journey'>Journey</Link>
        </li>
        <li className='side_navList'>
          <Link to='/contact'>Contact</Link>
        </li>
        {/* <li><button className="btn btn-primary" onClick={()=> auth.signOut()}>Logout</button></li> */}
        {/* <button onClick={props.sideToggle}>{props.modeChangeReverse}</button> */}
      </ul>
    </nav>
  );
};

export default SideDrawer;
