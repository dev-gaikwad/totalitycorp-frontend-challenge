import React from 'react';
import { useState } from 'react';
import InputBtn from './InputBtn';

import { ReactComponent as PhotoIcon } from '../assets/photo.svg';
import { ReactComponent as VideoIcon } from '../assets/video.svg';
import { ReactComponent as EventIcon } from '../assets/event.svg';
import { ReactComponent as ArticleIcon } from '../assets/writearticle.svg';
import FeedContent from './FeedContent';

function PostFeed() {
  const [userPost, setUserPost] = useState('');
  const [feeds, setFeeds] = useState([]);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleSubmit = () => {};

  // function to see the eligibility of post (min 10 charachters)
  const handleUserPost = (event) => {
    if (userPost === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (userPost !== '' && userPost.trim().length < 10) {
      setBtnDisabled(true);
      setMessage('* Post should be atleast 10 charachters');
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setUserPost(event.target.value); //create a new post component with this data
  };
  return (
    <>
      <div className='postfeed-main-container'>
        <div className='input-container'>
          {message && <div className='post-short-message'>{message}</div>}
          <div className='post-input'>
            <form onSubmit={handleSubmit}>
              <input
                onChange={handleUserPost}
                type='text'
                placeholder='Start a post'
                value={userPost}
              />
              <button type='submit' className='post-btn' disabled={btnDisabled}>
                Post
              </button>
            </form>
          </div>
          <div className='input-btns-container'>
            <InputBtn icon={PhotoIcon} title='Photo' fill='skyblue' />
            <InputBtn icon={VideoIcon} title='Video' fill='tomato' />
            <InputBtn icon={EventIcon} title='Event' fill='orange' />
            <InputBtn
              icon={ArticleIcon}
              title='Write Article'
              fill='rebeccapurple'
            />
          </div>
        </div>
        {feeds.map((feed) => (
          <FeedContent />
        ))}
        <FeedContent />
      </div>
    </>
  );
}

export default PostFeed;
