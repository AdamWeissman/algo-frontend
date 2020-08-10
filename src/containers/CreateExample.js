import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import AllAlgos from '../components/algorithms/AllAlgorithms';
import CreateNewKoan from '../components/examples/CreateNewKoan';

class CreateExample extends Component {

  // ui raised padded text container segment
  
  render() {
    return (
      
      <div className="ui raised padded text container segment" style={ {marginTop: '35px', marginLeft: '5px', marginRight: '5px'} }>
        <div className="ui raised segment">
        <center><h1>CREATE AN ALGORITHM KOAN</h1></center>
        <div className="ui blue segment" style={ {marginTop: '25px', marginLeft: '5px', marginRight: '5px'} }>
        <center><Link to="/">ABOUT</Link> | <Link to="/view">VIEW</Link> | <Link to="/CREATE">CREATE</Link></center>
        </div>
        <center>
          <div className="ui two column grid container " style={ {marginTop: '-15px'} }>
            <div className="ui column">
              <div className="ui raised segment" style={{ height: '610px', maxHeight: '610px', overflow: 'scroll'}}>
                <AllAlgos />
              </div>
            </div>
            {/* <div className="ui inverted blue column">CREATE A KOAN TITLE</div> */}
            <div className="ui column">
              <div className="ui raised segment" style={{ maxHeight: '610px' }}>
                <CreateNewKoan />
              </div>
            </div>
        </div>
        </center>
      </div>  
      </div>
     
    )
  }

}


export default CreateExample;
// export default connect(mapStateToProps, {fetchAllAlgos: fetchAllAlgos})(AllAlgos);  