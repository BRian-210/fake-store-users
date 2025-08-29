import { create } from 'zustand';
import axios from 'axios';
import { toast } from 'react-toastify';

const useUserStore = create((set) => ({
  users: [],
  loading: false,
  error: null,
  theme: 'light',

  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get('https://fakestoreapi.com/users');
      set({ users: res.data, loading: false });
    } catch {
      set({ error: 'Failed to fetch users', loading: false });
      toast.error('Failed to fetch users');
    }
  },

  createUser: async (newUser) => {
    try {
      const res = await axios.post('https://fakestoreapi.com/users', newUser);
      set((state) => ({ users: [...state.users, res.data] }));
      toast.success('User created');
    } catch {
      toast.error('Failed to create user');
    }
  },

  updateUser: async (id, updatedUser) => {
    try {
      const res = await axios.put(`https://fakestoreapi.com/users/${id}`, updatedUser);
      set((state) => ({
        users: state.users.map((u) => (u.id === id ? res.data : u)),
      }));
      toast.success('User updated');
    } catch {
      toast.error('Failed to update user');
    }
  },

  deleteUser: async (id) => {
    try {
      await axios.delete(`https://fakestoreapi.com/users/${id}`);
      set((state) => ({
        users: state.users.filter((u) => u.id !== id),
      }));
      toast.success('User deleted');
    } catch {
      toast.error('Failed to delete user');
    }
  },

  toggleTheme: () => set((state) => ({
    theme: state.theme === 'light' ? 'dark' : 'light',
  })),
}));

export default useUserStore;