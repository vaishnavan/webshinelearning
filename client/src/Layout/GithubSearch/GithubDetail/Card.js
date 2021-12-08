/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Card = ({ profile, repomain }) => 
  // console.log(repomain)
   (
    <div className='github_card'>
      {/* Avatar */}
      <div className='github_card_box'>
        <div>
          <img src={profile.avatar_url} alt={profile.name} />
        </div>
        {/* Info */}
        <div className='Github_table'>
          <div className='github_inner'>
            <table>
              <tr>
                <th>Name : </th>
                <td>{profile.name}</td>
              </tr>
              <tr>
                <th>Github Link : </th>
                <td>
                  <Link to={{ pathname: `${profile.html_url}` }} target='_blank' rel='noreferrer'>
                    {profile.html_url}
                  </Link>
                </td>
              </tr>
              <tr>
                <th>Email : </th>
                <td>{profile.Email}</td>
              </tr>
              <tr>
                <th>Working In : </th>
                <td>{profile.company}</td>
              </tr>
              <tr>
                <th>Blog : </th>
                <td>
                  <Link to={{ pathname: `${profile.blog}` }} target='_blank' rel='noreferrer'>
                    {profile.blog}
                  </Link>
                </td>
              </tr>
              <tr>
                <th>BIO : </th>
                <td>{profile.bio}</td>
              </tr>
              <tr>
                <th>Location : </th>
                <td>{profile.location}</td>
              </tr>
              <tr>
                <th>Public Repos : </th>
                <td>{profile.public_repos}</td>
              </tr>
              <tr>
                <th>Joined Github At : </th>
                <td> {moment(profile.created_at).format('LLL')}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className='repodata_diaplay'>
        <h2 style={{ textTransform: 'capitalize', color: 'gray' }}>{profile.login} Repository</h2>
        {repomain.reverse().map((data, i) => (
            <div key={i}>
              <div className='github_scroller_design'>
                <div className='github_scroller_main'>
                  <div className='github_repoName'>
                    <h3>{data.name}</h3>
                  </div>
                  <div className='github_repolink'>
                    <Link to={{ pathname: `${data.html_url}` }} target='_blank' rel='noreferrer'>
                      {data.html_url}
                    </Link>
                  </div>
                  <div className='github_repolang'>
                    <h3>{data.language}</h3>
                  </div>
                </div>
                <div className='github_repocreated'>
                  <h3>{moment(data.created_at).format('LL')}</h3>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
;

export default Card;
