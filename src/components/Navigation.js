import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import AboutPage from './AboutPage'
import RulesPage from './RulesPage'
import App from './App'





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