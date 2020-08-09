import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import AllAlgos from '../components/algorithms/AllAlgorithms';

class CreateExample extends Component {

  // ui raised padded text container segment
  
  render() {
    return (
      <div className="ui raised padded text container segment" style={ {marginTop: '35px', marginLeft: '5px', marginRight: '5px'} }>
        <center><h1>CREATE MODE</h1></center>
        <div className="ui blue segment" style={ {marginTop: '25px', marginLeft: '5px', marginRight: '5px'} }>
        <center><Link to="/">ABOUT</Link> | <Link to="/view">VIEW</Link> | <Link to="/CREATE">CREATE</Link></center>
        </div>
        <center>
          <div className="ui two column grid container animate__animated animate__fadeIn" style={ {marginTop: '-15px'} }>
            <div className="ui column">
              <div className="ui raised segment">
                <AllAlgos />
              </div>
            </div>
            {/* <div className="ui inverted blue column">CREATE A KOAN TITLE</div> */}
            <div className="ui column">
              <div className="ui raised segment">
                create koans
              </div>
            </div>
        </div>
        </center>
      </div>
    )
  }

}


export default CreateExample;
// export default connect(mapStateToProps, {fetchAllAlgos: fetchAllAlgos})(AllAlgos);  