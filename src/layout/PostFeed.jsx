import React from 'react';
import { useState } from 'react';

function PostFeed() {
  const [userPost, setUserPost] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleSubmit = () => {};
  const handleUserPost = (event) => {
    if (userPost === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (userPost !== '' && userPost.trim().length < 10) {
      setBtnDisabled(true);
      setMessage('Post should be atleast 10 charachters');
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setUserPost(event.target.value);
  };
  return (
    <>
      <div className='postfeed'>
        <div className='input-container'>
          <div className='post-input'>
            <form onSubmit={handleSubmit}>
              <input
                onChange={handleUserPost}
                type='text'
                placeholder='Start a post'
                value={userPost}
              />
              <button
                type='submit'
                className='post-btn'
                isDisabled={btnDisabled}
              >
                Post
              </button>
            </form>
          </div>
          {message && <div className='post-short-message'>{message}</div>}
        </div>
      </div>
    </>
  );
}

export default PostFeed;
