import React from 'react'

class CreateExampleTitle extends React.Component {

  state = {
    title: '',
    content: '',
    /* Initialize all text fields with empty strings. */
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const {
      title, 
      content
    } = this.state
  
    return (
    <form>
      <input 
        type="text"
        name="title"
        value={title}
        onChange={this.onChange}
        placeholder="Enter a title."
        onSubmit={() => this.props.submitExampleTitle(`${this.props.algorithm}`, this.props.value)}>
      </input>
    </form>
    );
  }
}

//need to set up POST request here

export default CreateExampleTitle;