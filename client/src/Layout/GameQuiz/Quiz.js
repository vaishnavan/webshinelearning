/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Footer from '../Footer/Footer';
import Navbar from '../NavbarLayout/Navbar/Navbar';
import { QuizData } from './QuizData';
import './allquiz.css';

class Quiz extends React.Component {
  constructor () {
    super();
    this.state = {
      userAnswer: null,
      currentIndex: 0,
      options: [],
      quizEnd: false,
      score: 0,
      disabled: true,
    };
  }

  loadQuiz = () => {
    const { currentIndex } = this.state;

    this.setState(() => ({
      question: QuizData[currentIndex].question,
      options: QuizData[currentIndex].options,
      answer: QuizData[currentIndex].answer,
    }));
  };

  nextQuestionHandler = () => {
    const { userAnswer, answer, score } = this.state;

    if (userAnswer === answer) {
      this.setState({
        score: score + 1,
      });
    }

    this.setState({
      currentIndex: this.state.currentIndex + 1,
      userAnswer: null,
    });
  };

  componentDidMount () {
    this.loadQuiz();
  }

  checkAnswer = answer => {
    this.setState({
      userAnswer: answer,
      disabled: false,
    });
  };

  componentDidUpdate (prevProps, prevState) {
    const { currentIndex } = this.state;
    if (this.state.currentIndex !== prevState.currentIndex) {
      this.setState(() => ({
        question: QuizData[currentIndex].question,
        options: QuizData[currentIndex].options,
        answer: QuizData[currentIndex].answer,
      }));
    }
  }

  finishHandler = () => {
    if (this.state.currentIndex === QuizData.length - 1) {
      this.setState({
        quizEnd: true,
      });
    }
  };

  render () {
    const { quizEnd, question, currentIndex, userAnswer, options } = this.state;
    if (quizEnd) {
      return (
        <div>
          <Navbar />
          <div className='quiz_finalScore'>
            <h1>
              Quiz Over!!!
              <br />
              <br />
              Final score is <span>{this.state.score}</span> Correct
            </h1>
            <div className='quiz_return'>
              <Link to='/learning'>Back</Link>
            </div>
          </div>
          <Footer />
        </div>
      );
    }
    return (
      <>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Webshine | Quiz</title>
        </Helmet>
        <Navbar />
        <div className='allQuiz_main'>
          <h3>{question}</h3>
          <span>{`Qustion ${currentIndex + 1} of ${QuizData.length}`}</span>
          <div className='allQuiz_options'>
            {options.map(opt => (
              <>
                <p
                  className={`options ${userAnswer === opt ? 'selected' : null}`}
                  onClick={() => this.checkAnswer(opt)}
                >
                  {opt}
                </p>
              </>
            ))}
          </div>

          <div className='allQuiz_btn'>
            {currentIndex < QuizData.length - 1 && (
              <button
                type='button'
                disabled={this.state.disabled}
                onClick={this.nextQuestionHandler}
              >
                Next Question
              </button>
            )}
            {currentIndex === QuizData.length - 1 && (
              <button type='button' onClick={this.finishHandler} disabled={this.state.finish}>
                Finish
              </button>
            )}
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Quiz;
