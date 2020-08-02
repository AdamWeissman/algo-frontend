//CONTAINERS

  //THIS IS FOR APP
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






  //THIS IS FOR "THE EYES AlgoMenuAndExampleMenu"
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



//COMPONENTS

  //THIS IS FOR NAVIGATION
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


  //THIS IS FOR ALGORITHM M