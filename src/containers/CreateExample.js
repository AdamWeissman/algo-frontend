import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AllAlgos from '../components/algorithms/AllAlgorithms'

class CreateExample extends Component {
  
  render() {
    return (
      <div className="ui raised padded text container segment" style={ {marginTop: '35px', marginLeft: '5px', marginRight: '5px'} }>
        <center><h1>CREATE MODE</h1></center>
        <div className="ui blue segment" style={ {marginTop: '25px', marginLeft: '5px', marginRight: '5px'} }>
        <center><Link to="/about">ABOUT</Link> | <Link to="/">VIEW</Link> | <Link to="/CREATE">CREATE</Link></center>
        </div>
        <center>
          <div className="ui three column grid container" style={ {marginTop: '0px', marginLeft: '5px', marginRight: '5px'} }>
            <div className="ui column">
              <div className="ui raised segment">
                <AllAlgos />
              </div>
            </div>
            <div className="ui inverted blue column">CREATE A KOAN TITLE</div>
            <div className="ui inverted blue column">CREATE AN ALGORITHM KOAN</div>
        </div>
        </center>
      </div>
    )
  }

}

export default CreateExample;