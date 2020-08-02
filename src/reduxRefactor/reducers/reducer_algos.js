import axios from 'axios';

export default function() {
  return ( 
    [
      { algotype: "FAKEALGOFORTESTING 1" },
      { algotype: "FAKEALGOFORTESTING 2" },
      { algotype: "FAKEALGOFORTESTING 3" }
    ]
  )
}


// allAlgorithms = async() => {
// //   await axios.get('http://localhost:3001/api/v1/algorithms/')
// //   .then(response => {
// //       //this.setState({algorithms: response.data, mode: "CREATE", algorithmSelected: ""}); // this would be the reducer where I set global state
// //       console.log(this.state)
// //     });
// // } 

// algorithmsWithExamplesOnly = async() => {
//   await axios.get('http://localhost:3001/api/v1/algorithms/idxe')
//   .then(response => { 
//       //this.setState({algorithms: response.data, mode: "EXPLORE", algorithmSelected: ""});
//       console.log(this.state)
//     });
// } 