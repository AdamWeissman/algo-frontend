import React from 'react'
import ExampleContent from './ExampleContent'
import ToShowOrNotToShow from './ToShowOrNotToShow'
import Flair from './Flair'
import SaveButton from './SaveButton'

class ExampleContentContainer extends React.Component {
  render () {
    return (
      <center>
      <div className="circular ui segment" style={ {marginTop: '75px', marginLeft: '75px', marginRight: '75px'} }>
        <center>
        <div className="circular ui inverted segment" style={{color: "#49fb35", marginTop: '0px', marginLeft: '50px', marginRight: '50px'} }>
          <center>
           <ExampleContent />
          </center>
        </div>
        </center>
        <br />
          <center>
          <div className="circular ui raised segment">
            <ToShowOrNotToShow />
            <Flair />
            
          </div>
          </center>
          
      </div>
      </center>
    );
  }

}

export default ExampleContentContainer; 