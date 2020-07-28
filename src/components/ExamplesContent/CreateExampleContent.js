import React from 'react'

class CreateExampleContent extends React.Component {

  state = { 
    content: ''
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onCreateContent(this.props.algorithm, this.props.example, this.state.content)
    this.setState({content: "-O-"})
  }

  resetState = (event) => {
    this.setState({content: ""})
  }

  render () {
    if (this.state.content === "-O-") {
      return (
        <div className="circular ui inverted blue segment">
        </div>
        )
    } else { 
    return(
      <div>
        <form
          onSubmit={this.onFormSubmit} 
          className="ui form"
          >
          <div className="field">
          <input 
            type="text"
            value={this.state.content}
            placeholder="enter your content here"
            onChange={(e) => this.setState({ content: e.target.value})}
          />
          </div>
        </form>
      </div>
    );
    }
  }

}

export default CreateExampleContent;