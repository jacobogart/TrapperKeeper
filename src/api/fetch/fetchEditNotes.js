import { host } from '../utilities';

export const fetchEditNote = (note) => {
  const url = `${host}/notes/${note.id}`;
  const init = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note)
  }
  return fetch(url, init)
    .then(response => {
      if (!response.ok) {
        throw Error('Failed to edit note')
      } else {
        return response.json();
      }
    })
}