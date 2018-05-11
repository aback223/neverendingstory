export default function storyReducer(state = { content: [] }, action) {
  switch(action.type) {
    case 'ADD_CONTENT':
      return state.content.concat(action.content)
    default: 
      return state;
  }
}