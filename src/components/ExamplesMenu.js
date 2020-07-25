import React from 'react';
import ExampleMenuItem from './ExampleMenuItem'
import CreateExampleTitle from './CreateExampleTitle'
// import axios from 'axios';
// not sure if we need to put POST request here using State

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
            <CreateExampleTitle algorithm={this.props.algorithm} />
         </div>
       </div>
      )
    } else { 
      return (
        <div className="circular ui inverted segment" style={{color: "#49fb35", marginTop: '5px', marginBottom: '10px', marginRight: '2px', marginLeft: '2px', height: '300px'}}>
        <div className="circular" align="left" style={{ maxHeight: '175px', maxWidth: '175px', overflow: 'scroll' }}>
          <div className="circular ui segment">
            <div className="circular ui inverted segment" align="bottom">
              O
            </div>
          </div>
        </div>
      </div>
      )
    }
  }
}

export default ExamplesMenu;