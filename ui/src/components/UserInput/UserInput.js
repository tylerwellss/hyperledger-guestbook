import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class UserInput extends Component {
    render() {
        return (
        <div style={{'textAlign': 'center'}}>
            <p>Input your name and a message and stay on our blockchain forever!
            <span style={{'fontSize':'.63em'}}> (or until our server dies since we have no peers)</span></p>
            <TextField
            hintText="Enter your name">
            </TextField>
            <br />
            <TextField
            hintText="Enter your message"
            hintStyle={{'textAlign':'center'}}
            >
            </TextField>
            <br />
            <RaisedButton label="Submit" />
        </div> 
        );
    }
}

export default UserInput;