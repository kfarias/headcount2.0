import React, { Component } from 'react';
import Card from '../Card/Card';
import DistrictRepository from '../DistrictRepository';
import './Search.css';

class Search extends Component {
  constructor({ searchData, DistrictRepository }) {
    super()
    this.state = {
      input: '',
    }
  }

  handleChange(e){
    this.setState({ input: e.target.value });
    // grabCard()
  }

  grabCard(searchData) {
    //pass in our current input
    // searchData.findAllMatches(this.state.input)
    console.log(searchData.findAllMatches(this.state.input));;
    //take the input and compare it to our locations
    //display locations that match/return true
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
