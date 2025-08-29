import { useEffect } from 'react';
import useUserStore from '../store/userStore';
import UserCard from '../components/UserCard';
import layout from '../styles/Layout.module.css';

const UserList = () => {
  const { users, fetchUsers, loading, error } = useUserStore();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={layout.container}>
      <div className={layout.grid}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;