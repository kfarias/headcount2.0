import React, { Component } from 'react';
import Card from '../Card/Card';
import DistrictRepository from '../DistrictRepository';

import styles from './CardWrapper.css';

const CardWrapper = ({ kindergartnerData }) => {

  const kinderKeysData = Object.keys(kindergartnerData).map((value, i) => {

    return(
      <div key={i} className="individual-card">
        <div className="location-data">{value}</div>
        <Card location={ value } data={kindergartnerData[value].data}/>
      </div>
    )

  })

  return(
    <section>{ kinderKeysData }</section>
    )
  }




export default CardWrapper;
