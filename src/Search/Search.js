import React from 'react';
import './Search.css';

// const data = new DistrictRepository(kinderData).data;

const Search = ({searchResults}) => {
  return(
    <navbar>
      <input className='search-input'
             placeholder='Enter a school district'
             type='text'
             onChange={(e) => searchResults(e)}></input>
    </navbar>
  )
}

  export default Search;
