export default function storyReducer(state = { stories:[], story: {}, contents: [] }, action) {
  switch(action.type) {
    case 'FETCH_STORIES':
      return { stories: action.stories }
    case 'FETCH_STORY':
      return {...state, story: action.story }
    case 'ADD_CONTENT':
      return { contents: state.contents.concat(action.content) };
    case 'FETCH_CONTENTS':
      return {...state, contents: action.contents}
    default: 
      return state;
  }
}