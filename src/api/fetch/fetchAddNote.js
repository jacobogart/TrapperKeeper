import { host } from '../utilities';

export const fetchAddNote = (tasks) => {
  const url = `${host}/notes`;
  const body = { id: new Date(), tasks }
  const init = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }
  return fetch(url, init)
    .then(response => {
      if (!response.ok) {
        throw Error('Failed to add note')
      } else {
        return response.json();
      }
    })
}