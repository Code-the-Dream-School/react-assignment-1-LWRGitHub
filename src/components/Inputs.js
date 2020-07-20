import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {Consumer} from './Context';
import Game from './Game';

let playerDiv = '';

const addPlayerDiv = (plyX, plyO) => (
  <div>
    <div style={{float:'left'}}>
      <img className='squareIcon' src='images/1.png' alt='image of X' />
      <span>{plyX}</span>
    </div>
    <div style={{float:'right'}}>
      <img className='squareIcon' src='images/0.png' alt='image of O' />
      <span>{plyO}</span>
    </div>
  </div>
);

const Inputs = () => {

  const playerX = React.createRef();
  const playerO = React.createRef();
  let visibility = "hidden";

  return(
    <Consumer>
    {context => {
      const handleSubmit = (e) => {
          e.preventDefault();
          const plyX = playerX.current.value;
          const plyO = playerO.current.value;
          if(plyX && plyO){
            context.actions.addPlayer(plyX);
            context.actions.addPlayer(plyO);
            e.currentTarget.remove();
            playerDiv = addPlayerDiv(plyX, plyO)
            visibility = "visible";
          } else {
            alert(`You must enter the name's of player-X & player-O.`)
          }
      }

      return (
        <div>
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
          <div id='board' style={{visibility:visibility}}>
            {playerDiv}
            <Game />
          </div>
        </div>
      );
    }}
    </Consumer>
  );
}

export default Inputs;
