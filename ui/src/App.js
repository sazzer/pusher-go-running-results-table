import React, { Component } from 'react';
import ConnectedResultsTable from './ConnectedResultsTable';
import NewResultsForm from './NewResultsForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ConnectedResultsTable />
        <NewResultsForm />
      </div>
    );
  }
}

export default App;
