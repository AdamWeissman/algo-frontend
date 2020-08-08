import React, { Component } from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return { 
    state 
  };
}

class ExampleContent extends Component {
  
  render(){
    return <div>{this.props.state.examples.exampleContent.content}</div>
  };
}



export default connect(mapStateToProps)(ExampleContent);