/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Link } from 'react-router-dom';

class ReactLearn extends Component {
  render () {
    const ReactCode1 = `npm install -g create-react-app`;
    const ReactCode2 = `npx create-react-app myfirstProject`;
    const ReactCode3 = `cd myfirstProject`;
    const ReactCode4 = `npm start`;
    const ReactCode5 = `
        class Car extends React.Component {
            render() {
              return <h2>Hi, I am a Car!</h2>;
            }
          }
        `;
    const ReactCode6 = `
        function Car() {
            return <h2>Hi, I am also a Car!</h2>;
          }
        `;

    return (
      <div>
        <div className='learningCourse'>
          <h3>
            ReactJs (JavaScript Library)
            <Link
              target='_blank'
              to={{
                pathname:
                  'https://codesandbox.io/dashboard/home?workspace=766f054d-6806-40e9-9b7e-8de61521984a',
              }}
            >
              {' '}
              - Code Playground
            </Link>
          </h3>
          <p>
            React is an open-source, front end, JavaScript library for building user interfaces or
            UI components. It is maintained by Facebook and a community of individual developers and
            companies. React can be used as a base in the development of single-page or mobile
            applications.
          </p>
          <h3>Create React App</h3>
          <ol>
            <li>
              In order to learn and test React, you should set up a React Environment on your
              computer.
            </li>
            <li>This tutorial uses the create-react-app.</li>
            <li>
              The create-react-app is an officially supported way to create React applications.
            </li>
            <li>
              If you have NPM and Node.js installed, you can create a React application by first
              installing the create-react-app.
            </li>
            <li>Install create-react-app by running this command in your terminal:</li>
          </ol>
          <SyntaxHighlighter
            data-aos='zoom-in'
            className='code_highlighter'
            language='html'
            style={darcula}
          >
            {ReactCode1}
          </SyntaxHighlighter>
          <p>You are now ready to create your first React application!</p>
          <p>Run this command to create a React application named myFirstProject:</p>
          <SyntaxHighlighter
            data-aos='zoom-in'
            className='code_highlighter'
            language='html'
            style={darcula}
          >
            {ReactCode2}
          </SyntaxHighlighter>
          <p>Run this command to move to the myfirstreact directory:</p>
          <SyntaxHighlighter
            data-aos='zoom-in'
            className='code_highlighter'
            language='html'
            style={darcula}
          >
            {ReactCode3}
          </SyntaxHighlighter>
          <p>Run this command to execute the React application myfirstreact:</p>
          <SyntaxHighlighter
            data-aos='zoom-in'
            className='code_highlighter'
            language='html'
            style={darcula}
          >
            {ReactCode4}
          </SyntaxHighlighter>
          <h3>Our React app setUp done successfully.</h3>
          <p>
            Now open new browser window and search <b>localhost:3000</b> to view the output.
          </p>
          <h3>What is JSX?</h3>
          <p>JSX stands for JavaScript XML.</p>
          <p>JSX allows us to write HTML in React.</p>
          <p>JSX makes it easier to write and add HTML in React.</p>
          <h3>React Components</h3>
          <p>
            Components are independent and reusable bits of code. They serve the same purpose as
            JavaScript functions, but work in isolation and return HTML via a render() function.
          </p>
          <p>There are two types of component</p>
          <ol>
            <li>Class components</li>
            <li>Function components</li>
          </ol>
          <h3>Create Class components</h3>
          <p>
            The component has to include the extends React.Component statement, this statement
            creates an inheritance to React.Component, and gives your component access to
            React.Component's functions.
          </p>
          <p>The component also requires a render() method, this method returns HTML.</p>
          <SyntaxHighlighter
            data-aos='zoom-in'
            className='code_highlighter'
            language='jsx'
            style={darcula}
          >
            {ReactCode5}
          </SyntaxHighlighter>
          <h3>Create Functional components</h3>
          <p>
            A Function component also returns HTML, and behaves pretty much the same way as a Class
            component
          </p>
          <SyntaxHighlighter
            data-aos='zoom-in'
            className='code_highlighter'
            language='jsx'
            style={darcula}
          >
            {ReactCode6}
          </SyntaxHighlighter>
          <div className='quiz_button'>
            <Link to='/Reactquiz'>React MCQ</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ReactLearn;
