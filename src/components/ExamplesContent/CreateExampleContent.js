import React from 'react'

class CreateExampleContent extends React.Component {

  //need to make the state here controlled by the parent

  // state = { 
  //   content: ''
  // };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onCreateContent(this.props.algorithm, this.props.example, this.state.content)
    
    //this.setState({content: "-O-"})
    this.props.createExampleSetter("-O-")
    
  }

  resetState = (event) => {
    //this.setState({content: ""})
    this.props.createExampleSetter('')
  }

  render () {
    if (this.props.content === undefined) {
      return (
        <div className="circular ui inverted yellow segment">
          ORIGINAL
        </div>
        )
    }
    else if (this.props.content === "-O-") {
      return (
        <div className="circular ui inverted yellow segment">
          -O-
          {/* {document.querySelector("#theRefreshButton").addEventListener('onClick', this.setState({content: ''}))} */}
        </div>
        )
    } else if (this.props.content === 'X') { 
    return(
      <div>
        <form
          onSubmit={this.onFormSubmit} 
          className="ui form"
          >
          <div className="field">
          <input 
            type="text"
            value={this.props.content}
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