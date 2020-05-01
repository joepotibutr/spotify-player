import styled from 'styled-components'


export const UserLibraryLayout = styled.div`
height: 900px;
margin-top: 90px;
padding: 0 32px;

.collection-layout {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fill,minmax(164px,1fr));
}
`

export const CollectionItem = styled.li`
    overflow:hidden;
    cursor:pointer;
    background: #282828;
    border-radius: 8px;
    padding: 20px 20px 16px;

    .item-detail {
        .item-title {
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
            width: 50px;
            height: 50px;
        }
    }

    .play-btn {
        position:absolute;
        justify-content:center;
        align-items:center;
        width: 50px;
        height: 50px;
        background:#1db954;
        display:none;
        border-radius:50%;
        transform: translateX(90px);
    }
    &:hover {
        .play-btn {
            display:flex;
        }
    }
`