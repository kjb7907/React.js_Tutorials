import React, { Component } from 'react';
import ListCRUD from './components/ListCRUD'



class App extends Component {
    render() {
    return (
      <div className="App" style={{textAlign: 'center'}}>
        <ListCRUD/>
      </div>
    );
  }
}


export default App;
