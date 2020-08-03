//CONTAINERS

  //
  //
  //
  //
  //THIS IS FOR APP
  //
  //
  //
  //
  import React from 'react';
  import AlgoMenuAndExampleMenu from './Algorithms/AlgoMenuAndExampleMenu'
  import ExampleContentContainer from './ExamplesContent/ExampleContentContainer'
  import EitherOrButton from './AppLevel/EitherOrButton'
  import axios from 'axios';

  class App extends React.Component {

    state = {
      algorithms: [], // //refactored to redux DONE
      algorithm: "",
      algorithmSelected: "", //this is YES or NO
      examples: [],
      exampleTitle: "",
      exampleContent: "",
      example: "",
      mode: "", //re: explore or create ... this is also for the reducer/redux/store START HERE
      
    }
  
    createExampleSetter = (thing) => {
      this.setState({exampleContent: `${thing}`})
      console.log(this.state)
    }
  
    onCreateTitle = (the_algorithm, title) => {
      console.log(title);
      axios.post(`http://localhost:3001/api/v1/algorithms/${the_algorithm}/examples`, {
        title: `${title}`,
        content: "this is some temporary content to be replaced"
      })
        .then(response => {
          this.setState({example: response.data});
          console.log("This is the response data", this.state, response.data)
        }); 
    }
  
    // this is actually a patch request but treated as create content from the user perspective
    onCreateContent(the_algorithm, the_example, content)  {
      console.log(content);
      axios.patch(`http://localhost:3001/api/v1/algorithms/${the_algorithm}/examples/${the_example}`, {
        content: `${content}`
      })
        .then(response => {
          console.log(response)
        })
    }

    allAlgorithms = async() => {
      await axios.get('http://localhost:3001/api/v1/algorithms/')
      .then(response => {
          this.setState({algorithms: response.data, mode: "CREATE", algorithmSelected: ""}); // this would be the reducer where I set global state
          console.log(this.state)
        });
    } 
  
    algorithmsWithExamplesOnly = async() => {
      await axios.get('http://localhost:3001/api/v1/algorithms/idxe')
      .then(response => { 
          this.setState({algorithms: response.data, mode: "EXPLORE", algorithmSelected: ""});
          console.log(this.state)
        });
    } 

    algoGetExamplesClickHandler = async(the_algorithm) => {
      await axios.get(`http://localhost:3001/api/v1/algorithms/${the_algorithm}/examples`)
        .then(response => {
            this.setState({examples: response.data, algorithmSelected: "YES", algorithm: the_algorithm });
            console.log(response)
        });
    }
  
    examplesGetContentClickHandler = async(the_algorithm, the_example) => {
      await axios.get(`http://localhost:3001/api/v1/algorithms/${the_algorithm}/examples/${the_example}`)
        .then(response => {
            this.setState({example: response.data});
            console.log(response)
        });
    }

    render() {
      return (
  
        <center>
    
        <div className="circular inverted ui segment" style={ {marginTop: '35px', marginLeft: '75px', marginRight: '75px'} }>
          
          <center>
            <EitherOrButton
            // refactor for redux here
            // algorithms={this.props.algorithms} //refactored with redux DONE
            algorithms={this.state.algorithms} 
            
            allAlgos={this.allAlgorithms}
            algosLimited={this.algorithmsWithExamplesOnly}
            
            whichMode={this.state.mode}
  
            />
          </center>
  
          < AlgoMenuAndExampleMenu 
            // algorithms={this.props.algorithms}  //refactored with redux DONE
            algorithms={this.state.algorithms}
            exampleGrabber={this.algoGetExamplesClickHandler}
            examples={this.state.examples}
            exampleContentGrabber={this.examplesGetContentClickHandler}
            whichMode = {this.state.mode}
            
            //algoSelector={this.props.selectAlgorithm} //REDUX CODE
            algoSelected={this.state.algorithmSelected}
            algorithm={this.state.algorithm}
            
            onCreateTitle={this.onCreateTitle}
            createExampleContentSetter={this.createExampleSetter}
          />
          
          < ExampleContentContainer
            createExampleSetter={this.createExampleSetter}
            algorithm={this.state.algorithm}
            algosAll={this.allAlgorithms}
            example={this.state.example}
            exampleContent={this.state.exampleContent}
            reloadToHome = { () => {
                if (this.state.mode === "") {
                  this.algorithmsWithExamplesOnly();
                } else if (this.state.mode === "EXPLORE") {
                  this.algorithmsWithExamplesOnly();
                } else if (this.state.mode === "CREATE") {
                  this.allAlgorithms();
                }
                this.state.examples = []
                this.state.example = ""
                this.state.exampleContent = "" 
              }
            }
            whichMode = {this.state.mode}
            onCreateContent={this.onCreateContent}
          />

      </div>
            </center>
        
          );
        };
      }

      export default App;

  //
  //
  //    
  //    
  //THIS IS FOR "THE EYES AlgoMenuAndExampleMenu"
  //
  //
  //
  //
  import React from 'react';
  import AlgoMenu from './AlgoMenu'
  import ExamplesMenu from '../Examples/ExamplesMenu'
  import Flair from '../Flair/Flair'

  class AlgoMenuAndExampleMenu extends React.Component {
    
    render () {
      
      return (
        <div className="ui green segment" style={ {marginTop: '5px', marginLeft: '89px', marginRight: '89px'} }>
          <div className="ui two column very relaxed grid">
            <div className="circular bottom aligned column">
              <center>
              <Flair />
              </center>
            
              <AlgoMenu 
                algorithms={this.props.algorithms}
                //algoSelector={this.props.algoSelector}
                exampleGrabber={this.props.exampleGrabber}
              />
            
              <center>
              <Flair />
              </center>
            </div>
            <div className="circular bottom aligned column">          
              <center>
              <Flair />
              </center>
            
              <ExamplesMenu 
                examples={this.props.examples}
                exampleContentGrabber={this.props.exampleContentGrabber}
                whichMode={this.props.whichMode}
                algoSelected={this.props.algoSelected}
                algorithm={this.props.algorithm}
                onCreateTitle={this.props.onCreateTitle}
                createExampleContentSetter={this.props.createExampleContentSetter}
              />
            
              <center>
              <Flair />
              </center>
            </div>
          </div>
          <div className="ui vertical divider">
          熊
          </div>
        </div>
      );
    }

  }

  export default AlgoMenuAndExampleMenu;

