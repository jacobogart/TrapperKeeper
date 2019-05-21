import React, { Component } from 'react';
import { mockNote } from '../../api/utilities';
import Quest from '../Quest/Quest';

const mockQuestList = [ mockNote, mockNote, mockNote ];

export class QuestContainer extends Component {
	render() {
		const questCards = mockQuestList.map(note => <Quest data={note} key={note.id} />);
		return <section className="QuestContainer">{questCards}</section>;
	}
}

export default QuestContainer;
