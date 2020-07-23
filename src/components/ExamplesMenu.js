import React from 'react';
import AlgoMenu from './AlgoMenu'
import ExampleMenuItem from './ExampleMenuItem'
// import axios from 'axios';

class ExamplesMenu extends React.Component {
  render () {
    const examples = this.props.examples.map(example => {
       return <ExampleMenuItem key={example.id} algorithm_id={example.algorithm_id} id={example.id} title={example.title} content={example.content} contentGrabber={this.props.exampleContentGrabber} />
    });

    return (
      <div className="circular ui inverted segment" style={{color: "#49fb35", marginTop: '5px', marginBottom: '10px', marginRight: '2px', marginLeft: '2px', height: '300px'}}>
        <div align="left">
           {examples}
        </div>
      </div>
    );
  }
}

export default ExamplesMenu;