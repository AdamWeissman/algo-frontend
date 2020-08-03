import React, { Component }from 'react';
import { connect } from 'react-redux';
import { selectAlgorithm } from '../../actions/'
import axios from 'axios'

class SomeAlgos extends Component {
  renderList() {
    return this.props.someAlgos.map((algo) => {
      return (
        <div className="ui inverted segment" key={algo.algotype}>
        
            <button className="ui circular button primary">
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
}

const mapStateToProps = (state) => {
  console.log(state.someAlgos)

  return { someAlgos: state.someAlgos };
}

export default connect(mapStateToProps, {
  selectAlgorithm: selectAlgorithm
})(SomeAlgos);  