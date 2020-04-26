import React from 'react'

const UserIcon = require('../../images/user.svg')

const MainHeader = ({ opacity }) => {
    return (
        <header style={{ 
            display:'flex',
            opacity: opacity, 
            zIndex:3, 
            position: 'fixed ', 
            background: 'rgb(18, 18, 18)', 
            width: '100%', 
            height: '80px'
            }}>
            <div>
                <span>{`<`}</span>
                <span>{`>`}</span>
            </div>
            <div style={{ display: 'flex' }}>User<img style={{ width: '30px', height: '30px' }} src={UserIcon} /></div>
        </header>
    )
}

export default MainHeader