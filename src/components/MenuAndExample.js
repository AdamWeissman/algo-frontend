import React from 'react';
import AlgoMenu from './AlgoMenu'

class MenuAndExample extends React.Component {
  render () {
    return (
      <div class="ui segment" style={ {marginTop: '75px', marginLeft: '75px', marginRight: '75px'} }>
        <div class="ui two column very relaxed grid">
          <div class="column">
            <AlgoMenu />
          </div>
          <div class="column">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
        <div class="ui vertical divider">
          and
        </div>
      </div>
    )
  }

}

export default MenuAndExample;