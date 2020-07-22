import React from 'react';
import AlgoMenuAndExampleMenu from './AlgoMenuAndExampleMenu'
import ExampleContentContainer from './ExampleContentContainer'
import EitherOrButton from './EitherOrButton'

class App extends React.Component {
  render() {
    return (
      <div className="inverted ui segment" style={ {marginTop: '75px', marginLeft: '75px', marginRight: '75px'} }>
        
        <center><EitherOrButton /></center>
        < AlgoMenuAndExampleMenu />
        < ExampleContentContainer />

        <br></br>
        these are the project requirement
        <ul>Container Component 1 (maintains state)</ul>
        <ul>Container Component 2 (maintains state)</ul>
        <ul>__</ul>
        <ul>Stateless Component 1</ul>
        <ul>Stateless Component 2</ul>
        <ul>Stateless Component 3</ul>
        <ul>Stateless Component 4</ul>
        <ul>Stateless Component 5</ul>
        
        <ul>__</ul>
        <ul>Route 1, use fetch, also integrate with redux-thunk</ul>
        <ul>Route 2, use fetch, also integrate with redux-thunk</ul>
        <ul>Route 3, use fetch, also integrate with redux-thunk</ul>
        <ul>__</ul>
        <ul>REACT ROUTER USED with proper restful routing</ul>
        <ul>Redux and redux-thunk middleware are being used to modify state change and make use of async actions to send data and receive data from the server</ul>
        <ul><strong>DONE </strong>Use of Rails API backend to persist data for the application </ul>
        <br></br> Also... Good understanding of the react/redux state flow; Good understanding of state and props in React' Knowledge of async JS with Promises 
      
      
      </div>
    );
  }
}

export default App;