import { useParams } from 'react-router-dom';
import useUserStore from '../store/userStore';
import { useEffect, useState } from 'react';
import axios from 'axios';

const UserDetail = () => {
  const { id } = useParams();
  const { users } = useUserStore();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const localUser = users.find((u) => u.id === parseInt(id));
    if (localUser) {
      setUser(localUser);
    } else {
      axios.get(`https://fakestoreapi.com/users/${id}`).then((res) => {
        setUser(res.data);
      });
    }
  }, [id, users]);

  return user ? (
    <div>
      <h2>{user.username}</h2>
      <p>{user.email}</p>
      <p>{user.name.firstname} {user.name.lastname}</p>
    </div>
  ) : <p>Loading user...</p>;
};

export default UserDetail;