import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './shared/Footer';
import SidebarCard from './SidebarCard';

function SidebarRight() {
  const newsList = [
    'Job hiring in boom',
    'Learn more about web3',
    'Most affordable Indian cities',
    'Are you worried about recession',
    'No more news headline',
    'IT freshers hiring game strong',
    'Things to learn after something',
  ];

  const guidanceList = ['Seek Help'];

  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <>
      <div className='sidebar-right'>
        {pathMatchRoute('/jobs') ? (
          <SidebarCard title='Job seekers guidance' list={guidanceList} />
        ) : pathMatchRoute('/') ? (
          <SidebarCard title='News' list={newsList} />
        ) : pathMatchRoute('/messaging') ? (
          <SidebarCard title='News' list={newsList} />
        ) : null}
        <Footer />
      </div>
    </>
  );
}

export default SidebarRight;
