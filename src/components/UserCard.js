import { Link } from 'react-router-dom';
import useUserStore from '../store/userStore';
import styles from '../styles/UserCard.module.css';

const UserCard = ({ user }) => {
  const { deleteUser } = useUserStore();

  if (!user || !user.id) {
    return <div className={styles.card}>No user data available</div>;
  }

  return (
    <div className={styles.card}>
      <div className={styles.username}>{user.username || 'No username'}</div>
      <div className={styles.email}>{user.email || 'No email'}</div>
      <div>
        {user.name?.firstname || ''} {user.name?.lastname || ''}
      </div>
      <div className={styles.actions}>
        <Link to={`/user/${user.id}`}>Details</Link>
        <Link to={`/edit/${user.id}`}>Edit</Link>
        <button onClick={() => deleteUser(user.id)}>Delete</button>
      </div>
    </div>
  );
};

export default UserCard;