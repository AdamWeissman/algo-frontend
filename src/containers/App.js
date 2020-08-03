import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// import { selectAlgorithm } from '../actions/'


class App extends Component {
  
  render() {
    return (
      <div className="ui raised very padded text container segment" style={ {marginTop: '35px', marginLeft: '15px', marginRight: '15px'} }>
        <center><h1>ALGORITHM KOANS</h1></center>
        <div className="ui blue segment" style={ {marginTop: '25px', marginLeft: '15px', marginRight: '15px'} }>
        <center><Link to="/about">ABOUT</Link> | <Link to="/">VIEW</Link> | <Link to="/create">CREATE</Link></center>
        </div>
        <center>
          <div className="ui three column doubling stackable grid container" style={ {marginTop: '0px', marginLeft: '15px', marginRight: '15px'} }>
            <div className="ui inverted blue column">ALGORITHMS GO HERE</div>
            <div className="ui inverted blue column">EXAMPLES GO HERE</div>
            <div className="ui inverted blue column">EXAMPLE CONTENT HERE</div>
        </div>
        </center>
      </div>
    )
  }

}

export default App;