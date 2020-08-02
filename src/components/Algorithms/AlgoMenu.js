import React, { Component } from 'react';
import AlgoMenuItem from './AlgoMenuItem'
//import { connect } from 'react-redux'

class AlgoMenu extends Component {
  renderList() {
    return this.props.algorithms.map(algorithm => {
      return (
      <AlgoMenuItem 
        algoSelector={this.props.algoSelector}
        // key={algorithm.id}
        // id={algorithm.id}
        algotype={algorithm.algotype}
        //exampleGrabber={this.props.exampleGrabber} 
        />
      )
    });
  }

  // renderList2() {
  //   return this.props.algorithms.map(algorithm => {
  //     return <p key={algorithm.algotype}>{algorithm.algotype}</p>
  //   });
  // }
  
  
  
  render () {
    return (
      <div className="circular ui inverted segment" style={{color: "#49fb35", marginTop: '5px', marginBottom: '10px', marginLeft: '2px', marginRight: '5px', height: '300px'}}>
        <div className="circular" align="center" style={{ maxHeight: '175px', maxWidth: '175px', overflow: 'scroll'}}>
          {this.renderList()}
        </div>
      </div>
    )
  }
}


export default AlgoMenu;

// function mapStateToProps(state) {
//   //Whatever is returned here will show up as props inside of this component/container component
//   return {
//     algorithms: state.algorithms
//   };
// }

// export default connect(mapStateToProps)(AlgoMenu);