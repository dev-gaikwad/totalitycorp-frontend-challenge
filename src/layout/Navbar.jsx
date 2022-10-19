import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../assets/logobug.svg';
import { ReactComponent as SearchIcon } from '../assets/search.svg';
import { ReactComponent as HomeIcon } from '../assets/home.svg';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <div className='navbar'>
      <div className='navbar-wrap'>
        <div className='navbar-col1'>
          <LogoIcon height='48px' width='48px' />
          <div className='navbar-searchbar'>
            <input id='search' type='text' placeholder='Search' />
            {/* <div className='navbar-search-icon'>
              <SearchIcon height='20px' width='20px' />
            </div> */}
          </div>
        </div>
        <div className='navbar-col2'>
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
                  <HomeIcon
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
                  <HomeIcon
                    fill={pathMatchRoute('/jobs') ? '#2c2c2c' : '#8f8f8f'}
                    height='36px'
                    width='36px'
                  />
                </div>
                <div className='nav-pill-text'>Jobs</div>
              </div>
            </li>

            <li onClick={() => navigate('/')}>
              <div className='nav-pill-container'>
                <div className='nav-pill-icon'>
                  <HomeIcon
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
                  <HomeIcon
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

            <li>
              <div className='nav-pill-container'>
                <div className='nav-pill-icon'>
                  <HomeIcon height='36px' width='36px' />
                </div>
                <div className='nav-pill-text'>Me</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
