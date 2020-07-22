import React from 'react';
import AlgoMenu from './AlgoMenu'
import ExamplesMenu from './ExamplesMenu'
import EitherOrButton from './EitherOrButton'

class MenuAndExample extends React.Component {
  render () {
    return (
      <div className="ui segment" style={ {marginTop: '75px', marginLeft: '75px', marginRight: '75px'} }>
        <div className="ui two column very relaxed grid">
          <div className="column">
            <AlgoMenu />
            <center>< EitherOrButton /></center>
          </div>
          <div className="column">
            <ExamplesMenu />
            <center>< EitherOrButton /></center>
          </div>
        </div>
        <div className="ui vertical divider">
        O
        </div>
      </div>
    )
  }

}

export default MenuAndExample;