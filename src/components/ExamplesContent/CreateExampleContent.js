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
    this.props.CreateExampleSetter("-O-")
    
  }

  resetState = (event) => {
    //this.setState({content: ""})
    this.props.CreateExampleSetter('')
  }

  render () {
    if (this.props.content === "") {
      return (
        <div className="circular ui inverted yellow segment">
          original state
        </div>
        )
    }
    else if (this.props.content === "-O-") {
      return (
        <div className="circular ui inverted yellow segment">
          the -0- state
          {/* {document.querySelector("#theRefreshButton").addEventListener('onClick', this.setState({content: ''}))} */}
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