import React from 'react';
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return(
    <div className="ui raised very padded text container segment" style={ {marginTop: '35px', marginLeft: '15px', marginRight: '15px'} }>
      <center><h1>ALGORITHM KOANS</h1></center>
      <div className="ui blue segment" style={ {marginTop: '25px', marginLeft: '15px', marginRight: '15px'} }>
        <center><Link to="/">ABOUT</Link> | <Link to="/view">VIEW</Link> | <Link to="/CREATE">CREATE</Link></center>
      </div>
      <center>
        <div className="ui blue segment" align="left" style={{ maxHeight: '520px', maxWidth: '500px'}}>
          <strong><p>This is an open app to community source koans of common algorithms and eventually data structures. What is meant by "open app" is that users can anonymously submit koans of predetermined algorithms.</p></strong>
          <br />
          <center><h2>FUTURE IMPROVEMENTS</h2></center>
          <br />
          <li>Replace Rails backend with Node.js</li>
          <center><div className="ui inverted red segment" style={ {marginTop: '15px', marginBottom: '0px', marginLeft: '100px', marginRight: '100px'} }>NOTE</div></center>
          <center><div className="ui red segment" align="left" style={ {marginTop: '0px', marginBottom: '15px', marginLeft: '100px', marginRight: '100px'} }><em>future developments dependent on Node.js to enhance learning experience  </em></div></center>
          <li>Add Users with login information</li>
          <li>Add Koan fade... Older koans will grey out and disappear with time, to add an extra "Zen" or "Sumi Water Paper" vibe</li>
          <li>write custom CSS instead of using semantic CDN to make it look like Sumi Paper and add new fonts</li>
          <li>Add toggle for data structure koans instead of algos</li>
          <li>Add ability to tag data structures with algorithms and vice versa</li>
        </div>
      </center>
    </div>
  )
}

export default AboutPage;