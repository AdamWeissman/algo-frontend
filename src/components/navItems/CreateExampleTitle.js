import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { 
    state 
  };
}

const CreateExampleTitle = (props) => {
  return (
    <h1>CREATE KOANS</h1>
  )
}

export default connect(mapStateToProps)(CreateExampleTitle)