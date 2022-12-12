import Link from 'next/link';
import classes from '/src/components/Sidebar/Sidebar.module.css';
import AddIcon from '@mui/icons-material/Add';
import ViewListIcon from '@mui/icons-material/ViewList';
import { useRouter } from 'next/router';

export function Sidebar() {
  const router = useRouter();

  return (
    <nav className={classes.sidebar}>
      <ul>
        <li>
          <Link
            href='/top/sidebar/create_new_post'
            className={
              router.pathname.endsWith('create_new_post')
                ? classes.current
                : classes.noncurrent
            }
          >
            <p className={classes.createNewPost}>
              <AddIcon className={classes.createIcon} />
              新規作成
            </p>
          </Link>
        </li>
        <li>
          <Link
            href='/top/sidebar/latest'
            className={
              router.pathname.endsWith('latest')
                ? classes.current
                : classes.noncurrent
            }
          >
            <p className={classes.latest}>
              <ViewListIcon className={classes.viewListIcon} />
              新着順
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
