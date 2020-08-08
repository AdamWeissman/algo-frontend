import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSomeAlgos } from '../../actions'
//import { selectAlgorithm } from '../../actions'

const mapStateToProps = (state) => {
  console.log("this is inside of mapstate to props", state);
  return {
    state
   };
}

const mapDispatchToProps = (dispatch) => {
  console.log("this is inside of map dispatch to props", dispatch)
  return {
    fSM: () => dispatch(fetchSomeAlgos())
  };
}

class SomeAlgos extends Component {
  componentDidMount() {
    this.props.fSM();
    console.log("this is where fetch some algos runs", this.props)
  }

  renderList() {
    // this.props.fSM();
    return this.props.state.algorithms.someAlgos.map((algo) => {
      return (
        <div className="ui inverted segment" key={algo.id}>
            <button 
              className="ui circular blue basic button"
              //onClick={() => this.props.selectedAlgo(algo.id)}  
            >
              SELECT
            </button>
        <div className="content">{algo.algotype}</div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>
  }

  // render() {
  //   console.log("THIS IS IN RENDER", this.props.state.algorithms.someAlgos  )
  //   return "hi"
  // }

}



// export default connect(mapStateToProps, {selectedAlgo: selectAlgorithm})(SomeAlgos);  
export default connect( mapStateToProps, mapDispatchToProps )(SomeAlgos);  