import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.components';
import { SearchBox } from './components/search-box/search-box.component';


class App extends Component {
  constructor()
  {
    super();

      this.state = {
        clients:  [],
        searchField: ''
      }
      
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({clients: users}))
  }

 handleChange = e => this.setState({ searchField: e.target.value})

  render()
  {
    const {clients, searchField} = this.state;
    const filteredClient =  clients.filter(client => 
      client.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <h1>Naughty Clients Card</h1>
        <SearchBox placeholder="Search card by name..." 
        handleChange={this.handleChange} />
        
        <CardList  clients={filteredClient} />
      </div>
    );
  }
}
export default App;
