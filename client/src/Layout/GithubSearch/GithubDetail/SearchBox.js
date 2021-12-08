/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import './githubDetail.css';

const SearchBox = ({ onInputChange, dataEvent }) => (
    <>
      <form
        autoComplete='off'
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <div className='github_search'>
          <input
            id='user'
            type='search'
            placeholder='Github UserName'
            name='user'
            onChange={onInputChange}
          />
          <button type="button" className='github_card_btn' onClick={dataEvent}>
            Search
          </button>
        </div>
      </form>
    </>
  );

export default SearchBox;
