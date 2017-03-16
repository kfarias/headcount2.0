import React, { Component } from 'react';
import './App.css';
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
        <h1>Welcome To Headcount 2.0</h1>
        <Search/>
        <CardWrapper kindergartnerData={data}/>
      </div>
    );
  }
}

export default App;
