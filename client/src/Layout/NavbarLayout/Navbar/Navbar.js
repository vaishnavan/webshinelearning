/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from '../sidebar/SideDrawer';
import Backdrop from '../backdrop/Backdrop';

class Navbar extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => ({ sideDrawerOpen: !prevState.sideDrawerOpen }));
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render () {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <>
        <div style={{ height: '100%' }}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer
            show={this.state.sideDrawerOpen}
            click={this.backdropClickHandler}
            sideToggle={this.props.toggleBar}
            modeChangeReverse={this.props.modechangeData}
          />
          {backdrop}
        </div>
      </>
    );
  }
}

export default Navbar;
