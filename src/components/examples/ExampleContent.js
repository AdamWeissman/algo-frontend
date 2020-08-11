import React, { Component } from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return { 
    state 
  };
}

const ExampleContent = (props) => {
  
  // render() {
    return (
    <div className="ui inverted segment">
      <div className="ui raised segment animate__animated animate__fadeIn animate__slower">{props.state.examples.exampleContent.content}</div>
    </div>
    )
  // };
}

export default connect(mapStateToProps)(ExampleContent);