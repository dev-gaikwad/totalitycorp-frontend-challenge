import React from 'react';
import PostFeed from '../components/PostFeed';
import SidebarLeft from '../components/SidebarLeft';
import SidebarRight from '../components/SidebarRight';

function MyNetwork() {
  return (
    <>
      <SidebarLeft />
      <PostFeed />
      <SidebarRight />
    </>
  );
}

export default MyNetwork;
