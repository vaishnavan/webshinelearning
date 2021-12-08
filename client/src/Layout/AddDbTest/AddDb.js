/* eslint-disable no-alert */
import React, { Component } from 'react';
import firebase from 'firebase';
import { db } from '../../firebase';

const ref = firebase.firestore().collection('username');

class AddDb extends Component {
  constructor (props) {
    super(props);

    this.state = {
      username: '',
      userData: [],
    };
  }

  componentDidMount () {
    ref.get().then(user => {
      const users = user.docs.map(doc => doc.data());
      this.setState({
        userData: users,
      });
      // console.log(users);
    });
  }

  handleChange = event => {
    this.setState({
      username: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const {username} = this.state;
    db.collection('username')
      .add({
        username,
      })
      .then(() => {
        alert('message has been submitted');
      })
      .catch(error => {
        alert(error.message);
      });
  };

  render () {
    const { userData } = this.state;
    return (
      <div style={{ display: 'none' }}>
        <form>
          <input type='text' placeholder='enter the name' onChange={this.handleChange} />
          <button type="button" onClick={this.handleSubmit}>Submit</button>
        </form>
        {userData.map(data => (
            <>
              <h1>{data.username}</h1>
            </>
          ))}
      </div>
    );
  }
}

export default AddDb;
