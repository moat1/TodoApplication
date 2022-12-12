import Link from 'next/link';
import { useRouter } from 'next/router';
import classes from '/src/components/Header/Header.module.css';

export function Header() {
  const router = useRouter();

  return (
    <header className={classes.header}>
      <h1 className={classes.title}>Todo App</h1>
      <ul className={classes.links}>
        <li
          className={`${classes.link} ${
            router.pathname.startsWith('/top')
              ? classes.current
              : classes.noncurrent
          }`}
        >
          <Link href='/top'>Top</Link>
        </li>
        <li
          className={`${classes.link} ${
            router.pathname.startsWith('/about')
              ? classes.current
              : classes.noncurrent
          }`}
        >
          <Link href='/about'>About</Link>
        </li>
        <li
          className={`${classes.link} ${
            router.pathname.startsWith('/contact')
              ? classes.current
              : classes.noncurrent
          }`}
        >
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </header>
  );
}
