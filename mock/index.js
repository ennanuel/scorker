const count = document.getElementById('count')

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

let interval;

let fetchReq = () => {
    clearInterval(interval)
    count.innerText = 'fetching...'
  
    fetch("http://localhost:4000/match?action=saveMatches", requestOptions)
    .then(response => response.text())
    .then(result => {
        if(result == "nothing left to do, THANK GOD!") {
            count.innerText = 'Done!'
        } else {
            count.innerText = 'match(es) updated'
            interval = setInterval( fetchReq, 60000 )
        }
    })
    .catch(error => {
        count.innerText = JSON.stringify(error)
        console.log('error', error)
    });
}

interval = setInterval(fetchReq, 60000)