//
//
//
//
//
//THIS IS FOR CREATE EXAMPLE TITLE
//
//
//
//
//
import React from 'react'

class CreateExampleTitle extends React.Component {

  state = { 
    title: ''
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onCreateTitle(this.props.algorithm, this.state.title)
    this.setState({title: "-O-"})
    this.props.createExampleContentSetter('X')
  }

  render () {

    if (this.state.title === "-O-") {
      return (
        <div className="circular ui inverted segment">
        </div>
      )
    } else { 
    return(
      <div>
        <center>{this.props.algorithm}</center>
        <form
          onSubmit={this.onFormSubmit} 
          className="ui form"
          >
          <div className="field">
          <input 
            type="text"
            value={this.state.title}
            placeholder="enter your title here"
            onChange={(e) => this.setState({ title: e.target.value})}
          />
          </div>
        </form>
      </div>
    ) }
  }
}

//need to set up POST request here

export default CreateExampleTitle;


//
//
//
//
//
//THIS IS FOR CREATE EXAMPLE CONTENT
//
//
//
//
//
import React from 'react'

class CreateExampleContent extends React.Component {

  state = {
    content: ''
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onCreateContent(this.props.algorithm, this.props.example, this.state.content)
    this.props.createExampleSetter("-O-")
    
  }

