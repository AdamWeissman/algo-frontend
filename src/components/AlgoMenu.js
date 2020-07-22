import React from 'react';
import AlgoMenuItem from './AlgoMenuItem'
import axios from 'axios';

class AlgoMenu extends React.Component {
  componentDidMount () {
    axios.get('http://localhost:3001/api/v1/algorithms')
      .then(response => {
        console.log(response)
      });
  }

  render () {
    return (
      <div className="circular ui inverted segment" align='right' style={{color: "#49fb35", marginTop: '5px', marginBottom: '10px', marginLeft: '2px', marginRight: '5px', height: '300px'}}>
        <div align="left">
          <AlgoMenuItem />
          <AlgoMenuItem />
          <AlgoMenuItem />
          <AlgoMenuItem />
          <AlgoMenuItem />
          <AlgoMenuItem />
        </div>
      </div>
    )
  }

}

export default AlgoMenu;