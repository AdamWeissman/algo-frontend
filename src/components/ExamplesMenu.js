import React from 'react';
import ExampleMenuItem from './ExampleMenuItem'

class ExamplesMenu extends React.Component {
  render () {
    return (
      <div className="ui inverted segment" style={{color: "#49fb35", marginTop: '10px', marginBottom: '10px', marginRight: '20px', marginLeft: '0px', height: '300px' }}>
        
           <ExampleMenuItem />
           <ExampleMenuItem />
           <ExampleMenuItem />
           <ExampleMenuItem />
            
      </div>
    );
  }
}

export default ExamplesMenu;