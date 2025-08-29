import Sidebar from './Sidebar';
import Header from './Header';
import styles from '../styles/DashboardLayout.module.css';

const DashboardLayout = ({ children }) => (
  <div className={styles.dashboard}>
    <Sidebar />
    <div className={styles.main}>
      <Header />
      <div className={styles.content}>{children}</div>
    </div>
  </div>
);

export default DashboardLayout;