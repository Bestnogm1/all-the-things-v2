import React from 'react';

const ThingCard = ({ thing }) => {
  return (
    <>
    <h1> hi i was here ariel </h1>
      <h2>{thing.name}</h2>
      <img height='300'src={thing.image} alt=""/>
      <ul>
        {thing.attributes.map((attribute, idx) =>
          <li key={idx} >{attribute}</li>  
          
        )}
      </ul>
    </>
  );
}
 
export default ThingCard;