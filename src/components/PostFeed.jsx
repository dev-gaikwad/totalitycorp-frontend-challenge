import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import InputPostFeed from './shared/InputPostFeed';
import FeedContent from './FeedContent';

function PostFeed() {
  const [feeds, setFeeds] = useState([]);

  const postImage =
    'https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <>
      <div className='postfeed-main-container'>
        {pathMatchRoute('/') ? <InputPostFeed /> : null}

        {/* for actual feeds when the data comes in */}
        {feeds.map((feed) => (
          <FeedContent />
        ))}

        {/* temporary static feeds */}
        <FeedContent photo={postImage} />
        <FeedContent />
        <FeedContent video='https://www.youtube.com/watch?v=zIKxshOqlAc' />
        <FeedContent />
        <FeedContent />
      </div>
    </>
  );
}

export default PostFeed;
