import React from 'react';
// import { ReactComponent as AvatarIcon } from '../assets/profileavatar.svg';

function UserInfoCard({ Avatar, username, information }) {
  return (
    <div className='userinfo-card-title'>
      <Avatar height='48' width='48px' />
      <div className='userinfo-card-info'>
        {username ? <h3>{username}</h3> : null}
        {information ? <p>{information}</p> : null}
      </div>
    </div>
  );
}

export default UserInfoCard;
