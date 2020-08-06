import React from 'react'
import ReactDOM from 'react-dom'
import { CreatePlaylistWrapper } from './styled'

const modalRoot = document.getElementById("modal-root")

function CreatePlaylist({ onClose, isOpen }) {
    const [open, handleToggle] = React.useState(false)

    React.useEffect(() => {
        window.addEventListener('keydown', onEscKeyDown)
        setTimeout(() => handleToggle(true), 0)
        return () => {
            window.removeEventListener('keydown',onEscKeyDown, false)
        }
    },[isOpen])

    function onEscKeyDown(e) {
        if (e.key === "Escape") {
            onClose(false)
        }
    }

    return ReactDOM.createPortal(
        <CreatePlaylistWrapper isOpen={open}>
            <div>
                <span onClick={() => onClose(false)}>X</span>
            </div>
            <h1 className="create-playlist-title">Create new playlist</h1>
            <div className="create-playlist-input">
                <div className="input-box">
                    <h4>Playlist Name</h4>
                    <input placeholder="New Playlist" type="text" />
                </div>
            </div>
            <div className="create-playlist-actions">
                <button className="cancel btn" onClick={() => onClose(false)}>CANCEL</button>
                <button className="create btn" >CREATE</button>
            </div>
        </CreatePlaylistWrapper>
    ,modalRoot)
}

export default CreatePlaylist