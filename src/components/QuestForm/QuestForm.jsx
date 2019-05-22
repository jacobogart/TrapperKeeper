import React, { Component } from 'react';
import { connect } from 'react-redux';

//will build body out into multiple challenge entries

class QuestForm extends Component {
  state = {
    title: '',
    challenges: ''
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    fetch('http://localhost:3000/api/quests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(response => response.json())
      .then(quest => this.props.addQuest(quest))
  }

  render() {
    return (
      <div className="QuestForm">
        <h2 className="form-title">Add a new quest</h2>
        <form className="new-quest-form">
          <label htmlFor="new-quest-title">Title:</label>
          <input className="new-quest-input" id="new-quest-title" name="title" onChange={this.handleChange}/>
          <label htmlFor="new-quest-challenges">Challenges:</label>
          <input className="new-quest-input" id="new-quest-challenges" name="challenges" onChange={this.handleChange} />
          <button className="add-quest-btn" type="button" onClick={this.handleSubmit}>Save</button>
        </form>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  addQuest: quest => dispatch(addQuest(quest))
})

export default connect(null, mapDispatchToProps)(QuestForm);