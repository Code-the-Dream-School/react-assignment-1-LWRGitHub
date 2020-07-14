import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';



class Inputs extends Component{

  names() {
    const x = document.getElementById("x").value;
    const o = document.getElementById("0").value;
    if(x != null && o != null ){
      return {nameX: x, nameO: o};
    } else {
      alert('You must enter a name.');
    }
  }

  render(){
    return(
      <form className="mx-auto" style={{width: '400px'}}>
        <div className="row">
          <div className="col">
            <label for="x">Name X</label>
            <br />
            <input id="x" placeholder="Name"></input>
          </div>
          <div className="col">
            <label for="o">Name O</label>
            <br />
            <input id="o" placeholder="Name"></input>
          </div>
        </div>
        {/* <input className="my-2 btn btn-secondary" type="submit" value="Submit" /> */}
        
        <NavLink to="/board" className="my-2 btn btn-secondary"><button onClick={this.names} className="my-2 btn btn-secondary">Submit</button></NavLink>
      </form>
    )
  }
}

export default Inputs;
