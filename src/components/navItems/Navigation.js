  import React from 'react';
  import { BrowserRouter, Route } from 'react-router-dom'
  import AboutPage from './AboutPage'
  import App from '../../containers/App'
  import CreateExample from '../../containers/CreateExample'

  const Navigation = () => {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={App} />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/create" exact component={CreateExample} />
          </div>
        </BrowserRouter>
      </div>
      )
  }

  export default Navigation;