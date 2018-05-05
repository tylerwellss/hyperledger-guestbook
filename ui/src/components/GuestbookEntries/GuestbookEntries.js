import React from 'react';
import {Card} from 'material-ui/Card';

class GuestbookEntries extends React.Component {
  constructor() {
    super();
    this.state = {
      guestbookEntries: [{
        name: null,
        message: null
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
        <h2 style={{'textAlign':'center'}}>Entries</h2>
        <div style={{'display':'grid', 'gridTemplateColumns': '33% 33% 33%'}}>
        {
          this.state.guestbookEntries.map((entry) => (
            <Card key={entry.message} style={{'borderRadius':'5px','padding':'2px 2px 2px 10px','margin':'5px 5px 0 5px'}}>
              <p style={{'overflowWrap':'break-word'}}>{entry.message}</p>
              <p style={{'overflowWrap':'break-word'}}>- {entry.name}</p>
              <span style={{'fontSize':'.5em', 'color':'gray'}}>Posted: {new Date(entry.date).toLocaleString()}</span>
            </Card>
          ))
        }
      </div>
      </div>
    );
  } 
}

export default GuestbookEntries;