export function addStory(title) {
  return (dispatch) => {
    return fetch('http://localhost:3000/story', {
      method: 'POST', 
      headers: {
        Accept: 'application/json', 
        'Content-Type': 'application/json', 
      }, 
      body: JSON.stringify(title)
    })
    .then(response => response.json())
    .then(title => dispatch({ type: 'ADD_STORY', title: title }));
  }
}

export function fetchStories() {
  return (dispatch) => {
    return fetch('http://localhost:3000/story')
    .then(response => response.json())
    .then(responseJSON => dispatch({ type: 'FETCH_STORIES', stories: responseJSON }))
  }
}