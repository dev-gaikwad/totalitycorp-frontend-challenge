import React from 'react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../../assets/logobug.svg';
import { ReactComponent as HomeIcon } from '../../assets/home.svg';
import { ReactComponent as NetworkIcon } from '../../assets/mynetwork.svg';
import { ReactComponent as JobsIcon } from '../../assets/jobs.svg';
import { ReactComponent as MessageIcon } from '../../assets/messaging.svg';
import { ReactComponent as NotificationIcon } from '../../assets/notification.svg';
import { ReactComponent as Avatar } from '../../assets/profileavatar.svg';
import UserInfoCard from './UserInfoCard';

function Navbar() {
  const [smallDisplay, setSmallDisplay] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <nav>
      <div className='navbar-container'>
        <div className='navbar-col1'>
          <LogoIcon
            onClick={() => navigate('/')}
            fill='#0072b1'
            height='48px'
            width='48px'
          />
          <div className='navbar-searchbar'>
            <input id='search' type='text' placeholder='Search' />
          </div>
        </div>
        <div
          className={smallDisplay ? 'navbar-col2-small' : 'navbar-col2'}
          onClick={() => setSmallDisplay(false)}
        >
          <ul>
            <li onClick={() => navigate('/')}>
              <div className='nav-pill-container'>
                <div className='nav-pill-icon'>
                  <HomeIcon
                    fill={pathMatchRoute('/') ? '#2c2c2c' : '#8f8f8f'}
                    height='36px'
                    width='36px'
                  />
                </div>
                <div className='nav-pill-text'>Home</div>
              </div>
            </li>

            <li onClick={() => navigate('/mynetwork')}>
              <div className='nav-pill-container'>
                <div className='nav-pill-icon'>
                  <NetworkIcon
                    fill={pathMatchRoute('/mynetwork') ? '#2c2c2c' : '#8f8f8f'}
                    height='36px'
                    width='36px'
                  />
                </div>
                <div className='nav-pill-text'>My Network</div>
              </div>
            </li>

            <li onClick={() => navigate('/jobs')}>
              <div className='nav-pill-container'>
                <div className='nav-pill-icon'>
                  <JobsIcon
                    fill={pathMatchRoute('/jobs') ? '#2c2c2c' : '#8f8f8f'}
                    height='36px'
                    width='36px'
                  />
                </div>
                <div className='nav-pill-text'>Jobs</div>
              </div>
            </li>

            <li onClick={() => navigate('/messaging')}>
              <div className='nav-pill-container'>
                <div className='nav-pill-icon'>
                  <MessageIcon
                    fill={pathMatchRoute('/messaging') ? '#2c2c2c' : '#8f8f8f'}
                    height='36px'
                    width='36px'
                  />
                </div>
                <div className='nav-pill-text'>Messaging</div>
              </div>
            </li>

            <li onClick={() => navigate('/notifications')}>
              <div className='nav-pill-container'>
                <div className='nav-pill-icon'>
                  <NotificationIcon
                    fill={
                      pathMatchRoute('/notifications') ? '#2c2c2c' : '#8f8f8f'
                    }
                    height='36px'
                    width='36px'
                  />
                </div>
                <div className='nav-pill-text'>Notifications</div>
              </div>
            </li>

            <li className='nav-me'>
              <div className='nav-pill-container'>
                <div className='nav-pill-icon'>
                  <Avatar height='36px' width='36px' />
                </div>
                <div className='nav-pill-text'>Me</div>
              </div>
              <div className='me-dropdown'>
                <UserInfoCard
                  Avatar={Avatar}
                  username='Devendra'
                  information='Open to new opportunities'
                />
                <button className='view-profile-btn'>View Profile</button>
                <div className='dropdown-menu'>
                  <ul>
                    <li>Account</li>
                    <li>Help</li>
                    <li>Privacy</li>
                    <li>Sign Out</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <button
          className='hamburger-menu'
          onClick={() => setSmallDisplay(true)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
