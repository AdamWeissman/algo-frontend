import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchContent } from '../../actions'


const mapStateToProps = (state) => {
  console.log("this is inside of mapstate to props", state);
  return {
    state
   };
}

const mapDispatchToProps = (dispatch) => {
  console.log("this is inside of map dispatch to props", dispatch)
  return {
    fetchContent: (algo, example) => dispatch(fetchContent(algo, example))
  };
}

class ExamplesList extends Component {
  renderList() {
    return this.props.state.examples.examples.map((example) => {
      return (
        <div className="ui inverted segment animate__animated animate__flipInY animate__slow" key={example.id}>
            <button 
              className="ui circular orange inverted button animate__animated animate__fadeIn animate__slower"
              onClick={
                () => {
                  return(
                    this.props.fetchContent(this.props.state.algorithms.selectedAlgo, example.id)
                  )  
                }
              }
            >
              SELECT
            </button>
        <div className="content animate__animated animate__flip animate__fast">{example.title}</div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>
  }

}

export default connect( mapStateToProps, mapDispatchToProps )(ExamplesList);