import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSomeAlgos } from '../../actions'
import { selectAlgorithm } from '../../actions'
import { fetchExamples } from '../../actions'
import { resetExampleContent } from '../../actions'

const mapStateToProps = (state) => {
  console.log("this is inside of mapstate to props", state);
  return {
    state
   };
}

const mapDispatchToProps = (dispatch) => {
  console.log("this is inside of map dispatch to props", dispatch)
  return {
    fetchSomeAlgos: () => dispatch(fetchSomeAlgos()),
    grabThatAlgo: (choice) => dispatch(selectAlgorithm(choice)),
    fetchExamples: (algo) => dispatch(fetchExamples(algo)),
    resetExampleContent: () => dispatch(resetExampleContent())
  };
}

class SomeAlgos extends Component {
  componentDidMount() {
    this.props.fetchSomeAlgos();
    console.log("this is where fetch some algos runs", this.props)
  }

  renderList() {
    return this.props.state.algorithms.someAlgos.map((algo) => {
      return (
        
        <div className="ui inverted segment" key={algo.id}>

            <button 
              className="ui circular inverted yellow button animate__animated animate__fadeInDown animate__slower"
              onClick={
                () => {
                  return (
                    this.props.grabThatAlgo(algo.id),
                    this.props.fetchExamples(algo.id),
                    this.props.resetExampleContent()
                    )
                }
              }  
            >
              SELECT
            </button>
        <div className="content animate__animated animate__fadeInUp animate__slower">{algo.algotype}</div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props);
    
    return <div className="ui divided list">{this.renderList()}</div>
    
  }

  // render() {
  //   console.log("THIS IS IN RENDER", this.props.state.algorithms.someAlgos  )
  //   return "hi"
  // }

}
 
export default connect( mapStateToProps, mapDispatchToProps )(SomeAlgos);  