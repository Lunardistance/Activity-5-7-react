import React, { Component } from 'react';
import './App.css';



const GenerateName = name => "Gabriel";

class App extends Component {
  constructor(props) {
    super(props);

    this.message = "This is such a great message";

  }

  render() {
    return (
      <div className="App">
       <div className="name"><b>Name:</b> {GenerateName()}</div>
       <div className="message"><b>Message:</b> {this.message}</div>
      </div>
    );
  }
}

export default App;
