import React from "react";
import "./style.css";

export default function Board(props) {
  return <main className="board">{props.children}</main>;
};
