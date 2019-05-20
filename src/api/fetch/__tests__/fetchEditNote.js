import { host, mockNote } from '../../utilities';
import { fetchEditNote } from '../fetchEditNote'

describe('fetchEditNote', () => {
  window.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockNote)
    })
  });

  it('should call fetch with the correct params', () => {
    const url = `${host}/notes/${mockNote.id}`;
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(mockNote)
    }

    fetchEditNote(mockNote);
    expect(fetch).toHaveBeenCalledWith(url, options);
  });
});

