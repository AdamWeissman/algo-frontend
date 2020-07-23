import React from 'react';
import AlgoMenuItem from './AlgoMenuItem'
import ExampleMenuItem from './ExampleMenuItem'
import axios from 'axios';

class AlgoMenu extends React.Component {
   render () {
    const algorithms = this.props.algorithms.map(algorithm => {
      return <AlgoMenuItem key={algorithm.id} id={algorithm.id} algotype={algorithm.algotype} exampleGrabber={this.props.exampleGrabber} />
    });

    return (
      <div className="circular ui inverted segment" style={{color: "#49fb35", marginTop: '5px', marginBottom: '10px', marginLeft: '2px', marginRight: '5px', height: '300px'}}>
        <div align="left">
          {algorithms}
        </div>
      </div>
    )
  }

}

export default AlgoMenu;