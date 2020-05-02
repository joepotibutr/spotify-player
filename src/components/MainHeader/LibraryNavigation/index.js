import React from 'react'
import styled from 'styled-components'


const LibraryNavStyleWrapper = styled.div`
    .nav-button {
        outline:0;
    }

`

const LibraryNavigation = ({ view }) => {
    return (
        <LibraryNavStyleWrapper>
            <button className="nav-button">{view}</button>
        </LibraryNavStyleWrapper>
    )
}


export default LibraryNavigation