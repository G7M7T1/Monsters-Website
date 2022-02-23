import './App.scss';
import React, {Component} from "react";
import {CardList} from "./components/card-list/card-list"
import {SearchBar} from "./components/search/search";

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

    handleChange = (e) => {
        this.setState({searchField: e.target.value})
  }


  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(
        monster => monster.name.toLowerCase().includes(searchField.toLowerCase()
        ))
    return (
        <div className="App">
            <h1>Monsters</h1>
            <SearchBar
                handleChange={this.handleChange}
                placeholder="Search The Monster Name"
            />
          <CardList monsters={filteredMonsters}/>
        </div>
    );
  }
}

export default App;
