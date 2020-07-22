import React from 'react';
import AlgoMenu from './AlgoMenu'
import ExamplesMenu from './ExamplesMenu'

class MenuAndExample extends React.Component {
  render () {
    return (
      <div className="ui segment" style={ {marginTop: '75px', marginLeft: '75px', marginRight: '75px'} }>
        <div className="ui two column very relaxed grid">
          <div className="column">
            <AlgoMenu />
            <center> BROWSE | CREATE </center>
          </div>
          <div className="column">
            <ExamplesMenu />
            <center>ADD OR VIEW AN EXAMPLE... functionality determined by state of browse or create on left panel</center>
          </div>
        </div>
        <div className="ui vertical divider">
          
        </div>
      </div>
    )
  }

}

export default MenuAndExample;