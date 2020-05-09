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
        width:7%;
        font-weight:bold;
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
    overflow:auto;
    max-height: 900px;
    display:grid;
    grid-template-columns: 25% 75%;
    grid-template-areas: "playlist tracks";
    max-width: 1955px;
    padding: 0 32px;
    margin-top: 80px;
    font-family:sans-serif;
    
    .playlist-actions {
                    display: flex;
                    align-items: center;
                    flex-direction:column;
                    order:1;
                    margin: auto 0 0 0;

                    .button-wrapper {
                        display: flex;
                        width: 100%;
                        flex-direction:column;
                        
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

                            &:hover {
                                filter:brightness(1.05);
                                transform:scale(1.05);
                            }
                        }
                    }
                }

    @media only screen and (max-width: 1240px) {
        max-height: 4200px;
        grid-template-columns: 1fr;
        grid-template-rows: 260px 1fr;
        grid-template-areas:    "playlist"
                                "tracks";

        .grid-area-tracks {
            margin-left:0 !important;
            margin-top:20px;
        }

        .cover-image-wrapper {
            width:200px !important;
            height:200px !important;

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

    
    .grid-area-tracks {
        grid-area: tracks; 
        overflow: auto;
        margin-left:20px;
    }
`

