import React from 'react';
import styles from './Card.css'
import classNames from 'classnames'

const Card = ({ location, locationData, key} ) => {
  const pData = Object.keys(locationData).map((key, i) => {
    const quality = classNames({
      'bad': locationData[key] <= .49,
      'good': locationData[key] >= .5
    })
    return(
              <p key={i} className={quality}>{`${key} : ${locationData[key]}`}</p>
    )
  });
    return (
      <div key={key} className='district-card' >
        <p className='location'>{location.location}</p>
        { pData }
      </div>
    )
  }




export default Card;
