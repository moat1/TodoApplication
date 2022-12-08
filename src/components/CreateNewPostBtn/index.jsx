import classes from '/src/components/CreateNewPostBtn/CreateNewPostBtn.module.css';

export function CreateNewPostBtn() {
  return (
    <div className={classes.createNewPostBtn}>
      <button>+ 新規作成</button>
    </div>
  );
}
