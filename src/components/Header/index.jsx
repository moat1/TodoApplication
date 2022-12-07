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
            router.pathname.endsWith('/') ? classes.current : classes.noncurrent
          }`}
        >
          <Link href='/'>Top</Link>
        </li>
        <li
          className={`${classes.link} ${
            router.pathname.endsWith('/about')
              ? classes.current
              : classes.noncurrent
          }`}
        >
          <Link href='/about'>About</Link>
        </li>
        <li
          className={`${classes.link} ${
            router.pathname.endsWith('/contact')
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
