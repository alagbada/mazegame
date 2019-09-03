import React, { Component } from 'react'
import Container from './Components/Container';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      row: 0,
      column: 0
    }
  }

  componentWillMount() {
    const numberOfRow = prompt("please enter the number of rows: ");
    const numberOfColumn = prompt("please enter the number of columns: ");

    this.setState({row: parseInt(numberOfRow), column: parseInt(numberOfColumn)});

  }

  render() {
    const {row, column} = this.state;

    return (
      <div>
        <Container row={row} column={column} />   
      </div>
    )
  }
}



export default App;
