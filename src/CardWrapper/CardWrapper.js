import React, { Component } from 'react';
import Card from '../Card/Card';
import DistrictRepository from '../DistrictRepository';

import './CardWrapper.css';

const CardWrapper = ({ kindergartnerData }) => {
  console.log(kindergartnerData)
  const kinderKeysData = Object.keys(kindergartnerData).map((value, i) => {
    console.log(value)

    return(
      <div key={i}>
        {/* <Card key={i} location={value} data={value}/> */}
        <p>{value}</p>
        <p></p>
        <p></p>

      </div>
    )

  })

  return(
    <section>{kinderKeysData}</section>
  )
}


export default CardWrapper;
