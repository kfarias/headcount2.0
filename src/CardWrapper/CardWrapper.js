import React, { Component } from 'react';
import Card from '../Card/Card';
import DistrictRepository from '../DistrictRepository';

import './CardWrapper.css';

const CardWrapper = ({ kindergartnerData }) => {

  const kinderKeysData = Object.keys(kindergartnerData).map((value, i) => {

    return(
      <div key={i}>
        <p>{value}</p>
        <Card location={ value } data={kindergartnerData[value].data}/>
      </div>
    )

  })

  return(
    <section>{ kinderKeysData }</section>
    )
  }




export default CardWrapper;
