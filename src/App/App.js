import React, { Component } from 'react';
import styles from './App.css';
import './reset.css';

import Card from '../Card/Card'
import CardWrapper from '../CardWrapper/CardWrapper';
// import Search from '../Search/Search';

import DistrictRepository from '../DistrictRepository';
import kinderData from '../../data/kindergartners_in_full_day_program.js';


class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
    }
  }

  handleChange(e) {
    this.setState({input: e.target.value})
  }


  render() {
    const data = new DistrictRepository(kinderData).data;
    return (
      <div className='header'>
        <h1 className='welcome'>Headcount 2.0</h1>
        <div className='card-list'>
          <input className='search-input' placeholder='Search by County'
            type='search' onChange={(e) => this.handleChange(e)}></input>
        <CardWrapper kindergartnerData={data} className="test"/>
      </div>
      </div>
    );
  }
}

export default App;
