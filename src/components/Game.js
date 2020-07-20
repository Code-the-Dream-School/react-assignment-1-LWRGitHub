import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import {Consumer} from './Context';
import { NavLink } from 'react-router-dom';


let winnerScreen = '';
let winVisibility = 'hidden';
let gameBoardVisibility = 'inherit';

function Square(props){
  return (
    <button className="square" onClick={() => { props.onClickAction(); }}>
      <img className='square' src={props.value} />
    </button>
  );
}

const endScreen = (winner) => {
  document.getElementById('gameBoard').remove();
  document.getElementById('winnerScreen').style.visibility = "visible";

  return(
    <p>{winner} Wins!</p>
  );
}

const newGameVisibility = () =>{
  gameBoardVisibility = "visible";
  winVisibility = "hidden";
}

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    }
  }

  renderSquare(i) {
    return <Square
      value={this.state.squares[i]} 
      onClickAction={ () => {this.handleClick(i); } } 
    />;
  }

  handleClick(i){
    const updatingSquares = this.state.squares.slice();
    if (calculateWinner(updatingSquares) || updatingSquares[i]) {
      return;
    }
    updatingSquares[i] = this.state.xIsNext ? "images/0.png" : "images/1.png";
    this.setState({
      squares: updatingSquares,
      xIsNext: !this.state.xIsNext
    });
  }

  CreateBoard(){
    return(
      <div id='gameBoard' style={{visibility:gameBoardVisibility,width: '250px'}} className="mx-auto status">
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
  
  newGame(ticTacToeBoard){
    if(ticTacToeBoard){
      ticTacToeBoard = this.CreateBoard()
      newGameVisibility()
    }
  }

  render() {
    const winner = calculateWinner(this.state.squares, this.state.xIsNext);
    if (winner) {
      winnerScreen = endScreen(winner)
    } 
    let ticTacToeBoard = this.CreateBoard();

    return (
        <div>
          
            {ticTacToeBoard}
          
          <div className='jumbotron' id='winnerScreen' style={{visibility:winVisibility,backgroundColor:'lightblue'}}>
            {winnerScreen}
          </div>
          <button onClick={this.newGame(ticTacToeBoard)}>New Game</button>
        </div>
    );
  }
}

const Game = (props) => {
      return(
      // <Consumer>
        <div className="game">
          
          <div  className="game-board">
            <Board />
          </div>
          
        </div>
      // </Consumer>
      );

}

function calculateWinner(squares, whosTurn) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return whosTurn ? 'true' : 'false';
    }
  }
  return null;
}

export default Game;

