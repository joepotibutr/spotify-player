import React from 'react'
import styled from 'styled-components'

import ArrowDropDownIcon from   '@material-ui/icons/ArrowDropDown'


const HeaderLayout = styled.header`
    padding:10px 20px;
    background:rgb(23,23,23,${props => props.opacity > 1 ? 1 : props.opacity});
    display:flex;
    align-items:center;
    z-index:3; 
    position: fixed ; 
    width: calc(100% - 270px);
    height: 30px;
    justify-content:space-between;

    @media only screen and (max-width: 1240px) {
        .current-user {
            border-radius: 50% !important;

            .username,.arrow-dropdown {
                display:none;
            }
        }
    }

    .view-state-actions {
        display:flex;

        .arrow-btn {
            width: 30px;
            height: 30px;
            display: flex;
            background: rgb(0,0,0,0.8);
            border-radius: 50%;
            margin: 0 20px;
            justify-content: center;
            align-items: center;

            .right {
                transform: rotate(-45deg) translate(-2px,-2px) skew(5deg,5deg);
            }

            .left {
                transform: rotate(135deg) translate(-2px,-2px) skew(5deg,5deg);
            }
            .arrow {
                border: solid rgb(255,255,255);
                border-width: 0 1px 1px 0;
                display: inline-block;
                padding: 7px;
            }
        }
    }

    .current-user {
        padding:4px;
        border-bottom-left-radius: 25% 100%;
        border-bottom-right-radius: 25% 100%;
        border-top-left-radius: 25% 100%;
        border-top-right-radius: 25% 100%;
        background: rgb(0,0,0);
        display:flex;
        align-items:center;
        cursor:pointer;

        
        .username {
                text-transform: lowercase;
                color: rgb(255,255,255);
                font-weight: 700;
                padding:0 5px;
            }

        .user-icon {
            border-radius:50%;
            width:30px;
            height:30px;
            background-color: #282828;
            display: flex;
            justify-content: center;
            align-items: center;


            > img {
                width: 16px;
                height: 16px;
                filter: invert(0.8);
            }
        }
    }
`


const UserIcon = require('../../images/user.svg')

const MainHeader = ({ opacity }) => {
    return (
        <HeaderLayout opacity={opacity}>
            <div className="view-state-actions">
                <div className="arrow-btn"><i class="arrow left" /></div>
                <div className="arrow-btn"><i class="arrow right" /></div>
            </div>
            <div className="current-user"style={{ display: 'flex' }}>
                <div className="user-icon">
                    <img src={UserIcon} />
                </div>
                <span className="username">CurrentUser</span>
                <div className="arrow-dropdown"><ArrowDropDownIcon /></div>
            </div>
        </HeaderLayout>
    )
}

export default MainHeader