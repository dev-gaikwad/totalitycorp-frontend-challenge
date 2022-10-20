import React from 'react';
import PostFeed from '../layout/PostFeed';
import SidebarLeft from '../layout/SidebarLeft';
import SidebarRight from '../layout/SidebarRight';

function Notifications() {
  return (
    <>
      <SidebarLeft />
      <PostFeed />
      <SidebarRight />
    </>
  );
}

export default Notifications;
