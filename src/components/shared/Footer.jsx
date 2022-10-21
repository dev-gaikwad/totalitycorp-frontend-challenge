import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../../assets/logobug.svg';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='sidebar-card-reverse'>
      <div className='footer-container'>
        <Link to='/about'>About</Link>
        <a
          href='https://www.linkedin.com/in/devgaikwad'
          target='_blank'
          rel='noopener noreferrer'
        >
          Linkedin
        </a>
        <a
          href='https://www.github.com/devgaikwad'
          target='_blank'
          rel='noopener noreferrer'
        >
          Github
        </a>
      </div>
      <div className='footer-brand'>
        <LogoIcon fill='#0072b1' height='24px' width='24px' />
        <span>
          LinkedIn Clone {'\u00A9'} {year}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
