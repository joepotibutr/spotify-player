import React from 'react'
import styled from 'styled-components'

const ProgressBarOuterLayout = styled.div`
    height: 12px;
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
`

const BufferLine = styled.div`
    background-color: rgb(64, 64, 64);
    border-radius: 2px;
    display: flex;
    height: 4px;
    width: 100%;
`


const ProgressBar = () => {
    return (
        <ProgressBarOuterLayout>
            <BufferLine />
        </ProgressBarOuterLayout>
    )
}


export default ProgressBar