import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import AllAlgos from '../components/algorithms/AllAlgorithms';
import CreateNewKoan from '../components/examples/CreateNewKoan';
import CreateExampleTitle from '../components/navItems/CreateExampleTitle';

class CreateExample extends Component {

  // ui raised padded text container segment
  
  render() {
    return (
      
      <div className="ui raised padded text container segment" style={ {marginTop: '35px', marginLeft: '15px', marginRight: '15px'} }>
        <div className="ui raised segment">

        <center>
        <div className="ui inverted segment" style={{ height: '55px', maxHeight: '55px'}}>
          <CreateExampleTitle />
        </div>
        </center>

        <div className="ui blue segment" style={ {marginTop: '15px', marginLeft: '15px', marginRight: '15px'} }>
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