import React, { Component }from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

class AllAlgos extends Component {
  render() {
    return <div>All Algos</div>
  }
}

const mapStateToProps = (state) => {
  console.log(state.allAlgos)

  return state;
}

export default connect(mapStateToProps)(AllAlgos);