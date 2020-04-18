import React from 'react'

const DownloadIcon = require('../../images/download.svg')

const InstallAppLink = () => (
    <div style={{ display: 'flex' }}>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            filter: 'invert(1)',
            marginRight: '15px'
        }}>
            <img style={{
                height: '15px'
            }} src={DownloadIcon} />
        </div>
       <p><strong>Install App</strong></p>
    </div>
)

export default InstallAppLink