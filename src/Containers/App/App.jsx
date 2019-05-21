import React, { Component } from 'react';
import { Header } from '../../Components/Header/Header';
import Main from '../../Components/Main/Main';

export class App extends Component {
	render() {
		return (
      <div className="App">
        <div className="background">
          <Header/>
          <Main />
        </div>
			</div>
		);
	}
}

export default App;
