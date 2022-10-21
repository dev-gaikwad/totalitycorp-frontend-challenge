import React from 'react';
import { ReactComponent as Avatar } from '../assets/profileavatar.svg';
import { ReactComponent as LikeIcon } from '../assets/like.svg';
import { ReactComponent as CommentIcon } from '../assets/comment.svg';
import { ReactComponent as ShareIcon } from '../assets/share.svg';
import { ReactComponent as SendIcon } from '../assets/send.svg';
import InputBtn from './shared/InputBtn';
import UserInfoCard from './shared/UserInfoCard';

function FeedContent(props) {
  const username = 'Totality Corp';

  return (
    <>
      <div className='feed-container'>
        <UserInfoCard
          Avatar={Avatar}
          username={username}
          information='Information'
        />
        <div className='feed-body'>
          {props.photo ? <img src={props.photo} alt='PostPic' /> : null}

          {props.text ? <p>{props.text}</p> : null}
        </div>
        <div className='input-btns-container feed-footer'>
          <InputBtn icon={LikeIcon} title='Like' fill='skyblue' />
          <InputBtn icon={CommentIcon} title='Comment' fill='lightgreen' />
          <InputBtn icon={ShareIcon} title='Share' fill='gray' />
          <InputBtn icon={SendIcon} title='Send' fill='orange' />
        </div>
      </div>
    </>
  );
}

export default FeedContent;
