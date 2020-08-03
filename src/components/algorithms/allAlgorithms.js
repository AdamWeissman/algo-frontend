import React, { Component }from 'react';
import { connect } from 'react-redux';
import { selectAlgorithm } from '../../actions/'
import axios from 'axios'

class AllAlgos extends Component {
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

export default connect(
  mapStateToProps, 
  {selectAlgorithm: selectAlgorithm} )(AllAlgos);