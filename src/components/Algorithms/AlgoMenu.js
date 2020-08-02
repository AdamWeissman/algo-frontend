import React, { Component } from 'react';
import AlgoMenuItem from './AlgoMenuItem'

class AlgoMenu extends Component {
   
  renderList() {
    return this.props.algorithms.map(algorithm => {
      return <AlgoMenuItem key={algorithm.id} id={algorithm.id} algotype={algorithm.algotype} exampleGrabber={this.props.exampleGrabber} />
    });
    
  }
  
  
  
  render () {
 
    return (
      <div className="circular ui inverted segment" style={{color: "#49fb35", marginTop: '5px', marginBottom: '10px', marginLeft: '2px', marginRight: '5px', height: '300px'}}>
        <div className="circular" align="center" style={{ maxHeight: '175px', maxWidth: '175px', overflow: 'scroll'}}>
          {/* {algorithms} */}
          {this.renderList()}
        </div>
      </div>
    )
  }

}

export default AlgoMenu;