  render () {
    if (this.props.cSwitch === "-O-") {
      return (
        <div className="circular ui inverted yellow segment">
          -O-
          {/* {document.querySelector("#theRefreshButton").addEventListener('onClick', this.setState({content: ''}))} */}
        </div>
        )
    } else if (this.props.cSwitch === "X") { 
    return(
      <div>
        <form
          onSubmit={this.onFormSubmit} 
          className="ui form"
          >
          <div className="field">
          <input 
            type="text"
            value={this.props.tempContent}
            placeholder="enter content"
            //onChange={(e) => this.props.setState({ content: e.target.value})}
            onChange={(e) => this.setState({ content: e.target.value})}
          />
          </div>
        </form>
      </div>
    );
    } else {
        return (
          <div className="circular ui inverted yellow segment">
            O O
          </div>
          );
      }
    }
  }

  export default CreateExampleContent;




//
//
//
//
// THIS IS FOR EXAMPLE CONTENT CONTAINER
//
//
//
//
//
import React from 'react'
import ExampleContent from './ExampleContent'
import RefreshButton from '../AppLevel/RefreshButton'
import Flair from '../Flair/Flair'

class ExampleContentContainer extends React.Component {
  
  render () {
    return (
      <center>
      <div className="circular ui green segment" style={ {marginTop: '75px', marginLeft: '75px', marginRight: '75px'} }>
        <center>
        <div className="circular ui inverted segment" style={{color: "#49fb35", marginTop: '0px', marginLeft: '50px', marginRight: '50px', maxWidth: '200px'} }>
          <center>
            <ExampleContent
              createExampleSetter={this.props.createExampleSetter} 
              cSwitch={this.props.exampleContent}
              content={this.props.example.content}
              algorithm={this.props.algorithm}
              example={this.props.example}
              whichMode={this.props.whichMode}
              onCreateContent={this.props.onCreateContent} 
            />
          </center>
        </div>
        </center>
        <br />
          <center>
          <div className="circular ui raised red segment">
            <RefreshButton
            reloadRefresh={this.props.reloadToHome} 
            whichMode={this.props.whichMode} 
            />
            <Flair />
            
          </div>
          </center>
          
      </div>
      </center>
    );
  }

}

export default ExampleContentContainer; 







//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






//COMPONENTS
  
  //
  //
  //
  //
  //THIS IS FOR NAVIGATION
  //
  //
  //
  //
  import React from 'react';
  import { BrowserRouter, Route } from 'react-router-dom'
  import AboutPage from './AppLevel/AboutPage'
  import RulesPage from './AppLevel/RulesPage'
  import App from './App'

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

  //
  //
  //
  //
  //THIS IS FOR ALGORITHM MENU
  //
  //
  //
  //
import React, { Component } from 'react';
import AlgoMenuItem from './AlgoMenuItem'

class AlgoMenu extends Component {
  renderList() {
    return this.props.algorithms.map(algorithm => {
      return (
      <AlgoMenuItem 
        //algoSelector={this.props.algoSelector}
        key={algorithm.id}
        id={algorithm.id}
        algotype={algorithm.algotype}
        exampleGrabber={this.props.exampleGrabber} 
        />
      )
    });
  }
  
  render () {
    return (
      <div className="circular ui inverted segment" style={{color: "#49fb35", marginTop: '5px', marginBottom: '10px', marginLeft: '2px', marginRight: '5px', height: '300px'}}>
        <div className="circular" align="center" style={{ maxHeight: '175px', maxWidth: '175px', overflow: 'scroll'}}>
          {this.renderList()}
        </div>
      </div>
    )
  }
}

