import styled from 'styled-components'


export const CreatePlaylistWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    opacity: ${props => props.isOpen ? 1 : 0};
    z-index: 99;
    background: rgba(0, 0, 0, 0.7);
    color: rgb(255,255,255,1);


    .create-playlist-input {
        width: 100%;
        background: rebeccapurple;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
`