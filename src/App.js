import React from 'react';
import './style.css';

export default function App() {
  const rendeBoard = (content) => {
    return Array(8).fill(null).map((val, index) => {
      if(content % 2 === 0){
        if(index %2 === 0){
          return <div className="chessSquare light"></div>  
        } else {
          return <div className="chessSquare dark"></div>
        }
      } else {
        if(index %2 === 0){
          return <div className="chessSquare dark"></div>  
        } else {
          return <div className="chessSquare light"></div>
        }
      }
    });
  }
  return (
    <>
     <h1>Chess board </h1>
  <div className="box_board">
    {
      Array(8).fill(null).map((val, index) => {
          return rendeBoard(index+1);
      })
    }
  </div></>
  );
}
