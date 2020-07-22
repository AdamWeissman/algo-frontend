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
            <center>ADD AN EXAMPLE -- hover info, to add an example you must be in create mode</center>
          </div>
        </div>
        <div className="ui vertical divider">
          
        </div>
      </div>
    )
  }

}

export default MenuAndExample;