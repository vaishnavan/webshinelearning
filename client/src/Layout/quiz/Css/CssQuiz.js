/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import axios from 'axios';
import { Icon } from 'semantic-ui-react';
import Footer from '../../Footer/Footer';
import Navbar from '../../NavbarLayout/Navbar/Navbar';
import '../React/reactquiz.css';

class CssQuiz extends Component {
  constructor (props) {
    super(props);

    this.state = {
      ReactQust: [],
      show: false,
      visible: 5,
    };
  }

  componentDidMount () {
    axios.get('QuizData.json').then(Quiz => {
      this.setState({
        ReactQust: Quiz.data,
      });
    });
  }

  showMore = () => {
    this.setState({
      visible: this.state.visible + 5,
    });
  };

  handleClick = index => {
    const { show } = this.state;
    this.setState({
      show: {
        ...show,
        [index]: !show[index],
      },
    });
  };

  render () {
    const { ReactQust, show, visible } = this.state;
    const CssQuestionCount = ReactQust.map(data => data.CssMcq.length);
    return (
      <div>
        <Navbar />
        <div className='quiz_main'>
          <h2>CSS Questions & Answers ( Questions {CssQuestionCount} )</h2>
          <hr />
        </div>
        <div className='quiz_data'>
          {ReactQust.map((data, index) => (
            <div key={index} className='quiz_question_min'>
              {data.CssMcq.slice(0, visible).map((item, index) => (
                <div data-aos='fade-up' key={item.questionId} className='quiz_question'>
                  <h3>
                    {index + 1}. {item.question}
                  </h3>
                  <ol type='a'>
                    {show[index] ? (
                      <div onClick={() => this.handleClick(index)}>
                        {item.answers.map((opt, index) => (
                          <div key={index}>
                            <li className={opt === item.correct ? 'colorGreen' : 'colorRed'}>
                              {opt}
                            </li>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div onClick={() => this.handleClick(index)}>
                        {item.answers.map((opt, index) => (
                          <div key={index}>
                            <li>{opt}</li>
                          </div>
                        ))}
                      </div>
                    )}
                  </ol>
                  {show[index] ? (
                    <div>
                      <button
                        type='button'
                        className='view_button'
                        onClick={() => this.handleClick(index)}
                      >
                        <Icon name='eye' /> View Answer
                      </button>
                      <h3 className={show ? 'display' : 'hideAnswer'}>{item.correct}</h3>
                    </div>
                  ) : (
                    <button
                      type='button'
                      className='view_button'
                      onClick={() => this.handleClick(index)}
                    >
                      <Icon name='eye' /> View Answer
                    </button>
                  )}
                </div>
              ))}
              <button type='button' onClick={this.showMore}>Load More</button>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default CssQuiz;
