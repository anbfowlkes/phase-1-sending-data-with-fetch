let submitData = (name, email) => {
    let dataObj = {
        name: name,
        email: email
    }

    let configurationObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(dataObj)
        }
    

    return fetch('http://localhost:3000/users', configurationObj)
    .then((res) => {
        return res.json()
    })
    .then((obj) => {
        console.log(obj)
        let id = obj.id
        console.log(id)
        let h3 = document.createElement('h3')
        h3.innerText = id
        idDiv = document.getElementById('ids')
        idDiv.append(h3)
    })
    .catch((error) => {
        let h3 = document.createElement('h3')
        h3.innerText = error.message
        errDiv = document.getElementById('errs')
        errDiv.append(h3)
    })
}


