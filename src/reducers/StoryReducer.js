export default function storyReducer(state = { status: "loading", stories:[], story: undefined, contents: [] }, action) {
  switch(action.type) {
    case 'FETCH_STORIES':
      return { stories: action.stories }
    case 'LOADING_STORY':
      return { ...state, status: action.status }
    case 'FETCH_STORY':
      return { story: action.story, status: action.status }
    case 'FETCH_FAIL':
      return { status: action.status}
    case 'ADD_STORY':
      return { stories: state.stories.concat(action.title) }
    case 'ADD_CONTENT':
      return { ...state, contents: state.contents.concat(action.content) };
    case 'FETCH_CONTENTS':
      return { ...state, contents: action.contents }
    default: 
      return state;
  }
}