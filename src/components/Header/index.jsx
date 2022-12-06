import Link from 'next/link';
import classes from '/src/components/Header/Header.module.css';

export function Header() {
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>Todo App</h1>
      <ul className={classes.links}>
        <li className={classes.link}>
          <Link href='/'>Top</Link>
        </li>
        <li className={classes.link}>
          <Link href='/about'>About</Link>
        </li>
        <li className={classes.link}>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </header>
  );
}
