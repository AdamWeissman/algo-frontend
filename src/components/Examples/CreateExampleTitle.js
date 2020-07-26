import React from 'react'

class CreateExampleTitle extends React.Component {

  onInputChange(event) {
    console.log(event.target.value)
  }

  render () {
    return(
      <div>
        <center>{this.props.algorithm}</center>
        <form className="ui form">
          <div className="field">
          <input type="text" onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    )
  }
}

//need to set up POST request here

export default CreateExampleTitle;