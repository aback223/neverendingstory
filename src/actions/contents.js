export function addContent(content) {
  return (dispatch)  => {
    return fetch('https://nes-api.herokuapp.com/story_contents', {
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

export function fetchContents() {
  return (dispatch) => {
    return fetch('https://nes-api.herokuapp.com/story_contents')
    .then(response => response.json())
    .then(responseJSON => dispatch({ type: 'FETCH_CONTENTS', contents: responseJSON }))
  }
}