import styled from 'styled-components'


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

export const CurrentPlaylistHeaderWrapper = styled.header`
        grid-area: playlist;
        padding-bottom: 20px;
        position:sticky;
        align-items: flex-end;


        .current-playlist {
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

            }
        }

    @media only screen and (max-width: 1240px) {
            position:inherit !important;
            display:flex;
            border-bottom: 1px solid hsla(0,0%,100%,.1);

            .current-playlist {
                max-width: 100% !important;
                flex-direction: row !important;
            }

            .playlist-body {
                text-align:left !important;
                margin-left:40px;
            }
        }

`