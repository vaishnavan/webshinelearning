/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './course.css';

class Course extends Component {
  render () {
    return (
      <div className='course_main container'>
        <h2>Course Details</h2>
        <hr />
        <div data-aos='fade-up' className='accordion' id='accordionExample'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingOne'>
              <button
                className='accordion-button'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseOne'
                aria-expanded='true'
                aria-controls='collapseOne'
              >
                HTML (Hypertext Markup Language)
              </button>
            </h2>
            <div
              id='collapseOne'
              className='accordion-collapse collapse show'
              aria-labelledby='headingOne'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <ol>
                  <li>Introduction to HTML</li>
                  <li>Basics of HTML</li>
                  <li>Building Form, List and Table Data</li>
                  <li>About Media , semantic tags.</li>
                  <li>Advanced HTML Tags</li>
                  <li>Basic knowledge of Canvas and SVG</li>
                  <li>Building a HTML Project</li>
                </ol>
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingTwo'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseTwo'
                aria-expanded='false'
                aria-controls='collapseTwo'
              >
                CSS (Cascading Style Sheet)
              </button>
            </h2>
            <div
              id='collapseTwo'
              className='accordion-collapse collapse'
              aria-labelledby='headingTwo'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <ol>
                  <li>Introduction to CSS: Why Use CSS?</li>
                  <li>CSS Syntax</li>
                  <li>HTML 5 and CSS</li>
                  <li>Setting Up Web Pages with CSS</li>
                  <li>Styling Text, Font, and Properties</li>
                  <li>Using Borders and Height and Width CSS Properties</li>
                  <li>Positioning Elements</li>
                  <li>Validating CSS and HTML</li>
                  <li>Using Flex-Box</li>
                  <li>Grid system with CSS</li>
                  <li>Media Quries</li>
                  <li>What is Responsivness?</li>
                  <li>Building Capstone Project using HTML and CSS</li>
                </ol>
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingThree'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseThree'
                aria-expanded='false'
                aria-controls='collapseThree'
              >
                JS (JavaScript)
              </button>
            </h2>
            <div
              id='collapseThree'
              className='accordion-collapse collapse'
              aria-labelledby='headingThree'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <ol>
                  <li>Introduction to JavaScript</li>
                  <li>Js syntax</li>
                  <li>Variables and Operators</li>
                  <li>Datatypes and How to use it?</li>
                  <li>Js Conditions</li>
                  <li>Js Functions</li>
                  <li>Js Array and Date Format</li>
                  <li>Js promises and Ajax Request</li>
                  <li>EcmaScript 6 (oop's concept)</li>
                  <li>Assign variable using Let, Const, Var</li>
                  <li>Js classes</li>
                  <li>Js this and super keyword.</li>
                  <li>Js objects</li>
                  <li>Arrow function with Example</li>
                  <li>Building a Capstone Project using JavaScript</li>
                </ol>
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingFour'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseFour'
                aria-expanded='false'
                aria-controls='collapseFour'
              >
                jQuery
              </button>
            </h2>
            <div
              id='collapseFour'
              className='accordion-collapse collapse'
              aria-labelledby='headingFour'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <ol>
                  <li>Introduction to jQuery</li>
                  <li>jQuery Syntax</li>
                  <li>Selector and Events</li>
                  <li>jQuery Effects</li>
                  <li>jQuery HTML and Add class dynamically</li>
                  <li>jQuery Traversing</li>
                  <li>Building a jQuery Project</li>
                </ol>
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingFive'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseFive'
                aria-expanded='false'
                aria-controls='collapseFive'
              >
                React (JavaScript Library)
              </button>
            </h2>
            <div
              id='collapseFive'
              className='accordion-collapse collapse'
              aria-labelledby='headingFive'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <ol>
                  <li>Setup Node.js and About NPM (Node package manager)</li>
                  <li>Introduction to React</li>
                  <li>React Components and Virtual-DOM</li>
                  <li>Why JSX ?</li>
                  <li>React State and Props</li>
                  <li>Event Handlying and Styles</li>
                  <li>React Proptypes and Forms</li>
                  <li>LifeCycle method in React</li>
                  <li>React Router to navigate different pages.</li>
                  <li>Context API</li>
                  <li>React-Redux Using action, reducer and Store.</li>
                  <li>Using Axios and Fetch</li>
                  <li>Localstorage and session storage in React</li>
                  <li>Cookies (Universal cookies)</li>
                  <li>React charts</li>
                  <li>React Hooks</li>
                  <li>What is NEXT.js?</li>
                  <li>Building a Capstone Project using React</li>
                </ol>
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingSix'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseSix'
                aria-expanded='false'
                aria-controls='collapseSix'
              >
                Node.js
              </button>
            </h2>
            <div
              id='collapseSix'
              className='accordion-collapse collapse'
              aria-labelledby='headingSix'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <ol>
                  <li>Introduction to Node.js</li>
                  <li>Express.js Framework</li>
                  <li>Creating a localhost</li>
                  <li>using mongoose package</li>
                  <li>Creating mongoose schema</li>
                  <li>Creating Express Router</li>
                  <li>Creating CURD operation</li>
                  <li>using Postman</li>
                  <li>Building a API using Node.js</li>
                </ol>
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingSeven'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseSeven'
                aria-expanded='false'
                aria-controls='collapseSeven'
              >
                MongoDB
              </button>
            </h2>
            <div
              id='collapseSeven'
              className='accordion-collapse collapse'
              aria-labelledby='headingSeven'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <ol>
                  <li>Introduction to MongoDB</li>
                  <li>Setup MongoDB Atlas</li>
                  <li>Understanding the Basics & CURD operation</li>
                  <li>Schemas & Relations: How to Structure Documents</li>
                  <li>Why NoSQL ?</li>
                  <li>About MERN Stack</li>
                  <li>Building a Full-stack Project Using MERN Stack</li>
                  <li>How to deploy project in Firebase</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Course;
