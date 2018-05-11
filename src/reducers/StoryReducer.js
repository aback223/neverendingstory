export default function storyReducer(state={content:[]}, action) {
  switch(action.type) {
    case "ADD_CONTENT":
      return { content: [...state.content, action.content]}
    default: 
      return state
  }
}