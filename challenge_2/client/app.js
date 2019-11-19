document.getElementById('my-table').onsubmit = function(event) {
  event.preventDefault()
  let input = document.getElementById('textarea').value;
  console.log('posted from app')
  fetch('http://localhost:3000/data', {
    method: 'POST',
    body: JSON.stringify({key: input}),
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then( (response) => { 
    console.log(response.body)
 })
}
