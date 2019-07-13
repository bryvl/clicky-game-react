import React from 'react';
import Score from '../Score'
import TopScore from '../TopScore'
import Directions from "../Directions";
import './style.css';

export default function Header(props) {
  return (
    <header className="header">
        <h1>League of Clicks</h1>
        {props.score === 0 ? <Directions/> : ""}
        <Score score={props.score}></Score> | <TopScore topScore={props.topScore}></TopScore>
    </header>

  );
}
