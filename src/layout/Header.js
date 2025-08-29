import useUserStore from '../store/userStore';
import styles from '../styles/Header.module.css';

const Header = () => {
  const { theme, toggleTheme } = useUserStore();

  return (
    <header className={styles.header}>
      <h1>User Dashboard</h1>
      <button onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </header>
  );
};

export default Header;