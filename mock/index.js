const count = document.getElementById('count')

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

setInterval(() => {
    count.innerText = 'fetching...'
  
    fetch("http://localhost:4000/match?action=saveMatches", requestOptions)
    .then(response => response.text())
    .then(result => {
        const data = JSON.parse(result)
        count.innerText = data.result
    })
    .catch(error => {
        count.innerText = JSON.stringify(error)
        console.log('error', error)
    });
}, 60000)