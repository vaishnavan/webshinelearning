import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './admodal.css';

class AdModal extends Component {
  constructor () {
    super();
    this.state = {
      show: false,
    };
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        show: true,
      });
    }, 10000);
  }

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  render () {
    const { show } = this.state;
    return (
      <div>
        <Modal
          aria-labelledby='contained-modal-title-vcenter'
          centered
          show={show}
          onHide={this.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Tech bits</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            React 17 is primarily focused on making it easier to upgrade React itself. Though it is
            unusual that there are no developer-facing features in this update, the main objective
            of this release is to make sure it is safe to embed a tree managed by one version of
            React inside a tree managed by another version of React.
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default AdModal;
