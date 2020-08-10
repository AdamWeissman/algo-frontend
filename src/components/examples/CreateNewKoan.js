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
    resetAlgo: () => dispatch(resetAlgo()),
  };
}

class CreateNewKoan extends Component {
  // local state for submit form 
  
  state = { 
    title: '',
    content: ''
  };

  //check for props/state trigger_switch text to load a thank you for submitting component

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log("HI, ON FORM SUBMIT WAS CLICKED")
    this.props.fetchPostExample(this.props.state.algorithms.selectedAlgoCreateMode, this.state.title, this.state.content)
    this.props.resetAlgo()
  }
  
  koanForm = () => {
    if (this.props.state.algorithms.selectedAlgoCreateMode == null) {
      return (
        <div className="ui raised segment animate__animated animate__fadeIn animate__slower">Select An Algorithm</div>
      )
    } else 
    return (
      <div className="ui inverted segment animate__animated animate__flipInX animate__slower">
        <div className="ui raised segment animate__animated animate__flip animate__slower">
          <form
            onSubmit={this.onFormSubmit} 
            className="ui form"
          >
            <div className="field animate__animated animate__rotateIn animate__slower">
            <input 
              type="text"
              value={this.state.title}
              placeholder="name your koan"
              onChange={(e) => this.setState({ title: e.target.value})}
            />
            </div>
            <div className="animate__animated animate__rotateIn animate__slower">
            <textarea 
              type="text"
              style={{height: '987px', maxWidth: '233px'}}
              value={this.state.content}
              placeholder="enter your content"
              onChange={(e) => this.setState({ content: e.target.value})}
            />
            </div>
            <br></br>
            <div className="ui inverted circular segment animate__animated animate__bounceInUp animate__fast animate__delay-3s">
            <button className="ui circular red basic button animate__animated animate__bounceInDown animate__faster animate__delay-4s"
              onClick={this.onSubmit}>SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
  
    )
  }
  
  
  render() {
    return <div>{this.koanForm()}</div>
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(CreateNewKoan)