import React from 'react';
import { useLocation } from 'react-router-dom';
import { ReactComponent as Avatar } from '../assets/profileavatar.svg';
import SidebarCard from './SidebarCard';

function Sidebar() {
  const username = 'Devendra';
  const email = 'i.devgaikwad@gmail.com';
  const connectionStat = '1080';
  const viewStat = '734';

  const recentList = ['ReactJS', 'JavaScript', 'CSS3', 'HTML5'];
  const networkList = [
    'Connections',
    'People | Follow',
    'Events',
    'Pages',
    'Groups',
    'Newsletters',
    '#Hashtags',
  ];

  const jobsList = [
    'My Jobs',
    'Job Alert',
    'Skill Assesment',
    'Resume Builder',
    'Interview Prep',
  ];
  const notificationList = ['No Notifications'];

  const formattedConnectionStat = statsFormatter(connectionStat);
  const formattedViewStat = statsFormatter(viewStat);

  function statsFormatter(statNumber) {
    if (statNumber > 999 && statNumber < 1000000) {
      return (statNumber / 1000).toFixed(1) + 'K'; // convert to K for statNumber from > 1000 < 1 million
    } else if (statNumber > 1000000) {
      return '1M+';
    } else if (statNumber <= 999) {
      return statNumber;
    }
  }

  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <>
      <div className='sidebar'>
        <div className='sidebar-top'>
          <img
            src='https://images.unsplash.com/photo-1614851099511-773084f6911d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            alt='Cover'
          />
          <div className='sidebar-profile-avatar'>
            <Avatar height='64px' width='64px' />
          </div>
          <h3>{username}</h3>
          <h4>{email}</h4>
        </div>

        <div className='sidebar-stats-container'>
          <div className='sidebar-stat'>
            <p className='stat-title'>Your Connections</p>
            <p className='stat-number'>{formattedConnectionStat}</p>
          </div>
          <div className='sidebar-stat'>
            <p className='stat-title'>Who viewed you</p>
            <p className='stat-number'>{formattedViewStat}</p>
          </div>
        </div>
        {pathMatchRoute('/mynetwork') ? (
          <SidebarCard title='Manage my network' list={networkList} />
        ) : pathMatchRoute('/jobs') ? (
          <SidebarCard list={jobsList} />
        ) : pathMatchRoute('/notifications') ? (
          <SidebarCard title='Notifications' list={notificationList} />
        ) : (
          <SidebarCard title='Recents' list={recentList} />
        )}
      </div>
    </>
  );
}

export default Sidebar;
