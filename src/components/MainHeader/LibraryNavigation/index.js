import React from 'react'
import styled from 'styled-components'


const LibraryNavStyleWrapper = styled.div`
    .nav-button {
        outline:0;
    background: ${props => props.active ? 'red' : 'black'};

    }

`

const LibraryNavigation = ({ view, active }) => {
    return (
        <LibraryNavStyleWrapper active={active}>
            <button className="nav-button">{view}</button>
        </LibraryNavStyleWrapper>
    )
}


export default LibraryNavigation