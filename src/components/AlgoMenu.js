import React from 'react';
import AlgoMenuItem from './AlgoMenuItem'
import ExampleMenuItem from './ExampleMenuItem'
import axios from 'axios';

class AlgoMenu extends React.Component {
  // state = {
  //   algorithms: [],
  //   examples: []
  // }

  // componentDidMount () {
  //   axios.get('http://localhost:3001/api/v1/algorithms/idxe')
  //     .then(response => {
  //         this.setState({algorithms: response.data});
  //         console.log(response)
  //     });
  // }

  // algoClickHandler = async(this_one) => {
  //   await axios.get(`http://localhost:3001/api/v1/algorithms/${this_one}/examples`)
  //     .then(response => {
  //         this.setState({examples: response.data});
  //         console.log(response)
  //     });
  // }

  render () {
    const algorithms = this.props.algorithms.map(algorithm => {
      return <AlgoMenuItem key={algorithm.id} id={algorithm.id} algotype={algorithm.algotype} exampleGrabber={this.props.exampleGrabber} />
    });



    return (
      <div className="circular ui inverted segment" align='right' style={{color: "#49fb35", marginTop: '5px', marginBottom: '10px', marginLeft: '2px', marginRight: '5px', height: '300px'}}>
        <div align="left">
          {algorithms}
        
        </div>
      </div>
    )
  }

}

export default AlgoMenu;