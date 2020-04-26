import React from 'react'

const MainHeader = ({ opacity }) => {
    return (
        <header style={{ opacity: opacity, zIndex:3, position: 'fixed ', background: 'rgb(18, 18, 18)', width: '100%', height: '80px'}}>
            <div>
            <span>{`<`}</span>
            <span>{`>`}</span>
            </div>
            <div>User</div>
        </header>
    )
}

export default MainHeader