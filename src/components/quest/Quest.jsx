import React, { Component } from 'react';
import { mockNote } from '../../api/utilities';
export class Quest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCompleted: false
    };
  }

  toggleShowCompleted = () => {
    this.setState({ showCompleted: !this.state.showCompleted });
  }
  

  render() {
    const { title, tasks } = mockNote;
    const uncompletedTasks  = tasks.filter(task => !task.isCompleted);
    const uncompletedTaskItems = uncompletedTasks.map(task =>
      <li key={task.id}>{task.message}</li>);
    const completedTasks = tasks.filter(task => task.isCompleted);
    const completedTaskItems = completedTasks.map(task => (
        <li key={task.id}>{task.message}</li>
      ));

    
    return (
      <article>
        <h2>{title}</h2>
        <ul>{uncompletedTaskItems}</ul>
        <p onClick={this.toggleShowCompleted}>
          Show {completedTasks.length} completed challenges
        </p>
        <ul>{this.state.showCompleted && completedTaskItems}</ul>
      </article>
    );
  }
}

export default Quest
