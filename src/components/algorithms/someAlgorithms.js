import React, { Component }from 'react';
import { connect } from 'react-redux';

import { fetchSomeAlgos } from '../../actions'
import { selectAlgorithm } from '../../actions'

class SomeAlgos extends Component {
  componentDidMount() {
    this.props.fSM();
    console.log("this is where fetch some algos runs")
  }

  renderList() {
    return this.props.someAlgos.map((algo) => {
      return (
        <div className="ui inverted segment" key={algo.id}>
            <button 
              className="ui circular blue basic button"
              onClick={() => this.props.selectedAlgo(algo.algotype)}  
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
  //   return "hi"
  // }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { 
    someAlgos: state.someAlgos,
    selectedAlgo: state.selectedAlgo
   };
}

// const mapDispatchToProps = () => {
//   return {
//     fSM: () => dispatch({ type: 'ACTION_FETCH_SOME_ALGOS' }),  
//     sA: () => dispatch({ type: 'ACTION_SELECT_ALGORITHM'  })
//   }
// }

// export default connect(mapStateToProps, {selectedAlgo: selectAlgorithm})(SomeAlgos);  
export default connect(mapStateToProps, { fSM: fetchSomeAlgos, selectedAlgo: selectAlgorithm} )(SomeAlgos);  