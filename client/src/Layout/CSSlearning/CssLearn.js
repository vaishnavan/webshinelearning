/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Link } from 'react-router-dom';

class CssLearn extends Component {
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
    const CssCode = `
        body {
            background-color: lightblue;
          }
          
          h1 {
            color: white;
            text-align: center;
          }
          
          p {
            font-family: verdana;
            font-size: 20px;
          }
        `;
    const { myDataHead } = this.state;
    const CssCode2 = `
        <!DOCTYPE html>
            <html>
                <head>
                    <link rel="stylesheet" href="mystyle.css">
                </head>
                <body>

                <h1>Webshine Learning</h1>
                <p>Learn to code your Life</p>

                </body>
            </html>
        `;

    const CssCode3 = `
        body {
            background-color: lightblue;
          }
          
          h1 {
            color: navy;
            margin-left: 20px;
          }
        `;
    return (
      <div>
        <div className='learningCourse'>
          <h3>
            CSS (Cascading Style Sheet)
            <Link target='_blank' to={{ pathname: 'http://playcode.io/' }}>
              {' '}
              - Code Playground
            </Link>
          </h3>
          <p>
            Cascading Style Sheets is a style sheet language used for describing the presentation of
            a document written in a markup language such as HTML. CSS is a cornerstone technology of
            the World Wide Web, alongside HTML and JavaScript.
          </p>
          <p>
            The name cascading comes from the specified priority scheme to determine which style
            rule applies if more than one rule matches a particular element. This cascading priority
            scheme is predictable.
          </p>
          <p>
            CSS is used to define styles for your web pages, including the design, layout and
            variations in display for different devices and screen sizes.
          </p>
          <SyntaxHighlighter
            data-aos='zoom-in'
            className='code_highlighter'
            language='css'
            style={darcula}
          >
            {CssCode}
          </SyntaxHighlighter>
          <h3>CSS Styling Types</h3>
          <p>There are three types of CSS Styles.</p>
          <ol>
            <li>Internal CSS.</li>
            <li>External CSS.</li>
            <li>Inline CSS.</li>
          </ol>
          <p>style attribute inside HTML elements</p>
          <p> style element in the head section"</p>
          <p> link element to link to an external CSS file</p>
          <h3>index.html</h3>
          <SyntaxHighlighter
            data-aos='zoom-in'
            className='code_highlighter'
            language='html'
            style={darcula}
          >
            {CssCode2}
          </SyntaxHighlighter>
          <h3>style.css</h3>
          <SyntaxHighlighter
            data-aos='zoom-in'
            className='code_highlighter'
            language='css'
            style={darcula}
          >
            {CssCode3}
          </SyntaxHighlighter>
          {/* download weekdays */}
          <div className='container tableDownload'>
            {}
            <h2 style={{ textAlign: 'center', padding: '10px 0' }}>Weekdays Batch Notes</h2>
            <table className='table table-striped'>
              <thead>
                <tr>
                  {myDataHead.map(data => <th key={data.id}>{data.myhead}</th>)}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>1</th>
                  <td>CSS Day1</td>
                  <td>
                    <Link to='videos/cssday1.zip' target='_blank' download>
                      Download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>2</th>
                  <td>CSS Day2</td>
                  <td>
                    <Link to='videos/cssday2.zip' target='_blank' download>
                      Download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>3</th>
                  <td>CSS Day 3,4,5</td>
                  <td>
                    <Link to='videos/cssGuide.zip' target='_blank' download>
                      Download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>4</th>
                  <td>CSS Day6</td>
                  <td>
                    <Link to='videos/cssday6.zip' target='_blank' download>
                      Download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>5</th>
                  <td>CSS Day7</td>
                  <td>
                    <Link to='videos/cssDay7.zip' target='_blank' download>
                      Download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>6</th>
                  <td>CSS Day8</td>
                  <td>
                    <Link to='videos/cssday8.zip' target='_blank' download>
                      Download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>7</th>
                  <td>CSS Day9</td>
                  <td>
                    <Link to='videos/cssday9.zip' target='_blank' download>
                      Download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>8</th>
                  <td>CSS Day10-Bootstrap</td>
                  <td>
                    <Link to='videos/bootstrap.zip' target='_blank' download>
                      Download
                    </Link>
                  </td>
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
                  <td>Reference Code for CSS part1</td>
                  <td>
                    <Link to='videos/cssGuide.zip' target='_blank' download>
                      Download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>2</th>
                  <td>Reference Code for CSS part2</td>
                  <td>
                    <Link to='videos/weekend2.zip' target='_blank' download>
                      Download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>3</th>
                  <td>CSS Project code</td>
                  <td>Comming soon</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* download weekEnd */}
          <div className='quiz_button'>
            <Link to='/cssquiz'>CSS MCQ</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CssLearn;
