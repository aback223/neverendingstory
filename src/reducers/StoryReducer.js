export default function storyReducer(state = { stories:[], contents: [] }, action) {
  switch(action.type) {
    case 'FETCH_STORIES':
      return { stories: action.stories }
    case 'ADD_CONTENT':
      return { contents: state.contents.concat(action.content) };
    case 'FETCH_CONTENTS':
      return {...state, contents: action.contents}
    default: 
      return state;
  }
}