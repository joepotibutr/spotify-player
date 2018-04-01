import axios from 'axios'

const createAxiosInstance = accessToken => {
    axios.create({
        baseURL : 'https://api.spotify.com/v1/me',
            headers : {
                'Authorization': 'Bearer ' + accessToken
            }
    })
}


export default {
    albums : accessToken => 
    axios.get('https://api.spotify.com/v1/me/albums',{ headers : {
        'Authorization': 'Bearer '+accessToken
    }})
    .then(res => res.json()).then(res => res.items)
}