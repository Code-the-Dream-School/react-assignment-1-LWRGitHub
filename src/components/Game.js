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
      {props.value ? <img className='squareIcon' src={props.value} /> : null}
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

  handleClick(i, i2){
    const updatingSquares = JSON.parse(JSON.stringify(this.state.squares))
    if (calculateWinner(this.state.squares, updatingSquares) || updatingSquares[i][i2]) {
      return;
    }
    updatingSquares[i][i2] = this.state.xIsNext ? "images/0.png" : "images/1.png";
    this.setState({
      squares: updatingSquares,
      xIsNext: !this.state.xIsNext
    });
  }
  
  newGame = () => {
    this.setState({ squares: Array(3).fill(Array(3).fill(null)) });
  }

  render() {
    const winner = calculateWinner(this.state.squares, this.state.xIsNext);
    let count = 0;

    return (
      <Consumer>
        {context => (
        <div>
          {console.log(context)}
          {winner ?
            <div className='jumbotron' id='winnerScreen' style={{backgroundColor:'lightblue'}}>
              
              <p class="center">{this.state.xIsNext ? `${context.players[0].name} Wins! With X.` : `${context.players[1].name} Wins! With O.`}</p>
            </div>
          :
            <div id='gameBoard' style={{width: '250px'}} className="mx-auto status">
              
              {this.state.squares.map((row, rowIndex) => (
                <div className="row">
                  {row.map((square, index) => (
                    <Square value={square} onClickAction={() => this.handleClick(rowIndex,index)} />
                  ))}
                </div>
              ))}
              
            </div>
          }

          <NavLink style={{float:'left'}} className="btn btn-secondary" to="/wellcome">New Game</NavLink>
          <button style={{float:'right'}} className="btn btn-secondary" onClick={this.newGame}>Reset</button>
        </div>
        )}
        </Consumer>
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
    [[0,0], [0,1], [0,2]],
    [[1,0], [1,1], [1,2]],
    [[2,0], [2,1], [2,2]],
    [[0,0], [1,0], [1,2]],
    [[0,1], [1,1], [2,1]],
    [[0,2], [1,2], [2,2]],
    [[0,0], [1,1], [2,2]],
    [[2,0], [1,1], [0,2]],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a[0]][a[1]] && squares[a[0]][a[1]] === squares[b[0]][b[1]] && squares[a[0]][a[1]]  === squares[c[0]][c[1]]) {
      return true
    }
  }
  return false;
}

export default Game;

