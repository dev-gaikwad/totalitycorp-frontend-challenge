import React from 'react';
import { ReactComponent as LogoIcon } from '../assets/logobug.svg';
import { ReactComponent as SearchIcon } from '../assets/search.svg';
import { ReactComponent as HomeIcon } from '../assets/home.svg';

function Navbar() {
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
            <li>
              <div className='nav-pill-container'>
                <div className='nav-pill-icon'>
                  <HomeIcon height='36px' width='36px' />
                </div>
                <div className='nav-pill-text'>Home</div>
              </div>
            </li>

            <li>
              <div className='nav-pill-container'>
                <div className='nav-pill-icon'>
                  <HomeIcon height='36px' width='36px' />
                </div>
                <div className='nav-pill-text'>My Network</div>
              </div>
            </li>

            <li>
              <div className='nav-pill-container'>
                <div className='nav-pill-icon'>
                  <HomeIcon height='36px' width='36px' />
                </div>
                <div className='nav-pill-text'>Jobs</div>
              </div>
            </li>

            <li>
              <div className='nav-pill-container'>
                <div className='nav-pill-icon'>
                  <HomeIcon height='36px' width='36px' />
                </div>
                <div className='nav-pill-text'>Messaging</div>
              </div>
            </li>

            <li>
              <div className='nav-pill-container'>
                <div className='nav-pill-icon'>
                  <HomeIcon height='36px' width='36px' />
                </div>
                <div className='nav-pill-text'>Notification</div>
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
