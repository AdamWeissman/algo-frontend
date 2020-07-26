import React from 'react'

class CreateExampleTitle extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    /* Initialize all text fields with empty strings. */
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })



  render() {
  
    return (
    <div>
      <input type="text"
      value=""
      placeholder="Enter a title."
      onSubmit={() => this.props.submitExampleTitle(`${this.props.algorithm}`, this.props.value)}>
      </input>
    </div>
    );
  }
}

//need to set up POST request here

export default CreateExampleTitle;