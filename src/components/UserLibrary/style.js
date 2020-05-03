import styled from 'styled-components'


export const LikedTrackPlaylist = styled.li`
    padding: 30px 10px;
    grid-column:1/3;
    height:200px;
    background: linear-gradient(158deg, rgba(70,12,245,1) 0%, rgba(142,141,230,1) 100%);
    border-radius: 8px;
    cursor:pointer;

    .sample-liked-songs {
        width:100%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    }
`

export const UserLibraryLayout = styled.div`
    height: 900px;
    margin-top: 90px;
    padding: 0 32px;

    .collection-layout {
        display: grid;
        grid-gap: 16px;
        grid-template-columns: repeat(auto-fill,minmax(164px,1fr));
    }
    h1 {
        color:#fff;
        font-size:1.8em;
        font-family: sans-serif;
    }
`

export const CollectionItem = styled.li`
    position:relative;
    overflow:hidden;
    cursor:pointer;
    background: #282828;
    border-radius: 8px;
    padding: 20px 20px 16px;

    .item-detail {
        .item-description {
            font-size:12px;
            height:40px;
        }

        .item-title {
            font-family:sans-serif;
            font-size: 14px;
            line-height: 20px;
            font-weight: 700;
            letter-spacing: .24px;
            color: #fff;
            h4 {
                margin:0;
            }
        }
    }

    .cover-art {
        margin-bottom:16px;
    }

    .item-cover {
        width: 100%;
        height: auto;
        box-shadow: 0 10px 30px 0 rgba(0,0,0,.3), 0 1px 2px 0 rgba(0,0,0,.2);
    }

    .empty-playlist {
        box-shadow: 0 10px 30px 0 rgba(0,0,0,.3), 0 1px 2px 0 rgba(0,0,0,.2);
        background: #383838;
        width: 186.5px;
        height: 186.5px;
        display:flex;
        justify-content:center;
        align-items:center;

        .empty-icon {
            filter:invert(0.7);
            width: 90px;
            height: 90px;
        }
    }

    .play-btn {
        opacity:0;
        display:flex;
        position:absolute;
        justify-content:center;
        align-items:center;
        width: 43px;
        height: 43px;
        background:#1db954;
        border-radius:50%;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.2);
        transform: translate(140px,15px);
    }
    &:hover {
        .play-btn {
            opacity:1;
        }
    }
`