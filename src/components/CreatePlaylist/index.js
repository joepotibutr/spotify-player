import React from 'react'
import ReactDOM from 'react-dom'
import { CreatePlaylistWrapper } from './styled'

const modalRoot = document.getElementById("modal-root")

function CreatePlaylist({ onClose, isOpen }) {
    const [open,handleToggle] = React.useState(false)

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
                <span>X</span>
            </div>
            <h1>Create new playlist</h1>
            <div>
                <h4>Playlist Name</h4>
                <input placeholder="New Playlist" type="text" />
            </div>
            <div>
                <button>CANCEL</button>
                <button>CREATE</button>
            </div>
        </CreatePlaylistWrapper>
    ,modalRoot)
}

export default CreatePlaylist