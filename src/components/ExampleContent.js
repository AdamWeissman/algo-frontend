import React from 'react'

class ExampleContent extends React.Component {
  render () {
    return (
      <div className="ui segment" style={ {marginTop: '0px', marginLeft: '75px', marginRight: '75px'} }>
        <div className="ui inverted segment" style={{color: "#49fb35", marginTop: '0px', marginLeft: '50px', marginRight: '50px'} }>
          this is the example text to add or nothing
          <br /><br /><br /><br />
          <center>
          <button class="ui inverted teal button">SAVE</button>
          </center>
        </div>
      </div>
    );
  }

}

export default ExampleContent; 