import React from 'react';
import '../App.css';

export default function Score(props) {
  return (
    <span style={{color: "white"}}><strong>Score: </strong> {props.score}</span>
  );
}
