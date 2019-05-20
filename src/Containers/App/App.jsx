import React, { Component } from "react";
import { Header } from '../../components/header/Header';
import Main from '../../components/main/Main';

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
