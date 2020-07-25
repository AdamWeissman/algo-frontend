import React from 'react';
import AlgoMenuAndExampleMenu from './AlgoMenuAndExampleMenu'
import ExampleContentContainer from './ExampleContentContainer'
import EitherOrButton from './EitherOrButton'
import axios from 'axios';

class App extends React.Component {

  state = {
    algorithms: [],
    examples: [],
    example: [],
    mode: "", //re: explore or create
    algorithmSelected: ""
  }

  componentDidMount () {
    // axios.get('http://localhost:3001/api/v1/algorithms/idxe')
    //   .then(response => {
    //       this.setState({algorithms: response.data});
    //       console.log(response)
    //   });

    //this.allAlgorithms() this line works...
  }

  allAlgorithms = async() => {
    await axios.get('http://localhost:3001/api/v1/algorithms/')
    .then(response => {
        this.setState({algorithms: response.data, mode: "CREATE", algorithmSelected: ""});
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
          this.setState({examples: response.data, algorithmSelected: "YES"});
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

  submitExample = () => {
    console.log("this is a placeholder")
  }


  render() {
    return (
      <center>
      <div className="circular inverted ui segment" style={ {marginTop: '35px', marginLeft: '75px', marginRight: '75px'} }>
        
        <center>
          <EitherOrButton
          algorithms={this.state.algorithms}
          allAlgos={this.allAlgorithms}
          algosLimited={this.algorithmsWithExamplesOnly}
          whichMode={this.state.mode}
          />
        </center>

        < AlgoMenuAndExampleMenu 
          algorithms={this.state.algorithms} 
          exampleGrabber={this.algoGetExamplesClickHandler}
          examples={this.state.examples}
          exampleContentGrabber={this.examplesGetContentClickHandler}
          whichMode = {this.state.mode}
          algoSelected={this.state.algorithmSelected}
        />
        
        < ExampleContentContainer
          example={this.state.example}
          reloadToHome = { () => {
              if (this.state.mode == "") {
                this.algorithmsWithExamplesOnly();
              } else if (this.state.mode == "EXPLORE") {
                this.algorithmsWithExamplesOnly();
              } else if (this.state.mode == "CREATE") {
                this.allAlgorithms();
              }
              this.state.examples = []
              this.state.example = [] 
            }
          }
          whichMode = {this.state.mode}
          //reloadToHome should actually contain conditional logic
        />

       
      </div>
      </center>
    );
  }
}

export default App;




 {/* <br></br>
        these are the project requirement
        <ul>Container Component 2 (maintains state)</ul>
  
        
        <ul>__</ul>
        <ul>Route 1, use fetch, also integrate with redux-thunk</ul>
        <ul>Route 2, use fetch, also integrate with redux-thunk</ul>
        <ul>Route 3, use fetch, also integrate with redux-thunk</ul>
        <ul>__</ul>
        
        <ul>REACT ROUTER USED with proper restful routing</ul>
        
        <ul>Redux and redux-thunk middleware are being used to modify state change and make use of async actions to send data and receive data from the server</ul>
        
        <br></br> Also... Good understanding of the react/redux state flow; Good understanding of state and props in React' Knowledge of async JS with Promises 
       */}