import React from 'react'
import { connect } from 'react-redux'
import { UserLibraryLayout } from './style'
import { libraryView } from '../../constants'

class UserLibrary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
        <UserLibraryLayout>
            <h3>{this.props.library}</h3>

        </UserLibraryLayout>
        )
    }
}

export default connect(state => ({
    library: state.uiReducer.library 
}))(UserLibrary)