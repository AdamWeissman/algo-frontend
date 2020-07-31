import React from 'react';

const RulesPage = () => {
  return(
  <center>
  <div className="circular inverted ui segment" style={ {marginTop: '100px', marginLeft: '75px', marginRight: '75px'} }>
    <center>
    <a href="/about">ABOUT</a> | <a href="/rules">RULES</a> | <a href="/">APP</a>  
    </center>
  </div>
  <br></br>
  <div className="ui inverted blue segment" style={ {marginTop: '35px', marginLeft: '275px', marginRight: '275px'} }>
  <div className="circular blue ui segment" style={ {marginTop: '35px', marginLeft: '75px', marginRight: '75px'} }>
    <div className="ui blue segment">
    <div className="ui inverted blue segment" align="left" style={{ maxHeight: '520px', maxWidth: '500px', overflow: 'scroll'}}>
      <br />
      <center><p><h2>RULES</h2></p></center>
      <br />
      <li>The switch on the panda's head is used to switch from "explore" to "create".  In "Explore" mode the left eye will populate only with Algorithms that have Examples.  If in "Create" Mode the left eye will populate with all pre-seeded algorithms.</li>
      <li>If in "Explore" Mode selecting an algorithm from the left eye will cause the Titles of the Examples to populate in the right eye.  If the title of an example is clicked in the right eye, then the nose will populate with the example content.</li>
      <li>If in "Create" MOde, selecting an algorithm from the left eye will prompt the user to come up with a title for the example they want to submit in the right eye. Upon entering a title in the right eye, and hitting enter, the right eye will go blank and the user will then be prompted to enter the example content in the nose.</li>
      <li>The REFRESH button is self explanatory.</li>
      <li>ALSO, in order to see a created example, the user only need switch from "Create" Mode back to "Explore".</li>

      </div>
  </div>
  </div>
  </div>
  </center>
  )
}

export default RulesPage;