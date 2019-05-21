import React, { Component } from 'react';
import QuestContainer from '../QuestContainer/QuestContainer';

export class Main extends Component {
  render() {
    return (
      <main className="Main">
        <h1 className="page-title">My Quests</h1>
        <QuestContainer />
      </main>
    )
  }
}

export default Main
