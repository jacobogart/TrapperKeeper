import React, { Component } from 'react';
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
    const { title, tasks } = this.props.data;
    const completedTaskItems = [];
    const uncompletedTaskItems = [];

    tasks.forEach(task => {
      const taskItem = <li key={task.id}>{task.message}</li>;
      task.isCompleted
        ? completedTaskItems.push(taskItem)
        : uncompletedTaskItems.push(taskItem);
    });
    
    return (
      <article>
        <h2>{title}</h2>
        <ul>{uncompletedTaskItems}</ul>
        <p onClick={this.toggleShowCompleted}>
          Show {completedTaskItems.length} completed challenges
        </p>
        <ul>{this.state.showCompleted && completedTaskItems}</ul>
      </article>
    );
  }
}

export default Quest
