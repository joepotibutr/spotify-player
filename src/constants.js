const home = require('./images/home.svg')
const search = require('./images/search.svg')
const library = require('./images/library.svg')

export const viewType = {
    ALBUMS: 'Albums',
    SONGS: 'Songs',
    RECENTLY_PLAYED: 'Recently Played',
    SEARCH: 'Search',
    PLAYLISTS: 'Playlists',
    ARTISTS: 'Artists',
    LIKED_SONGS: 'Liked Songs',
    USER_LIBRARY: 'User Library',
    HOME: 'Home'
}

export const libraryView = {
    PLAYLISTS: 'Playlists',
    PODCASTS: 'Podcasts',

    ARTISTS: 'Artists',
    ALBUMS: 'Albums',

}


export const Navigation = {
    library: {
        title: 'User Library',
        icon: library
    },
    home: {
        title: 'Home',
        icon: home
    },
    search:  {
        title: 'Search',
        icon: search
    }
}