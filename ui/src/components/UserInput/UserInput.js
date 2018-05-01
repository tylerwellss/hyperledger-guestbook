import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const UserInput = () => (
  <div style={{'text-align': 'center'}}>
    <p>Input your name and a message and stay on our blockchain forever!</p>
    <p>(or until our server dies since we have no peers)</p>
    <TextField
      hintText="Enter your name">
    </TextField>
    <br />
    <TextField
      hintText="Enter your message"
      hintStyle={{'text-align':'center'}}
    >
    </TextField>
    <br />
    <RaisedButton label="Submit" />
  </div>
);

export default UserInput;