import React from 'react';


const Header = (props) => {
  return(
    <header>
      <div className="mx-auto mt-3" style={{width: '300px'}}>
      <img src="/images/logo.png" alt="Tic Tac Toe Logo for the game." width="300"/>
      <div>
        <h1 className="mx-auto" style={{width: '200px'}}>Tic Tac Toe</h1>
      </div>
      </div>
    </header>
  );
}

export default Header;
