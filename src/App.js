import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    customers: []
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/customers")
      .then(response => response.json())
      .then(parsed => this.setState({ customers: parsed }))
  }


  render() {

    return (

      <div className="App">
        <header className="App-header">Bangazon API</header>
        <h1>Customer List</h1>
        {this.state.customers.map((customer, i) =>
          <p key={i}>{customer.firstName} {customer.lastName}</p>

        )}

      </div>
    );
  }
}

export default App;
