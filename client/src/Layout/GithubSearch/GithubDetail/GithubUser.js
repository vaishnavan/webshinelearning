/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable react/destructuring-assignment */
import React, { Fragment, Component } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Navbar from '../../NavbarLayout/Navbar/Navbar';
import Footer from '../../Footer/Footer';
import Card from './Card';
import SearchBox from './SearchBox';
import './githubDetail.css';

class GithubUser extends Component {
  constructor (props) {
    super(props);
    this.state = {
      searchName: '',
      userData: '',
      repoData: [],
      show: false,
    };
  }

  onInputChange = event => {
    this.setState({ searchName: event.target.value, show: false }, () => {
      this.getData(this.state.searchName);
      this.getRepo(this.state.searchName);
    });
  };

  getRepo = userName => {
    axios.get(`https://api.github.com/users/${userName}/repos`).then(res => {
      this.setState({ repoData: res.data });
    });
  };

  getData = userName => {
    fetch(`https://api.github.com/users/${userName}`)
      .then(res => res.json())
      .then(data => this.setState({ userData: data }))
      .catch(error => {
        alert('Oops! Could not reach GitHub');
        // console.log('Oops! We have an error', error);
      });
  };

  handleClick = () => {
    this.setState({
      show: true,
    });
  };

  render () {
    // console.log(this.state.repoData)
    const { show } = this.state;
    return (
      <>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Webshine | GitHub</title>
        </Helmet>
        <Navbar />
        <SearchBox onInputChange={this.onInputChange} dataEvent={this.handleClick} />
        {this.state.userData.id && this.state.searchName !== '' ? (
          show ? (
            <Card profile={this.state.userData} repomain={this.state.repoData} />
          ) : (
            <h3 style={{ textAlign: 'center' }}>Searching...</h3>
          )
        ) : (
          <div className='no-data'>
            <h5 style={{ textAlign: 'center' }}>Find your friends Github account here.</h5> <br />
          </div>
        )}
        <Footer />
      </>
    );
  }
}

export default GithubUser;
