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
            {/* あとでaタグをLinkに変更！ */}
            <li>
              <a href='#'>Top</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>
        <div className={classes.technology}>
          <h4>Technology</h4>
          <ul>
            {/* あとでaタグをLinkに変更！ */}
            <li>
              <a href='#'>Next.js</a>
            </li>
            <li>
              <a href='#'>Sass</a>
            </li>
            <li>
              <a href='#'>GitHub</a>
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
