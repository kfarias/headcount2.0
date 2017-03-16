import React from 'react';
import styles from './Card.css'

const Card = ({ location, data }) => {
  const kinderYearData = Object.keys(data).map((year, i) => {
    return (
      <div key={i}>
        <p className="yearly-data">{year} : {data[year]}</p>
      </div>
    )
  })
  return(
    <section className="kinder-year-data">{kinderYearData}</section>
  )

}


export default Card;
