import React from 'react'
// import axios from 'axios'

class CreateExampleTitle extends React.Component {

  state = { 
    title: ''
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onCreateTitle(this.props.algorithm, this.state.title)
    this.setState({title: "-O-"})
    this.props.createExampleContentSetter('X')
  }

  render () {

    if (this.state.title === "-O-") {
      return (
        <div className="circular ui inverted segment">
        </div>
      )
    } else { 
    return(
      <div>
        <center>{this.props.algorithm}</center>
        <form
          onSubmit={this.onFormSubmit} 
          className="ui form"
          >
          <div className="field">
          <input 
            type="text"
            value={this.state.title}
            placeholder="enter your title here"
            onChange={(e) => this.setState({ title: e.target.value})}
          />
          </div>
        </form>
      </div>
    ) }
  }
}

//need to set up POST request here

export default CreateExampleTitle;