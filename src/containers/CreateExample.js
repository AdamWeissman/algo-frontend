import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class CreateExample extends Component {
  
  render() {
    return (
      <div className="ui raised very padded text container segment" style={ {marginTop: '35px', marginLeft: '15px', marginRight: '15px'} }>
        <center><h1>CREATE MODE</h1></center>
        <div className="ui blue segment" style={ {marginTop: '25px', marginLeft: '15px', marginRight: '15px'} }>
        <center><Link to="/about">ABOUT</Link> | <Link to="/">VIEW</Link> | <Link to="/CREATE">CREATE</Link></center>
        </div>
        <center>
          <div className="ui three column doubling stackable grid container" style={ {marginTop: '0px', marginLeft: '15px', marginRight: '15px'} }>
            <div className="ui inverted blue column">CHOOSE AN ALGORITHM</div>
            <div className="ui inverted blue column">CREATE A KOAN TITLE</div>
            <div className="ui inverted blue column">CREATE AN ALGORITHM KOAN</div>
        </div>
        </center>
      </div>
    )
  }

}

export default CreateExample;