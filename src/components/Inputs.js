import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {Consumer} from './Context';
import Game from './Game';

const Inputs = () => {

  const playerX = React.createRef();
  const playerO = React.createRef();
  let visibility = "hidden"

  return(
    <Consumer>
    {context => {
      let players = context.players;
      const handleSubmit = (e) => {
          e.preventDefault();
          const plyX = playerX.current.value;
          const plyO = playerO.current.value;
          if(plyX && plyO){
            context.actions.addPlayer(plyX);
            context.actions.addPlayer(plyO);
            e.currentTarget.remove();
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
            <Game players={players}/>
          </div>
        </div>
      );
    }}
    </Consumer>
  );
}

export default Inputs;
