export default function storyReducer(state = { stories:[], story: undefined, contents: [] }, action) {
  switch(action.type) {
    case 'FETCH_STORIES':
      return { stories: action.stories }
    case 'FETCH_STORY':
      return { story: action.story}
    case 'ADD_STORY':
      return {stories: state.stories.concat(action.title)}
    case 'ADD_CONTENT':
      return { contents: state.contents.concat(action.content) };
    case 'FETCH_CONTENTS':
      return {...state, contents: action.contents}
    default: 
      return state;
  }
}