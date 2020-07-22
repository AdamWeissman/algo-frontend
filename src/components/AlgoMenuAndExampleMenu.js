import React from 'react';
import AlgoMenu from './AlgoMenu'
import ExamplesMenu from './ExamplesMenu'
import EitherOrButton from './EitherOrButton'
import ToShowOrNotToShow from './ToShowOrNotToShow'

class AlgoMenuAndExampleMenu extends React.Component {
  render () {
    return (
      <div className="ui segment" style={ {marginTop: '25px', marginLeft: '75px', marginRight: '75px'} }>
        <div className="ui two column very relaxed grid">
          <div className="bottom aligned column">
            <AlgoMenu />
          </div>
          <div className="bottom aligned column">
            <ExamplesMenu />
          </div>
        </div>
        <div className="ui vertical divider">
        O
        </div>
      </div>
    )
  }

}

export default AlgoMenuAndExampleMenu;