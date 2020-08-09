import React, { Component } from 'react'
import { connect } from 'react-redux';

import { fetchPostExample } from '../../actions/'
import { resetAlgo } from '../../actions/' //this one ought to run after the form is completed

const mapStateToProps = (state) => {
  console.log("this is inside of mapstate to props on CreateNewKoan", state);
  return {
    state
   };
}

const mapDispatchToProps = (dispatch) => {
  console.log("this is inside of map dispatch to props on CreateNewKoan", dispatch)
  return {
    fetchPostExample: (algoId, koanTitle, koanContent) => dispatch(fetchPostExample(algoId, koanTitle, koanContent)),
    resetAlgo: () => dispatch(resetAlgo())
  };
}

class CreateNewKoan extends Component {
  // local state for submit form 
  
  state = { 
    title: '',
    content: ''
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.fetchPostExample(this.props.state.algorithms.selectedAlgoCreateMode, this.state.title, this.state.content)
  }
  

  koanForm = () => {
    return this.props.state.algorithms.selectedAlgoCreateMode
  }
  
  
  render() {
    return <div>{this.koanForm()}</div>
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(CreateNewKoan)