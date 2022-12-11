import { userAgent } from 'next/server';
import { useRef } from 'react';
import classes from '/src/components/Form/Form.module.css';
import CreateIcon from '@mui/icons-material/Create';

export function Form() {
  const todoTitle = useRef(null);
  const todoContents = useRef(null);

  const addBtn = (e) => {
    e.preventDefault();

    console.log(todoTitle.current.value);
    console.log(todoContents.current.value);
    alert(
      'タイトル : ' +
        todoTitle.current.value +
        '　' +
        'テキスト : ' +
        todoContents.current.value +
        '　' +
        'でよろしいですか。'
    );
    todoTitle.current.value = '';
    todoContents.current.value = '';
  };

  return (
    <form className={classes.create_new_post}>
      <h3>
        <CreateIcon className={classes.create} />
        新規投稿
      </h3>
      <p>タイトル</p>
      <input
        className={classes.titleInput}
        type='text'
        placeholder='タイトルを入力'
        ref={todoTitle}
      />
      <p>テキスト</p>
      <textarea
        className={classes.textInput}
        type='text'
        placeholder='todoを入力'
        ref={todoContents}
      ></textarea>
      <br></br>
      <button onClick={addBtn}>+ Add</button>
    </form>
  );
}
