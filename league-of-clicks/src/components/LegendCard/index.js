import React from 'react';
import './style.css'

export default function LegendCard(props) {
  return (
    <div role="img" aria-label="click item" className="card" onClick={() => props.handleClick(props.id)}>
      <h2>{props.name}</h2>
      <div className="img-container">
        <img alt={props.name} src={props.image}/>
      </div>
    </div>
  );
}
