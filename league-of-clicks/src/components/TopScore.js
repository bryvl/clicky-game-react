import React from 'react';
import '../App.css';

export default function TopScore(props) {
  return (
    <span style={{color: "white"}}><strong>TopScore: </strong> {props.topScore}</span>
  );
}
