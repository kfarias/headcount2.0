import React, { Component } from 'react';
import Card from '../Card/Card';

import './Search.css';

class Search extends Component {
  constructor() {
    super()
    this.state = {
      location: '',
    }
  }

  handleChange(e){
    this.setState({ location: e.target.value });
    console.log(this.state)
  }

  render(){
    return(
      <navbar>
        <input placeholder='Enter a school district'
          type='text' onChange={this.handleChange.bind(this)}></input>
        </navbar>
      )
    }
  }

  export default Search;
