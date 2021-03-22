import React from 'react';
import styles from './Friends.module.css'

const Friends = (props) => {
    // debugger
    return (
        <div>
            {
                props.friends.map(friend => {
                    return (
                        <li key={friend.id} className="item">
                            <span className="status">{friend.isOnline ? 'Online' : 'Offline'}</span>
                            <img className="avatar" src={friend.avatar} alt="" width="48" />
                            <p className="name">{friend.name}</p>
                        </li>
                    )
                })
            }
        </div>
    )
}
export default Friends;