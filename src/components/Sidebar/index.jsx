import { CreateNewPostBtn } from '/src/components/CreateNewPostBtn';
import classes from '/src/components/Sidebar/Sidebar.module.css';

export function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <CreateNewPostBtn />
    </div>
  );
}
