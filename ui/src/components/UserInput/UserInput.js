import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import uuid from 'uuid';
import Snackbar from 'material-ui/Snackbar';

class UserInput extends React.Component {
    constructor(props){
     super(props);
     this.state = {
       inputMessage: '',
       inputName: '',
       input: {},
       open: false
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
      this.setState({open: true})
      event.preventDefault();
      this.state.input = {
        '$class': "org.guestbook.Entry",
        'message': this.state.inputMessage,
        'name': this.state.inputName,
        'date': new Date(),
        'entryId': uuid()
      }
      return fetch('http://localhost:3000/api/Entry', {
        method: "POST",
        body: JSON.stringify(this.state.input),
        headers: {'content-type': 'application/json'}
      }).then(function(){
        window.location.reload();
      })
    }
    render() {
        return (
        <div style={{'textAlign': 'center'}}>
            <p>Input your name and a message and stay on our blockchain forever!
            <span style={{'fontSize':'.63em'}}> (or until our server stops since we're the only peer)</span></p>
            <form>
              <TextField
              required
              hintText="Enter your name"
              value={this.state.inputName}
              onChange={this.handleNameChange} 
              maxLength='20'>
              </TextField>
              <br />
              <TextField
              required
              hintText="Enter your message"
              value={this.state.inputMessage}
              onChange={this.handleMessageChange} 
              maxLength="200"
              multiLine={true}
              >
              </TextField>
              <br />
              <RaisedButton onClick={this.handleSubmit} disabled={!this.state.inputName || !this.state.inputMessage}>Submit</RaisedButton>
              <Snackbar
              open={this.state.open}
              message="👌 Adding entry. Page will refresh in a few seconds 👌"
              autoHideDuration={5000}
              />
            </form>
        </div> 
        );
    }
}

export default UserInput;