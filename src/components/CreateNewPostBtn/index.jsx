import Link from 'next/link';
import classes from '/src/components/CreateNewPostBtn/CreateNewPostBtn.module.css';

export function CreateNewPostBtn() {
  return (
    <div className={classes.createNewPostBtn}>
      <button>
        <Link href='/create_new_post'>+ 新規作成</Link>
      </button>
    </div>
  );
}
