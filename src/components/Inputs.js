import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {Consumer} from './Context';
import Board from './Board';

const Inputs = () => {

  const playerX = React.createRef();
  const playerO = React.createRef();

  return(
    <Consumer>
    {context => {
      const handleSubmit = (e) => {
          e.preventDefault();
          context.actions.addPlayer(playerX.current.value);
          context.actions.addPlayer(playerO.current.value);
          e.currentTarget.remove();
          document.getElementById('board').style.visibility = "visible";
      }
      const hidedBoard = (e) => {
        document.getElementById('board').style.visibility = "hidden";
      }

      return (
        <div>
          <div id='board'>
            <Board />
          </div>
          {hidedBoard()}
          <form className="mx-auto" style={{width: '400px'}} onSubmit={handleSubmit}>
            <div className="row">
              <input 
                placeholder="X Name"
                type="text"
                ref={playerX} 
              />
              <input 
                placeholder="O Name"
                type="text"
                ref={playerO}
              />
              {/* <NavLink  to="/board"> */}
                <input 
                  className="btn btn-secondary"
                  type="submit"
                  value="Add Player"
                />
              {/* </NavLink> */}
            </div>
          </form>
        </div>
      );
    }}
    </Consumer>
  );
}

export default Inputs;
