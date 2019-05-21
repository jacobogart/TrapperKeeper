import React, { Component } from 'react';
import QuestContainer from '../QuestContainer/QuestContainer';

export class Main extends Component {
  render() {
    return (
      <main className="Main">
        <div className="main-header">
          <h1 className="page-title">My Quests</h1>
          <div className="controls">
            <div className="search-bar">
              <input className="search-input" placeholder="Search your quests..."/>
              <i className="fas fa-search" />
            </div>
            <select className="quest-filter"></select>
          </div>
        </div>
        <QuestContainer />
        <button className="add-quest-btn" type="button"><i className="fas fa-plus"></i></button>
      </main>
    )
  }
}

export default Main
