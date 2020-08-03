import React from 'react';
import { connect } from 'react-redux';

const ExamplesList = (props) => {
  console.log(props)
  return <div>LIST OF EXAMPLES</div>
}

const mapStateToProps = (state) => {
  return { selectedAlgo: state.selectedAlgo }
}

export default connect(mapStateToProps)(ExamplesList);