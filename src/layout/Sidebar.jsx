import React from 'react';
import { ReactComponent as Avatar } from '../assets/profileavatar.svg';

function Sidebar() {
  const username = 'Devendra';
  const email = 'i.devgaikwad@gmail.com';
  const connectionStat = '108';
  const viewStat = '73';

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
            <p className='stat-number'>{connectionStat}</p>
          </div>
          <div className='sidebar-stat'>
            <p className='stat-title'>Who viewed you</p>
            <p className='stat-number'>{viewStat}</p>
          </div>
        </div>

        <div className='sidebar-bottom'>
          <h4>Recent</h4>
          <div className='searchList'>
            <ul>
              <li>
                <p>#ReactJs</p>
              </li>
              <li>
                <p>#JavaScript</p>
              </li>
              <li>
                <p>#Html</p>
              </li>
              <li>
                <p>#CSS</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;