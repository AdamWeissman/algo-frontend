import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import SomeAlgos from '../components/algorithms/SomeAlgorithms'
import ExamplesList from '../components/examples/ExamplesList'
import ExampleContent from '../components/examples/ExampleContent'
import AppTitle from '../components/navItems/AppTitle'

class App extends Component {
  
  render() {
    return (
      <div className="ui raised text container segment" style={ {marginTop: '35px', marginLeft: '15px', marginRight: '15px'} }>
        <div className="ui raised segment">


        <center>
        <div className="ui inverted segment" style={{ height: '55px', maxHeight: '55px'}}>
          <AppTitle />
        </div>
        </center>


        <div className="ui yellow segment" style={ {marginTop: '15px', marginLeft: '15px', marginRight: '15px'} }>
        <center><Link to="/">ABOUT</Link> | <Link to="/view">VIEW</Link> | <Link to="/create">CREATE</Link></center>
        </div>
        <center>
          <div className="ui three column grid container " style={ {marginTop: '-15px'} }>
            <div className="ui column">
              <div className="ui raised yellow segment" style={{ height: '610px', maxHeight: '610px', overflow: 'scroll'}}>
                <SomeAlgos />
              </div>
            </div>
            <div className="ui column">
              <div className="ui raised orange segment" style={{ height: '610px', maxHeight: '610px', overflow: 'scroll'}}>
                <ExamplesList />
              </div>
            </div>
            <div className="ui column">
              <div className="ui raised yellow segment" style={{ height: '610px', maxHeight: '610px', overflow: 'scroll'}}>
                <ExampleContent />
              </div>
            </div>
        </div>
        </center>
      </div>
      </div>
    )
  }

}

export default App;