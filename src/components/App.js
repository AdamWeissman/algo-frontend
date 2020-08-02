import React from 'react';
import AlgoMenuAndExampleMenu from './Algorithms/AlgoMenuAndExampleMenu'
import ExampleContentContainer from './ExamplesContent/ExampleContentContainer'
import EitherOrButton from './AppLevel/EitherOrButton'
import axios from 'axios';
import { connect } from 'react-redux'
import { selectAlgorithm } from '../reduxRefactor/actions/'
import { bindActionCreators } from 'redux';
// import { whichMode } from '../actions'; //don't need to write index because index.js inside of actions is automatically found


class App extends React.Component {

  state = {
    //algorithms: [], // //refactored to redux DONE
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

  // come up with action types
  // action creators
  // build reducer to hit each action type
  // introduce thunk functionality (probably an action that returns as an object)

  //MOST DIFFICULT PART is likely creating the reducers and the thunks
  //EASIEST PART is boiler plate code for creating the connection


  // from here
  // allAlgorithms = async() => {
  //   await axios.get('http://localhost:3001/api/v1/algorithms/')
  //   .then(response => {
  //       //this.setState({algorithms: response.data, mode: "CREATE", algorithmSelected: ""}); // this would be the reducer where I set global state
  //       console.log(this.state)
  //     });
  // } 

  // algorithmsWithExamplesOnly = async() => {
  //   await axios.get('http://localhost:3001/api/v1/algorithms/idxe')
  //   .then(response => { 
  //       //this.setState({algorithms: response.data, mode: "EXPLORE", algorithmSelected: ""});
  //       console.log(this.state)
  //     });
  // } 
  // to here would be action creators... mapDispatchToProps ... the above two functions would be thunks



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
          algorithms={this.props.algorithms} //refactored with redux DONE
          
          allAlgos={this.allAlgorithms}
          algosLimited={this.algorithmsWithExamplesOnly}
          
          whichMode={this.state.mode}

          />
        </center>

        < AlgoMenuAndExampleMenu 
          algorithms={this.props.algorithms}  //refactored with redux DONE
          exampleGrabber={this.algoGetExamplesClickHandler}
          examples={this.state.examples}
          exampleContentGrabber={this.examplesGetContentClickHandler}
          whichMode = {this.state.mode}
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

        {/* <div>
          this.props.fetchAllAlgorithms();
        </div> */}

      </div>
      </center>
   
    );
  };
}

// export default App;


function mapStateToProps(state) {
  
  console.log("from MapStateToProps", state.algorithms)
  //Whatever is returned here will show up as props inside of this component/container component
  return {
    algorithms: state.algorithms
  };
}

//anything returned from this function will end up as props on the app container
function mapDispatchToProps(dispatch) {
  //whenever this is called, the result should be passed to all the reducers
  return bindActionCreators({ selectAlgorithm: selectAlgorithm }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);



 {/* <br></br>
        these are the project requirement
              
        <ul>__</ul>
        <ul>Routes 1.2.3, use fetch, also integrate with redux-thunk</ul> may need to add some data to router for fetch request.
        
        <ul>Redux and redux-thunk middleware are being used to modify state change and make use of async actions to send data and receive data from the server</ul>
        
        <br></br> Also... Good understanding of the react/redux state flow; Good understanding of state and props in React' Knowledge of async JS with Promises 
       */}
