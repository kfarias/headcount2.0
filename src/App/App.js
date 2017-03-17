import React, { Component } from 'react';
import styles from './App.css';
import './reset.css';

import Card from '../Card/Card'
import CardWrapper from '../CardWrapper/CardWrapper';
import Search from '../Search/Search';

import DistrictRepository from '../DistrictRepository';
import kinderData from '../../data/kindergartners_in_full_day_program.js';


class App extends Component {
  constructor() {
    super()

  }

  render() {
    const data = new DistrictRepository(kinderData).data;
    return (
      <div className='header'>
        <h1 className='welcome'>Headcount 2.0</h1>
        <div className='card-list'>
        <Search onChange={(e) => this.handleChange(e) } searchData={data}/>
        <CardWrapper kindergartnerData={data} className="test"/>
      </div>
      </div>
    );
  }
}

export default App;
