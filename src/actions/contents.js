export function addContent(storyId, content) {
  return (dispatch)  => {
    return fetch(`http://localhost:3000/story/${storyId}/content`, {
      method: 'POST', 
      headers: {
        Accept: 'application/json', 
        'Content-Type': 'application/json', 
      }, 
      body: JSON.stringify(content)
    })
    .then(response => response.json())
    .then(content => dispatch({ type: 'ADD_CONTENT', content: content }));
  };
}

export function fetchContents(storyId) {
  return (dispatch) => {
    return fetch(`http://localhost:3000/story/${storyId}/content`)
    .then(response => response.json())
    .then(responseJSON => dispatch({ type: 'FETCH_CONTENTS', contents: responseJSON }))
  }
}