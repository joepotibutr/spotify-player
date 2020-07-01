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
    opacity: ${props => props.isOpen ? 1 : 0};
    z-index: 99;
    margin: 40px auto;
    background: rgba(0, 0, 0, 0.5);
`