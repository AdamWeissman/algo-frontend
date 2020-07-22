import React from 'react';
import AlgoMenuItem from './AlgoMenuItem'
import axios from 'axios';

class AlgoMenu extends React.Component {
  state = {
    algorithms: []
  }

  componentDidMount () {
    axios.get('http://localhost:3001/api/v1/algorithms')
      .then(response => {
          this.setState({algorithms: response.data});
          console.log(response)
      });
  }

  render () {

    const algorithms = this.state.algorithms.map(algorithm => {
      return <AlgoMenuItem algotype={algorithm.algotype}/>
    })

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