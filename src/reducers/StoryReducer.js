export default function storyReducer(state = { contents: [] }, action) {
  switch(action.type) {
    case 'ADD_CONTENT':
      return { contents: state.contents.concat(action.content) };
    case 'FETCH_CONTENTS':
      return {...state, contents: action.contents}
    default: 
      return state;
  }
}