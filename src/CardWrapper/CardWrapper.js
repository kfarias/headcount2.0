import React from 'react';
import Card from '../Card/Card';

import styles from './CardWrapper.css';

const CardWrapper = ({ data }) => {
  return(
    <div className='card-wrapper'>
      {data.map((value, i) => {
        return <Card location={ value } locationData={ value.data } key={i}/>})
      }
      </div>
    )
  }




export default CardWrapper;
