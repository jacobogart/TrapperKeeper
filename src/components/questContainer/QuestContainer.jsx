import React, { Component } from 'react';
import { mockNote } from '../../api/utilities';
import Quest from '../quest/Quest';

const mockQuestList = [mockNote, mockNote, mockNote];

export class QuestContainer extends Component {
  render() {
    const questCards =  mockQuestList.map(note => 
      <Quest data={note} key={note.id}/>)
    return (
      <section>
        {questCards}
      </section>
    )
  }
}

export default QuestContainer
