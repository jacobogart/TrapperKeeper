import React, { Component } from "react";
import { Header } from '../../Components/header/Header';
import Main from "../../Components/main/Main";

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
