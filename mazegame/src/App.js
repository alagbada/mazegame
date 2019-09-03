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
    let numberOfRow = prompt("please enter the number of rows: ");
    let numberOfColumn = prompt("please enter the number of columns: ");

    if (numberOfRow == null || numberOfColumn == null) {
      alert('you entered a wrong value!');
      window.location.reload();
    }
    if (numberOfRow.length === 0 || numberOfColumn.length === 0) {
      alert('you entered a wrong value!');
      window.location.reload();
    }
    if (isNaN(numberOfRow) || isNaN(numberOfColumn)) {
      alert('you entered a wrong value!');
      window.location.reload();
    }

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
