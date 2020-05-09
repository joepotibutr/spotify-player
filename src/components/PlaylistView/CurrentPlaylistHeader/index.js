import React from 'react'
import styled from 'styled-components'

export const CurrentPlaylistHeader = styled.header`
        grid-area: playlist;
        padding-bottom: 20px;
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
                display: flex;
                flex-direction: column;

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
                    order:2;
                }
            }
        }

    @media only screen and (max-width: 1240px) {
            position:inherit !important;
            display:flex;
            border-bottom: 1px solid hsla(0,0%,100%,.1);

            .current-playlist {
                max-width: 100% !important;
                margin: 0 0 1.5em 0 !important;
                flex-direction: row !important;
            }

            .playlist-body {
                text-align:left !important;
                margin-left:40px;

                .total-songs {
                    order:1 !important;
                }

                .playlist-actions {
                    order:2 !important;
                    flex-direction:column-reverse !important;

                    .button-wrapper {
                        flex-direction:row !important;
                    }
                }
            }
        }

`

const CurrentPlaylistHeader = ({ isUserLikedSongs, currentPlaylist }) => {
    return (
            <CurrentPlaylistHeader>
                <div className="current-playlist">
                    <div className="playlist-cover-art">
                            <div className="cover-image-wrapper">
                            {isUserLikedSongs ? 
                            <LikedSongsCoverArt >
                                <LikeIcon style={{ width: '18px', height: '18px'}}/>
                            </LikedSongsCoverArt> : 
                            <img alt="playlist-cover" className="playlist-cover-image"
                            src={currentPlaylist.images[0].url}/>}
                        </div>
                    </div>
                    <div className="playlist-body">
                        <div className="playlist-entity">
                            <div className="playlist-title"><h2>{this.props.headerTitle}</h2></div>
                            <div ><span className="by">By </span><span className="playlist-owner">{isUserLikedSongs ? 'test' : currentPlaylist.owner.display_name}</span></div>
                        </div>
                        <div className="playlist-actions">
                            <div className="button-wrapper">
                                <div className="play-button">
                                    <button onClick={() => this.props.onPlay()}>PLAY</button>
                                </div>
                                <div>LIKED</div>
                                <div>.....</div>
                            </div>
                        </div>
                        <div className="total-songs"><p>{this.props.songs.length} SONGS</p></div>
                    </div>
                </div>
            </CurrentPlaylistHeader>
    )
}

export default CurrentPlaylistHeader