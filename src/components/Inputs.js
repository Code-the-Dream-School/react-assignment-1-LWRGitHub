import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

const names = () => {
  const x = document.getElementById("x").textContent;
  const o = document.getElementById("0").textContent;
  if(x != null && o != null ){
    
    return {nameX: x, nameO: o};
  } else {
    alert('You must enter a name.');
  }
}

class Inputs extends Component{
  render(){
    return(
      <form className="mx-auto" style={{width: '400px'}}>
        <div className="row">
          <div className="col">
            <label for="x">Name X</label>
            <br />
            <input id="x" placeholder="Name"> </input>
          </div>
          <div className="col">
            <label for="o">Name O</label>
            <br />
            <input id="o" placeholder="Name"> </input>
          </div>
        </div>
        {/* <input className="my-2 btn btn-secondary" type="submit" value="Submit" /> */}
        
        <NavLink to="/board" className="my-2 btn btn-secondary"><button onClick={names()} className="my-2 btn btn-secondary">Submit</button></NavLink>
      </form>
    )
  }
}

export default Inputs;
