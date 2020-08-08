import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import SomeAlgos from '../components/algorithms/SomeAlgorithms'
import ExamplesList from '../components/examples/ExamplesList'
import ExampleContent from '../components/examples/ExampleContent'

class App extends Component {
  
  render() {
    return (
      <div className="ui raised text container segment" style={ {marginTop: '35px', marginLeft: '5px', marginRight: '5px'} }>
        <center><h1>ALGORITHM KOANS</h1></center>
        <div className="ui blue segment" style={ {marginTop: '25px', marginLeft: '5px', marginRight: '5px'} }>
        <center><Link to="/">ABOUT</Link> | <Link to="/view">VIEW</Link> | <Link to="/create">CREATE</Link></center>
        </div>
        <center>
          <div className="ui three column grid container" style={ {marginTop: '-15px'} }>
            <div className="ui column">
              <div className="ui raised segment">
                <SomeAlgos />
              </div>
            </div>
            <div className="ui column">
              <div className="ui raised segment">
                <ExamplesList />
              </div>
            </div>
            <div className="ui column">
              <div className="ui raised segment">
                <ExampleContent />
              </div>
            </div>
        </div>
        </center>
      </div>
    )
  }

}

export default App;