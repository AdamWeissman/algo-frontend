import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import AboutPage from './AppLevel/AboutPage'
import RulesPage from './AppLevel/RulesPage'
import App from './App'
import { rAlgorithms } from '../actions/';

//import actions from '../actions/'; //don't need to write index because index.js inside of actions is automatically found



// state = {
//   algorithms: [],
//   algorithm: "",
//   algorithmSelected: "",
//   examples: [],
//   exampleTitle: "",
//   exampleContent: "",
//   example: "",
//   mode: "", //re: explore or create
  
// }


const Navigation = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={App} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/rules" exact component={RulesPage} />
          {/* <Route path="/rules" component={App} /> */}
        </div>
      </BrowserRouter>
    </div>
    )
}

export default Navigation;