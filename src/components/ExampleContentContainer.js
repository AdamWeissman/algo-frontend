import React from 'react'
import ExampleContent from './ExampleContent'
import ToShowOrNotToShow from './ToShowOrNotToShow'
import Flair from './Flair'
import SaveButton from './SaveButton'

class ExampleContentContainer extends React.Component {
  
  render () {
    return (
      <center>
      <div className="circular ui green segment" style={ {marginTop: '75px', marginLeft: '75px', marginRight: '75px'} }>
        <center>
        <div className="circular ui inverted segment" style={{color: "#49fb35", marginTop: '0px', marginLeft: '50px', marginRight: '50px', maxWidth: '200px'} }>
          <center>
           <ExampleContent content={this.props.example.content}/>
          </center>
        </div>
        </center>
        <br />
          <center>
          <div className="circular ui raised red segment">
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