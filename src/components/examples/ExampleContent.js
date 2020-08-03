import React from 'react';
import { connect } from 'react-redux';

const ExampleContent = (props) => {
  console.log(props)
  return <div>EXAMPLE CONTENT GOES HERE AND IT MIGHT BE A TON OF STUFF</div>
}

const mapStateToProps = (state) => {
  return { selectedAlgo: state.selectedAlgo }
}

export default connect(mapStateToProps)(ExampleContent);