import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../assets/logobug.svg';
import SidebarCard from './SidebarCard';

function SidebarRight() {
  const year = new Date().getFullYear();
  const newsList = [
    'Job hiring in boom',
    'Learn more about web3',
    'Most affordable Indian cities',
    'Are you worried about recession',
    'No more news headline',
    'IT freshers hiring game strong',
    'Things to learn after something',
  ];
  return (
    <>
      <div className='sidebar-right'>
        <SidebarCard title='News' list={newsList} />
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
