import Link from 'next/link';
import classes from '/src/components/Sidebar/Sidebar.module.css';
import AddIcon from '@mui/icons-material/Add';
import ViewListIcon from '@mui/icons-material/ViewList';

export function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <ul>
        <li>
          <Link href='/create_new_post'>
            <p className={classes.createNewPost}>
              <AddIcon className={classes.createIcon} />
              新規作成
            </p>
          </Link>
        </li>
        <li>
          <Link href='/latest'>
            <p className={classes.latest}>
              <ViewListIcon className={classes.viewListIcon} />
              新着順
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
