import React, { Component } from 'react';
import './App.css';
import './reset.css';

import CardWrapper from '../CardWrapper/CardWrapper';
import Search from '../Search/Search';

import DistrictRepository from '../DistrictRepository';
import kinderData from '../../data/kindergartners_in_full_day_program.js';


class App extends Component {
  constructor() {
    super()
    this.districtRepo = new DistrictRepository(kinderData)
    this.state = {
      currentSearch: this.districtRepo.findAllMatches()
    }
    this.handleInputSearch = this.handleInputSearch.bind(this)
  }
  render() {
    return (
      <div className='header'>
        <h1>Welcome To Headcount 2.0</h1>
        <CardWrapper/>
      </div>
    );
  }
  handleInputSearch(input) {
    this.setState({ currentSearch: input })
  }
}

export default App;
