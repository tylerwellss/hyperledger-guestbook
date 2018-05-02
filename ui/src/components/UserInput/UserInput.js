import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class UserInput extends React.Component {
    constructor(props){
     super(props);
     this.state = {
       inputMessage: '',
       inputName: ''
     }
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleNameChange = this.handleNameChange.bind(this);
     this.handleMessageChange = this.handleMessageChange.bind(this);
    }
    handleMessageChange(event) {
      this.setState({inputMessage: event.target.value});
    }
    handleNameChange(event) {
      this.setState({inputName: event.target.value});
    }
    handleSubmit(event) {
      event.preventDefault();
    }
    render() {
        return (
        <div style={{'textAlign': 'center'}}>
            <p>Input your name and a message and stay on our blockchain forever!
            <span style={{'fontSize':'.63em'}}> (or until our server dies since we have no peers)</span></p>
            <form>
              <TextField
              hintText="Enter your name"
              value={this.state.inputName}
              onChange={this.handleNameChange} 
              maxLength='20'>
              </TextField>
              <br />
              <TextField
              hintText="Enter your message"
              value={this.state.inputMessage}
              onChange={this.handleMessageChange} 
              maxLength="200"
              >
              </TextField>
              <br />
              <RaisedButton label="Submit" onClick={this.handleSubmit}/>
            </form>
        </div> 
        );
    }
}

export default UserInput;