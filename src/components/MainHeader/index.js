import React from 'react'
import styled from 'styled-components'

import ArrowDropDownIcon from   '@material-ui/icons/ArrowDropDown'


const HeaderLayout = styled.header`
    padding:10px 20px;
    background:rgb(83,83,83,${props => props.opacity});
    display:flex;
    align-items:center;
    z-index:3; 
    position: fixed ; 
    width: 60%;
    height: 30px;
    justify-content:space-between;

    .current-user {
        display:flex;
        align-items:center;

        .user-icon {
            border-radius:50%;
            width:30px;
            height:30px;
            background-color: red;
            display: flex;
            justify-content: center;
            align-items: center;

            > img {
                width: 20px;
                height: 20px;
                filter: invert(0.8);
            }
        }
    }
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
                <div className="user-icon">
                    <img src={UserIcon} />
                </div>
                <span>CurrentUser</span>
                <div><ArrowDropDownIcon /></div>
            </div>
        </HeaderLayout>
    )
}

export default MainHeader