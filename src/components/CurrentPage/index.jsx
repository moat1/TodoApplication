import classes from '/src/components/CurrentPage/CurrentPage.module.css';

export function CurrentPage(props) {
  return (
    <div className={classes.currentPage}>
      <h2>{props.pageName}</h2>
    </div>
  );
}
