import React from 'react';
import styles from './Profile.module.css'

const Profile = (props) => {
    // debugger
    return (
        <div className="profile">
            <div className="description">
                <img
                src={props.avatar}
                alt="Аватар пользователя"
                className="avatar"
                />
                <p className="name">{props.name}</p>
                <p className="tag">{props.tag}</p>
                <p className="location">{props.location}</p>
            </div>

            <ul className="stats">
                <li>
                <span className="label">Followers</span>
                <span className="quantity">{props.stats.followers}</span>
                </li>
                <li>
                <span className="label">Views</span>
                <span className="quantity">{props.stats.views}</span>
                </li>
                <li>
                <span className="label">Likes</span>
                <span className="quantity">{props.stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

export default Profile;