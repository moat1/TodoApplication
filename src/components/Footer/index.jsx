import Link from 'next/link';
import classes from './Footer.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerTop}>
        <div className={classes.logo}>
          <p>Todo App</p>
        </div>
        <div className={classes.footerLink}>
          <p>Overview</p>
          <ul>
            <li>
              <Link href='/top'>Top</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
        <div className={classes.footerLink}>
          <p>Technology</p>
          <ul>
            <li>
              <Link href='/'>Next.js</Link>
            </li>
            <li>
              <Link href='/'>Sass</Link>
            </li>
            <li>
              <Link href='/'>GitHub</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.footerBottom}>
        <small>Copyright © 2022 moat1. All rights reserved.</small>
        <Link href='https://github.com/moat1/todoapplication'>
          <GitHubIcon className={classes.gitHubIcon} />
        </Link>
        <div className={classes.darkmode}>
          <DarkModeIcon className={classes.darkModeIcon} />
        </div>
      </div>
    </footer>
  );
}
