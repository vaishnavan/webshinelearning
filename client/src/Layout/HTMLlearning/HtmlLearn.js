import React, { Component } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Link } from 'react-router-dom';

class HtmlLearn extends Component {
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
            <head>
                <title>Webshine Learning</title>
            </head>
            <body>
                <h1>Welcome to Webshine Learning</h1>
            </body>
        </html>
        `;
    const { myDataHead } = this.state;
    return (
      <div>
        <div className='learningCourse'>
          <h3>
            HTML (Hypertext markup language)
            <Link target='_blank' to={{ pathname: 'http://playcode.io/' }}>
              {' '}
              - Code Playground
            </Link>
          </h3>
          <p>
            Hypertext Markup Language is the standard markup language for documents designed to be
            displayed in a web browser. It can be assisted by technologies such as Cascading Style
            Sheets and scripting languages such as JavaScript.
          </p>
          <p>Follow the steps below to create your first web page with Notepad or TextEdit.</p>
          <ol>
            <li>Step 1: Open Notepad (PC) Windows 8 or later: </li>
            <li>Step 1: Open TextEdit (Mac) Open Finder - Applications - TextEdit.</li>
            <li>Step 2: Write Some HTML.</li>
            <li>Step 3: Save the HTML Page.</li>
            <li>Step 4: View the HTML Page in Your Browser.</li>
          </ol>
          <SyntaxHighlighter
            data-aos='zoom-in'
            className='code_highlighter'
            language='html'
            style={darcula}
          >
            {HtmlCode}
          </SyntaxHighlighter>
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
                  <td>Topics covered till day3</td>
                  <td>
                    <Link to='videos/html.zip' target='_blank' download>
                      Download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>2</th>
                  <td>Media tag code</td>
                  <td>
                    <Link to='videos/day4.zip' target='_blank' download>
                      Download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>3</th>
                  <td>HTML Project Code </td>
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
                  <td>Reference Code for HTML</td>
                  <td>
                    <Link to='videos/HTMLnew.zip' target='_blank' download>
                      Download
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>2</th>
                  <td>HTML Project code</td>
                  <td>Comming soon</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* download weekEnd */}
          <div className='quiz_button'>
            <Link to='/htmlquiz'>HTML MCQ</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HtmlLearn;
