import axios from 'axios'


export default {
    albums : async accessToken => { 
            const { data } = await axios.get('https://api.spotify.com/v1/me/albums',{ headers : {
            'Authorization': 'Bearer '+ accessToken
        }})
            return data.items
    },
    artists : async (accessToken,artistIds) => {
            const { data } = await axios.get(`https://api.spotify.com/v1/artists?ids=${artistIds}`,{ headers : {
                'Authorization': 'Bearer '+ accessToken
            }})
            return data
    },
    songs : {
            fetchSongs : async accessToken => {
                const { data } = await axios.get('https://api.spotify.com/v1/me/tracks?limit=50',{ 
                    headers : {
                        'Authorization': 'Bearer ' + accessToken
                    }})
                    return data.items
        },
            searchSongs : async (accessToken,searchTerm) => {
                const { data } = await axios.get(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track`,{
                    headers : {
                        'Authorization': 'Bearer ' + accessToken
                    }})
                    return data.items
            }
    }
}