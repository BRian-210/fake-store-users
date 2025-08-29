import { Routes, Route } from 'react-router-dom';
import UserList from '../pages/UserList';
import UserDetail from '../pages/UserDetail';
import UserCreateEdit from '../pages/UserCreateEdit';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<UserList />} />
    <Route path="/user/:id" element={<UserDetail />} />
    <Route path="/create" element={<UserCreateEdit />} />
    <Route path="/edit/:id" element={<UserCreateEdit />} />
  </Routes>
);

export default AppRoutes;