import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App'

const AboutPage = () => {
  return(
  <center>
  <div className="circular inverted ui segment" style={ {marginTop: '100px', marginLeft: '75px', marginRight: '75px'} }>
    <center>
    <a href="/about">ABOUT</a> | <a href="/rules">RULES</a> | <a href="/">APP</a> 
    </center>
  </div>
  <br></br>
  <div className="ui inverted reg segment" style={ {marginTop: '35px', marginLeft: '200px', marginRight: '200px'} }>
  <div className="circular inverted ui segment" style={ {marginTop: '35px', marginLeft: '75px', marginRight: '75px'} }>
    <div className="ui inverted blue segment">
    <div className="ui blue segment" align="left" style={{ maxHeight: '500px', maxWidth: '500px', overflow: 'scroll'}}>
      <strong><p>This is an open app to community source examples of common algorithms and eventually data structures. What is meant by "open app" is that users can anonymously submit examples of predetermined algorithms.</p></strong>
      <br />
      <center><p><h2>FUTURE IMPROVEMENTS</h2></p></center>
      <br />
      <li>Replace Rails backend with Node.js</li>
      <li><strong>AFTER NODE.js:</strong>Add Users with login information</li>
      <li><strong>AFTER NODE.js:</strong>Add voting for good and bad examples, any examples with ratings less than a certain number will be 'self-deleted' from database after a certain number of days</li>
      <li><strong>AFTER NODE.js:</strong>Allow users to edit and delete examples they've created</li>
      <li><strong>AFTER NODE.js:</strong>Add ability to create examples for Data Structures on a second different colored bear face</li>
      <li><strong>AFTER NODE.js:</strong>Add ability to tag data structures with algorithms and vice versa</li>
    </div>
  </div>
  </div>
  </div>
  </center>
  )
}

const RulesPage = () => {
  return(
  <center>
  <div className="circular inverted ui segment" style={ {marginTop: '100px', marginLeft: '75px', marginRight: '75px'} }>
    <center>
    <a href="/about">ABOUT</a> | <a href="/rules">RULES</a> | <a href="/">APP</a> 
    </center>
  </div>
  <br></br>
  <div className="ui inverted reg segment" style={ {marginTop: '35px', marginLeft: '200px', marginRight: '200px'} }>
  <div className="circular inverted ui segment" style={ {marginTop: '35px', marginLeft: '75px', marginRight: '75px'} }>
    <div className="ui inverted blue segment">
    <div className="ui blue segment" align="left" style={{ maxHeight: '500px', maxWidth: '500px', overflow: 'scroll'}}>
      <strong><p>This is an open app to community source examples of common algorithms and eventually data structures. What is meant by "open app" is that users can anonymously submit examples of predetermined algorithms.</p></strong>
      <br />
      <center><p><h2>FUTURE IMPROVEMENTS</h2></p></center>
      <br />
      <li>Replace Rails backend with Node.js</li>
      <li><strong>AFTER NODE.js:</strong>Add Users with login information</li>
      <li><strong>AFTER NODE.js:</strong>Add voting for good and bad examples, any examples with ratings less than a certain number will be 'self-deleted' from database after a certain number of days</li>
      <li><strong>AFTER NODE.js:</strong>Allow users to edit and delete examples they've created</li>
      <li><strong>AFTER NODE.js:</strong>Add ability to create examples for Data Structures on a second different colored bear face</li>
      <li><strong>AFTER NODE.js:</strong>Add ability to tag data structures with algorithms and vice versa</li>
    </div>
  </div>
  </div>
  </div>
  </center>
  )
}

const Navigation = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={App} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/rules" exact component={RulesPage} />
        </div>
      </BrowserRouter>
    </div>
    )
}

export default Navigation;