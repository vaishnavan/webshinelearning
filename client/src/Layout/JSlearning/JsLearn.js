/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React, { Component } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Link } from 'react-router-dom';

class JsLearn extends Component {
  constructor (props) {
    super(props);

    this.state = {
      myDataHead: [
        { myhead: 'S.No', id: '1' },
        { myhead: 'Topics', id: '2' },
        { myhead: 'Download Link', id: '3' },
      ],
    };
  }

  render () {
    const HtmlCode = `
        <!DOCTYPE html>
        <html>
            <body>

                <h2>JavaScript Arrays</h2>

                <p>JavaScript array elements are accessed using numeric indexes (starting from 0).</p>

                <p id="demo"></p>

                <script>
                var cars = ["Saab", "Volvo", "BMW"];
                document.getElementById("demo").innerHTML = cars[0];
                </script>

            </body>
        </html>
        `;
    const { myDataHead } = this.state;
    return (
      <div>
        <div className='learningCourse'>
          <h3>
            JS (JavaScript)
            <Link target='_blank' to={{ pathname: 'http://playcode.io/' }}>
              {' '}
              - Code Playground
            </Link>
          </h3>
          <p>
            JavaScript, often abbreviated as JS, is a programming language that conforms to the
            ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and
            multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based
            object-orientation, and first-class functions.
          </p>
          <p>Learn how to program in JavaScript with our online tutorial</p>
          <h3>JavaScript first steps</h3>
          <p>
            Answers some fundamental questions such as "what is JavaScript?", "what does it look
            like?", and "what can it do?", along with discussing key JavaScript features such as
            variables, strings, numbers, and arrays.
          </p>
          <h3>JavaScript building blocks</h3>
          <p>
            Continues our coverage of JavaScript's key fundamental features, turning our attention
            to commonly-encountered types of code blocks such as conditional statements, loops,
            functions, and events.
          </p>
          <SyntaxHighlighter
            data-aos='zoom-in'
            className='code_highlighter'
            language='html'
            style={darcula}
          >
            {HtmlCode}
          </SyntaxHighlighter>
          <h3>Introducing JavaScript objects</h3>
          <p>
            The object-oriented nature of JavaScript is important to understand if you want to go
            further with your knowledge of the language and write more efficient code, therefore
            we've provided this module to help you.
          </p>
          <h3>Asynchronous JavaScript</h3>
          <p>
            Discusses asynchronous JavaScript, why it is important, and how it can be used to
            effectively handle potential blocking operations such as fetching resources from a
            server.
          </p>
          <h3>Client-side web APIs</h3>
          <p>
            Explores what APIs are, and how to use some of the most common APIs you'll come across
            often in your development work.
          </p>

          {/* download weekdays */}
          <div className='container tableDownload'>
            {}
            <h2 style={{ textAlign: 'center', padding: '10px 0' }}>Weekdays Batch Notes</h2>
            <table className='table table-striped'>
              <thead>
                <tr>
                  {myDataHead.map(data => (
                    <th key={data.id}>{data.myhead}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>1</th>
                  <td>JS Full Guide</td>
                  <td>
                    <Link to='videos/javascriptdoc.zip' target='_blank' download>
                      Download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>2</th>
                  <td>JavaScript Project code</td>
                  <td>Comming soon</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* download weekdays */}
          {/* download weekEnd */}
          <div className='container tableDownload'>
            <h2 style={{ textAlign: 'center', padding: '10px 0' }}>Weekend Batch Notes</h2>
            <table className='table table-striped'>
              <thead>
                <tr>
                  {myDataHead.map(data => (
                    <th key={data.id} scope='col'>
                      {data.myhead}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>1</th>
                  <td>JS Full Guide</td>
                  <td>
                    <Link to='videos/javascriptdoc.zip' target='_blank' download>
                      Download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>2</th>
                  <td>JS Project code</td>
                  <td>Comming soon</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* download weekEnd */}
          <div className='quiz_button'>
            <Link to='/jsquiz'>JavaScript MCQ</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default JsLearn;