export default AlgoMenu;


  //
  //
  //
  //
  //THIS IS FOR ALGORITHM MENU ITEM
  //
  //
  //
  //
  import React from 'react';

  const algoMenuItem = (props) => {
    return (
      <div>
      <button className="circular ui inverted green basic button" onClick={() => props.exampleGrabber(`${props.id}`)} >{props.algotype}</button>

      {/* <button className="circular ui inverted green basic button" onClick={() => props.algoSelector(props.algotype)} >{props.algotype}</button> */} 

      </div>
    )
  }

  export default algoMenuItem;


  //
  //
  //
  //
  //THIS IS FOR ABOUT PAGE
  //
  //
  //
  //
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

  //
  //
  //
  //
  //THIS IS FOR EITHER OR BUTTON
  //
  //
  //
  //
  import React from 'react';
  import { Link } from 'react-router-dom'

  const eitherOrButton = (props) => {
      
      let allAlgos = props.allAlgos
      let algosLimited = props.algosLimited

      return (
        <div className="ui inverted segment" style={ { marginTop: '5px', marginLeft: '85px', marginRight: '85px'} }>
          
        <center>
        <Link to="/about">ABOUT</Link> | <Link to="/rules">RULES</Link> | <Link to="/">APP</Link> 
        </center>


          <div className="circular ui center green compact segment" style={{backgroundColor: "ivory"}} >
          <div className="circular ui raised green segment">
                <strong>EXPLORE OR CREATE</strong>
              </div>
              <br />
            <div className="ui fitted slider checkbox">
              <input type="checkbox"
                id="myCheck" 
                onClick={() => {
                  if (document.getElementById("myCheck").checked === true) {
                    allAlgos() // this would be where a thunk action is dispatched
                  } else {
                    console.log("this is the else")
                    algosLimited() // this would be where a thunk action is dispatched
                  } 

                }}
              />
              <label></label>
            </div>
              
          </div>
        </div>
      );
  }

  export default eitherOrButton;


  //
  //
  //
  //
  //THIS IS FOR REFRESH BUTTON
  //
  //
  //
  //
  import React from 'react';

  const refreshButton = (props) => {
  const initialMessage = "CLICK HERE TO BEGIN"
  const exploreMessage = "REFRESH"

  if (props.whichMode == "") {
    return (
      <button className="circular ui red button" onClick={ () => props.reloadRefresh() }> {initialMessage} </button>
      )
  } else if (props.whichMode === "EXPLORE") {
    return (
      <button className="circular ui red button" onClick={ () => props.reloadRefresh() }> {exploreMessage} </button>
      )
  } else if (props.whichMode === "CREATE") {
    return (
      <div>
        <button id="theRefreshButton" className="circular ui red button" onClick={ () => props.reloadRefresh() }> {exploreMessage} </button>
      </div>
      )
  }
  
  // THIS WAS FORMERLY IN === CREATE <SaveButton reloadRefresh={props.reloadRefresh} submit={() => console.log("A SUBMIT ACTION WILL OCCUR HERE")} />
  
}

