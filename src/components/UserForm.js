import { useState, useEffect } from 'react';
import styles from '../styles/UserForm.module.css';

const UserForm = ({ user, onSubmit }) => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    firstname: '',
    lastname: '',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        email: user.email,
        username: user.username,
        password: '',
        firstname: user.name.firstname,
        lastname: user.name.lastname,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     const payload = {
        email: formData.email,
        username: formData.username,
        password: formData.password,
        name: {
          firstname: formData.firstname,
          lastname: formData.lastname,
        },  
     };
     onSubmit(payload);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {['email', 'username', 'password', 'firstname', 'lastname'].map((field) => (
        <input
          key={field}
          name={field}
          value={formData[field]}
          onChange={handleChange}
          placeholder={field}
          required
        />
      ))}
      <button type="submit">{user ? 'Update' : 'Create'} User</button>
    </form>
  );
};

export default UserForm;