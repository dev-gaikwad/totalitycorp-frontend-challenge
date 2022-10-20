import React from 'react';
import PostFeed from '../layout/PostFeed';
import SidebarLeft from '../layout/SidebarLeft';
import SidebarRight from '../layout/SidebarRight';

function Jobs() {
  return (
    <>
      <SidebarLeft />
      <PostFeed />
      <SidebarRight />
    </>
  );
}

export default Jobs;
