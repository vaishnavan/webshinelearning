/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable react/sort-comp */
import React, { Component } from 'react';
import htmlParser from 'react-html-parser';
import moment from 'moment';
import Axios from 'axios';
import Loader from 'react-loader-spinner';
import { Helmet } from 'react-helmet';
import CodeForm from './CodeForm';
import Navbar from '../../NavbarLayout/Navbar/Navbar';
import Footer from '../../Footer/Footer';
import './codedisplay.css';

class CodeStack extends Component {
  constructor (props) {
    super(props);

    this.state = {
      codearr: [],
      search: '',
      show: false,
    };
  }

  handleChange = e => {
    this.setState({
      search: e.target.value,
    });
  };

  componentDidMount () {
    // const {show} = this.state;
    Axios.get('https://webshinejourney.herokuapp.com/codeGet').then(res => {
      this.setState({
        codearr: res.data,
        show: true,
      });
    });
    this.setState({
      show: false,
    });
  }

  render () {
    const { codearr, search, show } = this.state;
    const codeFilter = codearr.filter(searchData =>
      searchData.codeTopic.toLowerCase().includes(search.toLowerCase()),
    );
    return (
      <div>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Webshine | CodeStack</title>
        </Helmet>
        <Navbar />
        <CodeForm />
        {/* search box */}
        <div className='codeStack_search container'>
          <form>
            <input
              type='search'
              placeholder={`Search By Topics & ${codearr.length} answered`}
              onChange={this.handleChange}
            />
          </form>
        </div>
        {/* display */}
        {show ? (
          <>
            {codeFilter.reverse().map((data, i) => (
              <div key={i} className='codeStack_card container mb-3'>
                <div className='codeStack_topic'>
                  <h3>{data.codeTopic}</h3>
                </div>
                <div className='codeStack_content'>
                  <div>
                    <h3>Language: {data.codeType}</h3>
                  </div>
                  <div>
                    <h3>{moment(data.codeDate).format('D MMMM YYYY dddd')}</h3>
                  </div>
                </div>
                <div className='codeStack_content2'>
                  <pre>{htmlParser(data.codeContent)}</pre>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            <div className='stack-loader'>
              <Loader type='Grid' color='#336278' height={50} width={50} timeout={3000} />
            </div>
          </>
        )}

        <Footer />
      </div>
    );
  }
}

export default CodeStack;
