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
    grid-template-areas: "playlist tracks";
    max-width: 1955px;

    @media only screen and (max-width: 1240px) {
        grid-template-columns: 1fr;
        grid-template-rows: 200px 1fr;
        grid-template-areas:    "playlist"
                                "tracks";

        .grid-area-playlist {
            position:inherit !important;
            display:flex;

            .playlist-body {
                text-align:left !important;

                .playlist-actions {
                    flex-direction:column-reverse !important;
                }
            }
        }

        .cover-image-wrapper {
            width:157px !important;
            height:157px !important;

            .playlist-cover-image {
                width:auto;
                height:auto;
            }
        }

       
    }

    .cover-image-wrapper {
        width: 100%;
        height: 100%;

        .playlist-cover-image {
            width: 100%;
            height: 100%;
            background-size: contain;
            background-position: 50%;
            background-color: #000;
            background-repeat: no-repeat;
        }
    }

    

    .grid-area-playlist {
        grid-area: playlist;
        padding-bottom: 20px;
        border-bottom: 1px solid hsla(0,0%,100%,.1);
        position:sticky;


        .current-playlist {
            margin: 0 auto 1.5em;
            text-align: center;
            max-width: 400px;
            display:flex;
            flex-direction:column;

            .playlist-cover-art {
                width: auto;
                min-height: auto;
                box-shadow: 0 0 10px rgba(0,0,0,.3);
        }

        .playlist-body {
            text-align:center;
            margin-left:40px;

            .playlist-actions {
                display: flex;
                align-items: center;
                flex-direction:column;

                .button-wrapper {
                    .play-button > button {
                        transition: all 33ms;
                        background: #1db954;
                        border: 0;
                        font-size: 12px;
                        line-height: 18px;
                        font-weight: 700;
                        letter-spacing: 1.76px;
                        text-transform: uppercase;
                        border-radius: 500px;
                        color: white;
                        padding: 8px 34px;
                        cursor: pointer;
                        text-align: center;
                    }
                }
            }

            .playlist-entity {
                .playlist-title {
                    font-size: 18px;
                    line-height: 36px;
                    letter-spacing: -.005em;
                    font-weight: 700;
                    text-transform: none;
                    color:white;
                    h2 {
                        margin:0;
                        padding:0;
                    }
                }

                .playlist-owner {
                    cursor:pointer;
                    color:rgba(255,255,255,.5);
                    &:hover {
                        text-decoration: underline;
                        color:rgba(255,255,255,.8);
                    }
                }
            }

            


            .total-songs {
                font-size: 11px;
                font-weight: bold;
                letter-spacing: 1.5px;
            }
        }
        }

        
    }

    .grid-area-tracks {
        grid-area: tracks; 
        overflow: hidden;
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
