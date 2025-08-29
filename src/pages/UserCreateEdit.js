import { useParams, useNavigate } from 'react-router-dom';
import useUserStore from '../store/userStore';
import UserForm from '../components/UserForm';

const UserCreateEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users, createUser, updateUser } = useUserStore();

  const user = id ? users.find((u) => u.id === parseInt(id)) : null;

  const handleSubmit = async (formData) => {
    const payload = {
      ...formData,
      name: { firstname: formData.firstname, lastname: formData.lastname },
    };

    if (user) {
      await updateUser(user.id, payload);
    } else {
      await createUser(payload);
    }
    navigate('/');
  };

  return (
    <div>
      <h2>{user ? 'Edit User' : 'Create User'}</h2>
      <UserForm user={user} onSubmit={handleSubmit} />
    </div>
  );
};

export default UserCreateEdit;
