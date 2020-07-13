import React, {Component}  from 'react';
import { NavLink } from 'react-router-dom';


class  Wellcome extends Component {

  render(){
    return(
      <div className="mx-auto mt-2" style={{width: '70px'}}>
        <NavLink className="btn btn-secondary" to="/inputs">Start</NavLink>
      </div>
    );
  }

}
export default Wellcome;
