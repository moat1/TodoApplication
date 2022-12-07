import classes from '/src/features/Todo/todo.module.css';

export function Todo() {
  return (
    <div className={classes.feature}>
      <div className={classes.formArea}>
        <form className={classes.form}>
          <input
            type='text'
            className={classes.input}
            placeholder=' Please Enter'
          />
        </form>
        <button className={classes.addBtn}>+ Add</button>
      </div>
    </div>
  );
}
