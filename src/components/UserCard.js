import { Link } from 'react-router-dom';
import useUserStore from '../store/userStore';
import styles from '../styles/UserCard.module.css';

const UserCard = ({ user }) => {
  const { deleteUser } = useUserStore();

  return (
    <div className={styles.card}>
      <div className={styles.username}>{user.username}</div>
      <div className={styles.email}>{user.email}</div>
      <div>{user.name.firstname ? user.name.firstname : ''} {user.name.lastname ? user.name.lastname : ''}</div>
      <div className={styles.actions}>
        <Link to={`/user/${user.id}`}>Details</Link>
        <Link to={`/edit/${user.id}`}>Edit</Link>
        <button onClick={() => deleteUser(user.id)}>Delete</button>
      </div>
    </div>
  );
};

export default UserCard;