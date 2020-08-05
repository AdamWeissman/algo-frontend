import React, { Component }from 'react';
import { connect } from 'react-redux';

import { fetchAllAlgos } from '../../actions';
import { selectAlgorithm } from '../../actions/'


class AllAlgos extends Component {

  componentDidMount() {
    this.props.fAA();
    console.log("this is where fetch all algos runs")
  }


  renderList() {
    return this.props.allAlgos.map((algo) => {
      return (
        <div className="ui inverted segment" key={algo.algotype}>
         
            <button 
              className="ui circular green basic button"
              onClick={() => this.props.selectAlgorithm(algo.algotype)} 
            >
              CREATE
            </button>
          
        <div className="content">{algo.algotype}</div>
        </div>
      );
    });
  } 
  
  render() {
    console.log(this.props)
    return <div className="ui divided list">{this.renderList()}</div>
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return { allAlgos: state.allAlgos };
}


// export default connect(
//   mapStateToProps, 
//   {selectAlgorithm: selectAlgorithm} )(AllAlgos);

export default connect(mapStateToProps, {fAA: fetchAllAlgos})(AllAlgos);  // named as fAA (as I did fSM on SomeAlgorithms, to reinforce/illustratre how this code is working)