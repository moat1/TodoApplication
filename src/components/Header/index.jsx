import classes from '/src/components/Header/Header.module.css';

export function Header() {
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>Todo App</h1>
      <ul className={classes.links}>
        <li className={classes.link}>Top</li>
        <li className={classes.link}>About</li>
        <li className={classes.link}> Contact</li>
      </ul>
    </header>
  );
}
