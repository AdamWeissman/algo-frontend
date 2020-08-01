import React from 'react';
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return(
  <center>
  <div className="circular inverted ui segment" style={ {marginTop: '100px', marginLeft: '75px', marginRight: '75px'} }>
    <center>
    <Link to="/about">ABOUT</Link> | <Link to="/rules">RULES</Link> | <Link to="/">APP</Link>   
    </center>
  </div>
  <br></br>
  <div className="ui inverted blue segment" style={ {marginTop: '35px', marginLeft: '275px', marginRight: '275px'} }>
  <div className="circular inverted ui segment" style={ {marginTop: '35px', marginLeft: '75px', marginRight: '75px'} }>
    <div className="ui inverted blue segment">
    <div className="ui blue segment" align="left" style={{ maxHeight: '520px', maxWidth: '500px', overflow: 'scroll'}}>
      <strong><p>This is an open app to community source examples of common algorithms and eventually data structures. What is meant by "open app" is that users can anonymously submit examples of predetermined algorithms.</p></strong>
      <br />
      <center><h2>FUTURE IMPROVEMENTS</h2></center>
      <br />
      <li>Replace Rails backend with Node.js</li>
      <center><div className="ui inverted red segment" style={ {marginTop: '15px', marginBottom: '0px', marginLeft: '100px', marginRight: '100px'} }>NOTE</div></center>
      <center><div className="ui red segment" align="left" style={ {marginTop: '0px', marginBottom: '15px', marginLeft: '100px', marginRight: '100px'} }><em>future developments dependent on Node.js to enhance learning experience  </em></div></center>
      <li>Add Users with login information</li>
      <li>Add voting for good and bad examples, any examples with ratings less than a certain number will be 'self-deleted' from database after a certain number of days</li>
      <li>Allow users to edit and delete examples they've created</li>
      <li>Add ability to create examples for Data Structures on a second different colored bear face</li>
      <li>Add ability to tag data structures with algorithms and vice versa</li>
    </div>
  </div>
  </div>
  </div>
  </center>
  )
}

export default AboutPage;