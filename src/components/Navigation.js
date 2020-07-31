import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App'

const AboutPage = () => {
  return(
  <center>
  <div className="circular inverted ui segment" style={ {marginTop: '35px', marginLeft: '75px', marginRight: '75px'} }>
    <center>
    <a href="/about">ABOUT</a> | <a href="/rules">RULES</a> | <a href="/">APP</a> 
    </center>
  </div>
  </center>
  )
}

const RulesPage = () => {
  return (<center>
    <div className="circular inverted ui segment" style={ {marginTop: '35px', marginLeft: '75px', marginRight: '75px'} }>
      <center>
      <a href="/rules">RULES</a> | <a href="/rules">ABOUT</a> | <a href="/">APP</a> 
      </center>
    </div>
    </center>)
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