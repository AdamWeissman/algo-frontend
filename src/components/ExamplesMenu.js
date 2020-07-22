import React from 'react';
import ExampleMenuItem from './ExampleMenuItem'

class ExamplesMenu extends React.Component {
  render () {
    return (
      <div className="ui inverted segment" style={{color: "#49fb35", marginTop: '5px', marginBottom: '10px', marginRight: '20px', marginLeft: '20px', height: '300px'}}>
        
           <ExampleMenuItem />
           <ExampleMenuItem />
           <ExampleMenuItem />
           <ExampleMenuItem />  <ExampleMenuItem />
           <ExampleMenuItem />
           <ExampleMenuItem />
          
            
      </div>
    );
  }
}

export default ExamplesMenu;