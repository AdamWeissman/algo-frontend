import React from 'react'
import ExampleContent from './ExampleContent'

class ExampleContentContainer extends React.Component {
  render () {
    return (
      <center>
      <div className="circular ui segment" style={ {marginTop: '75px', marginLeft: '75px', marginRight: '75px'} }>
        <div className="circular ui inverted segment" style={{color: "#49fb35", marginTop: '0px', marginLeft: '50px', marginRight: '50px'} }>
          <center>
           <ExampleContent />
          </center>
        </div>
          <br />
          <center>
          <div className="circular ui inverted segment">
            <button class="circular ui inverted teal button">SAVE</button>
          </div>
          </center>
      </div>
      </center>
    );
  }

}

export default ExampleContentContainer; 