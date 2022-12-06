import Link from 'next/link';
import classes from './Footer.module.css';

export function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerTop}>
        <div className={classes.logo}>
          <h3>Todo App</h3>
        </div>
        <div className={classes.overview}>
          <h4>Overview</h4>
          <ul>
            <li>
              <Link href='/'>Top</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
        <div className={classes.technology}>
          <h4>Technology</h4>
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
        <p>Copyright © 2022 moat1. All rights reserved.</p>
        <a href='https://github.com/moat1/todoapplication'>GitHub</a>
        <div className={classes.darkmode}>ダークモード</div>
      </div>
    </footer>
  );
}
