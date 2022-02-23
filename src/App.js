import './App.css';
import React, {Component} from "react";
import {CardList} from "./components/card-list/card-list"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters:[],
      searchField: ""
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(r => r.json()).then(users => this.setState({monsters: users}))
  }

  render() {
    return (
        <div className="App">
          <CardList monsters={this.state.monsters}/>
        </div>
    );
  }
}

export default App;
