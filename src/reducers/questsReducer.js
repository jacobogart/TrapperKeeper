export const questsReducer = (state = [], action) => {
  switch (action.type) {
    case 'STORE_QUESTS':
      return action.payload.quests
    case 'ADD_QUEST':
      const quests = state.push(action.payload.quest)
      return quests;
    default:
      return state;
  }
};
