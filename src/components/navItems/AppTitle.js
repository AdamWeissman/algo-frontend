import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { 
    state 
  };
}

const AppTitle = (props) => {
  return (
    <h1>VIEW ALGORITHM KOANS</h1>
  )
}

export default connect(mapStateToProps)(AppTitle)