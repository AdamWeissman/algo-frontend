import React from 'react';
import AlgoMenu from './AlgoMenu'
import ExamplesMenu from './ExamplesMenu'
import Flair from './Flair'
import EitherOrButton from './EitherOrButton'
import ToShowOrNotToShow from './ToShowOrNotToShow'

class AlgoMenuAndExampleMenu extends React.Component {
  render () {
    return (
      <div className="ui segment" style={ {marginTop: '5px', marginLeft: '89px', marginRight: '89px'} }>
        <div className="ui two column very relaxed grid">
          <div className="circular bottom aligned column">
            <center>
            <Flair />
            </center>
            <AlgoMenu />
            <center>
            <Flair />
            </center>
          </div>
          <div className="circular bottom aligned column">          
            <center>
            <Flair />
            </center>
            <ExamplesMenu />
            <center>
            <Flair />
            </center>
          </div>
        </div>
        <div className="ui vertical divider">
        熊
        </div>
      </div>
    )
  }

}

export default AlgoMenuAndExampleMenu;