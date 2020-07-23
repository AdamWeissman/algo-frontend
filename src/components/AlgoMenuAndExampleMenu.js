import React from 'react';
import AlgoMenu from './AlgoMenu'
import ExamplesMenu from './ExamplesMenu'
import Flair from './Flair'
import axios from 'axios';
// import EitherOrButton from './EitherOrButton'
// import ToShowOrNotToShow from './ToShowOrNotToShow'

class AlgoMenuAndExampleMenu extends React.Component {

  state = {
    algorithms: [],
    examples: []
  }

  componentDidMount () {
    axios.get('http://localhost:3001/api/v1/algorithms/idxe')
      .then(response => {
          this.setState({algorithms: response.data});
          console.log(response)
      });
  }

  algoClickHandler = async(this_one) => {
    await axios.get(`http://localhost:3001/api/v1/algorithms/${this_one}/examples`)
      .then(response => {
          this.setState({examples: response.data});
          console.log(response)
      });
  }

  
  render () {
    return (
      <div className="ui segment" style={ {marginTop: '5px', marginLeft: '89px', marginRight: '89px'} }>
        <div className="ui two column very relaxed grid">
          <div className="circular bottom aligned column">
            <center>
            <Flair />
            </center>
            <AlgoMenu algorithms={this.state.algorithms} />
            <center>
            <Flair />
            </center>
          </div>
          <div className="circular bottom aligned column">          
            <center>
            <Flair />
            </center>
            <ExamplesMenu examples={this.state.examples} />
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