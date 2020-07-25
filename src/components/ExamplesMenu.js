import React from 'react';
import AlgoMenu from './AlgoMenu'
import ExampleMenuItem from './ExampleMenuItem'
// import axios from 'axios';

class ExamplesMenu extends React.Component {
  render () {

    if ((this.props.whichMode === "EXPLORE") || (this.props.whichMode === "") ) {
      const examples = this.props.examples.map(example => {
        return <ExampleMenuItem key={example.id} algorithm_id={example.algorithm_id} id={example.id} title={example.title} content={example.content} contentGrabber={this.props.exampleContentGrabber} />
     });
 
     return (
       <div className="circular ui inverted segment" style={{color: "#49fb35", marginTop: '5px', marginBottom: '10px', marginRight: '2px', marginLeft: '2px', height: '300px'}}>
         <div className="circular" align="left" style={{ maxHeight: '175px', maxWidth: '175px', overflow: 'scroll' }}>
            {examples}
         </div>
       </div>
     );
    } else if ((this.props.whichMode === "CREATE") && (this.props.algoSelected === "YES")) {
      console.log(this.props.examples)
      return ( 
        <div className="circular ui inverted segment" style={{color: "#49fb35", marginTop: '5px', marginBottom: '10px', marginRight: '2px', marginLeft: '2px', height: '300px'}}>
         <div className="circular" align="left" style={{ maxHeight: '175px', maxWidth: '175px', overflow: 'scroll' }}>
            CREATE MODE EXAMPLE SELECTED
         </div>
       </div>
      )
    } else { 
      return (
        <div className="circular ui inverted segment" style={{color: "#49fb35", marginTop: '5px', marginBottom: '10px', marginRight: '2px', marginLeft: '2px', height: '300px'}}>
        <div className="circular" align="left" style={{ maxHeight: '175px', maxWidth: '175px', overflow: 'scroll' }}>
           CREATE MODE EXAMPLE NOT SELECTED
        </div>
      </div>
      )
    }
  }
}

export default ExamplesMenu;