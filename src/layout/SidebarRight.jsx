import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../assets/logobug.svg';

function SidebarRight() {
  const year = new Date().getFullYear();
  return (
    <>
      <div className='sidebar-right'>
        <div className='sidebar-card'>
          <h4>News</h4>
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
        <div className='sidebar-card-reverse'>
          <div className='footer-container'>
            <Link to='/about'>About</Link>
            <Link to='/about'>Linkedin</Link>
            <Link to='/about'>Github</Link>
          </div>
          <div className='footer-brand'>
            <LogoIcon fill='#0072b1' height='24px' width='24px' />
            <span>
              LinkedIn Clone {'\u00A9'} {year}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SidebarRight;
