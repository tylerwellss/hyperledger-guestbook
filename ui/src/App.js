import React, { Component } from 'react';
import UserInput from './components/UserInput/UserInput';
import GuestbookEntries from './components/GuestbookEntries/GuestbookEntries';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
        <UserInput />
        <GuestbookEntries />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
