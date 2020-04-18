import React from 'react'
import styled from 'styled-components'

const DownloadIcon = require('../../images/download.svg')

const InstallAppLinkLayout = styled.div`
    display:flex;
    padding-left:24px;

    .install-button {
        display: flex;
        justify-content: center;
        align-items: center;
        filter: invert(1);
        margin-right: 15px;

        img {
            height: 15px;
            width:15px;
        }
    }

`

const InstallAppLink = () => (
    <InstallAppLinkLayout>
        <div className="install-button">
            <img src={DownloadIcon} />
        </div>
       <p><strong>Install App</strong></p>
    </InstallAppLinkLayout>
)

export default InstallAppLink