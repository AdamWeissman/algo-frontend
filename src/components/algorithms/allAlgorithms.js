import React, { Component }from 'react';
import { connect } from 'react-redux';

import { fetchAllAlgos } from '../../actions';
import { selectAlgorithm } from '../../actions/'

const mapStateToProps = (state) => {
  console.log("this is inside of mapstate to props", state);
  return {
    state
   };
}

const mapDispatchToProps = (dispatch) => {
  console.log("this is inside of map dispatch to props", dispatch)
  return {
    fetchAllAlgos: () => dispatch(fetchAllAlgos()),
    grabThatAlgo: (choice) => dispatch(selectAlgorithm(choice))
  };
}


class AllAlgos extends Component {
  componentDidMount() {
    this.props.fetchAllAlgos();
    console.log("this is where fetch all algos runs")
  }

  renderList() {
    return this.props.state.algorithms.allAlgos.map((algo) => {
      return (
        <div className="ui inverted segment" key={algo.id}>
         
            <button 
              className="ui circular yellow basic button"
              onClick={() => this.props.grabThatAlgo(algo.id)} 
            >
              CREATE
            </button>
          
        <div className="content">{algo.algotype}</div>
        </div>
      );
    });
  } 
  
  render() {
    console.log(this.props)
    return <div className="ui divided list">{this.renderList()}</div>
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(AllAlgos);  