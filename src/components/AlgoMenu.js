import React from 'react';
import AlgoMenuItem from './AlgoMenuItem'

class AlgoMenu extends React.Component {
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