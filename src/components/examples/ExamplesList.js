import React from 'react';
import { connect } from 'react-redux';

const ExamplesList = ( props ) => {
  // renderList() {
  //   return this.props.examples.map((example) => {
  //     return (
  //       <div className="ui inverted segment" key={example.title}>
  //           <button 
  //             className="ui circular blue basic button"
  //             onClick={() => this.props.selectExample(example.id)}  
  //           >
  //             SELECT
  //           </button>
  //       <div className="content">{example.title}</div>
  //       </div>
  //     );
  //   });
  // }

    if (props.selectedAlgo === null) {
      return <div>CHOOSE AN ALGORITHM</div>
    }

    return (
      <div>{props.selectedAlgo}</div>
    );
};

const mapStateToProps = (state) => {
  return { selectedAlgo: state.selectedAlgo }
}

export default connect(mapStateToProps)(ExamplesList);