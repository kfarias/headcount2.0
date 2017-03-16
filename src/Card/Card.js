import React from 'react';
import './Card.css'



const Card = ({ location, data }) => {
  const kinderYearData = Object.keys(data).map((year, i) => {
    return (
      <div key={i}>
        <p>{year} : {data[year]}</p>
      </div>
    )
  })
  return(
    <section>{kinderYearData}</section>
  )

}


export default Card;
