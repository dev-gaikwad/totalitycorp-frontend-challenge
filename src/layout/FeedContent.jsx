import React from 'react';
import { ReactComponent as Avatar } from '../assets/profileavatar.svg';
import { ReactComponent as LikeIcon } from '../assets/like.svg';
import { ReactComponent as CommentIcon } from '../assets/comment.svg';
import { ReactComponent as ShareIcon } from '../assets/share.svg';
import { ReactComponent as SendIcon } from '../assets/send.svg';
import InputBtn from './InputBtn';
import UserInfoCard from './UserInfoCard';

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

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro aut
            cum, dolor quisquam debitis vitae recusandae provident fuga nesciunt
            animi officiis, deleniti aspernatur illo! Maxime quasi minus impedit
            sed iste. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Amet enim molestiae laudantium sapiente nobis sed. Similique,
            repellendus eos non mollitia repudiandae, expedita consectetur
            consequatur vel ipsum porro magni laudantium recusandae. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Rerum ratione
            odio tenetur maxime vitae consectetur eos dolores omnis culpa sint
            doloremque, dignissimos temporibus ut fuga perspiciatis, laudantium
            ullam. Totam, consequatur. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum ad quas fuga ut officiis, dolore
            assumenda distinctio quibusdam nobis ab, alias nisi quidem
            voluptatibus quam magnam officia ex asperiores! Vel.
          </p>
        </div>
        <div className='input-btns-container feed-footer'>
          <InputBtn icon={LikeIcon} title='Photo' fill='skyblue' />
          <InputBtn icon={CommentIcon} title='Comment' fill='lightgreen' />
          <InputBtn icon={ShareIcon} title='Share' fill='gray' />
          <InputBtn icon={SendIcon} title='Send' fill='orange' />
        </div>
      </div>
    </>
  );
}

export default FeedContent;
