export function addContent(content) {
  return (dispatch)  => {
    return fetch('http://localhost:3000/story_contents', {
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