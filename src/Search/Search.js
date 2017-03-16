import React, { Component } from 'react';
import Card from '../Card/Card';

import './Search.css';

class Search extends Component {
  constructor() {
    super()
  }
render(){
  return(
    <navbar>
      <input placeholder='Enter a school district'
             type='text'></input>
    </navbar>
    )
  }
}

export default Search;
