import styled from 'styled-components'


export const LikedSongsCoverArt = styled.div`
    min-width:190px;
    width: 17vw;
    height: auto;
    background: linear-gradient(158deg, #431eb3, #b4acd4 100%);
    display:flex;
    justify-content:center;
    align-items:center;
    &:after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }
`

export const CurrentPlaylistHeaderWrapper = styled.header`
        background: linear-gradient(180deg, rgba(18,18,18,0) 0%, rgba(18,18,18,0.1) 100%);
        grid-area: playlist;
        padding-bottom: 20px;
        padding-left:32px;
        display:flex;
        align-items: flex-end;


        .playlist-body {
            text-align:left !important;
            margin-left:20px;
        }


        .current-playlist {
            height: 240px;
            text-align: center;
            width: 100%;
            display:flex;
            align-items: flex-end;

            .playlist-cover-art {
                width: auto;
                min-height: auto;
                box-shadow: 0 0 10px rgba(0,0,0,.3);
            }

            .playlist-body {
                text-align:center;
                display: flex;
                flex-direction: column;

               

                .playlist-entity {
                    .playlist-title {
                        line-height: 36px;
                        letter-spacing: -.005em;
                        font-weight: 700;
                        text-transform: none;
                        color:white;
                        -webkit-text-stroke-width: 3px;
                        letter-spacing: -1px;

                        h2 {
                            @media only screen and (max-width: 1240px) {
                                font-size: 42px;
                            }
                            font-family: 'Prox';
                            font-size:6vw;
                            margin: 0.4em 0;
                        }
                    }

                    .playlist-owner {
                        cursor:pointer;
                        color:rgba(255,255,255);
                        &:hover {
                            text-decoration: underline;
                            color:rgba(255,255,255,.8);
                        }
                    }
                }

            }
        }

            

`