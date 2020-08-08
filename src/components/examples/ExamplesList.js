import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectExample } from '../../actions'

const mapStateToProps = (state) => {
  console.log("this is inside of mapstate to props", state);
  return {
    state
   };
}

const mapDispatchToProps = (dispatch) => {
  console.log("this is inside of map dispatch to props", dispatch)
  return {
    selectExample: (algo, example) => dispatch(selectExample(algo, example))
  };
}

class ExamplesList extends Component {
  renderList() {
    return this.props.state.examples.examples.map((example) => {
      return (
        <div className="ui inverted segment" key={example.title}>
            <button 
              className="ui circular green basic button"
              //onClick={() => this.props.selectExample(example.id)}  
            >
              SELECT
            </button>
        <div className="content">{example.title}</div>
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