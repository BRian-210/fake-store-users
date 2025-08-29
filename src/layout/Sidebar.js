import { Link } from 'react-router-dom';
import styles from '../styles/Sidebar.module.css';

const Sidebar = () => (
  <aside className={styles.sidebar}>
    <h2>FakeStore Admin</h2>
    <nav>
      <Link to="/">Users</Link>
      <Link to="/create">Add User</Link>
    </nav>
  </aside>
);

export default Sidebar;