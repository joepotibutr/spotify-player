import axios from 'axios'


export default {
    albums : async accessToken => { 
            const { data } = await axios.get('https://api.spotify.com/v1/me/albums',{
                headers : { 'Authorization': 'Bearer '+ accessToken }
            })
            return data.items
    },
    artists : async (accessToken,artistIds) => {
            const { data } = await axios.get(`https://api.spotify.com/v1/artists?ids=${artistIds}`,{ 
                headers : {'Authorization': 'Bearer '+ accessToken }
            })
            return data
    },
    songs : {
        fetchSongs : async accessToken => { 
            const { data } = await axios.get('https://api.spotify.com/v1/me/tracks?limit=50',{ 
                headers : { 'Authorization': 'Bearer ' + accessToken }
            })
            return data.items
        },
        searchSongs : async (accessToken,searchTerm) => {
            const { data } = await axios.get(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track`,{
                headers : { 'Authorization': 'Bearer ' + accessToken }
            })
            return data.items
        },
        fetchRecentlySongs : async accessToken => {
            const { data } = await axios.get('https://api.spotify.com/v1/me/player/recently-played',{
                headers : { 'Authorization': 'Bearer ' + accessToken }
            })
            return data.items
        }
    },
    browse : {
        fetchCategories : async accessToken => {
            const { data } = await axios.get('https://api.spotify.com/v1/browse/categories',{
                headers : { 'Authorization': 'Bearer ' + accessToken }
            })
            return data.categories
        },
        fetchNewReleases : async accessToken => {
            const { data } = await axios.get('https://api.spotify.com/v1/browse/new-releases',{
                headers : { 'Authorization': 'Bearer ' + accessToken }
            })
            return data.albums
        },
        fetchFeatured : async accessToken => {
            const { data } = await axios.get('https://api.spotify.com/v1/browse/featured-playlists',{
                headers : { 'Authorization': 'Bearer ' + accessToken }
            })
            return data.playlists
        }
    }
}