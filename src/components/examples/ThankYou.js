import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { 
    state 
  };
}

const ThankYou = (props) => {
  return (
    <div>THANK YOU</div>
  )
}

export default connect(mapStateToProps)(ThankYou)