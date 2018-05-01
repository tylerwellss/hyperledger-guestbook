import React from 'react';
import {Card} from 'material-ui/Card';

class GuestbookEntries extends React.Component {
  constructor() {
    super();
    this.state = {
      guestbookEntries: [{
        name: '',
        message: ''
      }]
    }
  };
  componentDidMount() {
    fetch('http://localhost:3000/api/Entry')
      .then(response => {
        return response.json()
      }).then(response => {
        response.sort(function(a,b){
          return new Date(b.date) - new Date(a.date);
        });
        this.setState({guestbookEntries: response})
      })
  }
  render () {
    return (
      <div>
        <h2>Entries</h2>
        {
          this.state.guestbookEntries.map((entry) => (
            <Card key={entry.message} style={{'padding':'2px 0 2px 10px','margin':'5px 5px 0 5px'}}>
              <p>{entry.message}</p>
              <p>- {entry.name}
              <br/><br/>
              <span style={{'fontSize':'.5em', 'color':'gray'}}>Posted: {new Date(entry.date).toLocaleString()}</span>
              </p>
            </Card>
          ))
        }
      </div>
    );
  } 
}

export default GuestbookEntries;