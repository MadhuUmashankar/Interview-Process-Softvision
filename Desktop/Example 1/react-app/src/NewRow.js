import React from 'react';

class NewRow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: ''
    }
  }

  handleInputChange(event) {
    this.setState({
      value: event.target.value
    })
  }
    render () {
      return (
        <div className="form-inline">
          <input type="text" onChange={(event)=>{this.handleInputChange(event)}} value={this.state.value} autofocus/>
        </div>

      )
    }
}


export default NewRow;
