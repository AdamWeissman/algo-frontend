import React, { Component }from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

class SomeAlgos extends Component {
  render() {
    return <div>Some Algos</div>
  }
}

const mapStateToProps = (state) => {
  console.log(state.someAlgos)

  return state;
}

export default connect(mapStateToProps)(SomeAlgos);