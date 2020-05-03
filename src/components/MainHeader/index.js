import React from 'react'
import { connect } from 'react-redux'

import ArrowDropDownIcon from   '@material-ui/icons/ArrowDropDown'
import LibraryNavigation from './LibraryNavigation'
import { viewType, libraryView } from '../../constants'

import { PageHistoryButton,HeaderLayout } from './style'




const UserIcon = require('../../images/user.svg')

const MainHeader = ({ opacity, currentView, library }) => {
    return (
        <HeaderLayout opacity={opacity}>
            <div className="view-state-actions">
                <PageHistoryButton disabled={1} alt="Go back"><i className="arrow left" /></PageHistoryButton>
                <PageHistoryButton disabled={1} alt="Go forward"><i className="arrow right" /></PageHistoryButton>
            </div>
            {currentView === viewType.USER_LIBRARY && (
                <div className="library-nav">
                    {Object.values(libraryView).map(view => (
                        <LibraryNavigation key={view.trim()} active={view === library} view={view} />
                    ))}
                </div>
            )}
            <div className="current-user"style={{ display: 'flex' }}>
                <div className="user-icon">
                    <img alt="user" src={UserIcon} />
                </div>
                <span className="username">CurrentUser</span>
                <div className="arrow-dropdown"><ArrowDropDownIcon /></div>
            </div>
        </HeaderLayout>
    )
}

export default connect(state => ({
    currentView: state.uiReducer.title,
    library: state.uiReducer.library
}))(MainHeader)