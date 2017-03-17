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
    this.state = {
      data: {},
      search: [],
    }
  }

  searchResults(e){
    console.log(this.state.data.findAllMatches);
    this.setState({
      search: this.state.data.findAllMatches(e.target.value)
    })
  }

  componentWillMount() {
    const data = new DistrictRepository(kinderData);
    this.setState({
      data: data
      });
    }

    componentDidMount() {
      this.setState({ search: this.state.data.findAllMatches() })
    }

    render() {
      return (
        <div className='header'>
          <h1 className='welcome'>Headcount 2.0</h1>
          <p className='card-section'>
            <Search searchResults={(e) => this.searchResults(e) }/>
            <p className='cards'>
            <CardWrapper data={this.state.search}
                          className='test'/>
            </p>
          </p>
        </div>
      );
    }
  }

  App.propTypes = {
  name: React.PropTypes.string
}

  export default App;
