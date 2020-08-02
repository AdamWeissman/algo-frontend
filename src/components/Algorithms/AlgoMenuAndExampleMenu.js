import React from 'react';
import AlgoMenu from './AlgoMenu'
import ExamplesMenu from '../Examples/ExamplesMenu'
import Flair from '../Flair/Flair'


class AlgoMenuAndExampleMenu extends React.Component {
  
  render () {
    
    return (
      <div className="ui green segment" style={ {marginTop: '5px', marginLeft: '89px', marginRight: '89px'} }>
        <div className="ui two column very relaxed grid">
          <div className="circular bottom aligned column">
            <center>
            <Flair />
            </center>
           
            <AlgoMenu 
              algorithms={this.props.algorithms}
              exampleGrabber={this.props.exampleGrabber}
            />
           
            <center>
            <Flair />
            </center>
          </div>
          <div className="circular bottom aligned column">          
            <center>
            <Flair />
            </center>
           
            <ExamplesMenu 
              examples={this.props.examples}
              exampleContentGrabber={this.props.exampleContentGrabber}
              whichMode={this.props.whichMode}
              algoSelected={this.props.algoSelected}
              algorithm={this.props.algorithm}
              onCreateTitle={this.props.onCreateTitle}
              createExampleContentSetter={this.props.createExampleContentSetter}
            />
           
            <center>
            <Flair />
            </center>
          </div>
        </div>
        <div className="ui vertical divider">
        熊
        </div>
      </div>
    );
  }

}

export default AlgoMenuAndExampleMenu;