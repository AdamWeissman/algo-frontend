import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

const AboutPage = () => {
  return <div>ABOUT PAGE</div>
}

const RulesPage = () => {
  return <div>RULES PAGE</div>
}

const Navigation = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/about" component={AboutPage} />
          <Route path="/rules" component={RulesPage} />
        </div>
      </BrowserRouter>
    </div>
    )
}

export default Navigation;