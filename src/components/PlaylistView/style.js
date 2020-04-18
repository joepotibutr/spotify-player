import styled from 'styled-components'

export const Outer = styled.div`
    display:flex;
    overflow: hidden;
    text-overflow: ellipsis;
    

    
    &:hover {
        text-decoration:underline;
        color:white;
        cursor:pointer;
    }
    color:gray;
    font-weight:bold;
    transition:.2s;
        
`

export const LinkedText = styled.div`

white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 16px;
    letter-spacing: 0.015em;
    text-align: left;
    span {
        font-size: 12px;
    }


`

export const PlaylistTrack = styled.li`
    overflow:hidden;
    height: 4.56em;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition:.1s;
    cursor:default;

    .track-item-play {
        width:40px;
    }

    .track-item-options {
        width:10%;
        cursor:pointer;
    }

    .track-item-duration {
        font-size:12px;
        font-family: "Varela Round", sans-serif;
        width:7%;
    }

    .musical-icon {
        min-width:15px;
        min-height:15px;
        filter:invert(0.5);
    }
    .play-icon {
        display:none;
        min-width:15px;
        min-height:15px;
    }

    &:hover {
        background-color: hsla(0,0%,100%,.1);
        .musical-icon {
            display:none;
        }
        .play-icon {
            display:block;
        }
    }

`

export const DotIcon = styled.span`
    background: gray;
    height: 4px;
    width: 4px;
    border-radius: 50%;

`

export const IconWrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;



`

export const TrackDetailText = styled.span`
    color:white;

`


export const PlaylistViewLayout = styled.div`
    height: 900px;
    padding-top:60px;
    display:grid;
    grid-template-columns: 30% 70%;
    grid-template-areas: "left right";

    .grid-area-left {
        grid-area: left;
        position:fixed;
        max-width: 20%;


        .playlist-cover-art {
            width: auto;
            min-height: auto;
            box-shadow: 0 0 10px rgba(0,0,0,.3);
        }

        .playlist-detail {
            text-align:center;
        }

        .playlist-title {
            color:white;
        }

        .playlist-owner {
            cursor:pointer;
            color:rgba(255,255,255,.5);
            &:hover {
                text-decoration: underline;
                color:rgba(255,255,255,.8);
            }
        }


        .total-songs {
            font-size: 11px;
            font-weight: bold;
            letter-spacing: 1.5px;
        }

        .playlist-owner,.playlist-title,.total-songs {
            display:flex;
            justify-content:center;
        }
    }
`

export const LikedSongsCoverArt = styled.div`
    background:green;
    display:flex;
    justify-content:center;
    align-items:center;
    &:after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }
`
