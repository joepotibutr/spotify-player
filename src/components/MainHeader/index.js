import React from 'react'
import styled from 'styled-components'

import ArrowDropDownIcon from   '@material-ui/icons/ArrowDropDown'


const HeaderLayout = styled.header`
    display:flex;
    opacity: ${props => props.opacity}; 
    z-index:3; 
    position: fixed ; 
    background: rgb(18, 18, 18);
    width: 100%;
    height: 80px;
`


const UserIcon = require('../../images/user.svg')

const MainHeader = ({ opacity }) => {
    return (
        <HeaderLayout opacity={opacity}>
            <div>
                <span>{`<`}</span>
                <span>{`>`}</span>
            </div>
            <div className="current-user"style={{ display: 'flex' }}>
                User
                <img style={{ width: '30px', height: '30px' }} src={UserIcon} />
                <span>CurrentUser</span>
                <div><ArrowDropDownIcon /></div>
            </div>
        </HeaderLayout>
    )
}

export default MainHeader