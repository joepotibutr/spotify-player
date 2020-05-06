import styled from 'styled-components'


export const NowPlayingWrapper = styled.footer` 
    height: 86px;
    background-color: #282828;

    .current-track-action-bar {
        padding: 0 16px;
        display: flex;
        height: 100%;
        align-items:center;
    }
`

export const CurrentTrackSection = styled.section`
    font-family: sans-serif;
    width: 30%;
    min-width: 180px;
    display: flex;
    align-items:center;

    .current-track-wrapper {
        overflow: hidden;

        .current-track-cover-art {
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 100%;

            .cover-art-wrapper {
                min-width:56px;
                min-height:56px;
                box-shadow: 0 0 10px rgba(0,0,0,.3);

                .track-cover-art {
                    width: 56px;
                    height: 56px;
                }
            }
        }
    }
 `