export default refreshButton;



  //
  //
  //
  //
  //THIS IS FOR RULES PAGE
  //
  //
  //
  //
  import React from 'react';
  import { Link } from 'react-router-dom'

  const RulesPage = () => {
    return(
    <center>
    <div className="circular inverted ui segment" style={ {marginTop: '100px', marginLeft: '75px', marginRight: '75px'} }>
      <center>
      <Link to="/about">ABOUT</Link> | <Link to="/rules">RULES</Link> | <Link to="/">APP</Link>   
      </center>
    </div>
    <br></br>
    <div className="ui inverted blue segment" style={ {marginTop: '35px', marginLeft: '275px', marginRight: '275px'} }>
    <div className="circular blue ui segment" style={ {marginTop: '35px', marginLeft: '75px', marginRight: '75px'} }>
      <div className="ui blue segment">
      <div className="ui inverted blue segment" align="left" style={{ maxHeight: '520px', maxWidth: '500px', overflow: 'scroll'}}>
        <br />
        <center><h2>RULES</h2></center>
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


  //
  //
  //
  //
  //THIS IS FOR EXAMPLE MENU ITEM
  //
  //
  //
  //
  import React from 'react';

  const exampleMenuItem = (props) => {
    return (
      <div>
      <button 
      className="circular ui inverted green basic button" 
      onClick={() => props.contentGrabber(`${props.algorithm_id}`, `${props.id}`)}> {props.title} 
      </button>
      </div>
    )
  } 

  export default exampleMenuItem;


   //
  //
  //
  //
  //THIS IS FOR EXAMPLE MENU
  //
  //
  //
  //
  import React from 'react';
import ExampleMenuItem from './ExampleMenuItem'
import CreateExampleTitle from './CreateExampleTitle'
// not sure if we need to put POST request here using State

class ExamplesMenu extends React.Component {  
  
  render () {

    if ((this.props.whichMode === "EXPLORE") || (this.props.whichMode === "") ) {
      const examples = this.props.examples.map(example => {
        return <ExampleMenuItem key={example.id} algorithm_id={example.algorithm_id} id={example.id} title={example.title} content={example.content} contentGrabber={this.props.exampleContentGrabber} />
     });
 
     return (
       <div className="circular ui inverted segment" style={{color: "#49fb35", marginTop: '5px', marginBottom: '10px', marginRight: '2px', marginLeft: '2px', height: '300px'}}>
         <div className="circular" align="left" style={{ maxHeight: '175px', maxWidth: '175px', overflow: 'scroll' }}>
            {examples}
         </div>
       </div>
     );
    } else if ((this.props.whichMode === "CREATE") && (this.props.algoSelected === "YES")) {
      console.log(this.props.examples)
      return ( 
        <div className="circular ui inverted segment" style={{color: "#49fb35", marginTop: '5px', marginBottom: '10px', marginRight: '2px', marginLeft: '2px', height: '300px'}}>
         <div className="circular" align="left" style={{ maxHeight: '175px', maxWidth: '175px', overflow: 'scroll' }}>
            <CreateExampleTitle 
              algorithm={this.props.algorithm}
              onCreateTitle={this.props.onCreateTitle}
              createExampleContentSetter={this.props.createExampleContentSetter}
            />
         </div>
       </div>
      )
    } else { 
      return (
        <div className="circular ui inverted segment" style={{color: "#49fb35", marginTop: '5px', marginBottom: '10px', marginRight: '2px', marginLeft: '2px', height: '300px'}}>
        <div className="circular" align="left" style={{ maxHeight: '175px', maxWidth: '175px', overflow: 'scroll' }}>
          <div className="circular ui segment">
            <div className="circular ui inverted segment" align="bottom">
              O
            </div>
          </div>
        </div>
      </div>
      )
    }
  }
}

export default ExamplesMenu;


  
//
//
//
//
//
//THIS IS FOR CREATE EXAMPLE CONTENT
//
//
//
//
//
import React from 'react';
import CreateExampleContent from './CreateExampleContent'

const exampleContent = (props) => {

  if (props.whichMode === "") {
    return (
      <div className="circular ui segment">
      </div>
      )
  } else if (props.whichMode === "EXPLORE") {
    return (
      <div style={{maxHeight: '200px', maxWidth: '200px', overflow: 'scroll'}}>
        {props.content}
      </div>
      )
  } else if (props.whichMode === "CREATE") {
    return (
      <div style={{maxHeight: '200px', maxWidth: '200px', overflow: 'scroll'}}>
      <CreateExampleContent
        createExampleSetter={props.createExampleSetter}
        cSwitch={props.cSwitch}
        algorithm={props.algorithm}
        example={props.example}
        tempContent={props.content}
        onCreateContent={props.onCreateContent}
      />
    </div>
      )
  }

  }

  export default exampleContent;




  //
//
//
//
//
//THIS IS FOR FLAIR 
//
//
//
//
//
import React from 'react';

const flair = () => {
    return (
      <div className="ui fluid placeholder">
        <div className="line"></div>
      </div>
    );
}

export default flair;