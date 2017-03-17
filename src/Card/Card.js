import React from 'react';
import styles from './Card.css'

const Card = ({ location, locationData, key} ) => {
  const pData = Object.keys(locationData).map((key, i) => {
    return(
              <p key={i} className='yearly-data'>{`${key} : ${locationData[key]}`}</p>
    )
  });
    return (
      <div key={key} className='district-card'>
        <p className='location'>{location.location}</p>
        { pData }
      </div>
    )
  }




export default Card;
