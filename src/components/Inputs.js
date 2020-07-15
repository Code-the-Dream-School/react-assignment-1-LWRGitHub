import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {Consumer} from './Context';

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
      }

      return (
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
            <input 
              type="submit"
              value="Add Player"
            />
          </div>
        </form>
      );
    }}
    </Consumer>
  );
}

export default Inputs;
