import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Aos from 'aos';
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Learning from './Pages/learning/Learning';
import Forum from './Pages/Forum/Forum';
import Contact from './Pages/Contact/Contact';
import ReactQuiz from './Layout/quiz/React/ReactQuiz';
import HtmlQuiz from './Layout/quiz/Html/HtmlQuiz';
import ScrollToTop from './Layout/NavgateTop/ScrollToTop';
import CssQuiz from './Layout/quiz/Css/CssQuiz';
import JavascriptQuiz from './Layout/quiz/Javascript/JavascriptQuiz';
import Challenge from './Layout/Challege/Challenge';
import Journey from './Pages/Journey/Journey';
import JourneyForm from './Layout/JourneyExp/JourneyForm/JourneyForm';
import Quiz from './Layout/GameQuiz/Quiz';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import LeaderBoard from './Layout/LearderBoard/Leader/LeaderBoard';
import GithubUser from './Layout/GithubSearch/GithubDetail/GithubUser';
import CourseView from './Layout/CourseList/CourseView';
import { CodeStack } from './Layout';
import JobDisplay from './Layout/Jobportal/jobDisplay/JobDisplay';

// import { auth } from './firebase'
// import Login from './Layout/LoginSystem/LoginPage/Login';

class App extends Component {
  // constructor (props) {
  //   super(props)

  //   this.state = {
  //     user: {}
  //   }
  // }

  // authListener () {
  //   auth.onAuthStateChanged(user => {
  //     if (user) {
  //       this.setState({ user })
  //     } else {
  //       this.setState({ user: null })
  //     }
  //   })
  // }

  componentDidMount () {
    Aos.init({
      duration: 1000,
    });
    // this.authListener()
  }

  render () {
    return (
      <div>
        <Helmet>
          <meta charSet='utf-8' />
          <title>WebshineLearning | Development | WebDesign</title>
        </Helmet>
        <Router>
          <ScrollToTop>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/home' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/learning' component={Learning} />
              <Route exact path='/forum' component={Forum} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/Reactquiz' component={ReactQuiz} />
              <Route exact path='/htmlquiz' component={HtmlQuiz} />
              <Route exact path='/cssquiz' component={CssQuiz} />
              <Route exact path='/jsquiz' component={JavascriptQuiz} />
              <Route exact path='/challenge' component={Challenge} />
              <Route exact path='/journey' component={Journey} />
              <Route exact path='/journeyform' component={JourneyForm} />
              <Route exact path='/overallQuiz' component={Quiz} />
              <Route exact path='/leaderboard' component={LeaderBoard} />
              <Route exact path='/codestack' component={CodeStack} />
              <Route exact path='/githubUser' component={GithubUser} />
              <Route exact path='/allcourses' component={CourseView} />
              <Route exact path='/jobportal' component={JobDisplay} />
            </Switch>
          </ScrollToTop>
          <div className='whatsapp'>
            <Link
              target='_blank'
              to={{
                pathname: 'https://api.whatsapp.com/send?phone=919047609410',
              }}
            >
              <img
                src='https://www.freepnglogos.com/uploads/whatsapp-logo-png-photo-3.png'
                alt='no'
              />
            </Link>
          </div>
          <ToastContainer />
        </Router>
      </div>
    );
  }
}

export default App;
