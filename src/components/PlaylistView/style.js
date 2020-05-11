import styled from 'styled-components'

export const PlaylistViewLayout = styled.div`
    overflow:auto;
    display:grid;
    max-width: 1955px;
    background: ${props => props.backgroundColor};

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

    max-height: 4200px;
    min-width: 1500px;
    grid-template-columns: 1fr;
    grid-template-rows: 340px 1fr;
    grid-template-areas:    "playlist"
                            "tracks";

    .grid-area-tracks {
        margin-left:0 !important;
        margin-top:20px;
    }

    .cover-image-wrapper {
        min-width:190px;
        display: flex;
        align-items: flex-end;
        width: 17vw;
        max-width:230px;
        height: auto;

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
        padding: 0 32px;
        grid-area: tracks; 
        overflow: auto;
        margin-left:20px;
    }
`

