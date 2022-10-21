import React from 'react';
import { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import InputPostFeed from './shared/InputPostFeed';
import FeedContent from './FeedContent';
import ContentContext from '../context/ContentContext';

function PostFeed() {
  const { userFeed } = useContext(ContentContext);
  const [feeds, setFeeds] = useState([]);

  const postImage =
    'https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

  const postText =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, rem. Numquam quidem molestiae nostrum architecto, qui veritatis sunt nesciunt quos accusamus explicabo animi at, atque labore facere veniam nam est? Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, perferendis magni error debitis est perspiciatis aliquid voluptate asperiores aspernatur ducimus facilis illo sapiente quam repudiandae, vel at odio veniam repellat.';

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
        {userFeed.map((feed, index) => (
          <FeedContent key={index} text={feed} />
        ))}

        {/* temporary static feeds */}
        <FeedContent photo={postImage} text={postText} />
        <FeedContent text={postText} />
        <FeedContent
          video='https://www.youtube.com/watch?v=zIKxshOqlAc'
          text={postText}
        />
        <FeedContent text={postText} />
        <FeedContent text={postText} />
      </div>
    </>
  );
}

export default PostFeed;
