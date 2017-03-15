import React, { Component } from 'react';
import Card from '../Card/Card';
import DistrictRepository from '../DistrictRepository';

import './CardWrapper.css';

const CardWrapper = ({ kindergartnerData, i }) => {
  const kinderKeysData = Object.keys(kindergartnerData);
  console.log(kinderKeysData)
  const filteredKinderData = kinderKeysData.map((value, i) => {
    console.log(value.location);

    return(
      <div key={i}>
        {/* <Card key={i} location={value} data={kindergartnerData.value}/> */}
        <p>{value}</p>
        <p></p>
        <p>Data</p>

      </div>
    )
  })
  return(
  <section>{filteredKinderData}</section>
  )
}


export default CardWrapper;
