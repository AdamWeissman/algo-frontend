import React from 'react'

class CreateExampleContent extends React.Component {

  state = {
    content: ''
  }


  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onCreateContent(this.props.algorithm, this.props.example, this.state.content)
    this.props.createExampleSetter("-O-")
    
  }

  render () {
    if (this.props.cSwitch === "-O-") {
      return (
        <div className="circular ui inverted yellow segment">
          -O-
          {/* {document.querySelector("#theRefreshButton").addEventListener('onClick', this.setState({content: ''}))} */}
        </div>
        )
    } else if (this.props.cSwitch === "X") { 
    return(
      <div>
        <form
          onSubmit={this.onFormSubmit} 
          className="ui form"
          >
          <div className="field">
          <input 
            type="text"
            value={this.props.tempContent}
            placeholder="enter content"
            //onChange={(e) => this.props.setState({ content: e.target.value})}
            onChange={(e) => this.setState({ content: e.target.value})}
          />
          </div>
        </form>
      </div>
    );
    } else {
        return (
          <div className="circular ui inverted yellow segment">
            O O
          </div>
          );
      }
    }
  }



export default CreateExampleContent;