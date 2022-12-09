import classes from '/src/components/Form/Form.module.css';

export function Form() {
  return (
    <form className={classes.create_new_post}>
      <h3>/ 新規投稿 /</h3>
      <p>タイトル</p>
      <input
        className={classes.titleInput}
        type='text'
        placeholder='タイトルを入力'
      />
      <p>テキスト</p>
      <textarea
        className={classes.textInput}
        type='text'
        placeholder='todoを入力'
      ></textarea>
      <br></br>
      <button>+ Add</button>
    </form>
  );
}
