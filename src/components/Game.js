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

const newGameVisibility = () =>{
  gameBoardVisibility = "visible";
  winVisibility = "hidden";
}

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(3).fill(Array(3).fill(null)),
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
  
  newGame = () => {
    this.setState({ squares: Array(9).fill(null) });
  }

  render() {
    const winner = calculateWinner(this.state.squares, this.state.xIsNext);
    let count = 0;

    return (
        <div>

          {winner ?
            <div className='jumbotron' id='winnerScreen' style={{backgroundColor:'lightblue'}}>
              <p>{this.state.xIsNext ? 'X' : 'O'} Wins!</p>
            </div>
          :
            <div id='gameBoard' style={{width: '250px'}} className="mx-auto status">
              
              {this.state.squares.map((element) => {
                element.map((el2)=>{
                  let row = <div className="board-row"></div>;
                  return (
                    row.innerHTML += this.renderSquare(el2)
                  )
                })
              })}
              
            </div>
          }

          <NavLink style={{float:'left'}} className="btn btn-secondary" to="/wellcome">New Game</NavLink>
          <button style={{float:'right'}} className="btn btn-secondary" onClick={this.newGame}>Reset</button>
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
      return true
    }
  }
  return false;
}

export default Game;

