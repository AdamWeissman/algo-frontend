import React from 'react'

class CreateExampleTitle extends React.Component {

  render () {
    return(
      <div>
        <center>{this.props.algorithm}</center>
        <form className="ui form">
          <div className="field">
          <input type="text" />
          </div>
        </form>
      </div>
    )
  }
}

//need to set up POST request here

export default CreateExampleTitle;