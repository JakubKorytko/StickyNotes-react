import React, { Component } from 'react';
import '../css/App.css';
import Note from './Note';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfComp: 1
    }
  }

  add = () => {
      this.setState({numOfComp: this.state.numOfComp+1})
  }

  render() {
    console.log(this.state.numOfComp)
    var notes = []
    for (let i=0; i<this.state.numOfComp; i++) {
      notes.push(<Note key={i} />)
    }
    return (
      <div className="App">
        <button className="add" onClick={this.add}>+</button>
        {notes}
      </div>
    );
  }
}

export default App;
