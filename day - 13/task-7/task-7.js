// importing "axios" module
const axios = require('axios')

// making a network request using using "axios" module
const username = "anirudha-8";
axios.get('https://api.github.com/users/' + username)
    .then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error.message);
    });