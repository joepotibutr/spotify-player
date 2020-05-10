import styled from 'styled-components'


export const LikedSongsCoverArt = styled.div`
    width: 15vw;
    height: auto;
    background: linear-gradient(158deg, rgba(70,12,245,1) 0%, rgba(142,141,230,1) 100%);
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
        grid-area: playlist;
        padding-bottom: 20px;
        padding-left:32px;
        display:flex;
        border-bottom: 1px solid hsla(0,0%,100%,.1);
        align-items: flex-end;


        .current-playlist {
            max-width: 100% !important;
            flex-direction: row !important;
        }

        .playlist-body {
            text-align:left !important;
            margin-left:20px;
        }


        .current-playlist {
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
                        h2 {
                            font-size:4vw;
                            margin: 0.4em 0;
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

            }
        }

            

`