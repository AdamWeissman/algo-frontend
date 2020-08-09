import React, { Component } from 'react'
import { connect } from 'react-redux';

import { fetchPostExample } from '../../actions/index'

const mapStateToProps = (state) => {
  console.log("this is inside of mapstate to props on CreateNewKoan", state);
  return {
    state
   };
}

const mapDispatchToProps = (dispatch) => {
  console.log("this is inside of map dispatch to props on CreateNewKoan", dispatch)
  return {
    fetchPostExample: (algo) => dispatch(fetchPostExample(algo))
  };
}

class CreateNewKoan extends Component {
  render() {
    return <div>THIS IS A POSTING FORM THAT USES LOCAL STATE</div>
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(CreateNewKoan)