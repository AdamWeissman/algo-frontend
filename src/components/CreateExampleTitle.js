import React from 'react'

class CreateExampleTitle extends React.Component {

  //constructor(props) {
    //super(props);
    state = {
      value: ''
    };

    handleChange = this.handleChange.bind(this);
    handleSubmit = this.handleSubmit.bind(this);
  // }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

 
  handleSubmit(props) {
    // alert('A name was submitted: ' + this.state.value);
    // event.preventDefault();
    props.submitExampleTitle(props.algorithm, this.state.value)
  }

  // onSubmit={() => props.submitExampleTitle(props.algorithm, this.name)}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

//need to set up POST request here

export default CreateExampleTitle;