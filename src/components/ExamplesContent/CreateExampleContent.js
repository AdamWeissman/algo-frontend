import React from 'react'

class CreateExampleContent extends React.Component {

  state = { 
    content: ''
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onCreateContent(this.props.algorithm, this.props.example,this.state.content)
  }

  render () {
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
            onChange={(e) => this.setState({ title: e.target.value})}
          />
          </div>
        </form>
      </div>
    )
  }
}

export default CreateExampleContent