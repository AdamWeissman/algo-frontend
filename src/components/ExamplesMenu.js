import React from 'react';
import ExampleMenuItem from './ExampleMenuItem'

class ExamplesMenu extends React.Component {
  render () {
    return (
      <div className="circular ui inverted segment" style={{color: "#49fb35", marginTop: '5px', marginBottom: '10px', marginRight: '2px', marginLeft: '2px', height: '300px'}}>
        <div align="left">
           <ExampleMenuItem />
           <ExampleMenuItem />
           <ExampleMenuItem />
           <ExampleMenuItem /> 
        </div>
      </div>
    );
  }
}

export default ExamplesMenu;